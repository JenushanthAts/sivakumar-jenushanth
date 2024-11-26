import React from "react";
import "./Projects.scss";
import { PrjectsData } from "../../data/Projects";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-header-div">
        <h1 className="projects-header text-center">Projects</h1>
      </div>
      <div className="projects-div">
        {PrjectsData.map((project, index) => (
          <div className="list" key={index}>
            <div className="timeline-img cd-picture"></div>
            <div className="timeline-content">
              <div>
                <img alt={project.heading} src={project.logo} width={50} />
              </div>
              <h2>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.heading}
                </a>
              </h2>

              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>{" "}
                  {project.place}
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                  {project.period}
                </span>
              </div>
              {project.summary.map((ele, i) => (
                <p key={i}>{ele}</p>
              ))}
              <ul className="content-skills">
                {project.technologies.map((tc, idx) => (
                  <li key={idx}>{tc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
