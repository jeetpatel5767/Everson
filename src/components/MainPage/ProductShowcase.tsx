import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Sol1 from "@/assets/Sol1.png";
import Sol2 from "@/assets/Sol2.png";
import Sol3 from "@/assets/Sol3.png";
import Sol4 from "@/assets/Sol4.png";
import Sol5 from "@/assets/Sol5.png";
import Sol6 from "@/assets/Sol6.png";
import Sol7 from "@/assets/Sol7.png";
import Sol8 from "@/assets/Sol8.png";
import Logo from "@/assets/Logo.png";

const products = [
  { title: "Non-woven Rolls", image: Sol1 },
  { title: "Tote Bags", image: Sol2 },
  { title: "Laundry Bags", image: Sol3 },
  { title: "Table Cover", image: Sol4 },
  { title: "Drawstring Bags", image: Sol5 },
  { title: "Loop Bag", image: Sol6 },
  { title: "Box Bags", image: Sol7 },
  { title: "Airline Headrest", image: Sol8 },
];

const ProductShowcase = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Everson Logo"
            className="w-24 md:w-48 object-contain"
          />
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nonwoven Solutions Crafted for Every Need
          </h2>
          <p className="text-4xl text-muted-foreground">
            Practical | Sustainable | Reliable
          </p>
        </div>

        {/* 3-column layout with responsive behavior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[1200px]">
          {/* --- Column 1 --- */}
          <div className="flex flex-col gap-6 h-auto md:h-full">
            <Card className="overflow-hidden group cursor-pointer flex-1 md:basis-[45%]">
              <div className="relative h-full">
                <img
                  src={products[0].image}
                  alt={products[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 text-primary-foreground p-3 text-left">
                  <h3 className="font-bold text-lg">{products[0].title}</h3>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer flex-1 md:basis-[27.5%]">
              <div className="relative h-full">
                <img
                  src={products[1].image}
                  alt={products[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 text-primary-foreground p-3 text-left">
                  <h3 className="font-bold text-lg">{products[1].title}</h3>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer flex-1 md:basis-[27.5%]">
              <div className="relative h-full">
                <img
                  src={products[2].image}
                  alt={products[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 text-primary-foreground p-3 text-left">
                  <h3 className="font-bold text-lg">{products[2].title}</h3>
                </div>
              </div>
            </Card>
          </div>

          {/* --- Column 2 --- */}
          <div className="flex flex-col gap-6 h-auto md:h-full">
            <Card className="overflow-hidden group cursor-pointer flex-1 md:basis-[65%]">
              <div className="relative h-full">
                <img
                  src={products[3].image}
                  alt={products[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 text-primary-foreground p-3 text-left">
                  <h3 className="font-bold text-lg">{products[3].title}</h3>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer flex-1 md:basis-[35%]">
              <div className="relative h-full">
                <img
                  src={products[4].image}
                  alt={products[4].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 text-primary-foreground p-3 text-left">
                  <h3 className="font-bold text-lg">{products[4].title}</h3>
                </div>
              </div>
            </Card>
          </div>

          {/* --- Column 3 --- */}
          <div className="flex flex-col gap-6 h-auto md:h-full">
            <Card className="overflow-hidden group cursor-pointer flex-1 md:basis-[45%]">
              <div className="relative h-full">
                <img
                  src={products[5].image}
                  alt={products[5].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 text-primary-foreground p-3 text-left">
                  <h3 className="font-bold text-lg">{products[5].title}</h3>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer flex-1 md:basis-[27.5%]">
              <div className="relative h-full">
                <img
                  src={products[6].image}
                  alt={products[6].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 text-primary-foreground p-3 text-left">
                  <h3 className="font-bold text-lg">{products[6].title}</h3>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer flex-1 md:basis-[27.5%]">
              <div className="relative h-full">
                <img
                  src={products[7].image}
                  alt={products[7].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 text-primary-foreground p-3 text-left">
                  <h3 className="font-bold text-lg">{products[7].title}</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
