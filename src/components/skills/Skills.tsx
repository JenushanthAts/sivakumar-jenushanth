import {
  BackEndSkills,
  DatabaseSkills,
  DevelopmentTools,
  FrontEndSkills,
  ProgrammingSkills,
} from "../../data/Skills";
import Card from "../card/Card";

const Skills = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-3">
        Professional Skills & Expertise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Frond End" skills={FrontEndSkills} />
        <Card title="Back End" skills={BackEndSkills} />
        <Card title="Database" skills={DatabaseSkills} />
        <Card title="Programming Languages" skills={ProgrammingSkills} />
        <Card title="Development Tools" skills={DevelopmentTools} />
      </div>
    </div>
  );
};

export default Skills;
