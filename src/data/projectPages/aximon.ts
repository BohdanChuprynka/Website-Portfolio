import { ProjectPageContent } from './types';
import theoryLesson from '../../assets/images/aximon/theory-lesson.png';
import practiceSuccess from '../../assets/images/aximon/practice-lesson-success.png';
import practiceFail from '../../assets/images/aximon/practice-lesson-fail.png';
import quizLesson from '../../assets/images/aximon/quiz-lesson.png';
import pythonTree from '../../assets/images/aximon/python-tree.png';
import treeAlt from '../../assets/images/aximon/tree.png';

export const aximon: ProjectPageContent = {
  slug: 'aximon',
  badge: 'Closed Beta · Founding AI Engineer',
  title: 'AI Tutor Agent and RAG for an Adaptive Python Platform',
  dek: 'Multi-step tutor agent with pgvector RAG and intent-routed inference, plus an async multi-model course generator. Closed beta, 2-person team, roughly 2 months from zero.',

  info: [
    { label: 'Status', value: 'Closed Beta', sub: 'private repo' },
    { label: 'Role', value: 'Founding AI Engineer', sub: 'agent, RAG, evals, course gen' },
    { label: 'Period', value: 'Mar 2026', sub: '→ present' },
    {
      label: 'Team',
      value: '2 people',
      subLink: {
        text: 'Yurii Tovarnytskyi',
        url: 'https://www.linkedin.com/in/yurii-tovarnytskyi/',
      },
      sub: ' (founder)',
    },
    { label: 'Stack', value: 'NestJS + Next.js', sub: '9 backend modules, 2 LLM providers' },
  ],

  problem: [
    "Static Python courses can't adapt to a learner's level, errors, or interests. Every learner walks the same path, even when they're stuck on one concept or moving too slowly through another they already know.",
    'The product bet was simple: an AI tutor with retrieval over course content can answer a specific code error, in a specific lesson, for a specific learner, in real time.',
  ],

  architecture: {
    caption:
      'NestJS API → tutor agent (context gathering + pgvector RAG + prompt assembly) → GPT-4o-mini, streamed back to the lesson player. Course generation runs separately as async BullMQ workers using GPT-4o-mini for outline + Claude Sonnet for refinement.',
    chips: [
      'NestJS',
      'Next.js',
      'TypeScript',
      'Postgres / Supabase',
      'Prisma',
      'pgvector',
      'Redis',
      'BullMQ',
      'GPT-4o-mini',
      'Claude Sonnet',
      'Pyodide',
    ],
  },

  built: [
    {
      category: 'AI Tutor Agent',
      body: "Multi-step agent: gather context → retrieve relevant content → build prompt → call GPT-4o-mini. Tailored to the learner's exact code and error.",
    },
    {
      category: 'RAG Pipeline',
      body: 'pgvector on Supabase. Embeddings over course content + user history. Hybrid retrieval with reranking for tighter relevance.',
    },
    {
      category: 'Prompt Engineering',
      body: 'Versioned system prompts. Layered context: user profile, lesson state, retrieved chunks, code, error. A/B-evaluated.',
    },
    {
      category: 'Course Generation',
      body: 'Async multi-model pipeline (BullMQ). GPT-4o-mini drafts the outline; Claude Sonnet refines each lesson. Personalized per user profile.',
    },
    {
      category: 'Eval Harness',
      body: 'Held-out tutor scenarios scored on relevance, accuracy, and pedagogical fit. Gates every prompt or retrieval change.',
    },
    {
      category: 'Cost & Latency',
      body: 'Token budgets per request type. Embedding + retrieval cache. Hit ~$0.30 per user per month for runtime tutor.',
    },
    {
      category: 'Feedback Loop',
      body: 'Captured signals (helpful, code-fixed, lesson-completed) routed back into retrieval ranking and prompt selection.',
    },
    {
      category: 'Backend Infra',
      body: 'NestJS API, Prisma ORM, BullMQ workers, Redis queue, Pyodide for in-browser Python execution.',
    },
  ],

  results: [
    { big: '$0.30', label: 'Runtime tutor cost per user per month' },
    { big: '~2 mo', label: 'Zero to closed beta on the founding stack' },
    { big: '2', label: 'LLM providers routed by intent (GPT-4o-mini, Claude Sonnet)' },
    { big: '2', label: 'Person team. Owned the full AI stack.' },
  ],

  plates: [
    {
      label: 'Fig. 01',
      caption: 'Theory Lesson.',
      body: 'Read-mode lesson with code samples and the AI tutor side-panel for in-context Q&A on whatever the learner is reading.',
      image: theoryLesson,
      filename: 'theory-lesson.png',
    },
    {
      label: 'Fig. 02',
      caption: 'Practice Lesson · Success.',
      body: 'Code editor + AI tutor. When the learner ships passing code, the tutor surfaces tailored feedback grounded in the exact spec they completed.',
      image: practiceSuccess,
      filename: 'practice-lesson-success.png',
    },
    {
      label: 'Fig. 03',
      caption: 'Curriculum Tree.',
      body: 'Skill-tree sequencing across the Python curriculum. The backend\'s lesson recommendations shape what unlocks next per learner.',
      image: pythonTree,
      filename: 'python-tree.png',
    },
    {
      label: 'Fig. 04',
      caption: 'Quiz Lesson.',
      body: 'Multi-choice quiz mode. The AI tutor offers hints when the learner asks, coached to lead them to the answer instead of giving it away.',
      image: quizLesson,
      filename: 'quiz-lesson.png',
    },
  ],

  glance: {
    caption:
      'Where the AI tutor really earns its keep. Failure-mode coaching on the left, the curriculum map driving sequencing decisions on the right.',
    filename: 'supporting-surfaces.png',
    cells: [
      { label: 'Practice · Failure (tutor coaches recovery)', body: '', image: practiceFail },
      { label: 'Curriculum Map (sequencing surface)', body: '', image: treeAlt },
    ],
  },

  reflections: [
    {
      title: 'The eval set was the project',
      body: 'I treated evaluation as a side task for the first month. A regression slipped through and cost me two days to track down. Thirty fixed tutor scenarios built up front would have caught it in ten minutes. After that, every prompt change ran against the set before merge.',
    },
    {
      title: 'Better chunking, not better models',
      body: 'GPT-4o-mini felt limited until I rewrote the chunking pipeline to keep code blocks paragraph-aligned with sentence overlap. Same model, much sharper answers. Most of the headroom in tutor quality lived in the data layer, not the model.',
    },
    {
      title: 'Route before you optimize',
      body: 'Caching saved real money. Routing by intent saved more. Syntax errors do not need a smarter model. Conceptual questions sometimes do. Sending each request to the smallest model that handles it well beat any single-model prompt I could write.',
    },
    {
      title: 'What I would build next',
      body: 'Contrastive eval pairs mined from misgraded sessions, plus a learned reranker trained on the user-correction signal. The tutor knows when its answer was useful from the next turn. That is free supervision sitting on the floor.',
    },
  ],
};
