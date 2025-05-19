import { FC } from "react";
import "./Card.scss";

type SkillProps = {
  title: string;
  src: string;
};
type CardProps = {
  skills: SkillProps[];
};

const Card: FC<CardProps> = ({ skills }) => {
  return (
    <ul className="grid grid-cols-5 md:grid-cols-10 gap-10 mt-10">
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
  );
};

export default Card;
