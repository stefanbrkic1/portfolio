import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import MyWorkSection from "../components/MyWorkSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import ReactFullpage from "@fullpage/react-fullpage";

import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

function LandingPage() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const updateHeight = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const anchors = ["HERO", "SKILLS", "ABOUT", "MYWORK", "CONTACT", "FOOTER"];

  if (isSmallScreen || screenHeight < 690) {
    return (
      <>
        <Navbar isSmallScreen={isSmallScreen} />
        <HeroSection />
        <SkillsSection screenHeight={screenHeight} />
        <AboutSection screenHeight={screenHeight} />
        <MyWorkSection screenHeight={screenHeight} />
        <ContactSection />
        <Footer screenHeight={screenHeight} />
      </>
    );
  }
  return (
    <>
      <ReactFullpage
        anchors={anchors}
        navigation
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi);

          return (
            <>
              <Navbar />

              <div className="section justify-start">
                <HeroSection />
              </div>

              <div className="section">
                <SkillsSection />
              </div>

              <div className="section">
                <AboutSection />
              </div>

              <div className="section">
                <MyWorkSection />
              </div>

              <div className="section">
                <ContactSection />
              </div>

              <div className="section">
                <Footer />
              </div>
            </>
          );
        }}
      />
    </>
  );
}

export default LandingPage;
