import { EducationData } from "../../data/Education";
import TimeLine from "../timeLine/TimeLine";

const Education = () => (
  <div className="mt-12 pt-4">
    <h1 className="text-slate-800 text-4xl font-semibold">Educations</h1>
    <div className="grid-container mt-12">
      <TimeLine data={EducationData} />
    </div>
  </div>
);

export default Education;
