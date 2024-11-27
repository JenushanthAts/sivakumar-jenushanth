import React from "react";
import { EducationData } from "../../data/Education";
import TimeLine from "../timeLine/TimeLine";

const Education = () => (
  <div>
    <h1 className="text-center">Educations</h1>
    <TimeLine data={EducationData} />
  </div>
);

export default Education;
