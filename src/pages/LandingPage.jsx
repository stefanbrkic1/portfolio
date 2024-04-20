import { useEffect } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";

function LandingPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
    </>
  );
}

export default LandingPage;
