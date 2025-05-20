import { ExperienceData } from "../../data/Experience";
import TimeLine from "../timeLine/TimeLine";

const Experience = () => {
  return (
    <div className="mt-12 pt-4">
      <h1 className="text-slate-800 text-4xl font-semibold">Experience</h1>
      <div className=" grid-container mt-12">
        <TimeLine data={ExperienceData} imgWidth={90} imgHeight={"auto"} />
      </div>
    </div>
  );
};

export default Experience;
