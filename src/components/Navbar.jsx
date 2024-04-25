import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import FadeInItem from "./FadeInItem";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to handle overflow property based on screen size
    const handleOverflow = () => {
      if (window.innerWidth <= 640) {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
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

  return (
    <>
      <div className="absolute top-0 w-full z-50">
        <nav className="px-[3%] flex justify-between items-center py-5">
          <div>
            <div className="font-black text-secondary text-[25px]">
              {"</>developer"}
            </div>
          </div>
          <div className="hidden sm:block z-50">
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
        <div className="text-[#ffffff] absolute sm:fixed px-[10%] z-40 top-0 w-screen h-screen sm:top-3 sm:right-7 sm:w-auto sm:h-auto bg-primary flex flex-col gap-3 pt-[25%] sm:pt-[4.5rem] sm:p-7 text-[1.3rem] sm:text-[1.5rem] xl:text-[1rem]">
          <FadeInItem index={1}>
            <div className="cursor-pointer inline hover:font-bold">My Work</div>
          </FadeInItem>

          <FadeInItem index={2}>
            <div className="cursor-pointer inline hover:font-bold">
              About Me
            </div>
          </FadeInItem>

          <FadeInItem index={3}>
            <div className="cursor-pointer inline hover:font-bold">Contact</div>
          </FadeInItem>

          <div className="pt-5 font-bold">LINKS</div>
          <FadeInItem index={4}>
            <div className="cursor-pointer inline hover:font-bold">
              My Resume
            </div>
          </FadeInItem>

          <div className="pt-5 font-bold">SAY HELLO</div>
          <FadeInItem index={5}>
            <div>stefanbrkic.inbox@gmail.com</div>
          </FadeInItem>

          <FadeInItem index={6}>
            <div className="flex pt-5 gap-[1.1rem]">
              <a
                href="https://www.linkedin.com/in/stefan-brkic-4014012a3/"
                target="blank"
                className="hover:scale-[1.1] transition-all cursor-pointer bg-[url('../assets/icons/linkedin.svg')] bg-contain bg-center bg-no-repeat w-[1.7rem] h-[1.7rem]"
              ></a>
              <a
                href="https://github.com/stefanbrkic1"
                target="blank"
                className="hover:scale-[1.1] transition-all cursor-pointer bg-[url('../assets/icons/github.svg')] bg-contain bg-center bg-no-repeat w-[1.7rem] h-[1.7rem]"
              ></a>
              <a
                href="https://twitter.com/stefanbrkic_"
                target="blank"
                className="hover:scale-[1.1] transition-all cursor-pointer bg-[url('../assets/icons/twitter.svg')] bg-contain bg-center bg-no-repeat w-[1.7rem] h-[1.7rem]"
              ></a>
            </div>
          </FadeInItem>
        </div>
      )}
    </>
  );
}

export default Navbar;
