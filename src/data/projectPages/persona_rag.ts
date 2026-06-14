import { ProjectPageContent } from './types';
import demo from '../../assets/images/persona-rag/demo.gif';
import headline from '../../assets/images/persona-rag/headline.png';
import lengthDist from '../../assets/images/persona-rag/length_dist.png';
import voiceTics from '../../assets/images/persona-rag/voice_tics.png';
import leakGuard from '../../assets/images/persona-rag/leak_guard.png';
import grounding from '../../assets/images/persona-rag/grounding.png';

export const personaRag: ProjectPageContent = {
  slug: 'persona-rag',
  badge: 'Personal Project · Research Report',
  title: 'Persona-RAG: Replicating a Texting Voice',
  dek: 'Can a small, free, local model learn to text like one specific person, and how would you prove it did? I built a Telegram bot that answers in my voice, then built the evaluation to test it. My first version of that eval was lying to me: a ~90% train/test leak. So I rebuilt it leak-free and asked whether a fine-tuned Qwen2.5-3B LoRA texts more like me than the gpt-4o-mini product it was built to replace. Written up as a research report.',

  info: [
    { label: 'Status', value: 'Open Source', sub: 'public repo + research report' },
    { label: 'Period', value: 'Spring 2026', sub: 'personal research' },
    {
      label: 'Stack',
      value: 'Qwen2.5-3B LoRA + LangGraph',
      sub: 'llama.cpp, Qdrant, gpt-4o-mini',
    },
  ],

  problem: [
    'A general-purpose assistant is trained to sound like no one in particular. Fluent and register-neutral. I wanted the opposite. A model that texts like one specific person (me), across dense Ukrainian, Russian, and English code-switching, terse multi-bubble bursts, a “)” smiley tic, almost no “!”, and lowercase casing.',
    'Building it was the easy half. Proving it was the hard part. A “better” answer that doesn’t read like me is a failure, so the usual chatbot metrics don’t apply. And the first evaluation I wrote was lying to me. A temporal split leaked about 90% of the signal, so everything looked great when it wasn’t.',
    'So the real question got narrow. On a clean, leak-free measurement, does a free local fine-tune reproduce the voice better than the gpt-4o-mini retrieval product it was built to replace? And what does it cost?',
  ],

  architecture: {
    caption:
      'One Telegram pipeline (LangGraph) drives two interchangeable backends. The production path runs hybrid retrieval (dense + BM25, fused, then reranked with MMR and recency) over my own past replies as style exemplars, then calls gpt-4o-mini. The local path is a Qwen2.5-3B LoRA served as a GGUF through llama.cpp on a thin, train-equals-serve prompt. It’s $0 and offline. A two-arm evaluation scores both on a recipient-stratified, model-disjoint hold-out.',
    chips: [
      'Qwen2.5-3B',
      'LoRA / QLoRA',
      'Unsloth',
      'llama.cpp (GGUF Q5_K_M)',
      'gpt-4o-mini',
      'LangGraph',
      'Qdrant',
      'Hybrid retrieval (BM25 + dense)',
      'MMR + recency',
      'MLflow',
      'Telegram',
      'uv / ruff / mypy --strict',
    ],
  },

  built: [
    {
      category: 'Local fine-tune',
      body: 'A Qwen2.5-3B LoRA trained on my chat history, served locally as a GGUF through llama.cpp. It trains and serves on one prompt shape, so they match byte-for-byte.',
    },
    {
      category: 'Two interchangeable backends',
      body: 'One LangGraph Telegram pipeline runs either backend: the local fine-tune, or hybrid retrieval (BM25 + dense) over my past replies into gpt-4o-mini.',
    },
    {
      category: 'Leak-audited evaluation',
      body: 'I caught a ~90% train/test leak in my own eval, rebuilt the split leak-free, and scored both backends with paired bootstrap CIs under a rule I fixed in advance.',
    },
    {
      category: 'Controls that isolate the fine-tune',
      body: 'A base-Qwen (no adapter) control, a stylometric authorship detector, and a length-cap baseline pin down what the LoRA adds: the register, not a length trick.',
    },
    {
      category: 'Grounding layer',
      body: 'A thin, intent-routed fact card from my own notes lets the local model answer identity questions from real facts instead of guessing.',
    },
  ],

  results: [
    { big: '90% → 0', label: 'Train/test leak I caught in my own evaluation, then eliminated. The reason any of these numbers count.' },
    {
      big: 'δ = 0.95',
      label: 'Cliff’s delta on reply length. The local fine-tune is closer to my real length on 292 of 299 messages.',
    },
    { big: '$0', label: 'Marginal cost of the local model, against $0.37 per 1k replies for the API product' },
    { big: '~11×', label: 'Token tax the production API pays that the thin local model doesn’t' },
    { big: 'tie', label: 'Even fully equipped, the production API only reaches a voice tie with the free local model' },
    { big: '0.05 → 0.33', label: 'Correct-identity-answer rate after the grounding layer (question-clustered 95% intervals disjoint)' },
    { big: 'n = 300', label: 'Leak-free, recipient-stratified hold-out scored with paired bootstrap intervals' },
  ],

  plates: [
    {
      label: 'Fig. 01',
      caption: 'Live comparison.',
      body: 'The same prompts, side by side. The cloud gpt-4o-mini API on the left, metered live in dollars. The free local Qwen-3B LoRA on the right, at $0. Every reply is real model output. Non-English replies are glossed to English.',
      image: demo,
      filename: 'demo.gif',
    },
    {
      label: 'Fig. 02',
      caption: 'The headline result.',
      body: 'Same thin prompt for both, n = 300, shorter bar is more like me. On reply length the LoRA lands right next to me (2.9) while the bare API runs far longer (128.8). On message shape it’s too close to call. Both shown with 95% intervals.',
      image: headline,
      filename: 'armB_headline.png',
    },
    {
      label: 'Fig. 03',
      caption: 'Reply length.',
      body: 'The LoRA (green) hugs my real per-message length curve (gray). The bare API (blue) runs far longer and spikes at the length cap. Measured on the leak-free hold-out.',
      image: lengthDist,
      filename: 'length_dist.png',
    },
    {
      label: 'Fig. 04',
      caption: 'Register tics.',
      body: 'Exclamation rate, code-switching, and the paren-smiley tic, all against my real baseline (closer to gray is more like me). The fine-tune tracks the register the bare model misses.',
      image: voiceTics,
      filename: 'voice_tics.png',
    },
  ],

  glance: {
    caption:
      'Two trust checks, reported as intervals. The retrieval leak guard on the left, the grounding lift on the right.',
    filename: 'trust-surfaces.png',
    cells: [
      {
        label: 'Leak guard: a measured 28% gold-answer leak, removed to 0 before scoring',
        body: '',
        image: leakGuard,
      },
      {
        label: 'Grounding: correct-identity answers 0.05 → 0.33, voice intact',
        body: '',
        image: grounding,
      },
    ],
  },

  reflections: [
    {
      title: 'The evaluation was the project',
      body: 'I almost shipped a result built on a ~90% train/test leak. A temporal split was letting the model see near-duplicates of the test set. Catching that, rebuilding the split recipient-stratified, and fixing the acceptance rule before I ran anything mattered more than any modeling choice I made. If the harness lies, the number is just decoration.',
    },
    {
      title: 'Surface metrics aren’t “feels like me”',
      body: 'Length, shape, and tics are measurable. The subjective “this reads like you” isn’t. I built a stylometric authorship detector to triangulate, but the only real test is a blind human panel, and I couldn’t run that cleanly on private chats. So I wrote it up as a limitation and left it standing.',
    },
    {
      title: 'The weights beat the scaffold',
      body: 'Fully equipped, the retrieval-augmented API product only ties the thin local fine-tune on register. Most of the production machinery just recovers ground the bare weights already held. It does that at $0.37 per 1k replies and about 11x the tokens. The local model does it for free.',
    },
    {
      title: 'Voice and knowledge come apart',
      body: 'The fine-tune nails how I talk, but it can’t know facts it was never told. A thin, intent-routed grounding layer adds those facts for the handful of questions that need them, and skips the heavy prompt that flattens the voice. Voice and knowledge turned out to be separate problems I could solve separately.',
    },
    {
      title: 'It’s one person, one corpus',
      body: 'Every number here is about one person and one corpus. None of it generalizes to personas in general, and I wrote the report to say that plainly. The next step is a second persona, someone consenting or a public figure, which would unblock both the human panel and the generalization question.',
    },
  ],

  externalLinks: [
    { label: 'GitHub', url: 'https://github.com/BohdanChuprynka/Persona-RAG' },
    {
      label: 'Research Report (PDF)',
      url: 'https://github.com/BohdanChuprynka/Persona-RAG/blob/main/report/persona-rag-report.pdf',
    },
  ],
};
