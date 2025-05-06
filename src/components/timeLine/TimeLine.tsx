import { FC } from "react";
import TimelineIcon from "../../../public/icons/timeline.icon";
import Chip from "../chip/Chip";
import "./TimeLine.scss";

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
    <ol className="timeline">
      {data.map((ele, index) => (
        <li className="timeline-item" key={index}>
          <TimelineIcon />
          <div className="timeline-header">
            {/* <img
              src={ele.logo}
              alt={`${ele.title} logo`}
              className="company-logo"
            /> */}
            <div>
              <h3 className="timeline-title">
                <a href={ele.link} target="_blank" rel="noreferrer">
                  {ele.title}
                </a>
              </h3>
              <p className="role">{ele.subHeading}</p>
              <time className="timeline-date">
                {ele.duration} • {ele.location}
              </time>
            </div>
          </div>

          <ul className="timeline-description">
            {ele.summary?.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="tech-stack">
            {ele?.technologies?.map((tech, i) => (
              <Chip label={tech} key={i} />
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default TimeLine;
