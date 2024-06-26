import FadeInItem from "./FadeInItem";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Footer({ screenHeight, isSmallScreen }) {
  return (
    <footer
      className={`bg-accent px-[9%] py-[15%] sm:py-[9%] flex items-center justify-center ${
        screenHeight < 690 ? "h-auto" : "lg:h-screen"
      }`}
    >
      <div className="w-full">
        <FadeInItem index={1} showOnce={true}>
          <div className="text-[1.6rem] sm:text-[2rem] font-black text-secondary">
            {"</>stefanbrkic"}
          </div>

          <div className="flex flex-col sm:flex-row py-8 sm:p-[4rem] md:p-[5rem] md:py-[5rem] text-[1.1rem] sm:text-[2rem] md:text-[1.8rem] lg:text-[1.4rem] gap-[4rem] sm:gap-[12rem]">
            <div>
              <div className="sm:hidden text-[#CBC9E2]">NAVIGATION</div>
              <ul className="text-secondary flex flex-col gap-8 mt-5 sm:mt-0">
                <RouterLink to={"/projects"}>My Work</RouterLink>
                {isSmallScreen ? (
                  <>
                    <ScrollLink
                      to="aboutSmallScreen"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="cursor-pointer"
                    >
                      About Me
                    </ScrollLink>
                    <ScrollLink
                      to="contactSmallScreen"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="cursor-pointer"
                    >
                      Contact
                    </ScrollLink>
                  </>
                ) : (
                  <>
                    <a href="#ABOUT" className="cursor-pointer">
                      About Me
                    </a>
                    <a href="#CONTACT" className="cursor-pointer">
                      Contact
                    </a>
                  </>
                )}
              </ul>
            </div>

            <div>
              <div className="sm:hidden text-[#CBC9E2]">LINKS</div>
              <div className="text-secondary flex flex-col gap-8 mt-5 sm:mt-0">
                <a href="/StefanBrkic-CV.pdf" download>
                  My Resume
                </a>
                <a href="https://github.com/stefanbrkic1" target="blank">
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/stefan-brkic-4014012a3/"
                  target="blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <div className="text-[#CBC9E2]">SAY HELLO</div>
              <div className="flex flex-col gap-5 mt-5">
                <a
                  href="mailto:stefanbrkic.inbox@gmail.com"
                  className="text-secondary cursor-pointer"
                >
                  stefanbrkic.inbox@gmail.com
                </a>
                <a
                  href="https://t.me/stefanbrkic"
                  target="_blank"
                  className="text-secondary"
                >
                  t.me/stefanbrkic
                </a>
              </div>
            </div>
          </div>
        </FadeInItem>

        <FadeInItem index={2} showOnce={true}>
          <div className="h-[1px] bg-secondary mt-10"></div>
          <div className="text-secondary mt-6 text-[1rem] sm:text-[1.8rem] md:text-[1.6rem] lg:text-[1.3rem] xl:text-[1.1rem]">
            <div>@stefanbrkic1</div>
          </div>
        </FadeInItem>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  screenHeight: PropTypes.number,
  isSmallScreen: PropTypes.bool,
};

export default Footer;
