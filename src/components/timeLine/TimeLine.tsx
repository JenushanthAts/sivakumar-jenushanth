import React, { FC } from "react";
import "./TimeLine.scss";

type TData = {
  title: string;
  logo: string;
  duration: string;
  location: string;
  institute?: string;
  link?: string;
  summary?: string[];
  technologies?: string[];
};
type TimeLineProps = {
  data: TData[];
};
const TimeLine: FC<TimeLineProps> = ({ data }) => {
  return (
    <ul className="timeline mt-3">
      {data.map((dt, index) => (
        <li className="timeline-event" key={index}>
          <label className="timeline-event-icon"></label>
          <div className="timeline-event-copy">
            <div className="img-div">
              <img src={dt.logo} alt={dt.title} width={60} height={60} />
              <div>
                <p>
                  <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                  {dt.duration}
                </p>
                <p>
                  <i className="fa fa-location" aria-hidden="true"></i>{" "}
                  {dt.location}
                </p>
              </div>
            </div>

            <h3>
              <a href={dt.link} target="_blank" rel="noreferrer">
                {dt.title}
              </a>
            </h3>
            {dt.institute && <h4>{dt.institute}</h4>}
            {dt.summary &&
              dt.summary.map((sumry, idx) => (
                <p key={idx} className="text-justify">
                  {sumry}
                </p>
              ))}
            {dt.technologies && (
              <ul className="technologies">
                {dt.technologies.map((tc, idx) => (
                  <li key={idx}>{tc}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TimeLine;
