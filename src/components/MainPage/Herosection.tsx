// components/MainPage/HeroAndFeatured.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroFabrics from "@/assets/hero1.png";
import toteBags from "@/assets/hero3.png";
import Hero2 from "@/assets/Hero2.png";
import HeroBg from "@/assets/HeroBG.png"; // ✅ background image import
import Logo from "@/assets/Logo.png";

const HeroAndFeatured = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-no-repeat bg-center h-[80vh] md:h-[45vh] mt-6"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "80% auto", // width 80%, height auto
          backgroundPosition: "center center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative container mx-auto text-center max-w-4xl mt-16 text-[#587583]">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
            Durability. Design. Sustainability.
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-[#B0B6B5]">
            Everson blends all three into every non-woven bag and fabric product
            crafted for modern businesses and industries.
          </p>
          <Button className="bg-[#587583] hover:bg-accent/90 text-accent-foreground">
            Explore More
          </Button>
        </div>
      </section>

      {/* Featured Products Grid */}
     <section className="px-4 bg-background">
  <div className="container mx-auto">
    <div className="grid grid-cols-12 gap-6">
      {/* Left Card */}
      <Card className="overflow-hidden group cursor-pointer h-[350px] col-span-12 md:col-span-3">
        <img
          src={heroFabrics}
          alt="Colorful fabrics"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Card>

      {/* Middle Card */}
      <Card className="overflow-hidden group cursor-pointer bg-[#8FAEB8] flex flex-col md:flex-row gap-4 h-[350px] col-span-12 md:col-span-6 p-4">
        {/* Left side: Image */}
        <div className="flex-shrink-0 md:w-1/2 h-full">
          <img
            src={Hero2}
            alt="Laundry Bag"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right side: Content */}
        <div className="flex flex-col justify-between md:w-1/2 h-full p-4">
          {/* Top: Label */}
          <div>
            <span className="inline-block border-white border-[1px] text-accent-foreground text-sm px-3 py-1 rounded-full mb-4">
              Laundry Bag
            </span>

            {/* Description */}
            <p className="text-muted-foreground text-white max-w-[200px] mb-8">
              Everson’s non-woven laundry bags are designed for durability, hygiene, and convenience. Lightweight yet strong, they keep clothes organized and protected—perfect for hotels, hospitals, and daily use.
            </p>
          </div>

          {/* Bottom-left: Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Everson Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </Card>

      {/* Right Card */}
      <Card className="overflow-hidden group cursor-pointer h-[350px] col-span-12 md:col-span-3">
        <img
          src={toteBags}
          alt="Colorful tote bags"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Card>
    </div>
  </div>
</section>


    </>
  );
};

export default HeroAndFeatured;
