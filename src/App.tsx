import React, { useRef } from "react";
import Navbar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

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
    <div className="main">
      <Navbar scrollToSection={scrollToSection} />
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
  );
};

export default App;
