import { skillsSet } from "../../data/Skills";
import Card from "../card/Card";

const Skills = () => {
  return (
    <div>
      <h1 className="text-slate-800 text-4xl font-semibold">
        Professional Skills & Expertise
      </h1>
      <div className="pt-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillsSet.map((ele) => (
          <Card heading={ele.heading} values={ele.values} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
