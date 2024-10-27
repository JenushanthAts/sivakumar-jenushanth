import React, { FC, useState } from "react";
import "./NavBar.scss";

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: FC<NavbarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>Sivakumar Jenushanth</h1>
      </div>
      <ul className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        <li>
          <a href="#home" onClick={() => scrollToSection("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => scrollToSection("experience")}>
            Experience
          </a>
        </li>
        <li>
          <a href="#education" onClick={() => scrollToSection("education")}>
            Education
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => scrollToSection("projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => scrollToSection("skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__toggle-bar"></span>
        <span className="navbar__toggle-bar"></span>
        <span className="navbar__toggle-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
