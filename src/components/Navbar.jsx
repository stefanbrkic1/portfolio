import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import FadeInItem from "./FadeInItem";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import PropTypes from "prop-types";

function Navbar({ isSmallScreen }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to handle overflow property based on screen size
    const handleOverflow = () => {
      if (window.innerWidth <= 640) {
        isOpen
          ? document.documentElement.classList.add("overflow-hidden")
          : document.documentElement.classList.remove("overflow-hidden");
      } else {
        document.documentElement.classList.remove("overflow-hidden");
      }
    };

    // Call the function on component mount
    handleOverflow();

    // Event listener to handle changes in window size
    window.addEventListener("resize", handleOverflow);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [isOpen]); // Depend on isOpen to update the effect when menu state changes

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="absolute top-0 w-full z-50 sm:pointer-events-none">
        <nav className="px-[3%] flex justify-between items-center py-5">
          <div>
            <div className="font-black text-secondary text-[25px] pointer-events-auto">
              {"</>stefanbrkic"}
            </div>
          </div>
          <div className="hidden sm:block z-50 pointer-events-auto">
            <Hamburger
              toggled={isOpen}
              onToggle={toggleMenu}
              color={isOpen ? "white" : "#4831d4"}
            />
          </div>
          <div className="sm:hidden z-50">
            <Hamburger toggled={isOpen} onToggle={toggleMenu} color="white" />
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="text-[#ffffff] absolute px-[10%] z-40 top-0 w-screen h-screen sm:top-3 sm:right-7 sm:w-[26rem] xl:w-[22rem] sm:h-auto bg-primary flex flex-col gap-5 sm:gap-3 pt-[25%] sm:pt-[6rem] xl:pt-[4.5rem] sm:p-7 text-[1.3rem] sm:text-[1.5rem] xl:text-[1.2rem]">
          <FadeInItem index={1} showOnce={true}>
            <RouterLink
              to={"/projects"}
              className="cursor-pointer inline hover:font-bold"
            >
              My Work
            </RouterLink>
          </FadeInItem>

          <FadeInItem index={2} showOnce={true}>
            {isSmallScreen ? (
              <ScrollLink
                to="aboutSmallScreen"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer inline hover:font-bold"
                onClick={closeMenu}
              >
                About Me
              </ScrollLink>
            ) : (
              <a
                href="#ABOUT"
                className="cursor-pointer inline hover:font-bold"
                onClick={closeMenu}
              >
                About Me
              </a>
            )}
          </FadeInItem>

          <FadeInItem index={3} showOnce={true}>
            {isSmallScreen ? (
              <ScrollLink
                to="contactSmallScreen"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer inline hover:font-bold"
                onClick={closeMenu}
              >
                Contact
              </ScrollLink>
            ) : (
              <a
                href="#CONTACT"
                className="cursor-pointer inline hover:font-bold"
                onClick={closeMenu}
              >
                Contact
              </a>
            )}
          </FadeInItem>

          <div className="pt-7 sm:pt-5 font-bold">LINKS</div>
          <FadeInItem index={4} showOnce={true}>
            <a
              href="/StefanBrkic-CV.pdf"
              className="cursor-pointer inline hover:font-bold"
              download
            >
              My Resume
            </a>
          </FadeInItem>

          <div className="pt-7 sm:pt-5 font-bold">SAY HELLO</div>
          <FadeInItem index={5} showOnce={true}>
            <a
              href="mailto:stefanbrkic.inbox@gmail.com"
              className="cursor-pointer inline hover:font-bold"
            >
              stefanbrkic.inbox@gmail.com
            </a>
          </FadeInItem>

          <FadeInItem index={6} showOnce={true}>
            <div className="flex pt-5 gap-[1.5rem] sm:gap-[1.3rem]">
              <a
                href="https://www.linkedin.com/in/stefan-brkic-4014012a3/"
                target="blank"
                className="hover:scale-[1.1] transition-all cursor-pointer bg-[url('../assets/icons/linkedin.svg')] bg-contain bg-center bg-no-repeat w-[2.3rem] h-[2.3rem] sm:w-[2.5rem] sm:h-[2.5rem] xl:w-[2rem] xl:h-[2rem]"
              ></a>
              <a
                href="https://github.com/stefanbrkic1"
                target="blank"
                className="hover:scale-[1.1] transition-all cursor-pointer bg-[url('../assets/icons/github.svg')] bg-contain bg-center bg-no-repeat w-[2.3rem] h-[2.3rem] sm:w-[2.5rem] sm:h-[2.5rem] xl:w-[2rem] xl:h-[2rem]"
              ></a>
              <a
                href="https://twitter.com/stefanbrkic_"
                target="blank"
                className="hover:scale-[1.1] transition-all cursor-pointer bg-[url('../assets/icons/twitter.svg')] bg-contain bg-center bg-no-repeat w-[2.3rem] h-[2.3rem] sm:w-[2.5rem] sm:h-[2.5rem] xl:w-[2rem] xl:h-[2rem]"
              ></a>
            </div>
          </FadeInItem>
        </div>
      )}
    </>
  );
}

Navbar.propTypes = {
  isSmallScreen: PropTypes.bool,
};

export default Navbar;
