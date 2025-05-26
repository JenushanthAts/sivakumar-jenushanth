import { FC, ReactNode } from "react";
import Badge from "../badge/Badge";

type SkillProps = {
  title: string;
  src: string;
};
type CardProps = {
  heading: string;
  icon?: ReactNode;
  values: SkillProps[];
};

const Card: FC<CardProps> = ({ heading, icon, values }) => {
  return (
    <div className="bg-white shadow-sm border border-green-200 rounded-lg p-4 transition-transform transform hover:-translate-y-1 hover:scale-106">
      <div className="flex items-center mb-4">
        {icon}
        <h5 className="ml-3 text-slate-800 text-lg font-mono">{heading}</h5>
      </div>

      <div className="flex flex-wrap gap-2">
        {values.map((ele, index) => (
          <Badge label={ele.title} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Card;
