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
  "Python",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "nnU-Net",
  "Computer Vision",
  "Image Segmentation",
  "Medical AI",
  "Feature Engineering",
  "Model Evaluation",
  "Cross-Validation",
  "Experimentation",
];

const labelsMLEngineering = [
  "FastAPI",
  "Docker",
  "MLflow / Experiment Tracking",
  "Git & GitHub",
  "CI/CD",
  "Model Versioning",
  "Inference APIs",
  "Research-to-Production",
  "LLM Orchestration (LangChain / LlamaIndex)",
];

const labelsDataSystems = [
  "Pandas",
  "NumPy",
  "SQL",
  "Vector Databases",
  "Data Parsing & Cleaning",
  "Data Validation",
  "Automation Pipelines",
  "Workflow Orchestration (N8N / Zapier)",
  "Data Visualization (Tableau)",
  "Retrieval Augmented Generation",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faMicrochip} size="3x" />
            <h3>Machine Learning & Deep Learning</h3>
            <p>
              I design, train, and evaluate machine learning and deep learning
              models with a focus on robustness, generalization, and real-world
              applicability. My experience includes medical imaging, computer
              vision, and predictive modeling—working with complex, high-stakes
              datasets where correctness and reliability matter.
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
            <h3>ML Engineering & Deployment</h3>
            <p>
              I bridge the gap between research and production by engineering
              deployable ML systems. This includes experiment tracking, model
              versioning, API-based inference, and containerized workflows. I
              prioritize reproducibility, maintainability, and clean software
              engineering practices in ML codebases.
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
            <h3>Data Systems & Automation</h3>
            <p>
              I build reliable data pipelines that support ML systems end-to-end
              — from ingestion and cleaning to validation and automation. My
              approach emphasizes data quality, scalability, and workflow
              efficiency to ensure models are trained and served on trustworthy
              inputs.
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