import { PrjectsData } from "../../data/Projects";
import TimeLine from "../timeLine/TimeLine";

const Projects = () => {
  return (
    <div>
      <h1 className="text-slate-900 text-4xl font-semibold">
        Featured Projects
      </h1>
      <div className="pt-4 mt-12">
        <TimeLine data={PrjectsData} />
      </div>
    </div>
  );
};

export default Projects;
