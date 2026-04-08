// src/components/Expertise.jsx

import React from "react";
import "../assets/styles/Expertise.scss";

import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMicrochip,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

import { faPython } from "@fortawesome/free-brands-svg-icons";



const labelsCoreML = [
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "HuggingFace Transformers",
  "LangChain",
  "LangGraph",
  "LlamaIndex",
  "OpenAI API",
  "Embeddings",
  "Vector Search (Qdrant, Pinecone)",
  "Image Segmentation",
  "Object Detection",
];

const labelsMLEngineering = [
  "Docker",
  "FastAPI",
  "AWS",
  "Railway",
  "MLflow",
  "Weights & Biases",
  "DVC",
  "GitHub Actions",
  "pytest",
  "Redis",
];

const labelsDataSystems = [
  "Python (OOP, Packaging)",
  "SQL (CTEs, Window Functions)",
  "ETL/ELT Pipelines",
  "Vector Database Management",
  "SQLite",
  "Bash",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faMicrochip} size="3x" />
            <h3>Core ML & AI Engineering</h3>
            <p>
              I build and deploy deep learning models, generative AI systems, and
              retrieval-augmented generation pipelines. Experience spans medical
              image segmentation at Cleveland Clinic, adaptive AI tutoring at
              Aximon.ai, and computer vision — with a focus on robust evaluation,
              cross-validation, and models that generalize beyond the training set.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsCoreML.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>Deployment & MLOps</h3>
            <p>
              End-to-end model deployment from research to production —
              containerizing with Docker, serving via FastAPI, and deploying
              on AWS. Reproducible ML pipelines with experiment tracking
              (MLflow, Weights & Biases), data versioning (DVC), and CI/CD
              via GitHub Actions ensure every model is auditable and
              deployable.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsMLEngineering.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Backend & Data Engineering</h3>
            <p>
              Data infrastructure powering ML systems — Python backends,
              SQL-driven analytics, ETL/ELT pipelines, and vector database
              management. Pandas, NumPy, and Scikit-learn for analysis and
              evaluation, with Matplotlib and Seaborn for visualization.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsDataSystems.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Expertise;