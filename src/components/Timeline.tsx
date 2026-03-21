import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import aximonLogo from '../assets/images/aximon_logo.svg';
import clevelandClinicLogo from '../assets/images/cc-icon.png';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional History</h1>
        <VerticalTimeline>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="January 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<img src={aximonLogo} alt="Aximon" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px' }} />}
          >
            <h3 className="vertical-timeline-element-title">ML Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Aximon</h4>
            <p>
              Owned the full AI stack for Aximon.ai, an adaptive Python tutoring platform serving active users — spanning RAG, real-time inference, and personalized content generation. Engineered multi-modal AI tutoring pipelines and built custom prompt management with structured context injection.
            </p>
            <p style={{ fontSize: '0.85em', color: '#555', marginTop: '8px' }}>
              <strong>Tech:</strong> Python, GPT-4o-mini, Whisper, TTS, RAG, FastAPI, Prompt Engineering
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025 - August 2025"
            iconStyle={{ background: 'white', color: 'white' }}
            icon={<img src={clevelandClinicLogo} alt="Cleveland Clinic" style={{ width: '65%', height: '65%', objectFit: 'contain', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
          >
            <h3 className="vertical-timeline-element-title">ML Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Cleveland Clinic</h4>
            <p>
              Developed an nnU-Net-based vertebral segmentation system to automate spinal X-ray analysis, collaborating with radiologists and neurosurgeons.
            </p>
            <p style={{ fontSize: '0.85em', color: '#555', marginTop: '8px' }}>
              <strong>Tech:</strong> PyTorch, nnU-Net, Medical Imaging, Image Segmentation, Python
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;