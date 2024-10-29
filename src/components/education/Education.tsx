import React from "react";
import "./Education.scss";
import { EducationData } from "../../data/Education";

const Education = () => (
  <div className="education-container" id="educations">
    <div className="educations-header-div">
      <h1 className="educations-header text-center">Educations</h1>
    </div>
    <div className="educations-body">
      {EducationData.map((education, index: number) => (
        <div className="degree-card" key={index}>
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
                <h2 className="card-title" style={{ color: "rgb(20, 33, 61)" }}>
                  {education.title}
                </h2>
                <p className="institute">{education.institute}</p>
                <p className="card-subtitle">{education.location}</p>
                {/* <p className="card-subtitle">{education.duration}</p> */}
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
