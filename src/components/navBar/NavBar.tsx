import { FC, useEffect, useState } from "react";

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
    <header
      className={`sticky top-0 z-50 py-6 transition-all bg-white  ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="flex items-center justify-between w-[90%] mx-auto">
        <h1 className="text-xl font-bold text-black  duration-400">
          <p className="text-3xl">
            Sivakumar <span className=" text-primary">Jenushanth</span>
          </p>
        </h1>

        {/* Menu (Mobile and Desktop) */}
        <div
          className={`fixed top-0 transition-all duration-400 z-50 h-full w-1/2 md:w-auto md:static md:h-auto md:bg-transparent bg-darkScreen backdrop-blur-md p-6 md:p-0 ${
            showMenu ? "right-0" : "right-[-100%] md:right-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-10 md:gap-10 list-none">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`text-[1.2rem] transition-colors duration-400 ${
                    activeSection === item.id
                      ? "text-primary font-bold"
                      : "text-slate-600"
                  } hover:text-primary`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Close Icon (Mobile Only) */}
          <div
            className="absolute top-4 right-6 text-primary text-xl cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <i className="fa fa-close"></i>
          </div>
        </div>

        {/* Toggle Icon (Mobile Only) */}
        <div
          className="text-primary text-xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <i className="fa fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
