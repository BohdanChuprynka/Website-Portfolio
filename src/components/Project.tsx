import React from "react";

import vertebrae_proj from '../assets/images/vertebrae_proj.jpg';
import stock_sales from '../assets/images/stock_sales.jpg';
import persona_gpt from '../assets/images/PersonaGPT.jpg';
import sentiment_project from '../assets/images/sentiment_project.png';
import tableau_project from '../assets/images/tableau_vis.png';


import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

        <div className="project">
                <a target="_blank" rel="noreferrer"><img src={vertebrae_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Vertebrae Image Segmentation</h2></a>
                <p>Designed and developed a <strong>private</strong> end-to-end medical imaging pipeline using PyTorch and nnU-Net architecture to automatically segment vertebrae in spinal X-rays, generate anatomical labels, and compute alignment angles to support clinical diagnosis and surgical planning.</p>
        </div>


        <div className="project">
                <a href="https://public.tableau.com/app/profile/bohdan.chuprynka/viz/BusinessSummary_17527722001530/BusinessSummary" target="_blank" rel="noreferrer"><img src={tableau_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://public.tableau.com/app/profile/bohdan.chuprynka/viz/BusinessSummary_17527722001530/BusinessSummary" target="_blank" rel="noreferrer"><h2>Tableau Business Sales Visualization</h2></a>
                <p>Built an interactive Tableau dashboard to analyze sales, profit, and regional performance, enabling clear business insights and data-driven decision making.</p>
        </div>

        <div className="project">
                <a href="https://github.com/BohdanChuprynka/PersonaGPT" target="_blank" rel="noreferrer"><img src={persona_gpt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/PersonaGPT" target="_blank" rel="noreferrer"><h2>PersonaGPT</h2></a>
                <p>Designed and developed PersonaGPT, an AI-powered application leveraging large language models and semantic search to generate context-aware, persona-driven responses</p>
        </div>
            <div className="project">
                <a href="https://github.com/BohdanChuprynka/Stock-Sales-Prediction" target="_blank" rel="noreferrer"><img src={stock_sales} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/Stock-Sales-Prediction" target="_blank" rel="noreferrer"><h2>Stock Sales Prediction</h2></a>
                <p>Developed a machine learning pipeline on a stock sales dataset, covering data cleaning, feature engineering, model training, and performance evaluation.</p>
            </div>

            <div className="project">
                <a href="https://github.com/BohdanChuprynka/Sentiment-Analysis-Model" target="_blank" rel="noreferrer"><img src={sentiment_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BohdanChuprynka/Sentiment-Analysis-Model" target="_blank" rel="noreferrer"><h2>Sentiment Analysis Model</h2></a>
                <p>Designed and implemented a sentiment analysis model to classify and interpret textual data, enabling data-driven insights from user opinions.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;