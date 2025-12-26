import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/BohdanChuprynka" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/bohdan-chuprynka-792b0a2a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© {new Date().getFullYear()} Bohdan Chuprynka</p>
    </footer>
  );
}

export default Footer;