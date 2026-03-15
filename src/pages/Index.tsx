import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CeoSection from "@/components/CeoSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CeoSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
