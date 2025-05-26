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
    <ol className="relative border-s border-gray-100 dark:border-gray-300">
      {data.map((item, index) => (
        <li className="mb-10 ms-6" key={index}>
          <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-white bg-green-600">
            <TimelineIcon size={10} />
          </span>
          <h3 className="font-arial text-lg mb-1 text-gray-900">
            {item.title}
          </h3>
          {item.subHeading && (
            <a
              className="text-primary cursor-pointer transition font-arial text-gray-500 mt-2"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.subHeading}
            </a>
          )}

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-2">
            {item.duration && (
              <h4 className="font-arial text-sm text-gray-500 ">
                <i className="far fa-calendar"></i>&nbsp;
                {item.duration}
              </h4>
            )}

            {item.location && (
              <time className="font-arial text-sm font-normal leading-none text-gray-400 mt-3 md:mt-0">
                <i className="fas fa-map-marker-alt"></i>&nbsp;{item.location}
              </time>
            )}
          </div>

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
