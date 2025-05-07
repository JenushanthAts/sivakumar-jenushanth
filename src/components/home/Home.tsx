import DownloadIcon from "../../../public/icons/download.icon";
import profileImg from "../../../src/assets/Profile.webp";
import Button from "../button/Button";
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
            <h1 className="greeting-text">
              I'm <span>Jenushanth</span>
            </h1>
            <p className="dark-mode greeting-text-p">
              🚀 Passionate Full Stack Engineer | 3+ years Experience
            </p>
            <p className="text-justify greeting-text-p subTitle">
              With a strong foundation in TypeScript, JavaScript, React.js, and
              Node.js, I specialize in building robust, scalable web
              applications. My toolkit includes a blend of powerful libraries
              and frameworks that bring ideas to life, creating interactive and
              visually compelling experiences.
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
