import CodeIcon from "../../assets/icons/code.icon";
import DatabaseIcon from "../../assets/icons/databse.icon";
import ToolsIcon from "../../assets/icons/tools.con";
import { skillsSet } from "../../data/Skills";
import Card from "../../ui/card/Card";

const iconsArray = [
  <CodeIcon color="oklch(70.4% 0.04 256.788)" />,
  <CodeIcon color="oklch(70.4% 0.04 256.788)" />,
  <DatabaseIcon color="oklch(70.4% 0.04 256.788)" />,
  <CodeIcon color="oklch(70.4% 0.04 256.788)" />,
  <ToolsIcon color="oklch(70.4% 0.04 256.788)" />,
];
const Skills = () => {
  return (
    <div>
      <h1 className="text-slate-800 text-4xl font-semibold">
        Professional Skills & Expertise
      </h1>
      <div className="pt-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillsSet.map((ele, index) => (
          <Card
            heading={ele.heading}
            values={ele.values}
            key={index}
            icon={iconsArray[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
