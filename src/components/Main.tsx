import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from "../assets/images/avatar.jpg";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/BohdanChuprynka" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bohdan-chuprynka-792b0a2a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Bohdan Chuprynka</h1>
          <p>Data Science & Artificial Intelligence </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/BohdanChuprynka" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bohdan-chuprynka-792b0a2a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;