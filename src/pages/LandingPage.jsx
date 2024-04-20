import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default LandingPage;
