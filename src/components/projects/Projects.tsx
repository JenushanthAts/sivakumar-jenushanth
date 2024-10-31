import React from "react";
import "./Projects.scss";
import { PrjectsData } from "../../data/Projects";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-header-div">
        <h1 className="projects-header text-center">Projects</h1>
      </div>
      <div className="projects-body">
        {PrjectsData.map((project, index: number) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <div className="project-img">
                <img src={project.logo} alt={project.heading} loading="eager" />
              </div>
              <div className="project-title">
                <a
                  className="card-title"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.heading}
                </a>
                <h4 className="place">{project.place}</h4>
                <div className="duration-div">
                  <h3 className="duration">{project.period}</h3>
                </div>
              </div>
            </div>
            <div className="project-body">
              <div className="title">
                {project.summary.map((ele, i) => (
                  <p className="summary" key={index}>
                    {ele}
                  </p>
                ))}

                <div className="skills-div">
                  {project.technologies.map((ele, index) => (
                    <p key={index}>{ele}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
