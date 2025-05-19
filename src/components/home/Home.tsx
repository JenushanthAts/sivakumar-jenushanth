import myResume from "../../../public/doc/Resume.pdf";
import DownloadIcon from "../../../public/icons/download.icon";
import profileImg from "../../../src/assets/Profile.webp";
import Button from "../button/Button";
import "./Home.scss";

const Home = () => {
  const downLoadCv = async () => {
    window.open(myResume, "_blank");
  };

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              I'm <span>Jenushanth</span>
            </h1>
            <p className="dark-mode greeting-text-p">
              🚀 Full Stack Engineer | 3+ years Experience
            </p>
            <p className="text-justify greeting-text-p subTitle">
              I build fast, scalable web applications using TypeScript,
              JavaScript, React, and Node. With a focus on clean code and
              seamless UX, I turn complex ideas into interactive,
              high-performance digital experiences.
            </p>

            <div className="portfolio-repo-btn-div">
              <Button
                onClick={downLoadCv}
                icon={<DownloadIcon size={20} />}
                label="Download CV"
                variant="primary"
              />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="Mr.S.Jenushanth" src={profileImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
