import { EducationData } from "../../data/Education";
import TimeLine from "../../ui/timeLine/TimeLine";

const Education = () => (
  <div>
    <h1 className="text-slate-800 text-4xl font-semibold">Educations</h1>
    <div className="pt-4 mt-12">
      <TimeLine data={EducationData} />
    </div>
  </div>
);

export default Education;
