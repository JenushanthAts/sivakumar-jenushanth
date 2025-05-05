import { FC, useEffect, useState } from "react";
import "./NavBar.scss";

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: FC<NavbarProps> = ({ scrollToSection }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (navMenu: string) => {
    scrollToSection(navMenu);
    setActiveSection(navMenu);
    if (window.innerWidth <= 992) {
      setShowMenu(false);
    }
  };
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <h1 className="logo">
          <p>
            Sivakumar
            <span> Jenushanth</span>
          </p>
        </h1>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {navItems.map((item) => (
              <li className="nav__item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`nav__link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
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
