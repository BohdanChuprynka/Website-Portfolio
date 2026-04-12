import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import aximonLogo from '../assets/images/aximon_logo.svg';
import clevelandClinicLogo from '../assets/images/cc-icon.png';
import { useProfile } from "../context/ProfileContext";

function Timeline() {
  const { profile } = useProfile();

  const logos: Record<string, string> = {
    'Aximon': aximonLogo,
    'Cleveland Clinic': clevelandClinicLogo,
  };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional History</h1>
        <VerticalTimeline>
          {profile.timeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={item.date}
              iconStyle={{ background: item.company === 'Aximon' ? '#5000ca' : 'white', color: 'rgb(39, 40, 34)' }}
              icon={<img src={logos[item.company]} alt={item.company} style={item.company === 'Aximon' ? { width: '100%', height: '100%', objectFit: 'contain', padding: '6px' } : { width: '65%', height: '65%', objectFit: 'contain', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
            >
              <h3 className="vertical-timeline-element-title">{item.position}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
              <p>{item.description}</p>
              <p style={{ fontSize: '0.85em', color: '#555', marginTop: '8px' }}>
                <strong>Tech:</strong> {item.tech}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;