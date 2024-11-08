import React, { FC, useState } from "react";
import "./NavBar.scss";

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: FC<NavbarProps> = ({ scrollToSection }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // return (
  //   <nav className="navbar">
  //     <div className="navbar__logo">
  //       <h1>Sivakumar Jenushanth</h1>
  //     </div>
  //     <div className="desktopMenu">
  //       <a
  //         href="#home"
  //         onClick={() => scrollToSection("home")}
  //         className="desktopMenuListItem"
  //       >
  //         Home
  //       </a>
  //       <a
  //         href="#experience"
  //         onClick={() => scrollToSection("experience")}
  //         className="desktopMenuListItem"
  //       >
  //         Experience
  //       </a>
  //       <a
  //         href="#education"
  //         onClick={() => scrollToSection("education")}
  //         className="desktopMenuListItem"
  //       >
  //         Education
  //       </a>
  //       <a
  //         href="#services"
  //         onClick={() => scrollToSection("projects")}
  //         className="desktopMenuListItem"
  //       >
  //         Projects
  //       </a>
  //       <a
  //         href="#skills"
  //         onClick={() => scrollToSection("skills")}
  //         className="desktopMenuListItem"
  //       >
  //         Skills
  //       </a>
  //       <a
  //         href="#contact"
  //         onClick={() => scrollToSection("contact")}
  //         className="desktopMenuListItem"
  //       >
  //         Contact
  //       </a>
  //     </div>
  //     <div className="navbar__toggle" onClick={toggleMenu}>
  //       <span className="navbar__toggle-bar"></span>
  //       <span className="navbar__toggle-bar"></span>
  //       <span className="navbar__toggle-bar"></span>
  //     </div>
  //   </nav>
  // );

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (navMenu: string) => {
    scrollToSection(navMenu);
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <h1 className="nav__logo">Sivakumar Jenushanth</h1>

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
