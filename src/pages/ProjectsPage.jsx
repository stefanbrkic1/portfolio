import FadeInItem from "../components/FadeInItem";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectsPage() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#F4F4F4]">
      <div className="relative bg-primary pt-[4rem] pb-[4rem] sm:pt-[5rem] sm:pb-[6.5rem] flex justify-center items-center flex-col">
        <FadeInItem index={2} showOnce={true}>
          <h1 className="max-[400px]:text-[32px] min-[400px]:text-[36px] text-[34px] sm:text-[4.7em] md:text-[4em] font-extrabold text-secondary">
            My Work
          </h1>
        </FadeInItem>
        <FadeInItem index={3} showOnce={true}>
          <p className="text-center text-[1rem] sm:text-[2rem] md:text-[1.6rem] xl:text-[1.3rem] 2xl:text-[19px] font-medium  mt-1 text-[#ffffff] max-w-[20rem] sm:max-w-[40rem] md:max-w-[35rem] xl:max-w-[28rem]">
            Showcasing my journey in building interactive web interfaces
          </p>
        </FadeInItem>

        <Link
          to={"/"}
          className="absolute top-5 left-5 sm:top-8 sm:left-8 flex items-center gap-3 text-secondary font-bold text-[1.2rem]"
        >
          <svg
            viewBox="0 0 38 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3"
          >
            <path d="M35 3L5 33L35 63" stroke="#CCF381" strokeWidth="11" />
          </svg>

          <div>Back</div>
        </Link>

        <svg
          viewBox="0 0 134 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block absolute top-[-3rem] left-[20rem] w-[9rem] max-w-[150px]"
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
          className="hidden sm:block absolute bottom-[3rem] right-[17rem] w-[9rem] max-w-[150px]"
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
          viewBox="0 0 162 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block absolute w-[6rem] top-[5rem] right-[27rem]"
        >
          <path
            d="M20 11C20 16.5672 15.7034 21 10.5 21C5.29663 21 1 16.5672 1 11C1 5.4328 5.29663 1 10.5 1C15.7034 1 20 5.4328 20 11Z"
            stroke="#CCF381"
            strokeWidth="2"
          />
          <circle cx="46" cy="11" r="10" stroke="#CCF381" strokeWidth="2" />
          <path
            d="M90 11C90 16.6147 85.883 21 81 21C76.117 21 72 16.6147 72 11C72 5.38533 76.117 1 81 1C85.883 1 90 5.38533 90 11Z"
            stroke="#CCF381"
            strokeWidth="2"
          />
          <circle cx="116" cy="11" r="10" stroke="#CCF381" strokeWidth="2" />
          <path
            d="M161 11C161 16.5672 156.703 21 151.5 21C146.297 21 142 16.5672 142 11C142 5.4328 146.297 1 151.5 1C156.703 1 161 5.4328 161 11Z"
            stroke="#CCF381"
            strokeWidth="2"
          />
        </svg>

        <svg
          viewBox="0 0 162 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block absolute w-[6rem] top-[9rem] left-[10rem]"
        >
          <path
            d="M20 11C20 16.5672 15.7034 21 10.5 21C5.29663 21 1 16.5672 1 11C1 5.4328 5.29663 1 10.5 1C15.7034 1 20 5.4328 20 11Z"
            stroke="#CCF381"
            strokeWidth="2"
          />
          <circle cx="46" cy="11" r="10" stroke="#CCF381" strokeWidth="2" />
          <path
            d="M90 11C90 16.6147 85.883 21 81 21C76.117 21 72 16.6147 72 11C72 5.38533 76.117 1 81 1C85.883 1 90 5.38533 90 11Z"
            stroke="#CCF381"
            strokeWidth="2"
          />
          <circle cx="116" cy="11" r="10" stroke="#CCF381" strokeWidth="2" />
          <path
            d="M161 11C161 16.5672 156.703 21 151.5 21C146.297 21 142 16.5672 142 11C142 5.4328 146.297 1 151.5 1C156.703 1 161 5.4328 161 11Z"
            stroke="#CCF381"
            strokeWidth="2"
          />
        </svg>

        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block absolute w-[3rem] left-[30rem] bottom-[5rem]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.736 13.9327L16.7138 28.5132L31.2943 28.491L31.2721 43.0715L45.8526 43.0493L45.8304 57.6299L59.6611 57.6088L59.6589 59.1084L44.3285 59.1318L44.3507 44.5513L29.7702 44.5735L29.7924 29.9929L15.2118 30.0151L15.234 15.4346L0.653505 15.4568L0.676845 0.126439L2.17648 0.124156L2.15542 13.9549L16.736 13.9327Z"
            fill="#CCF381"
          />
        </svg>

        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block absolute w-[3rem] bottom-[3rem] rotate-[315deg] left-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.736 13.9327L16.7138 28.5132L31.2943 28.491L31.2721 43.0715L45.8526 43.0493L45.8304 57.6299L59.6611 57.6088L59.6589 59.1084L44.3285 59.1318L44.3507 44.5513L29.7702 44.5735L29.7924 29.9929L15.2118 30.0151L15.234 15.4346L0.653505 15.4568L0.676845 0.126439L2.17648 0.124156L2.15542 13.9549L16.736 13.9327Z"
            fill="#CCF381"
          />
        </svg>

        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block absolute w-[3rem] top-[1rem] right-0 rotate-[315deg]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.736 13.9327L16.7138 28.5132L31.2943 28.491L31.2721 43.0715L45.8526 43.0493L45.8304 57.6299L59.6611 57.6088L59.6589 59.1084L44.3285 59.1318L44.3507 44.5513L29.7702 44.5735L29.7924 29.9929L15.2118 30.0151L15.234 15.4346L0.653505 15.4568L0.676845 0.126439L2.17648 0.124156L2.15542 13.9549L16.736 13.9327Z"
            fill="#CCF381"
          />
        </svg>
      </div>

      <section className="px-[20px] lg:px-[3%] py-[2rem] sm:py-[3rem] container min-[1900px]:px-[15%]">
        {projects &&
          projects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-[#ffffff] pb-[10px] sm:pb-[40px] shadow-md rounded-md mb-10 overflow-hidden flex flex-col lg:flex-row"
              >
                <Slider
                  {...settings}
                  className="cursor-pointer  w-full lg:w-[50%] xl:w-[58%]"
                >
                  <div>
                    <img src={project.img[0]} alt="" />
                  </div>
                  <div>
                    <img src={project.img[1]} alt="" />
                  </div>
                </Slider>

                <div className="p-[20px] sm:p-[3rem]">
                  <h2 className="font-extrabold text-primary text-[2rem] sm:text-[4.5rem] md:text-[3.5rem] lg:text-[3rem] 2xl:text-[2.5rem]">
                    {project.title.toUpperCase()}
                  </h2>
                  <p className="text-[0.9rem] sm:text-[15px] 2xl:text-[16px]">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row mt-[2rem] gap-4">
                    <a
                      href={project.deployment}
                      target="_blank"
                      className="hover:bg-primary transition-all duration-200 hover:text-[#ffffff] flex justify-center items-center gap-5 w-full sm:w-[210px] border border-primary py-[0.8rem] sm:py-[1.8rem] md:py-[1.2rem] lg:py-[1rem] xl:py-[0.8rem] text-primary font-bold text-[1.1rem] sm:text-[2.5rem] md:text-[2rem] lg:text-[1.3rem] xl:text-[1.1rem]"
                    >
                      VISIT WEBSITE
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="hover:bg-primary transition-all duration-200 hover:text-[#ffffff] flex justify-center items-center gap-5 w-full sm:w-[210px] border border-primary py-[0.8rem] sm:py-[1.8rem] md:py-[1.2rem] lg:py-[1rem] xl:py-[0.8rem] text-primary font-bold text-[1.1rem] sm:text-[2.5rem] md:text-[2rem] lg:text-[1.3rem] xl:text-[1.1rem]"
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
