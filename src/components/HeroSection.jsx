import FadeInItem from "./FadeInItem";

function HeroSection() {
  return (
    <div>
      <div className="relative flex flex-col items-center sm:block sm:pb-[3.6em] h-[880px] sm:h-auto sm:max-h-[100vh] pl-[3%] pr-[3%] sm:pl-[9%] sm:pr-[0px] background-0deg sm:background-90deg pt-[24%] sm:pt-[16rem] max-[360px]:text-[33px] min-[400px]:text-[36px] text-[34px] sm:text-[4em] font-black text-[white]">
        <FadeInItem index={1} showOnce={true}>
          <h1 className="text-secondary leading-10">Hi I&apos;m Stefan</h1>
        </FadeInItem>
        <FadeInItem index={2} showOnce={true}>
          <h1>Frontend Developer.</h1>
        </FadeInItem>
        <FadeInItem index={3} showOnce={true}>
          <p className="text-center sm:text-start text-[15px] sm:text-[1.6rem] xl:text-[1.3rem] 2xl:text-[19px] font-medium sm:max-w-[40rem] mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            dicta accusantium amet enim.
          </p>
        </FadeInItem>
        <FadeInItem index={4} showOnce={true}>
          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://www.linkedin.com/in/stefan-brkic-4014012a3/"
              target="blank"
              className="hover:scale-[1.1] transition-all cursor-pointer bg-[url('../assets/icons/linkedin.svg')] bg-contain bg-center bg-no-repeat w-[2rem] h-[2rem]"
            ></a>
            <a
              href="https://github.com/stefanbrkic1"
              target="blank"
              className="hover:scale-[1.1] transition-all cursor-pointer bg-[url('../assets/icons/github.svg')] bg-contain bg-center bg-no-repeat w-[2rem] h-[2rem]"
            ></a>
            <a
              href="https://www.linkedin.com/in/stefan-brkic-4014012a3/"
              target="blank"
              className="hover:scale-[1.1] transition-all cursor-pointer bg-[url('../assets/icons/twitter.svg')] bg-contain bg-center bg-no-repeat w-[2rem] h-[2rem]"
            ></a>
          </div>
        </FadeInItem>

        <div className="relative sm:absolute w-[80%] h-[45%] sm:w-[26rem] sm:h-[26rem] top-[20%] sm:top-[22%] bg-background sm:right-[5em] min-[1850px]:right-[6em] min-[2030px]:right-[7em] min-[2250px]:right-[8em] min-[2450px]:right-[9em] min-[2650px]:right-[10em] min-[2850px]:right-[11em] min-[3000px]:right-[13em] flex justify-center items-center">
          <div className="w-[100%] h-[100%] bg-[url('../assets/img/stefan.png')] bg-contain bg-center bg-no-repeat bg-background z-20"></div>
          <div className="hidden sm:block sm:absolute border-[2px] border-white  w-full h-full top-[30px] right-[-30px] z-10"></div>
          <svg
            viewBox="0 0 134 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-3rem] left-[-4rem] w-[12rem] max-w-[150px]"
          >
            <circle cx="1" cy="1" r="1" fill="#CCF381" />
            <circle cx="12" cy="1" r="1" fill="#CCF381" />
            <circle cx="23" cy="1" r="1" fill="#CCF381" />
            <circle cx="34" cy="1" r="1" fill="#CCF381" />
            <circle cx="45" cy="1" r="1" fill="#CCF381" />
            <circle cx="56" cy="1" r="1" fill="#CCF381" />
            <circle cx="67" cy="1" r="1" fill="#CCF381" />
            <circle cx="78" cy="1" r="1" fill="#CCF381" />
            <circle cx="89" cy="1" r="1" fill="#CCF381" />
            <circle cx="100" cy="1" r="1" fill="#CCF381" />
            <circle cx="111" cy="1" r="1" fill="#CCF381" />
            <circle cx="122" cy="1" r="1" fill="#CCF381" />
            <circle cx="133" cy="1" r="1" fill="#CCF381" />
            <circle cx="1" cy="12" r="1" fill="#CCF381" />
            <circle cx="12" cy="12" r="1" fill="#CCF381" />
            <circle cx="23" cy="12" r="1" fill="#CCF381" />
            <circle cx="34" cy="12" r="1" fill="#CCF381" />
            <circle cx="45" cy="12" r="1" fill="#CCF381" />
            <circle cx="56" cy="12" r="1" fill="#CCF381" />
            <circle cx="67" cy="12" r="1" fill="#CCF381" />
            <circle cx="78" cy="12" r="1" fill="#CCF381" />
            <circle cx="89" cy="12" r="1" fill="#CCF381" />
            <circle cx="100" cy="12" r="1" fill="#CCF381" />
            <circle cx="111" cy="12" r="1" fill="#CCF381" />
            <circle cx="122" cy="12" r="1" fill="#CCF381" />
            <circle cx="133" cy="12" r="1" fill="#CCF381" />
            <circle cx="1" cy="23" r="1" fill="#CCF381" />
            <circle cx="12" cy="23" r="1" fill="#CCF381" />
            <circle cx="23" cy="23" r="1" fill="#CCF381" />
            <circle cx="34" cy="23" r="1" fill="#CCF381" />
            <circle cx="45" cy="23" r="1" fill="#CCF381" />
            <circle cx="56" cy="23" r="1" fill="#CCF381" />
            <circle cx="67" cy="23" r="1" fill="#CCF381" />
            <circle cx="78" cy="23" r="1" fill="#CCF381" />
            <circle cx="89" cy="23" r="1" fill="#CCF381" />
            <circle cx="100" cy="23" r="1" fill="#CCF381" />
            <circle cx="111" cy="23" r="1" fill="#CCF381" />
            <circle cx="122" cy="23" r="1" fill="#CCF381" />
            <circle cx="133" cy="23" r="1" fill="#CCF381" />
            <circle cx="1" cy="34" r="1" fill="#CCF381" />
            <circle cx="12" cy="34" r="1" fill="#CCF381" />
            <circle cx="23" cy="34" r="1" fill="#CCF381" />
            <circle cx="34" cy="34" r="1" fill="#CCF381" />
            <circle cx="45" cy="34" r="1" fill="#CCF381" />
            <circle cx="56" cy="34" r="1" fill="#CCF381" />
            <circle cx="67" cy="34" r="1" fill="#CCF381" />
            <circle cx="78" cy="34" r="1" fill="#CCF381" />
            <circle cx="89" cy="34" r="1" fill="#CCF381" />
            <circle cx="100" cy="34" r="1" fill="#CCF381" />
            <circle cx="111" cy="34" r="1" fill="#CCF381" />
            <circle cx="122" cy="34" r="1" fill="#CCF381" />
            <circle cx="133" cy="34" r="1" fill="#CCF381" />
            <circle cx="1" cy="45" r="1" fill="#CCF381" />
            <circle cx="12" cy="45" r="1" fill="#CCF381" />
            <circle cx="23" cy="45" r="1" fill="#CCF381" />
            <circle cx="34" cy="45" r="1" fill="#CCF381" />
            <circle cx="45" cy="45" r="1" fill="#CCF381" />
            <circle cx="56" cy="45" r="1" fill="#CCF381" />
            <circle cx="67" cy="45" r="1" fill="#CCF381" />
            <circle cx="78" cy="45" r="1" fill="#CCF381" />
            <circle cx="89" cy="45" r="1" fill="#CCF381" />
            <circle cx="100" cy="45" r="1" fill="#CCF381" />
            <circle cx="111" cy="45" r="1" fill="#CCF381" />
            <circle cx="122" cy="45" r="1" fill="#CCF381" />
            <circle cx="133" cy="45" r="1" fill="#CCF381" />
            <circle cx="1" cy="56" r="1" fill="#CCF381" />
            <circle cx="12" cy="56" r="1" fill="#CCF381" />
            <circle cx="23" cy="56" r="1" fill="#CCF381" />
            <circle cx="34" cy="56" r="1" fill="#CCF381" />
            <circle cx="45" cy="56" r="1" fill="#CCF381" />
            <circle cx="56" cy="56" r="1" fill="#CCF381" />
            <circle cx="67" cy="56" r="1" fill="#CCF381" />
            <circle cx="78" cy="56" r="1" fill="#CCF381" />
            <circle cx="89" cy="56" r="1" fill="#CCF381" />
            <circle cx="100" cy="56" r="1" fill="#CCF381" />
            <circle cx="111" cy="56" r="1" fill="#CCF381" />
            <circle cx="122" cy="56" r="1" fill="#CCF381" />
            <circle cx="133" cy="56" r="1" fill="#CCF381" />
            <circle cx="1" cy="67" r="1" fill="#CCF381" />
            <circle cx="12" cy="67" r="1" fill="#CCF381" />
            <circle cx="23" cy="67" r="1" fill="#CCF381" />
            <circle cx="34" cy="67" r="1" fill="#CCF381" />
            <circle cx="45" cy="67" r="1" fill="#CCF381" />
            <circle cx="56" cy="67" r="1" fill="#CCF381" />
            <circle cx="67" cy="67" r="1" fill="#CCF381" />
            <circle cx="78" cy="67" r="1" fill="#CCF381" />
            <circle cx="89" cy="67" r="1" fill="#CCF381" />
            <circle cx="100" cy="67" r="1" fill="#CCF381" />
            <circle cx="111" cy="67" r="1" fill="#CCF381" />
            <circle cx="122" cy="67" r="1" fill="#CCF381" />
            <circle cx="133" cy="67" r="1" fill="#CCF381" />
            <circle cx="1" cy="78" r="1" fill="#CCF381" />
            <circle cx="12" cy="78" r="1" fill="#CCF381" />
            <circle cx="23" cy="78" r="1" fill="#CCF381" />
            <circle cx="34" cy="78" r="1" fill="#CCF381" />
            <circle cx="45" cy="78" r="1" fill="#CCF381" />
            <circle cx="56" cy="78" r="1" fill="#CCF381" />
            <circle cx="67" cy="78" r="1" fill="#CCF381" />
            <circle cx="78" cy="78" r="1" fill="#CCF381" />
            <circle cx="89" cy="78" r="1" fill="#CCF381" />
            <circle cx="100" cy="78" r="1" fill="#CCF381" />
            <circle cx="111" cy="78" r="1" fill="#CCF381" />
            <circle cx="122" cy="78" r="1" fill="#CCF381" />
            <circle cx="133" cy="78" r="1" fill="#CCF381" />
            <circle cx="1" cy="89" r="1" fill="#CCF381" />
            <circle cx="12" cy="89" r="1" fill="#CCF381" />
            <circle cx="23" cy="89" r="1" fill="#CCF381" />
            <circle cx="34" cy="89" r="1" fill="#CCF381" />
            <circle cx="45" cy="89" r="1" fill="#CCF381" />
            <circle cx="56" cy="89" r="1" fill="#CCF381" />
            <circle cx="67" cy="89" r="1" fill="#CCF381" />
            <circle cx="78" cy="89" r="1" fill="#CCF381" />
            <circle cx="89" cy="89" r="1" fill="#CCF381" />
            <circle cx="100" cy="89" r="1" fill="#CCF381" />
            <circle cx="111" cy="89" r="1" fill="#CCF381" />
            <circle cx="122" cy="89" r="1" fill="#CCF381" />
            <circle cx="133" cy="89" r="1" fill="#CCF381" />
            <circle cx="1" cy="100" r="1" fill="#CCF381" />
            <circle cx="12" cy="100" r="1" fill="#CCF381" />
            <circle cx="23" cy="100" r="1" fill="#CCF381" />
            <circle cx="34" cy="100" r="1" fill="#CCF381" />
            <circle cx="45" cy="100" r="1" fill="#CCF381" />
            <circle cx="56" cy="100" r="1" fill="#CCF381" />
            <circle cx="67" cy="100" r="1" fill="#CCF381" />
            <circle cx="78" cy="100" r="1" fill="#CCF381" />
            <circle cx="89" cy="100" r="1" fill="#CCF381" />
            <circle cx="100" cy="100" r="1" fill="#CCF381" />
            <circle cx="111" cy="100" r="1" fill="#CCF381" />
            <circle cx="122" cy="100" r="1" fill="#CCF381" />
            <circle cx="133" cy="100" r="1" fill="#CCF381" />
            <circle cx="1" cy="111" r="1" fill="#CCF381" />
            <circle cx="12" cy="111" r="1" fill="#CCF381" />
            <circle cx="23" cy="111" r="1" fill="#CCF381" />
            <circle cx="34" cy="111" r="1" fill="#CCF381" />
            <circle cx="45" cy="111" r="1" fill="#CCF381" />
            <circle cx="56" cy="111" r="1" fill="#CCF381" />
            <circle cx="67" cy="111" r="1" fill="#CCF381" />
            <circle cx="78" cy="111" r="1" fill="#CCF381" />
            <circle cx="89" cy="111" r="1" fill="#CCF381" />
            <circle cx="100" cy="111" r="1" fill="#CCF381" />
            <circle cx="111" cy="111" r="1" fill="#CCF381" />
            <circle cx="122" cy="111" r="1" fill="#CCF381" />
            <circle cx="133" cy="111" r="1" fill="#CCF381" />
            <circle cx="1" cy="122" r="1" fill="#CCF381" />
            <circle cx="12" cy="122" r="1" fill="#CCF381" />
            <circle cx="23" cy="122" r="1" fill="#CCF381" />
            <circle cx="34" cy="122" r="1" fill="#CCF381" />
            <circle cx="45" cy="122" r="1" fill="#CCF381" />
            <circle cx="56" cy="122" r="1" fill="#CCF381" />
            <circle cx="67" cy="122" r="1" fill="#CCF381" />
            <circle cx="78" cy="122" r="1" fill="#CCF381" />
            <circle cx="89" cy="122" r="1" fill="#CCF381" />
            <circle cx="100" cy="122" r="1" fill="#CCF381" />
            <circle cx="111" cy="122" r="1" fill="#CCF381" />
            <circle cx="122" cy="122" r="1" fill="#CCF381" />
            <circle cx="133" cy="122" r="1" fill="#CCF381" />
          </svg>
          <svg
            viewBox="0 0 134 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[-1rem] right-[-1rem] sm:bottom-[-50px] sm:right-[-5rem] w-[12rem] max-w-[150px]"
          >
            <circle cx="1" cy="1" r="1" fill="#4831D4" />
            <circle cx="12" cy="1" r="1" fill="#4831D4" />
            <circle cx="23" cy="1" r="1" fill="#4831D4" />
            <circle cx="34" cy="1" r="1" fill="#4831D4" />
            <circle cx="45" cy="1" r="1" fill="#4831D4" />
            <circle cx="56" cy="1" r="1" fill="#4831D4" />
            <circle cx="67" cy="1" r="1" fill="#4831D4" />
            <circle cx="78" cy="1" r="1" fill="#4831D4" />
            <circle cx="89" cy="1" r="1" fill="#4831D4" />
            <circle cx="100" cy="1" r="1" fill="#4831D4" />
            <circle cx="111" cy="1" r="1" fill="#4831D4" />
            <circle cx="122" cy="1" r="1" fill="#4831D4" />
            <circle cx="133" cy="1" r="1" fill="#4831D4" />
            <circle cx="1" cy="12" r="1" fill="#4831D4" />
            <circle cx="12" cy="12" r="1" fill="#4831D4" />
            <circle cx="23" cy="12" r="1" fill="#4831D4" />
            <circle cx="34" cy="12" r="1" fill="#4831D4" />
            <circle cx="45" cy="12" r="1" fill="#4831D4" />
            <circle cx="56" cy="12" r="1" fill="#4831D4" />
            <circle cx="67" cy="12" r="1" fill="#4831D4" />
            <circle cx="78" cy="12" r="1" fill="#4831D4" />
            <circle cx="89" cy="12" r="1" fill="#4831D4" />
            <circle cx="100" cy="12" r="1" fill="#4831D4" />
            <circle cx="111" cy="12" r="1" fill="#4831D4" />
            <circle cx="122" cy="12" r="1" fill="#4831D4" />
            <circle cx="133" cy="12" r="1" fill="#4831D4" />
            <circle cx="1" cy="23" r="1" fill="#4831D4" />
            <circle cx="12" cy="23" r="1" fill="#4831D4" />
            <circle cx="23" cy="23" r="1" fill="#4831D4" />
            <circle cx="34" cy="23" r="1" fill="#4831D4" />
            <circle cx="45" cy="23" r="1" fill="#4831D4" />
            <circle cx="56" cy="23" r="1" fill="#4831D4" />
            <circle cx="67" cy="23" r="1" fill="#4831D4" />
            <circle cx="78" cy="23" r="1" fill="#4831D4" />
            <circle cx="89" cy="23" r="1" fill="#4831D4" />
            <circle cx="100" cy="23" r="1" fill="#4831D4" />
            <circle cx="111" cy="23" r="1" fill="#4831D4" />
            <circle cx="122" cy="23" r="1" fill="#4831D4" />
            <circle cx="133" cy="23" r="1" fill="#4831D4" />
            <circle cx="1" cy="34" r="1" fill="#4831D4" />
            <circle cx="12" cy="34" r="1" fill="#4831D4" />
            <circle cx="23" cy="34" r="1" fill="#4831D4" />
            <circle cx="34" cy="34" r="1" fill="#4831D4" />
            <circle cx="45" cy="34" r="1" fill="#4831D4" />
            <circle cx="56" cy="34" r="1" fill="#4831D4" />
            <circle cx="67" cy="34" r="1" fill="#4831D4" />
            <circle cx="78" cy="34" r="1" fill="#4831D4" />
            <circle cx="89" cy="34" r="1" fill="#4831D4" />
            <circle cx="100" cy="34" r="1" fill="#4831D4" />
            <circle cx="111" cy="34" r="1" fill="#4831D4" />
            <circle cx="122" cy="34" r="1" fill="#4831D4" />
            <circle cx="133" cy="34" r="1" fill="#4831D4" />
            <circle cx="1" cy="45" r="1" fill="#4831D4" />
            <circle cx="12" cy="45" r="1" fill="#4831D4" />
            <circle cx="23" cy="45" r="1" fill="#4831D4" />
            <circle cx="34" cy="45" r="1" fill="#4831D4" />
            <circle cx="45" cy="45" r="1" fill="#4831D4" />
            <circle cx="56" cy="45" r="1" fill="#4831D4" />
            <circle cx="67" cy="45" r="1" fill="#4831D4" />
            <circle cx="78" cy="45" r="1" fill="#4831D4" />
            <circle cx="89" cy="45" r="1" fill="#4831D4" />
            <circle cx="100" cy="45" r="1" fill="#4831D4" />
            <circle cx="111" cy="45" r="1" fill="#4831D4" />
            <circle cx="122" cy="45" r="1" fill="#4831D4" />
            <circle cx="133" cy="45" r="1" fill="#4831D4" />
            <circle cx="1" cy="56" r="1" fill="#4831D4" />
            <circle cx="12" cy="56" r="1" fill="#4831D4" />
            <circle cx="23" cy="56" r="1" fill="#4831D4" />
            <circle cx="34" cy="56" r="1" fill="#4831D4" />
            <circle cx="45" cy="56" r="1" fill="#4831D4" />
            <circle cx="56" cy="56" r="1" fill="#4831D4" />
            <circle cx="67" cy="56" r="1" fill="#4831D4" />
            <circle cx="78" cy="56" r="1" fill="#4831D4" />
            <circle cx="89" cy="56" r="1" fill="#4831D4" />
            <circle cx="100" cy="56" r="1" fill="#4831D4" />
            <circle cx="111" cy="56" r="1" fill="#4831D4" />
            <circle cx="122" cy="56" r="1" fill="#4831D4" />
            <circle cx="133" cy="56" r="1" fill="#4831D4" />
            <circle cx="1" cy="67" r="1" fill="#4831D4" />
            <circle cx="12" cy="67" r="1" fill="#4831D4" />
            <circle cx="23" cy="67" r="1" fill="#4831D4" />
            <circle cx="34" cy="67" r="1" fill="#4831D4" />
            <circle cx="45" cy="67" r="1" fill="#4831D4" />
            <circle cx="56" cy="67" r="1" fill="#4831D4" />
            <circle cx="67" cy="67" r="1" fill="#4831D4" />
            <circle cx="78" cy="67" r="1" fill="#4831D4" />
            <circle cx="89" cy="67" r="1" fill="#4831D4" />
            <circle cx="100" cy="67" r="1" fill="#4831D4" />
            <circle cx="111" cy="67" r="1" fill="#4831D4" />
            <circle cx="122" cy="67" r="1" fill="#4831D4" />
            <circle cx="133" cy="67" r="1" fill="#4831D4" />
            <circle cx="1" cy="78" r="1" fill="#4831D4" />
            <circle cx="12" cy="78" r="1" fill="#4831D4" />
            <circle cx="23" cy="78" r="1" fill="#4831D4" />
            <circle cx="34" cy="78" r="1" fill="#4831D4" />
            <circle cx="45" cy="78" r="1" fill="#4831D4" />
            <circle cx="56" cy="78" r="1" fill="#4831D4" />
            <circle cx="67" cy="78" r="1" fill="#4831D4" />
            <circle cx="78" cy="78" r="1" fill="#4831D4" />
            <circle cx="89" cy="78" r="1" fill="#4831D4" />
            <circle cx="100" cy="78" r="1" fill="#4831D4" />
            <circle cx="111" cy="78" r="1" fill="#4831D4" />
            <circle cx="122" cy="78" r="1" fill="#4831D4" />
            <circle cx="133" cy="78" r="1" fill="#4831D4" />
            <circle cx="1" cy="89" r="1" fill="#4831D4" />
            <circle cx="12" cy="89" r="1" fill="#4831D4" />
            <circle cx="23" cy="89" r="1" fill="#4831D4" />
            <circle cx="34" cy="89" r="1" fill="#4831D4" />
            <circle cx="45" cy="89" r="1" fill="#4831D4" />
            <circle cx="56" cy="89" r="1" fill="#4831D4" />
            <circle cx="67" cy="89" r="1" fill="#4831D4" />
            <circle cx="78" cy="89" r="1" fill="#4831D4" />
            <circle cx="89" cy="89" r="1" fill="#4831D4" />
            <circle cx="100" cy="89" r="1" fill="#4831D4" />
            <circle cx="111" cy="89" r="1" fill="#4831D4" />
            <circle cx="122" cy="89" r="1" fill="#4831D4" />
            <circle cx="133" cy="89" r="1" fill="#4831D4" />
            <circle cx="1" cy="100" r="1" fill="#4831D4" />
            <circle cx="12" cy="100" r="1" fill="#4831D4" />
            <circle cx="23" cy="100" r="1" fill="#4831D4" />
            <circle cx="34" cy="100" r="1" fill="#4831D4" />
            <circle cx="45" cy="100" r="1" fill="#4831D4" />
            <circle cx="56" cy="100" r="1" fill="#4831D4" />
            <circle cx="67" cy="100" r="1" fill="#4831D4" />
            <circle cx="78" cy="100" r="1" fill="#4831D4" />
            <circle cx="89" cy="100" r="1" fill="#4831D4" />
            <circle cx="100" cy="100" r="1" fill="#4831D4" />
            <circle cx="111" cy="100" r="1" fill="#4831D4" />
            <circle cx="122" cy="100" r="1" fill="#4831D4" />
            <circle cx="133" cy="100" r="1" fill="#4831D4" />
            <circle cx="1" cy="111" r="1" fill="#4831D4" />
            <circle cx="12" cy="111" r="1" fill="#4831D4" />
            <circle cx="23" cy="111" r="1" fill="#4831D4" />
            <circle cx="34" cy="111" r="1" fill="#4831D4" />
            <circle cx="45" cy="111" r="1" fill="#4831D4" />
            <circle cx="56" cy="111" r="1" fill="#4831D4" />
            <circle cx="67" cy="111" r="1" fill="#4831D4" />
            <circle cx="78" cy="111" r="1" fill="#4831D4" />
            <circle cx="89" cy="111" r="1" fill="#4831D4" />
            <circle cx="100" cy="111" r="1" fill="#4831D4" />
            <circle cx="111" cy="111" r="1" fill="#4831D4" />
            <circle cx="122" cy="111" r="1" fill="#4831D4" />
            <circle cx="133" cy="111" r="1" fill="#4831D4" />
            <circle cx="1" cy="122" r="1" fill="#4831D4" />
            <circle cx="12" cy="122" r="1" fill="#4831D4" />
            <circle cx="23" cy="122" r="1" fill="#4831D4" />
            <circle cx="34" cy="122" r="1" fill="#4831D4" />
            <circle cx="45" cy="122" r="1" fill="#4831D4" />
            <circle cx="56" cy="122" r="1" fill="#4831D4" />
            <circle cx="67" cy="122" r="1" fill="#4831D4" />
            <circle cx="78" cy="122" r="1" fill="#4831D4" />
            <circle cx="89" cy="122" r="1" fill="#4831D4" />
            <circle cx="100" cy="122" r="1" fill="#4831D4" />
            <circle cx="111" cy="122" r="1" fill="#4831D4" />
            <circle cx="122" cy="122" r="1" fill="#4831D4" />
            <circle cx="133" cy="122" r="1" fill="#4831D4" />
          </svg>
          <svg
            viewBox="0 0 134 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-1rem] left-[-1rem] w-[12rem] max-w-[150px] sm:hidden"
          >
            <circle cx="1" cy="1" r="1" fill="#4831D4" />
            <circle cx="12" cy="1" r="1" fill="#4831D4" />
            <circle cx="23" cy="1" r="1" fill="#4831D4" />
            <circle cx="34" cy="1" r="1" fill="#4831D4" />
            <circle cx="45" cy="1" r="1" fill="#4831D4" />
            <circle cx="56" cy="1" r="1" fill="#4831D4" />
            <circle cx="67" cy="1" r="1" fill="#4831D4" />
            <circle cx="78" cy="1" r="1" fill="#4831D4" />
            <circle cx="89" cy="1" r="1" fill="#4831D4" />
            <circle cx="100" cy="1" r="1" fill="#4831D4" />
            <circle cx="111" cy="1" r="1" fill="#4831D4" />
            <circle cx="122" cy="1" r="1" fill="#4831D4" />
            <circle cx="133" cy="1" r="1" fill="#4831D4" />
            <circle cx="1" cy="12" r="1" fill="#4831D4" />
            <circle cx="12" cy="12" r="1" fill="#4831D4" />
            <circle cx="23" cy="12" r="1" fill="#4831D4" />
            <circle cx="34" cy="12" r="1" fill="#4831D4" />
            <circle cx="45" cy="12" r="1" fill="#4831D4" />
            <circle cx="56" cy="12" r="1" fill="#4831D4" />
            <circle cx="67" cy="12" r="1" fill="#4831D4" />
            <circle cx="78" cy="12" r="1" fill="#4831D4" />
            <circle cx="89" cy="12" r="1" fill="#4831D4" />
            <circle cx="100" cy="12" r="1" fill="#4831D4" />
            <circle cx="111" cy="12" r="1" fill="#4831D4" />
            <circle cx="122" cy="12" r="1" fill="#4831D4" />
            <circle cx="133" cy="12" r="1" fill="#4831D4" />
            <circle cx="1" cy="23" r="1" fill="#4831D4" />
            <circle cx="12" cy="23" r="1" fill="#4831D4" />
            <circle cx="23" cy="23" r="1" fill="#4831D4" />
            <circle cx="34" cy="23" r="1" fill="#4831D4" />
            <circle cx="45" cy="23" r="1" fill="#4831D4" />
            <circle cx="56" cy="23" r="1" fill="#4831D4" />
            <circle cx="67" cy="23" r="1" fill="#4831D4" />
            <circle cx="78" cy="23" r="1" fill="#4831D4" />
            <circle cx="89" cy="23" r="1" fill="#4831D4" />
            <circle cx="100" cy="23" r="1" fill="#4831D4" />
            <circle cx="111" cy="23" r="1" fill="#4831D4" />
            <circle cx="122" cy="23" r="1" fill="#4831D4" />
            <circle cx="133" cy="23" r="1" fill="#4831D4" />
            <circle cx="1" cy="34" r="1" fill="#4831D4" />
            <circle cx="12" cy="34" r="1" fill="#4831D4" />
            <circle cx="23" cy="34" r="1" fill="#4831D4" />
            <circle cx="34" cy="34" r="1" fill="#4831D4" />
            <circle cx="45" cy="34" r="1" fill="#4831D4" />
            <circle cx="56" cy="34" r="1" fill="#4831D4" />
            <circle cx="67" cy="34" r="1" fill="#4831D4" />
            <circle cx="78" cy="34" r="1" fill="#4831D4" />
            <circle cx="89" cy="34" r="1" fill="#4831D4" />
            <circle cx="100" cy="34" r="1" fill="#4831D4" />
            <circle cx="111" cy="34" r="1" fill="#4831D4" />
            <circle cx="122" cy="34" r="1" fill="#4831D4" />
            <circle cx="133" cy="34" r="1" fill="#4831D4" />
            <circle cx="1" cy="45" r="1" fill="#4831D4" />
            <circle cx="12" cy="45" r="1" fill="#4831D4" />
            <circle cx="23" cy="45" r="1" fill="#4831D4" />
            <circle cx="34" cy="45" r="1" fill="#4831D4" />
            <circle cx="45" cy="45" r="1" fill="#4831D4" />
            <circle cx="56" cy="45" r="1" fill="#4831D4" />
            <circle cx="67" cy="45" r="1" fill="#4831D4" />
            <circle cx="78" cy="45" r="1" fill="#4831D4" />
            <circle cx="89" cy="45" r="1" fill="#4831D4" />
            <circle cx="100" cy="45" r="1" fill="#4831D4" />
            <circle cx="111" cy="45" r="1" fill="#4831D4" />
            <circle cx="122" cy="45" r="1" fill="#4831D4" />
            <circle cx="133" cy="45" r="1" fill="#4831D4" />
            <circle cx="1" cy="56" r="1" fill="#4831D4" />
            <circle cx="12" cy="56" r="1" fill="#4831D4" />
            <circle cx="23" cy="56" r="1" fill="#4831D4" />
            <circle cx="34" cy="56" r="1" fill="#4831D4" />
            <circle cx="45" cy="56" r="1" fill="#4831D4" />
            <circle cx="56" cy="56" r="1" fill="#4831D4" />
            <circle cx="67" cy="56" r="1" fill="#4831D4" />
            <circle cx="78" cy="56" r="1" fill="#4831D4" />
            <circle cx="89" cy="56" r="1" fill="#4831D4" />
            <circle cx="100" cy="56" r="1" fill="#4831D4" />
            <circle cx="111" cy="56" r="1" fill="#4831D4" />
            <circle cx="122" cy="56" r="1" fill="#4831D4" />
            <circle cx="133" cy="56" r="1" fill="#4831D4" />
            <circle cx="1" cy="67" r="1" fill="#4831D4" />
            <circle cx="12" cy="67" r="1" fill="#4831D4" />
            <circle cx="23" cy="67" r="1" fill="#4831D4" />
            <circle cx="34" cy="67" r="1" fill="#4831D4" />
            <circle cx="45" cy="67" r="1" fill="#4831D4" />
            <circle cx="56" cy="67" r="1" fill="#4831D4" />
            <circle cx="67" cy="67" r="1" fill="#4831D4" />
            <circle cx="78" cy="67" r="1" fill="#4831D4" />
            <circle cx="89" cy="67" r="1" fill="#4831D4" />
            <circle cx="100" cy="67" r="1" fill="#4831D4" />
            <circle cx="111" cy="67" r="1" fill="#4831D4" />
            <circle cx="122" cy="67" r="1" fill="#4831D4" />
            <circle cx="133" cy="67" r="1" fill="#4831D4" />
            <circle cx="1" cy="78" r="1" fill="#4831D4" />
            <circle cx="12" cy="78" r="1" fill="#4831D4" />
            <circle cx="23" cy="78" r="1" fill="#4831D4" />
            <circle cx="34" cy="78" r="1" fill="#4831D4" />
            <circle cx="45" cy="78" r="1" fill="#4831D4" />
            <circle cx="56" cy="78" r="1" fill="#4831D4" />
            <circle cx="67" cy="78" r="1" fill="#4831D4" />
            <circle cx="78" cy="78" r="1" fill="#4831D4" />
            <circle cx="89" cy="78" r="1" fill="#4831D4" />
            <circle cx="100" cy="78" r="1" fill="#4831D4" />
            <circle cx="111" cy="78" r="1" fill="#4831D4" />
            <circle cx="122" cy="78" r="1" fill="#4831D4" />
            <circle cx="133" cy="78" r="1" fill="#4831D4" />
            <circle cx="1" cy="89" r="1" fill="#4831D4" />
            <circle cx="12" cy="89" r="1" fill="#4831D4" />
            <circle cx="23" cy="89" r="1" fill="#4831D4" />
            <circle cx="34" cy="89" r="1" fill="#4831D4" />
            <circle cx="45" cy="89" r="1" fill="#4831D4" />
            <circle cx="56" cy="89" r="1" fill="#4831D4" />
            <circle cx="67" cy="89" r="1" fill="#4831D4" />
            <circle cx="78" cy="89" r="1" fill="#4831D4" />
            <circle cx="89" cy="89" r="1" fill="#4831D4" />
            <circle cx="100" cy="89" r="1" fill="#4831D4" />
            <circle cx="111" cy="89" r="1" fill="#4831D4" />
            <circle cx="122" cy="89" r="1" fill="#4831D4" />
            <circle cx="133" cy="89" r="1" fill="#4831D4" />
            <circle cx="1" cy="100" r="1" fill="#4831D4" />
            <circle cx="12" cy="100" r="1" fill="#4831D4" />
            <circle cx="23" cy="100" r="1" fill="#4831D4" />
            <circle cx="34" cy="100" r="1" fill="#4831D4" />
            <circle cx="45" cy="100" r="1" fill="#4831D4" />
            <circle cx="56" cy="100" r="1" fill="#4831D4" />
            <circle cx="67" cy="100" r="1" fill="#4831D4" />
            <circle cx="78" cy="100" r="1" fill="#4831D4" />
            <circle cx="89" cy="100" r="1" fill="#4831D4" />
            <circle cx="100" cy="100" r="1" fill="#4831D4" />
            <circle cx="111" cy="100" r="1" fill="#4831D4" />
            <circle cx="122" cy="100" r="1" fill="#4831D4" />
            <circle cx="133" cy="100" r="1" fill="#4831D4" />
            <circle cx="1" cy="111" r="1" fill="#4831D4" />
            <circle cx="12" cy="111" r="1" fill="#4831D4" />
            <circle cx="23" cy="111" r="1" fill="#4831D4" />
            <circle cx="34" cy="111" r="1" fill="#4831D4" />
            <circle cx="45" cy="111" r="1" fill="#4831D4" />
            <circle cx="56" cy="111" r="1" fill="#4831D4" />
            <circle cx="67" cy="111" r="1" fill="#4831D4" />
            <circle cx="78" cy="111" r="1" fill="#4831D4" />
            <circle cx="89" cy="111" r="1" fill="#4831D4" />
            <circle cx="100" cy="111" r="1" fill="#4831D4" />
            <circle cx="111" cy="111" r="1" fill="#4831D4" />
            <circle cx="122" cy="111" r="1" fill="#4831D4" />
            <circle cx="133" cy="111" r="1" fill="#4831D4" />
            <circle cx="1" cy="122" r="1" fill="#4831D4" />
            <circle cx="12" cy="122" r="1" fill="#4831D4" />
            <circle cx="23" cy="122" r="1" fill="#4831D4" />
            <circle cx="34" cy="122" r="1" fill="#4831D4" />
            <circle cx="45" cy="122" r="1" fill="#4831D4" />
            <circle cx="56" cy="122" r="1" fill="#4831D4" />
            <circle cx="67" cy="122" r="1" fill="#4831D4" />
            <circle cx="78" cy="122" r="1" fill="#4831D4" />
            <circle cx="89" cy="122" r="1" fill="#4831D4" />
            <circle cx="100" cy="122" r="1" fill="#4831D4" />
            <circle cx="111" cy="122" r="1" fill="#4831D4" />
            <circle cx="122" cy="122" r="1" fill="#4831D4" />
            <circle cx="133" cy="122" r="1" fill="#4831D4" />
          </svg>
          <svg
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block sm:absolute bottom-[10rem] right-[-8rem] w-[4rem] max-w-[150px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9327 43.0493L28.5132 43.0715L28.491 28.491L43.0715 28.5132L43.0493 13.9327L57.6299 13.9549L57.6088 0.124142L59.1084 0.126427L59.1318 15.4568L44.5513 15.4346L44.5735 30.0151L29.9929 29.9929L30.0151 44.5734L15.4346 44.5512L15.4568 59.1318L0.126439 59.1084L0.124156 57.6088L13.9549 57.6299L13.9327 43.0493Z"
              fill="#4831d4"
            />
          </svg>
          <svg
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block sm:absolute bottom-[-3rem] left-[-7rem] w-[4rem] max-w-[150px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.736 13.9327L16.7138 28.5132L31.2943 28.491L31.2721 43.0715L45.8526 43.0493L45.8304 57.6299L59.6611 57.6088L59.6589 59.1084L44.3285 59.1318L44.3507 44.5513L29.7702 44.5735L29.7924 29.9929L15.2118 30.0151L15.234 15.4346L0.653505 15.4568L0.676845 0.126439L2.17648 0.124156L2.15542 13.9549L16.736 13.9327Z"
              fill="#CCF381"
            />
          </svg>
          <svg
            viewBox="0 0 84 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block sm:absolute bottom-[10rem] left-[-3rem] w-[5.6rem] max-w-[150px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.118 3.05176e-05L31.4123 10.3257L41.7066 3.05176e-05L52.0009 10.3257L62.2952 3.05176e-05L72.5895 10.3257L82.3544 0.531039L83.4132 1.59306L72.5895 12.4498L62.2952 2.12406L52.0009 12.4498L41.7066 2.12406L31.4123 12.4498L21.118 2.12406L10.8237 12.4498L0 1.59306L1.05879 0.531039L10.8237 10.3257L21.118 3.05176e-05Z"
              fill="#CCF381"
            />
          </svg>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="310"
        viewBox="0 0 410 1029"
        data-shape="true"
        className="hidden xl:block xl:absolute top-[10%] left-[-4rem] h-[100vh] min-h-[650px] pointer-events-none"
      >
        <path
          fill="none"
          stroke="#ccf381"
          strokeMiterlimit="50"
          d="M-595.702 68.801c170.37-196.112 467.886-203.922 648.382-23.426 118.036 118.036 155.527 286.059 112.51 435.858-4.761 16.58-12.01 32.283-19.316 47.909a138.955 138.955 0 00-9.03 25.534c-11.945 47.534.67 99.913 37.845 137.087 24.143 24.144 54.677 37.886 86.17 41.312 5.473.626 11.028.919 16.625.918 32.33 3.426 63.742 17.627 88.47 42.354 61.444 61.445 57.39 163.708-12.16 219.767-51.833 41.779-127.42 43.175-180.571 3.087-34.726-26.19-54.364-63.667-58.474-102.473 0-5.596-.293-11.151-.92-16.624-3.425-31.494-17.166-62.028-41.31-86.172-37.174-37.174-89.555-49.788-137.088-37.841a140.596 140.596 0 00-25.545 9.04c-15.375 7.181-30.8 14.359-47.102 19.074-158.488 45.834-337.525 1.47-456.231-133.131-145.451-164.927-146.471-416.267-2.255-582.273zm477.57 432.312c78.526-78.524 78.527-206.402 0-284.928-78.582-78.583-206.402-78.525-284.927 0-78.583 78.583-78.583 206.345 0 284.928 78.526 78.526 206.345 78.583 284.928 0z"
        ></path>
      </svg>
    </div>
  );
}

export default HeroSection;
