import React from "react";

import vertebrae_proj from '../assets/images/vertebrae_proj.jpg';
import stock_sales from '../assets/images/stock_sales.png';
import persona_gpt from '../assets/images/PersonaGPT.jpg';
import sentiment_project from '../assets/images/sentiment_project.png';
import tableau_project from '../assets/images/tableau_vis.png';
import rag_project from "../assets/images/rag_architecture.png";


import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

        <div className="project">
                <a href="https://github.com/BohdanChuprynka/Policy-RAG" target="_blank" rel="noreferrer"><img src={rag_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/Policy-RAG" target="_blank" rel="noreferrer"><h2>Policy Retrieval Augmented Generation (RAG) System</h2></a>
                <p>Built a RAG-based Q&A system that ingests policy documents (TXT/PDF) and returns citation-grounded answers using hybrid dense + lexical retrieval. Implemented the retrieval pipeline from scratch using Python + NumPy — without orchestration frameworks like LangChain or LlamaIndex. Containerized with Docker, CI via GitHub Actions, and deployed an interactive Streamlit demo.</p>
            </div>

        <div className="project">
                <a target="_blank" rel="noreferrer"><img src={vertebrae_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Vertebrae Image Segmentation</h2></a>
                <p>Developed an nnU-Net-based vertebral segmentation system to automate spinal X-ray analysis, collaborating with radiologists and neurosurgeons. Built preprocessing and augmentation pipelines for clinical X-ray datasets. Achieved Dice coefficient {'>'}0.92 with ~80% reduction in manual annotation time. <strong>Private repository</strong> — developed during Cleveland Clinic internship.</p>
        </div>

        <div className="project">
                <a href="https://public.tableau.com/app/profile/bohdan.chuprynka/viz/BusinessSummary_17527722001530/BusinessSummary" target="_blank" rel="noreferrer"><img src={tableau_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://public.tableau.com/app/profile/bohdan.chuprynka/viz/BusinessSummary_17527722001530/BusinessSummary" target="_blank" rel="noreferrer"><h2>Tableau Business Sales Visualization</h2></a>
                <p>Interactive Tableau dashboard analyzing sales, profit margins, and regional performance across multiple business units. Surfaces actionable trends and KPIs for data-driven decision making.</p>
        </div>

        <div className="project">
                <a href="https://github.com/BohdanChuprynka/PersonaGPT" target="_blank" rel="noreferrer"><img src={persona_gpt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/PersonaGPT" target="_blank" rel="noreferrer"><h2>PersonaGPT</h2></a>
                <p>AI application that combines LLMs with semantic search to generate context-aware, persona-driven responses. Demonstrates prompt engineering, embedding-based retrieval, and conversational AI system design.</p>
        </div>
            <div className="project">
                <a href="https://github.com/BohdanChuprynka/Stock-Sales-Prediction" target="_blank" rel="noreferrer"><img src={stock_sales} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/Stock-Sales-Prediction" target="_blank" rel="noreferrer"><h2>Stock Sales Prediction</h2></a>
                <p>ML pipeline for stock sales forecasting — from raw data cleaning and feature engineering through model selection, training, and rigorous performance evaluation with cross-validation.</p>
            </div>

            <div className="project">
                <a href="https://github.com/BohdanChuprynka/Sentiment-Analysis-Model" target="_blank" rel="noreferrer"><img src={sentiment_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/Sentiment-Analysis-Model" target="_blank" rel="noreferrer"><h2>Sentiment Analysis Model</h2></a>
                <p>NLP classification model for sentiment analysis on textual data. Covers text preprocessing, feature extraction, model training, and evaluation — extracting actionable insights from user-generated content.</p>
            </div>
        </div>
    </div>
    );  
}

export default Project;