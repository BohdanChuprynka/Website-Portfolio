import React from "react";

import vertebrae_proj from '../assets/images/vertebrae_proj.jpg';
import stock_sales from '../assets/images/stock_sales.png';
import sentiment_project from '../assets/images/sentiment_project.png';
import tableau_project from '../assets/images/tableau_vis.png';
import rag_project from "../assets/images/rag_architecture.png";

import '../assets/styles/Project.scss';
import { useProfile } from "../context/ProfileContext";

const imageMap: Record<string, string> = {
  'vertebrae_proj.jpg': vertebrae_proj,
  'stock_sales.png': stock_sales,
  'sentiment_project.png': sentiment_project,
  'tableau_vis.png': tableau_project,
  'rag_architecture.png': rag_project,
};

function Project() {
  const { profile } = useProfile();

  return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
          {profile.projects.map((project, index) => (
            <div key={index} className="project">
              {project.link ? (
                <>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={imageMap[project.image]} className="zoom" alt="thumbnail" width="100%"/>
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <h2>{project.title}</h2>
                  </a>
                </>
              ) : (
                <>
                  <img src={imageMap[project.image]} className="zoom" alt="thumbnail" width="100%"/>
                  <h2>{project.title}</h2>
                </>
              )}
              <p>{project.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Project;