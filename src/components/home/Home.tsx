import React from "react";
import jenushanth from "../../assets/jenushanth.webp";

import "./Home.scss";

const Home = () => {
  const downLoadCv = async () => {
    window.open(
      "https://drive.google.com/file/d/1kZG5tCvVnHdtGHpKJTGl9zt4XU7phEda/view?usp=drive_link",
      "_blank"
    );
  };
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">I'm Jenushanth</h1>
            <h2 className="greeting-nickname">
              Full stack developer | 3+ years Experience
            </h2>
            <p className="text-justify greeting-text-p subTitle">
              Software Engineer with a track record of optimizing backend
              performance by 40%, enhancing frontend responsiveness, Delivering
              100% on-time completion and a 15% reduction in operational costs.
            </p>
            <div className="portfolio-repo-btn-div">
              <button onClick={downLoadCv}>Download Cv</button>
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img
            alt="Jenushanth, Web developer"
            src={jenushanth}
            width={"100%"}
            // height={700}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
