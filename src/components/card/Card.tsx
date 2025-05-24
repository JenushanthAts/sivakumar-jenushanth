import { FC } from "react";
import Badge from "../badge/Badge";

type SkillProps = {
  title: string;
  src: string;
};
type CardProps = {
  heading: string;
  values: SkillProps[];
};

const Card: FC<CardProps> = ({ heading, values }) => {
  return (
    //           <img
    //             src={ele.src}
    //             alt={ele.title}
    //             className="w-10 h-10 object-contain"
    //           />
    <div className="bg-white shadow-sm border border-green-200 rounded-lg p-4 transition-transform transform hover:scale-105 origin-bottom">
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-slate-400 w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
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
