import React from "react";
import "./Experience.scss";
import { ExperienceData } from "../../data/Experience";

const Experience = () => {
  const handleClick = (myLink: string) => {
    window.open(myLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="timeline-container">
      <h1 className="text-center">Experience</h1>
      {ExperienceData.map((ele, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-logo">
            <img
              src={ele.logo}
              alt={`${ele.companyName} logo`}
              onClick={() => handleClick(ele.companyWeb)}
            />
          </div>
          <div className="timeline-details">
            <a href={ele.companyWeb} target="_blank" rel="noreferrer">
              {ele.companyName}
            </a>
            <h4>{ele.position}</h4>
            <span>{ele.period}</span>
            <h5>{ele.location}</h5>
            {ele.summary.map((ele) => (
              <p>{ele}</p>
            ))}
            <div className="technologies">
              {ele.technologies.map((ele, index) => (
                <span key={index}>{ele}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
