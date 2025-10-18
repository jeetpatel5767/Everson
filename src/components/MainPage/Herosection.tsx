// components/MainPage/HeroAndFeatured.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroFabrics from "@/assets/hero1.png";
import toteBags from "@/assets/hero3.png";
import Hero2 from "@/assets/Hero2.png";
import HeroBg from "@/assets/HeroBG.png";
import Logo from "@/assets/Logo.png";

const HeroAndFeatured = () => {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative h-auto md:h-[45vh] mt-6"
  style={{
    backgroundImage: window.innerWidth >= 768 ? `url(${HeroBg})` : "none",
    backgroundSize: "80% auto",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  }}
>
        <div className="hidden md:block absolute inset-0 "></div>

        <div className="relative container mx-auto text-center max-w-4xl mt-16 text-[#587583] px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Durability. Design. Sustainability.
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-[#B0B6B5] leading-relaxed">
            Everson blends all three into every non-woven bag and fabric product
            crafted for modern businesses and industries.
          </p>
          <Button className="bg-[#587583] hover:bg-accent/90 text-accent-foreground px-6 py-4 text-sm sm:text-base">
            Explore More
          </Button>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="px-4 bg-background py-6 sm:py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Card */}
            <Card className="overflow-hidden group cursor-pointer h-[250px] sm:h-[300px] md:h-[350px] col-span-12 md:col-span-3">
              <img
                src={heroFabrics}
                alt="Colorful fabrics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Card>

            {/* Middle Card */}
            <Card className="overflow-hidden group cursor-pointer bg-[#8FAEB8] flex flex-col md:flex-row gap-4 h-auto md:h-[350px] col-span-12 md:col-span-6 p-4">
              {/* Image */}
              <div className="w-full md:w-1/2 h-[200px] md:h-full">
                <img
                  src={Hero2}
                  alt="Laundry Bag"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between md:w-1/2 h-full p-2 sm:p-4 text-center md:text-left">
                <div>
                  <span className="inline-block border-white border text-accent-foreground text-xs sm:text-sm px-3 py-1 rounded-full mb-3 sm:mb-4">
                    Laundry Bag
                  </span>

                  <p className="text-sm sm:text-base text-white mb-6 md:mb-8 leading-relaxed">
                    Everson’s non-woven laundry bags are designed for durability,
                    hygiene, and convenience. Lightweight yet strong, they keep
                    clothes organized and protected—perfect for hotels, hospitals,
                    and daily use.
                  </p>
                </div>

                <div className="flex justify-center md:justify-start">
                  <img
                    src={Logo}
                    alt="Everson Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                  />
                </div>
              </div>
            </Card>

            {/* Right Card */}
            <Card className="overflow-hidden group cursor-pointer h-[250px] sm:h-[300px] md:h-[350px] col-span-12 md:col-span-3">
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
