import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faCode } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Python",
  "Pandas",
  "NumPy",
  "SQL",
  "Data Parsing",
  "Data Cleaning",
  "Exploratory Data Analysis",
  "Data Visualization",
  "Zapier & N8N",
  "Tableau",
  "Excel",
  "Automation Pipelines"
];

const labelsSecond = [
  "scikit-learn",
  "PyTorch",
  "TensorFlow",
  "Time-Series Forecasting",
  "Predictive Modeling",
  "Feature Engineering",
  "Model Evaluation",
  "Cross-Validation",
  "Experimentation"
];

const labelsThird = [
  "nnU-Net",
  "Computer Vision",
  "Image Segmentation",
  "Medical AI",
  "OpenCV",
  "TorchVision",
  "LLM Integration",
  "Workflow Automation",
  "Research-to-Production"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* DATA SCIENCE / ANALYTICS / AUTOMATION */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Science, Analytics & Automation</h3>
            <p>
              I design full-cycle data solutions — from parsing and cleaning data to analyzing,
              visualizing, and transforming it into actionable insights. My work focuses on
              automation, workflow efficiency, and building data pipelines that support
              real-world decision making and business intelligence.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* MACHINE LEARNING / PREDICTIVE MODELING */}
          <div className="skill">
            <FontAwesomeIcon icon={faMicrochip} size="3x" />
            <h3>Machine Learning & Predictive Modeling</h3>
            <p>
              I build and optimize machine learning models for forecasting, classification,
              and applied problem-solving. My experience spans feature engineering,
              model training, evaluation, and experiment tracking — with a focus on
              reliable, explainable, and performance-oriented solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* APPLIED AI / DEEP LEARNING / CV */}
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Applied AI, Deep Learning & Computer Vision</h3>
            <p>
              I develop AI-driven systems ranging from medical imaging and image
              segmentation to LLM-powered automation. My work bridges research and
              engineering — turning models into practical tools that improve workflows
              and deliver measurable impact.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
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