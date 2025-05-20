import { PrjectsData } from "../../data/Projects";
import TimeLine from "../timeLine/TimeLine";

const Projects = () => {
  return (
    <div className="pt-5">
      <h1 className="text-slate-900 text-4xl font-semibold">
        Featured Projects
      </h1>
      <div className="grid-container mt-12">
        <TimeLine data={PrjectsData} />
      </div>
    </div>
  );
};

export default Projects;
