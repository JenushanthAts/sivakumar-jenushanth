import { PrjectsData } from "../../data/Projects";
import TimeLine from "../timeLine/TimeLine";

const Projects = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-6"> Personal Projects</h1>
      <div className="grid-container">
        <TimeLine data={PrjectsData} />
      </div>
    </div>
  );
};

export default Projects;
