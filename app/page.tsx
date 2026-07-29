import ScrollBackdrop from "./components/ScrollBackdrop";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SpecsSection from "./components/SpecsSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main style={{ position: "relative", background: "#000000" }}>
      <ScrollBackdrop />
      <div className="grain-overlay" />
      <Navbar />
      <div style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <FeaturesSection />
        <SpecsSection />
        <ClosingCTA />
      </div>
    </main>
  );
}
