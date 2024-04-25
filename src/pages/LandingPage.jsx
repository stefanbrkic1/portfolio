import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import MyWorkSection from "../components/MyWorkSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import ReactFullpage from "@fullpage/react-fullpage";

import { useMediaQuery } from "react-responsive";

function LandingPage() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  if (isSmallScreen) {
    return (
      <>
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <MyWorkSection />
        <ContactSection />
        <Footer />
      </>
    );
  }
  return (
    <>
      <ReactFullpage
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
