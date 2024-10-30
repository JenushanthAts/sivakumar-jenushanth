import React from "react";
import "./Skills.scss";
import { SkillLists } from "../../data/Skills";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="text-center">Skills</h1>
      <div className="skills-div">
        {SkillLists.map((ele, index) => (
          <div key={index} className="skills-card">
            <div className="skills-img">
              <img src={ele.logo} alt={ele.name} loading="eager" />
            </div>
            <div className="skills-bod">
              <span>{ele.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
