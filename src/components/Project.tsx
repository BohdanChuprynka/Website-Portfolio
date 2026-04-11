import React from "react";

import vertebrae_proj from '../assets/images/vertebrae_proj.jpg';
import stock_sales from '../assets/images/stock_sales.png';
import sentiment_project from '../assets/images/sentiment_project.png';
import tableau_project from '../assets/images/tableau_vis.png';
import rag_project from "../assets/images/rag_architecture.png";


import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">

        <div className="project">
                <a href="https://github.com/BohdanChuprynka/Policy-RAG" target="_blank" rel="noreferrer"><img src={rag_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/Policy-RAG" target="_blank" rel="noreferrer"><h2>Policy Retrieval Augmented Generation (RAG) System</h2></a>
                <p>RAG-based Q&A system that ingests policy documents and returns citation-grounded answers using hybrid dense + BM25 retrieval with weighted score fusion. Built the retrieval pipeline from scratch with Python + NumPy — no LangChain or LlamaIndex. Backed by Redis session state, SQLite embedding cache, FastAPI backend, and deployed with multi-stage Docker on Railway.</p>
            </div>

        <div className="project">
                <a target="_blank" rel="noreferrer"><img src={vertebrae_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Vertebrae Image Segmentation</h2></a>
                <p>Developed an nnU-Net-based vertebral segmentation system for automated spinal X-ray analysis, collaborating with radiologists and neurosurgeons. Built preprocessing and augmentation pipelines for clinical X-ray datasets. <strong>Private repository</strong> — developed during Cleveland Clinic internship.</p>
        </div>

        <div className="project">
                <a href="https://public.tableau.com/app/profile/bohdan.chuprynka/viz/BusinessSummary_17527722001530/BusinessSummary" target="_blank" rel="noreferrer"><img src={tableau_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://public.tableau.com/app/profile/bohdan.chuprynka/viz/BusinessSummary_17527722001530/BusinessSummary" target="_blank" rel="noreferrer"><h2>Tableau Business Sales Visualization</h2></a>
                <p>Interactive Tableau dashboard analyzing sales, profit margins, and regional performance across multiple business units. Surfaces actionable trends and KPIs for data-driven decision making.</p>
        </div>

            <div className="project">
                <a href="https://github.com/BohdanChuprynka/Stock-Sales-Prediction" target="_blank" rel="noreferrer"><img src={stock_sales} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/Stock-Sales-Prediction" target="_blank" rel="noreferrer"><h2>Stock Sales Prediction</h2></a>
                <p>End-to-end ML pipeline for retail sales forecasting on 3M+ rows across 54 stores. Compares Random Forest, LightGBM, Decision Tree, Ridge, and Linear Regression — best model achieves R² of 0.83. Features temporal encoding, oil price interpolation, and wage-day indicators.</p>
            </div>

            <div className="project">
                <a href="https://github.com/BohdanChuprynka/Sentiment-Analysis-Model" target="_blank" rel="noreferrer"><img src={sentiment_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/Sentiment-Analysis-Model" target="_blank" rel="noreferrer"><h2>Sentiment Analysis Model</h2></a>
                <p>Sentiment classification pipeline on 1.6M tweets comparing classical ML (Naive Bayes, Logistic Regression with TF-IDF bigrams) against deep learning (Universal Sentence Encoder, hybrid token+character BiLSTM). Best model reaches 80.6% accuracy with dual preprocessing strategies optimized per model type.</p>
            </div>
        </div>
    </div>
    );  
}

export default Project;