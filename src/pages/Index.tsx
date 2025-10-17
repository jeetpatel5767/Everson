import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/MainPage/Herosection";
import AboutSection from "@/components/MainPage/AboutSection";
import ProductShowcase from "@/components/MainPage/ProductShowcase";
import CTASection from "@/components/MainPage/CTASection";
import BlueprintsSection from "@/components/MainPage/BlueprintsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <CTASection />
      <BlueprintsSection />
      <Footer />
    </div>
  );
};

export default Index;
