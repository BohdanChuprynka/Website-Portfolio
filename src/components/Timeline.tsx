import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Project Timeline</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025 - August 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGear} />}
          >
            <h3 className="vertical-timeline-element-title">Vertebrae Image Segmentation</h3>
            <h4 className="vertical-timeline-element-subtitle">Internship Project</h4>
            <p>
              X-ray Segmentation, Statistical Analysis, Model Architecture, Accuracy Evaluation, Automation & Deployment
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025 - August 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Cleveland Clinic</h4>
            <p>
              Medical Imaging AI, Image Segmentation, Processing & Model Development, Clinical Workflow Automation, Research Fellow
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2024 - December 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGear} />}
          >
            <h3 className="vertical-timeline-element-title">PersonaGPT</h3>
            <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
            <p>
              LLM Personalization, Conversation Intelligence, Data Integration & Preparation, Model Fine‑Tuning, Context‑Aware Writing, Behavioral Style Adaptation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGear} />}
          >
            <h3 className="vertical-timeline-element-title">Stock Sales Prediction</h3>
            <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
            <p>
              Time‑series forecasting, End‑to‑End Model Development, Kaggle Competition, Production‑Ready Data Pipeline
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2024 - April 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGear} />}
          >
            <h3 className="vertical-timeline-element-title">Sentiment Analysis</h3>
            <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
            <p>
              Data Processing, Model Training, Emotion Detection
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;