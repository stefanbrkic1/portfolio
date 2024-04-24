import FadeInItem from "./FadeInItem";

function ContactSection() {
  return (
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
              Got a question or proposal, or just want to say hello? Go ahead.
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
  );
}

export default ContactSection;
