export type Profile = 'ai';

export interface ProfileData {
  title: string;
  description: string;
  expertise: {
    category: string;
    icon: string;
    title: string;
    description: string;
    skills: string[];
  }[];
  timeline: {
    date: string;
    position: string;
    company: string;
    companyUrl?: string;
    description?: string;
    tech?: string;
  }[];
  projects: {
    title: string;
    description: string;
    link?: string;
    image: string;
    slug?: string;
  }[];
}

export const profiles: Record<Profile, ProfileData> = {
  ai: {
    title: 'AI Engineer',
    description:
      'AI Engineer focused on shipping production systems across deep learning, RAG, and applied AI. From research to deployment.',
    expertise: [
      {
        category: 'AI Engineering & Deep Learning',
        icon: 'faMicrochip',
        title: 'AI Engineering & Deep Learning',
        description:
          'I build and deploy deep learning models, generative AI systems, and retrieval-augmented generation pipelines. Experience spans medical image segmentation at Cleveland Clinic, AI coding mentor work at Protege, and computer vision. Focused on robust evaluation, cross-validation, and models that generalize beyond the training set.',
        skills: [
          'PyTorch',
          'TensorFlow',
          'Scikit-learn',
          'HuggingFace Transformers',
          'LangChain',
          'LangGraph',
          'LlamaIndex',
          'OpenAI API',
          'Embeddings',
          'Vector Search (Qdrant, Pinecone)',
          'Image Segmentation',
          'Object Detection',
        ],
      },
      {
        category: 'Deployment & MLOps',
        icon: 'faServer',
        title: 'Deployment & MLOps',
        description:
          'End-to-end model deployment from research to production. Containerizing with Docker, serving via FastAPI, and deploying on AWS. Reproducible ML pipelines with experiment tracking (MLflow, Weights & Biases), data versioning (DVC), and CI/CD via GitHub Actions ensure every model is auditable and deployable.',
        skills: [
          'Docker',
          'FastAPI',
          'AWS',
          'Railway',
          'MLflow',
          'Weights & Biases',
          'DVC',
          'GitHub Actions',
          'pytest',
          'Redis',
        ],
      },
      {
        category: 'Backend & Data Engineering',
        icon: 'faDatabase',
        title: 'Backend & Data Engineering',
        description:
          'Data infrastructure powering ML systems. Python backends, SQL-driven analytics, ETL/ELT pipelines, and vector database management. Pandas, NumPy, and Scikit-learn for analysis and evaluation, with Matplotlib and Seaborn for visualization.',
        skills: [
          'Python (OOP, Packaging)',
          'SQL (CTEs, Window Functions)',
          'ETL/ELT Pipelines',
          'Vector Database Management',
          'SQLite',
          'Bash',
          'Pandas',
          'NumPy',
          'Matplotlib',
          'Seaborn',
        ],
      },
    ],
    timeline: [
      {
        date: 'June 2026 - Present',
        position: 'Cybersecurity Intern',
        company: 'Cleveland Clinic',
      },
      {
        date: 'June 2026 - Present',
        position: 'Founding AI Engineer',
        company: 'Remly',
      },
      {
        date: 'March 2026 - May 2026',
        position: 'Co-Founder & CTO',
        company: 'Protege',
        companyUrl: 'https://www.protege.studio/',
        description: 'Owned Backend + AI Infrastructure. Scaled to 1000+ beta testers and 30k+ users across 6 partnerships.',
        tech: 'Python, FastAPI, TypeScript, React, VS Code Extension, GPT-4o-mini, RAG, PostgreSQL, Docker',
      },
      {
        date: 'June 2025 - August 2025',
        position: 'AI Engineer Intern',
        company: 'Cleveland Clinic',
        description:
          'Built an nnU-Net vertebral segmentation system for spinal X-rays under senior AI scientist Ghaith Habboub. Used by neurosurgeons for surgical planning. Invited back for second internship summer 2026.',
        tech: 'PyTorch, nnU-Net, Medical Imaging, Image Segmentation, Python',
      },
    ],
    projects: [
      {
        title: 'Persona-RAG: Replicating a Texting Voice + Paper',
        description:
          'A Telegram bot that texts in my voice, plus the leak-audited research paper that puts it to the test. A free, local Qwen2.5-3B LoRA against a gpt-4o-mini RAG product. I caught a ~90% train/test leak in my own eval, rebuilt it leak-free with a pre-registered acceptance rule and paired bootstrap CIs, and found the local fine-tune matches the $0.37/1k production stack on voice register, at $0 and offline.',
        slug: 'persona-rag',
        image: 'persona_rag_thumbnail.png',
      },
      {
        title: 'Aximon - AI Tutor Agent + RAG',
        description:
          'Founding AI engineer on a closed-beta adaptive Python tutor (predecessor to Protege). Multi-step agent with pgvector RAG, intent-routed inference (GPT-4o-mini + Claude Sonnet), an eval harness, and an async multi-model course generator. Closed beta, 2-person team, roughly 2 months from zero.',
        slug: 'aximon',
        image: 'aximon_thumbnail.png',
      },
      {
        title: 'Policy Retrieval Augmented Generation (RAG) System',
        description:
          'RAG-based Q&A system that ingests policy documents and returns citation-grounded answers using hybrid dense and BM25 retrieval with weighted score fusion. Built the retrieval pipeline from scratch with Python and NumPy. No LangChain or LlamaIndex. Backed by Redis session state, SQLite embedding cache, FastAPI backend, and deployed with multi-stage Docker on Railway.',
        link: 'https://github.com/BohdanChuprynka/Policy-RAG',
        image: 'rag_architecture.png',
      },
      {
        title: 'Vertebrae Image Segmentation',
        description:
          'nnU-Net-based vertebral segmentation system for automated spinal X-ray analysis. Collaborated with radiologists and neurosurgeons to validate clinical accuracy. Built preprocessing and augmentation pipelines for clinical X-ray datasets. Private repository, developed during Cleveland Clinic internship.',
        image: 'vertebrae_proj.jpg',
      },
      {
        title: 'Stock Sales Prediction',
        description:
          'End-to-end ML pipeline for retail sales forecasting on 3M+ rows across 54 stores. Compares Random Forest, LightGBM, Decision Tree, Ridge, and Linear Regression. Best model achieves R² of 0.83. Features temporal encoding, oil price interpolation, and wage-day indicators.',
        link: 'https://github.com/BohdanChuprynka/Stock-Sales-Prediction',
        image: 'stock_sales.png',
      },
      {
        title: 'Sentiment Analysis Model',
        description:
          'Sentiment classification pipeline on 1.6M tweets comparing classical ML (Naive Bayes, Logistic Regression with TF-IDF bigrams) against deep learning (Universal Sentence Encoder, hybrid token + character BiLSTM). Best model reaches 80.6% accuracy with dual preprocessing strategies optimized per model type.',
        link: 'https://github.com/BohdanChuprynka/Sentiment-Analysis-Model',
        image: 'sentiment_project.png',
      },
      {
        title: 'Tableau Business Sales Visualization',
        description:
          'Interactive Tableau dashboard analyzing sales, profit margins, and regional performance across multiple business units. Surfaces actionable trends and KPIs for data-driven decision making.',
        link: 'https://public.tableau.com/app/profile/bohdan.chuprynka/viz/BusinessSummary_17527722001530/BusinessSummary',
        image: 'tableau_vis.png',
      },
    ],
  },
};

export function getProfile(profile: Profile): ProfileData {
  return profiles[profile];
}
