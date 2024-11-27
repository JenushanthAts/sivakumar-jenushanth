import React, { FC } from "react";
import "./Card.scss";
type CardProps = {
  title: string;
  data: string[];
};

const Card: FC<CardProps> = ({ title, data }) => {
  return (
    <div className="card-list">
      <h3 className="text-center">{title}</h3>
      <ul className="card-items">
        {data.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
