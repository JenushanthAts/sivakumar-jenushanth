import React from "react";
import "./Experience.scss";
import { ExperienceData } from "../../data/Experience";

const Experience = () => {
  return (
    <div className="timeline-container">
      <h1 className="text-center">Experience</h1>
      {ExperienceData.map((ele, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-logo">
            <img src={ele.logo} alt={`${ele.companyName} logo`} />
          </div>
          <div className="timeline-details">
            <h3>{ele.companyName}</h3>
            <h4>{ele.position}</h4>
            <span>{ele.period}</span>
            {ele.summary.map((ele) => (
              <p>{ele}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
