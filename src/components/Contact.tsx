import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>
            If you&apos;d like to discuss a project, collaboration, or opportunity,
            you can reach me directly at:
          </p>

          <Box className="contact-static">
            <a
              href="mailto:bohdan.chuprynka@gmail.com"
              className="contact-email"
            >
              <strong>bohdan.chuprynka@gmail.com</strong> 
            </a>

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              href="mailto:bohdan.chuprynka@gmail.com"
              className="contact-button"
            >
              <strong>Email Me</strong>
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;