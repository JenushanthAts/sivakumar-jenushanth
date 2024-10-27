import React from "react";
import "./Projects.scss";
import { PrjectsData } from "../../data/Projects";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-header-div">
        <h1 className="text-center">Projects</h1>
      </div>
      <div className="projects-body">
        {PrjectsData.map((project, index: number) => (
          <div className="degree-card" key={index}>
            <div className="card-img">
              <img src={project.logo} alt={project.heading} />
            </div>
            <div className="card-body">
              <div className="body-header">
                <div className="title">
                  <h2 className="card-title">{project.heading}</h2>
                  <p className="place">{project.place}</p>
                  {project.summary.map((ele, i) => (
                    <p className="summary" key={index}>
                      {ele}
                    </p>
                  ))}
                </div>
                <div className="duration-div">
                  <h3 className="duration">{project.period}</h3>
                </div>
              </div>
              <div className="skills-div">
                {project.technologies.map((ele, index) => (
                  <p key={index}>{ele}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
