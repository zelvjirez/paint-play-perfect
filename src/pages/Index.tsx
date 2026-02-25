import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OccasionsSection from "@/components/OccasionsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="paintball">
        <AboutSection />
      </div>
      <div id="priloznosti">
        <OccasionsSection />
      </div>
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
