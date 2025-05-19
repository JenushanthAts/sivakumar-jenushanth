import { ReactNode } from "react";
import {
  BackEndSkills,
  DatabaseSkills,
  DevelopmentTools,
  FrontEndSkills,
  ProgrammingSkills,
} from "../../data/Skills";
import useSkillSelection, { SKILLS_ENUM } from "../../hooks/useSkillSelection";
import Button from "../button/Button";
import Card from "../card/Card";

const Skills = () => {
  const { selectedSkill, handleSelectSkill } = useSkillSelection();

  const renderSkillsContent = (): ReactNode => {
    switch (selectedSkill) {
      case SKILLS_ENUM.FRONT_END:
        return <Card skills={FrontEndSkills} />;
      case SKILLS_ENUM.BACK_END:
        return <Card skills={BackEndSkills} />;
      case SKILLS_ENUM.DATABASE:
        return <Card skills={DatabaseSkills} />;
      case SKILLS_ENUM.LANGUAGES:
        return <Card skills={ProgrammingSkills} />;
      case SKILLS_ENUM.TOOLS:
        return <Card skills={DevelopmentTools} />;
      default:
        return <Card skills={FrontEndSkills} />;
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl mt-6">
        Professional Skills & Expertise
      </h1>
      <div className="grid-container">
        <div className="flex justify-center items-center flex-wrap gap-10 mt-10">
          <Button
            label="Front End"
            onClick={() => handleSelectSkill(SKILLS_ENUM.FRONT_END)}
            active={selectedSkill === SKILLS_ENUM.FRONT_END}
          />
          <Button
            label="Back End"
            onClick={() => handleSelectSkill(SKILLS_ENUM.BACK_END)}
            active={selectedSkill === SKILLS_ENUM.BACK_END}
          />
          <Button
            label="Database"
            onClick={() => handleSelectSkill(SKILLS_ENUM.DATABASE)}
            active={selectedSkill === SKILLS_ENUM.DATABASE}
          />

          <Button
            label="Programming Languages"
            onClick={() => handleSelectSkill(SKILLS_ENUM.LANGUAGES)}
            active={selectedSkill === SKILLS_ENUM.LANGUAGES}
          />
          <Button
            label="Development Tools"
            onClick={() => handleSelectSkill(SKILLS_ENUM.TOOLS)}
            active={selectedSkill === SKILLS_ENUM.TOOLS}
          />
        </div>
        {renderSkillsContent()}
      </div>
    </div>
  );
};

export default Skills;
