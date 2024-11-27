import React from "react";
import { PrjectsData } from "../../data/Projects";
import TimeLine from "../timeLine/TimeLine";

const Projects = () => {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <TimeLine data={PrjectsData} />
    </div>
  );
};

export default Projects;
