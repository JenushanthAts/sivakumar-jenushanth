import myResume from "../../../public/doc/Resume.pdf";
import myProfile from "../../assets/Profile.webp";
import { socialLinks } from "../../data/SocialLinks";
import Button from "../../ui/button/Button";
import IconLinkList from "../../ui/iconLinkList/IconLinkList";

const Home = () => {
  const downLoadCv = async () => {
    window.open(myResume, "_blank");
  };

  return (
    <section id="greeting" className="pt-16">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
        <div className="order-1 opacity-100 tmd:order-1 text-left w-full md:flex-1 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            I'm <span className="text-primary">Jenushanth</span>
          </h1>
          <h2 className="text-md md:text-2xl font-mono text-muted-foreground mb-4 pt-3">
            Full Stack Engineer | 3+ Years Experience
          </h2>
          <p className="font-arial text-justify dark:text-gray-500 mb-6 max-w-md">
            I build fast, scalable web applications using TypeScript,
            JavaScript, React, and Node. With a focus on clean code and seamless
            UX, I turn complex ideas into interactive, high-performance digital
            experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={downLoadCv}
              label="Download CV"
              variant="primary"
            />
            <ul className="flex flex-wrap space-x-4 justify-center">
              {socialLinks.map((ele, index) => (
                <IconLinkList
                  icon={ele.icon}
                  key={index}
                  href={ele.href}
                  target={ele.target}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="order-2 md:order-2 opacity-100 flex-shrink-0  mt-5 md:mt-0">
          <div className="relative w-72 h-72 overflow-hidden border-2 border-primary/20 rounded-md shadow-lg ">
            <img
              alt="Mr.S.Jenushanth"
              decoding="async"
              data-nimg="fill"
              className="object-cover absolute inset-0 h-full w-full"
              src={myProfile}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
