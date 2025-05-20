import { useRef } from "react";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import Navbar from "./components/navBar/NavBar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: string) => {
    const refs = {
      home: homeRef,
      experience: experienceRef,
      education: educationRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };

    const targetRef = refs[section as keyof typeof refs];
    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <div className="max-w-5xl mx-auto px-8 lg:px-3 py-8">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>

        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
