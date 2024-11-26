import React from "react";
import "./Education.scss";
import { EducationData } from "../../data/Education";

const Education = () => (
  <div className="education-container" id="educations">
    <h1 className="educations-header text-center">Educations</h1>
    <div className="educations-div">
      {EducationData.map((education, index: number) => (
        <div className="educations-body" key={index}>
          <div className="card-img">
            <img
              src={education.logo}
              alt={education.institute}
              loading="eager"
            />
          </div>
          <div className="card-body">
            <div className="body-header">
              <div className="title">
                <h2 className="card-title">{education.title}</h2>
                <p className="institute">{education.institute}</p>
                <p className="card-subtitle">{education.location}</p>
                <div className="duration-div">
                  <h3 className="duration">{education.duration}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
