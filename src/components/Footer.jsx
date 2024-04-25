import FadeInItem from "./FadeInItem";

function Footer() {
  return (
    <footer className="lg:h-screen bg-accent p-[9%] flex items-center justify-center">
      <div className="w-full">
        <FadeInItem index={1} showOnce={true}>
          <div className="text-[2rem] sm:text-[3rem] font-black text-secondary">
            LOGO
          </div>

          <div className="flex flex-col sm:flex-row py-8 sm:p-[4rem] md:p-[5rem] md:py-[5rem] text-[1.1rem] sm:text-[2rem] md:text-[1.8rem] lg:text-[1.4rem] gap-[4rem] sm:gap-[12rem]">
            <div>
              <div className="sm:hidden text-[#CBC9E2]">NAVIGATION</div>
              <ul className="text-secondary flex flex-col gap-8 mt-5">
                <li>My Work</li>
                <li>About Me</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <div className="sm:hidden text-[#CBC9E2]">LINKS</div>
              <ul className="text-secondary flex flex-col gap-8 mt-5">
                <li>My Resume</li>
                <li>GitHub</li>
                <li>LinkedIn</li>
              </ul>
            </div>

            <div>
              <div className="sm:hidden text-[#CBC9E2]">SAY HELLO</div>
              <div className="flex flex-col gap-5 mt-5">
                <div className="text-secondary">
                  stefanbrkic.inbox@gmail.com
                </div>
                <div className="text-secondary">t.me/stefanbrkic</div>
              </div>
            </div>
          </div>
        </FadeInItem>

        <FadeInItem>
          <div className="h-[1px] bg-secondary mt-10"></div>
          <div className="text-secondary mt-9 text-[1rem] sm:text-[1.8rem] md:text-[1.6rem] lg:text-[1.3rem] xl:text-[1.1rem]">
            Design credits: <span className="font-bold">Olaolu Olawuyi</span>
          </div>
        </FadeInItem>
      </div>
    </footer>
  );
}

export default Footer;
