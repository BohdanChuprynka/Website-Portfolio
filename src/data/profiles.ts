export type Profile = 'ml' | 'se';

export interface ProfileData {
  title: string;
  description: string;
  contactMessage: string;
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
    description: string;
    tech: string;
  }[];
  projects: {
    title: string;
    description: string;
    link?: string;
    image: string;
  }[];
}

export const profiles: Record<Profile, ProfileData> = {
  ml: {
    title: 'Machine Learning Engineer',
    description: 'ML engineer building production AI systems — from research to deployment. Specialized in deep learning, RAG pipelines, and MLOps infrastructure.',
    contactMessage: 'Open to ML engineering roles, research collaborations, and interesting problems.',
    expertise: [
      {
        category: 'Core ML & AI Engineering',
        icon: 'faMicrochip',
        title: 'Core ML & AI Engineering',
        description:
          'I build and deploy deep learning models, generative AI systems, and retrieval-augmented generation pipelines. Experience spans medical image segmentation at Cleveland Clinic, adaptive AI tutoring at Protege, and computer vision — with a focus on robust evaluation, cross-validation, and models that generalize beyond the training set.',
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
          'End-to-end model deployment from research to production — containerizing with Docker, serving via FastAPI, and deploying on AWS. Reproducible ML pipelines with experiment tracking (MLflow, Weights & Biases), data versioning (DVC), and CI/CD via GitHub Actions ensure every model is auditable and deployable.',
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
          'Data infrastructure powering ML systems — Python backends, SQL-driven analytics, ETL/ELT pipelines, and vector database management. Pandas, NumPy, and Scikit-learn for analysis and evaluation, with Matplotlib and Seaborn for visualization.',
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
        date: 'March 2026 - Present',
        position: 'ML Engineer Intern',
        company: 'Protege',
        companyUrl: 'https://www.protege.studio/',
        description:
          'Owned the full AI stack for Protege, an adaptive Python tutoring platform — spanning RAG pipelines, real-time inference, and personalized content generation. Engineered multi-modal tutoring workflows integrating speech-to-text, text-to-speech, and LLM reasoning. Built custom prompt management with structured context injection for adaptive difficulty scaling.',
        tech: 'Python, GPT-4o-mini, Whisper, TTS, RAG, FastAPI, Prompt Engineering',
      },
      {
        date: 'June 2025 - August 2025',
        position: 'Software Engineering Intern',
        company: 'Cleveland Clinic',
        description:
          'Developed an nnU-Net-based vertebral segmentation system for automated spinal X-ray analysis. Built preprocessing and augmentation pipelines for clinical imaging datasets. Collaborated directly with radiologists and neurosurgeons to validate model outputs against clinical ground truth.',
        tech: 'PyTorch, nnU-Net, Medical Imaging, Image Segmentation, Python',
      },
    ],
    projects: [
      {
        title: 'Policy Retrieval Augmented Generation (RAG) System',
        description:
          'RAG-based Q&A system that ingests policy documents and returns citation-grounded answers using hybrid dense + BM25 retrieval with weighted score fusion. Built the retrieval pipeline from scratch with Python + NumPy — no LangChain or LlamaIndex. Backed by Redis session state, SQLite embedding cache, FastAPI backend, and deployed with multi-stage Docker on Railway.',
        link: 'https://github.com/BohdanChuprynka/Policy-RAG',
        image: 'rag_architecture.png',
      },
      {
        title: 'Vertebrae Image Segmentation',
        description:
          'Developed an nnU-Net-based vertebral segmentation system for automated spinal X-ray analysis, collaborating with radiologists and neurosurgeons. Built preprocessing and augmentation pipelines for clinical X-ray datasets. Private repository — developed during Cleveland Clinic internship.',
        image: 'vertebrae_proj.jpg',
      },
      {
        title: 'Tableau Business Sales Visualization',
        description:
          'Interactive Tableau dashboard analyzing sales, profit margins, and regional performance across multiple business units. Surfaces actionable trends and KPIs for data-driven decision making.',
        link: 'https://public.tableau.com/app/profile/bohdan.chuprynka/viz/BusinessSummary_17527722001530/BusinessSummary',
        image: 'tableau_vis.png',
      },
      {
        title: 'Stock Sales Prediction',
        description:
          'End-to-end ML pipeline for retail sales forecasting on 3M+ rows across 54 stores. Compares Random Forest, LightGBM, Decision Tree, Ridge, and Linear Regression — best model achieves R² of 0.83. Features temporal encoding, oil price interpolation, and wage-day indicators.',
        link: 'https://github.com/BohdanChuprynka/Stock-Sales-Prediction',
        image: 'stock_sales.png',
      },
      {
        title: 'Sentiment Analysis Model',
        description:
          'Sentiment classification pipeline on 1.6M tweets comparing classical ML (Naive Bayes, Logistic Regression with TF-IDF bigrams) against deep learning (Universal Sentence Encoder, hybrid token+character BiLSTM). Best model reaches 80.6% accuracy with dual preprocessing strategies optimized per model type.',
        link: 'https://github.com/BohdanChuprynka/Sentiment-Analysis-Model',
        image: 'sentiment_project.png',
      },
    ],
  },

  se: {
    title: 'Software Engineer',
    description: 'Full-stack engineer experienced in backend systems, APIs, and production deployments. Building scalable software solutions with Python, FastAPI, React, and JavaScript.',
    contactMessage: 'Open to software engineering internships, full-stack roles, and challenging technical problems.',
    expertise: [
      {
        category: 'Backend & APIs',
        icon: 'faServer',
        title: 'Backend & APIs',
        description:
          'Design and develop robust backend systems and REST APIs using FastAPI and Python. Experience building scalable services with proper request validation, error handling, and state management. Strong foundation in software design patterns, data structures, and algorithms. Expertise in async/await, dependency injection, and production-ready code.',
        skills: [
          'FastAPI',
          'Python (OOP, async/await)',
          'REST API Design',
          'Request/Response Handling',
          'Input Validation',
          'Error Handling',
          'State Management',
          'Session Management',
          'Rate Limiting',
        ],
      },
      {
        category: 'Frontend & Web Development',
        icon: 'faMicrochip',
        title: 'Frontend & Web Development',
        description:
          'Build interactive, responsive user interfaces with React and modern JavaScript. Proficient in TypeScript for type safety, React hooks for state management, and semantic HTML/CSS for accessibility. Experience designing user-centric interfaces and implementing client-side logic for complex workflows.',
        skills: [
          'React (Functional Components, Hooks)',
          'JavaScript (ES6+, async/await)',
          'TypeScript',
          'HTML/CSS (Flexbox, Grid)',
          'Responsive Design',
          'State Management',
          'Component Architecture',
          'Streamlit',
        ],
      },
      {
        category: 'Cloud, DevOps & Data Systems',
        icon: 'faDatabase',
        title: 'Cloud, DevOps & Data Systems',
        description:
          'Deploy and maintain production systems with Docker, GitHub Actions CI/CD, and AWS. Strong in SQL query optimization, data modeling, and ETL pipelines. Experience with relational databases, vector databases, and data infrastructure supporting backend services.',
        skills: [
          'Docker',
          'GitHub Actions (CI/CD)',
          'AWS (S3, EC2, Lambda)',
          'SQL (CTEs, Window Functions, Optimization)',
          'Data Modeling',
          'ETL/ELT Pipelines',
          'Vector Databases',
          'Testing (pytest)',
          'Deployment & Monitoring',
        ],
      },
    ],
    timeline: [
      {
        date: 'March 2026 - Present',
        position: 'Founding Software Engineer',
        company: 'Protege',
        companyUrl: 'https://www.protege.studio/',
        description:
          'Built full-stack backend system for adaptive learning platform. Designed and implemented FastAPI microservices for user management, content delivery, and inference orchestration. Integrated multi-modal LLM APIs (GPT-4o-mini, Whisper, TTS) with structured error handling. Architected state management system tracking user proficiency and lesson progress. Implemented content sequencing algorithm personalizing lessons based on user performance data.',
        tech: 'Python, FastAPI, PostgreSQL, Redis, GPT-4o-mini, GitHub Actions, Docker',
      },
      {
        date: 'June 2025 - August 2025',
        position: 'Software Engineering Intern',
        company: 'Cleveland Clinic',
        description:
          'Designed and deployed automated medical image analysis system supporting clinical workflows. Built data pipeline with preprocessing and augmentation for clinical images. Implemented inference service with custom postprocessing filters and evaluation metrics. Developed visualization tools for prediction validation. Collaborated with radiologists and surgeons on requirements and system validation.',
        tech: 'Python, FastAPI, Data Engineering, Testing, Medical Imaging',
      },
    ],
    projects: [
      {
        title: 'Policy Retrieval Augmented Generation (RAG) System',
        description:
          'Full-stack document Q&A platform demonstrating backend and frontend integration. Backend: FastAPI services with session management, document upload/indexing, rate limiting, and input validation. Search Engine: Hybrid retrieval system (dense vectors + BM25 ranking) with configurable score fusion. Frontend: Interactive Streamlit interface for ingestion and Q&A. DevOps: Multi-stage Docker containerization, GitHub Actions CI/CD pipeline. Deployed to production with citation-grounded answers.',
        link: 'https://github.com/BohdanChuprynka/Policy-RAG',
        image: 'rag_architecture.png',
      },
      {
        title: 'Vertebrae Image Segmentation',
        description:
          'Automated medical image analysis system for clinical workflows. Data Pipeline: Built robust data preprocessing pipeline handling image normalization, augmentation, and standardized train/test splits. Service Architecture: Implemented inference service with custom postprocessing filters and evaluation metrics. Tooling: Developed visualization and validation tools enabling collaboration with radiologists and surgeons. Impact: System validation reduced manual annotation time by ~80%.',
        image: 'vertebrae_proj.jpg',
      },
      {
        title: 'Tableau Business Sales Visualization',
        description:
          'Interactive business intelligence dashboard analyzing sales, profit margins, and regional performance. Demonstrates data visualization and analytics design principles. Surfaces actionable business insights through effective UI/UX design.',
        link: 'https://public.tableau.com/app/profile/bohdan.chuprynka/viz/BusinessSummary_17527722001530/BusinessSummary',
        image: 'tableau_vis.png',
      },
      {
        title: 'Stock Sales Prediction',
        description:
          'End-to-end data pipeline for retail sales forecasting at scale (3M+ rows across 54 stores). Built feature engineering system with temporal encoding and external data integration (oil prices). Designed comparative evaluation framework for algorithm selection and validation. Demonstrates data structure design, query optimization, and system architecture for production pipelines.',
        link: 'https://github.com/BohdanChuprynka/Stock-Sales-Prediction',
        image: 'stock_sales.png',
      },
      {
        title: 'Sentiment Analysis Pipeline',
        description:
          'Large-scale data processing system for sentiment classification on 1.6M tweets. Designed dual preprocessing strategies optimized per algorithm type (TF-IDF vectorization vs embeddings). Built comparative evaluation framework enabling data-driven algorithm selection. Demonstrates data structure optimization, algorithm analysis, and systematic evaluation methodology.',
        link: 'https://github.com/BohdanChuprynka/Sentiment-Analysis-Model',
        image: 'sentiment_project.png',
      },
    ],
  },
};

export function getProfile(profile: Profile): ProfileData {
  return profiles[profile];
}
