import { useState } from "react";

export enum SKILLS_ENUM {
  FRONT_END = "frontEnd",
  BACK_END = "backEnd",
  LANGUAGES = "languages",
  TOOLS = "tools",
  DATABASE = "database",
}
const useSkillSelection = () => {
  const [selectedSkill, setSelectedSkill] = useState<SKILLS_ENUM>(
    SKILLS_ENUM.FRONT_END
  );

  const handleSelectSkill = (skill: SKILLS_ENUM) => {
    setSelectedSkill(skill);
  };

  return { selectedSkill, handleSelectSkill };
};

export default useSkillSelection;
