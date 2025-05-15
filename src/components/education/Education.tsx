import { EducationData } from "../../data/Education";
import TimeLine from "../timeLine/TimeLine";

const Education = () => (
  <div>
    <h1 className="text-center text-4xl mt-6">Educations</h1>
    <div className="grid-container">
      <TimeLine data={EducationData} />
    </div>
  </div>
);

export default Education;
