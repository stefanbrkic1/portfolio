import FadeInItem from "./FadeInItem";
import PropTypes from "prop-types";

function MyWorkSection({ screenHeight }) {
  return (
    <div
      className={`h-auto px-[3%] sm:px-[9%] py-[3rem] md:py-[5rem] flex items-center justify-center ${
        screenHeight < 690 ? "lg:py-[5rem]" : "lg:py-0"
      }`}
    >
      <div className="flex flex-col sm:flex-row w-full sm:h-[40rem] shadow-sm">
        <div className="flex-1 bg-[#ffffff] border-b-2 sm:border-b-0 sm:border-r-2 border-primary border-opacity-40 p-[24px] sm:p-[5rem]">
          <FadeInItem index={0} showOnce={true}>
            <h2 className="text-[2.5rem] sm:text-[3.5em] leading-[3rem] sm:leading-[4rem] font-black text-primary max-w-[25rem]">
              Checkout my projects
            </h2>
          </FadeInItem>
          <FadeInItem index={2} showOnce={true}>
            <p className="text-accent text-[1.2rem] sm:text-[1.5rem] mt-4 max-w-[23rem]">
              Open source projects, web apps and experimentals.
            </p>
          </FadeInItem>
          <button className="btn-animation group hover:text-[#ffffff] flex justify-center items-center gap-5 w-full sm:w-[26rem] border border-primary mt-[3rem] sm:mt-[7rem] py-[1.1rem] text-primary font-bold text-[1.1rem]">
            <div>SEE MY WORK</div>
            <svg
              viewBox="0 0 100 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary group-hover:fill-[#ffffff] w-[4rem]"
            >
              <path d="M99.7071 8.70711C100.098 8.31658 100.098 7.68342 99.7071 7.29289L93.3431 0.928932C92.9526 0.538408 92.3195 0.538408 91.9289 0.928932C91.5384 1.31946 91.5384 1.95262 91.9289 2.34315L97.5858 8L91.9289 13.6569C91.5384 14.0474 91.5384 14.6805 91.9289 15.0711C92.3195 15.4616 92.9526 15.4616 93.3431 15.0711L99.7071 8.70711ZM0 9H99V7H0V9Z" />
            </svg>
          </button>
        </div>
        <div className="flex-1 bg-[#ffffff] p-[24px] sm:p-[5rem]">
          <FadeInItem index={0} showOnce={true}>
            <h2 className="text-[2.5rem] sm:text-[3.5em] leading-[3rem] sm:leading-[4rem] font-black text-primary max-w-[25rem]">
              Checkout my resume
            </h2>
          </FadeInItem>
          <FadeInItem index={2} showOnce={true}>
            <p className="text-accent text-[1.2rem] sm:text-[1.5rem] mt-4 max-w-[23rem]">
              Details about me like my experience, tech stack etc...
            </p>
          </FadeInItem>
          <a
            href="/StefanBrkic-CV.pdf"
            className="hover:bg-primary transition-all duration-200 hover:text-[#ffffff] flex justify-center items-center gap-5 w-full sm:w-[26rem] border border-primary mt-[3rem] sm:mt-[7rem] py-[1.1rem] text-primary font-bold text-[1.1rem]"
            download
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  );
}

MyWorkSection.propTypes = {
  screenHeight: PropTypes.number,
};

export default MyWorkSection;
