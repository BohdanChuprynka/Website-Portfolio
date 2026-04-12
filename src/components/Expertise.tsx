import React from "react";
import "../assets/styles/Expertise.scss";

import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMicrochip,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

import { useProfile } from "../context/ProfileContext";

const iconMap: Record<string, any> = {
  faMicrochip,
  faServer,
  faDatabase,
};

function Expertise() {
  const { profile } = useProfile();

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {profile.expertise.map((skill, index) => (
            <div key={index} className="skill">
              <FontAwesomeIcon icon={iconMap[skill.icon]} size="3x" />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {skill.skills.map((label, idx) => (
                  <Chip key={idx} className="chip" label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;