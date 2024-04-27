import FadeInItem from "./FadeInItem";
import PropTypes from "prop-types";

function AboutSection({ screenHeight }) {
  return (
    <div
      id="aboutSmallScreen"
      className={`h-auto bg-primary flex flex-col min-[1025px]:flex-row items-stretch px-[9%] ${
        screenHeight < 690 ? "lg:h-auto min-h-[600px]" : "lg:h-screen"
      }`}
    >
      <div
        className={`flex-1 text-[#ffffff] flex items-center ${
          screenHeight < 690 ? "py-[1rem]" : ""
        }`}
      >
        <div className="max-[640px]:pt-[3rem] max-[1025px]:pt-[6rem] max-[1025px]:pb-[3rem] min-[1025px]:max-w-[33rem]">
          <FadeInItem index={2} showOnce={true}>
            <h2 className="text-[2.5rem] sm:text-[4rem] lg:text-[3rem] text-secondary font-black">
              About me
            </h2>
          </FadeInItem>
          <div className="flex flex-col gap-7 pt-7 text-[1.1rem] sm:text-[1.9rem] md:text-[1.6rem] lg:text-[1.3rem] xl:text-[1.1rem]">
            <FadeInItem index={3} showOnce={true}>
              <p>
                Hi! I&apos;m Stefan👋, Frontend Developer based in Belgrade,
                Serbia.
              </p>
            </FadeInItem>
            <FadeInItem index={4} showOnce={true}>
              <p>
                My journey into coding began while working on a software project
                as a designer. I realized that I could devise effective
                solutions for coding problems, even though I didn&apos; t yet
                know how to write the code myself.
              </p>
            </FadeInItem>
            <FadeInItem index={5} showOnce={true}>
              <p>
                This passion for problem-solving seamlessly translated into my
                coding approach. Now I work on solving problems by crafting
                interactive and engaging web experiences for users.
              </p>
            </FadeInItem>
            <FadeInItem index={6} showOnce={true}>
              <p>
                When I&apos;m not coding, you can find me on a football field or
                in a gym, lifting weights and doing martial arts.
              </p>
            </FadeInItem>
          </div>
        </div>
      </div>
      <div className="flex-1 lg:flex-[2] lg:pt-[1%]">
        <div className="w-[100%] max-[414px]:min-h-[470px] min-h-[450px] h-[100%] bg-[url('../assets/img/stefan.png')] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

AboutSection.propTypes = {
  screenHeight: PropTypes.number,
};

export default AboutSection;
