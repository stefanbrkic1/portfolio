import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import FadeInItem from "../components/FadeInItem";

import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

function LandingPage() {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <Navbar />

        <FullpageSection>
          <HeroSection />
        </FullpageSection>

        <FullpageSection>
          <SkillsSection />
        </FullpageSection>

        <FullpageSection>
          {/* About Section*/}
          <div className="h-auto min-h-[700px] lg:h-screen bg-primary flex flex-col lg:flex-row items-stretch px-[9%]">
            <div className="flex-1 text-[#ffffff] py-[9%]">
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
                    My journey into coding began while working on a software
                    project as a designer. I realized that I could devise
                    effective solutions for coding problems, even though I
                    didn&apos; t yet know how to write the code myself.
                  </p>
                </FadeInItem>
                <FadeInItem index={5} showOnce={true}>
                  <p>
                    This passion for problem-solving seamlessly translated into
                    my coding approach. Now I work on solving problems by
                    crafting interactive and engaging web experiences for users.
                  </p>
                </FadeInItem>
                <FadeInItem index={6} showOnce={true}>
                  <p>
                    When I&apos;m not coding, you can find me on a football
                    field or in a gym, lifting weights and doing martial arts.
                  </p>
                </FadeInItem>
              </div>
            </div>
            <div className="flex-[2] relative pt-[5%]">
              <div className="w-[100%] max-[414px]:min-h-[470px] min-h-[500px] h-[100%] bg-[url('../assets/img/stefan.png')] bg-contain bg-center bg-no-repeat"></div>
            </div>
          </div>
          {/* About Section END*/}
        </FullpageSection>

        <FullpageSection>
          {/* MyWork/Resume Section*/}
          <div className="h-auto sm:h-screen sm:min-h-[50rem] px-[3%] sm:px-[9%] py-[2rem] sm:py-[0px] sm:pt-[5rem] flex items-center justify-center">
            <div className="flex flex-col sm:flex-row w-full sm:h-[40rem] shadow-sm">
              <div className="flex-1 bg-[#ffffff] border-b-2 sm:border-b-0 sm:border-r-2 border-primary border-opacity-40 p-[24px] sm:p-[5rem]">
                <FadeInItem index={1} showOnce={true}>
                  <h2 className="text-[2.5rem] sm:text-[3.5em] leading-[3rem] sm:leading-[4rem] font-black text-primary max-w-[25rem]">
                    Checkout my projects
                  </h2>
                </FadeInItem>
                <FadeInItem index={3} showOnce={true}>
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
                <FadeInItem index={1} showOnce={true}>
                  <h2 className="text-[2.5rem] sm:text-[3.5em] leading-[3rem] sm:leading-[4rem] font-black text-primary max-w-[25rem]">
                    Checkout my resume
                  </h2>
                </FadeInItem>
                <FadeInItem index={3} showOnce={true}>
                  <p className="text-accent text-[1.2rem] sm:text-[1.5rem] mt-4 max-w-[23rem]">
                    Details about me like my experience, tech stack etc...
                  </p>
                </FadeInItem>
                <button className="hover:bg-primary transition-all duration-200 hover:text-[#ffffff] flex justify-center items-center gap-5 w-full sm:w-[26rem] border border-primary mt-[3rem] sm:mt-[7rem] py-[1.1rem] text-primary font-bold text-[1.1rem]">
                  DOWNLOAD
                </button>
              </div>
            </div>
          </div>
          {/* MyWork/Resume Section END*/}
        </FullpageSection>

        <FullpageSection>
          {/* Contact Section*/}
          <div className="h-screen px-[9%] flex justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col sm:justify-center sm:items-center">
                <FadeInItem index={3} showOnce={true}>
                  <h2 className="text-[2.3rem] sm:text-[3.5em] font-black text-primary leading-[2.7rem]">
                    Send me a message!
                  </h2>
                </FadeInItem>
                <FadeInItem index={4} showOnce={true}>
                  <p className="pt-5 text-accent text-[1.2rem] sm:text-[1.5rem] max-w-[28rem] sm:text-center">
                    Got a question or proposal, or just want to say hello? Go
                    ahead.
                  </p>
                </FadeInItem>
              </div>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex flex-col items-center w-full sm:w-[65rem] lg:w-[50rem] sm:text-[1.6rem] xl:text-[1.1rem]"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="8fde3a36-047a-4c9d-88a4-4cf1ab3b8268"
                ></input>
                <div className="flex flex-col sm:flex-row sm:items-center gap-10 w-full pt-[3rem] sm:pt-[5rem]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    className="bg-transparent py-3 w-full border-b border-accent focus:border-primary focus:placeholder:text-primary placeholder:text-accent focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    className="bg-transparent py-3 w-full border-b border-accent focus:border-primary focus:placeholder:text-primary placeholder:text-accent focus:outline-none"
                    placeholder="Enter your email addresss"
                    autoComplete="off"
                  />
                </div>
                <textarea
                  name="message"
                  className="w-full mt-[2.5rem] resize-none border-b border-accent p-2 bg-transparent focus:border-primary placeholder:text-accent focus:placeholder:text-primary outline-none h-[6rem]"
                  placeholder="Your message"
                ></textarea>
                <button
                  type="submit"
                  className="btn-animation group hover:text-[#ffffff] flex justify-center items-center gap-5 w-full sm:w-[26rem] border border-primary mt-[5rem] py-[1.1rem] text-primary font-bold text-[1.1rem] "
                >
                  <div>SEND</div>
                  <svg
                    viewBox="0 0 100 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-primary group-hover:fill-[#ffffff] w-[4rem]"
                  >
                    <path d="M99.7071 8.70711C100.098 8.31658 100.098 7.68342 99.7071 7.29289L93.3431 0.928932C92.9526 0.538408 92.3195 0.538408 91.9289 0.928932C91.5384 1.31946 91.5384 1.95262 91.9289 2.34315L97.5858 8L91.9289 13.6569C91.5384 14.0474 91.5384 14.6805 91.9289 15.0711C92.3195 15.4616 92.9526 15.4616 93.3431 15.0711L99.7071 8.70711ZM0 9H99V7H0V9Z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          {/* Contact Section END*/}
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

export default LandingPage;
