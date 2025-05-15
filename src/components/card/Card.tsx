import { FC } from "react";
import "./Card.scss";

type SkillProps = {
  title: string;
  src: string;
};
type CardProps = {
  title: string;
  skills: SkillProps[];
};

const Card: FC<CardProps> = ({ title, skills }) => {
  return (
    <div className="p-2">
      <h2 className="text-center skill-name">{title}</h2>
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        {skills.map((ele, index) => (
          <li key={index}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={ele.src}
                  alt={ele.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-base text-center skill-title">
                {ele.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
