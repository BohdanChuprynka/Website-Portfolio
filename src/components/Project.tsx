import React from "react";
import { Link } from "react-router-dom";

import vertebrae_proj from '../assets/images/vertebrae_proj.jpg';
import stock_sales from '../assets/images/stock_sales.png';
import sentiment_project from '../assets/images/sentiment_project.png';
import tableau_project from '../assets/images/tableau_vis.png';
import rag_project from "../assets/images/rag_architecture.png";
import aximon_thumbnail from "../assets/images/aximon/aximon-thumbnail.png";

import '../assets/styles/Project.scss';
import { useProfile } from "../context/ProfileContext";

const imageMap: Record<string, string> = {
  'vertebrae_proj.jpg': vertebrae_proj,
  'stock_sales.png': stock_sales,
  'sentiment_project.png': sentiment_project,
  'tableau_vis.png': tableau_project,
  'rag_architecture.png': rag_project,
  'aximon_thumbnail.png': aximon_thumbnail,
};

interface ProjectItem {
  title: string;
  description: string;
  link?: string;
  image: string;
  slug?: string;
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const thumb = (
    <img
      src={imageMap[project.image]}
      className="zoom"
      alt={project.title}
      width="100%"
    />
  );
  const heading = <h2>{project.title}</h2>;

  if (project.slug) {
    const to = `/projects/${project.slug}`;
    return (
      <div className="project">
        <Link to={to} aria-label={project.title}>{thumb}</Link>
        <Link to={to}>{heading}</Link>
        <p>{project.description}</p>
      </div>
    );
  }

  if (project.link) {
    return (
      <div className="project">
        <a href={project.link} target="_blank" rel="noreferrer" aria-label={project.title}>{thumb}</a>
        <a href={project.link} target="_blank" rel="noreferrer">{heading}</a>
        <p>{project.description}</p>
      </div>
    );
  }

  return (
    <div className="project">
      {thumb}
      {heading}
      <p>{project.description}</p>
    </div>
  );
}

function Project() {
  const { profile } = useProfile();

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {profile.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
