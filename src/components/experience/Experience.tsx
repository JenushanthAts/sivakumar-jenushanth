import React from "react";
import { ExperienceData } from "../../data/Experience";
import TimeLine from "../timeLine/TimeLine";

const Experience = () => {
  return (
    <div>
      <h1 className="text-center">Experience</h1>
      <div className="grid-container">
        <TimeLine data={ExperienceData} imgWidth={90} imgHeight={"auto"} />
      </div>
    </div>
  );
};

export default Experience;
