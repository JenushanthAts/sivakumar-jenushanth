import { FC } from "react";
import TimelineIcon from "../../assets/icons/timeline.icon";
import Badge from "../badge/Badge";

type TData = {
  title: string;
  logo: string;
  duration: string;
  location: string;
  subHeading?: string;
  link?: string;
  summary?: string[];
  technologies?: string[];
};
type TimeLineProps = {
  data: TData[];
  imgWidth?: string | number;
  imgHeight?: string | number;
};
const TimeLine: FC<TimeLineProps> = ({
  data,
  imgWidth = 60,
  imgHeight = 60,
}) => {
  return (
    <ol className="relative border-s border-gray-100 dark:border-gray-400">
      {data.map((item, index) => (
        <li className="mb-10 ms-6" key={index}>
          <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-white bg-green-600">
            <TimelineIcon size={10} />
          </span>
          <h3 className="font-arial flex items-center mb-1 text-lg  text-gray-900">
            {item.title}
            <span className="text-primary dark:bg-[var(--color-gray)]  text-sm font-mono me-2 px-2.5 py-0.5 rounded-sm  ms-3">
              {item.duration}
            </span>
          </h3>
          {item.subHeading && (
            <h4 className="font-arial text-sm text-gray-500 mt-2">
              {item.subHeading}
            </h4>
          )}
          <time className="font-arial block mt-3 text-sm font-normal leading-none text-gray-400 ">
            {item.location}
          </time>
          {item.summary?.map((ele, index) => (
            <p className="font-arial mt-3 dark:text-gray-500" key={index}>
              {ele}
            </p>
          ))}
          <div className="mt-3 flex flex-wrap gap-2">
            {item.technologies?.map((ele, index) => (
              <Badge label={ele} key={index} />
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default TimeLine;
