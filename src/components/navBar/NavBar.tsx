import React, { FC, useState } from "react";
import "./NavBar.scss";

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: FC<NavbarProps> = ({ scrollToSection }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (navMenu: string) => {
    scrollToSection(navMenu);
    if (window.innerWidth <= 992) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <h1 className="nav__logo">
          Sivakumar
          <span> Jenushanth</span>
        </h1>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => handleClick("home")}
                className="nav__link"
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#experience"
                onClick={() => handleClick("experience")}
                className="nav__link"
              >
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#education"
                onClick={() => handleClick("education")}
                className="nav__link"
              >
                Education
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => handleClick("projects")}
                className="nav__link"
              >
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => handleClick("skills")}
                className="nav__link"
              >
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => handleClick("contact")}
                className="nav__link"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            {/* <IoClose /> */}
            <i className="fa fa-close"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          {/* <IoMenu /> */}
          <i className="fa fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
