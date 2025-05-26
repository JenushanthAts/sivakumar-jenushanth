import { useRef } from "react";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navBar/NavBar";
import Contact from "./pages/contact/Contact";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Divider from "./ui/divider/Divider";

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
        <Divider />

        <div ref={experienceRef}>
          <Experience />
        </div>
        <Divider />

        <div ref={educationRef}>
          <Education />
        </div>
        <Divider />

        <div ref={projectsRef}>
          <Projects />
        </div>
        <Divider />
        <div ref={skillsRef}>
          <Skills />
        </div>
        <Divider />

        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
