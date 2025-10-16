import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroFabrics from "@/assets/hero-fabrics.jpg";
import toteBags from "@/assets/tote-bags.jpg";
import laundryBags from "@/assets/laundry-bags.jpg";
import tableCover from "@/assets/table-cover.jpg";
import drawstringBags from "@/assets/drawstring-bags.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

const Index = () => {
  const products = [
    { title: "Non-woven Rolls", image: heroFabrics },
    { title: "Tote Bags", image: toteBags },
    { title: "Laundry Bag", image: laundryBags },
    { title: "Table Cover", image: tableCover },
    { title: "Drawstring Bag", image: drawstringBags },
    { title: "Loop Bag", image: toteBags },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Durability. Design. Sustainability.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore a vibrant range of eco-friendly nonwoven bags & fabrics – durable, and perfect for
            every occasion.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Explore More
          </Button>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer">
              <img
                src={heroFabrics}
                alt="Colorful fabrics"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Card>
            <Card className="overflow-hidden group cursor-pointer bg-secondary p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  High-quality nonwoven materials crafted with care and precision for lasting durability
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden group cursor-pointer">
              <img
                src={toteBags}
                alt="Colorful tote bags"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Everson</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Everson, a name synonymous with innovative nonwoven solutions, stands out with its 48+ years of
                exceptional expertise. With an unwavering commitment to quality, environmental consciousness, and
                customer satisfaction, Everson has earned its position as one of the most reliable names in the
                nonwoven fabric industry. Each of our ultimate nonwoven solutions is a result of deep
                understanding of the client's unique requirements and expectations.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/about">Read More</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src={manufacturing}
                alt="Manufacturing"
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nonwoven Solutions Crafted for Every Need
            </h2>
            <p className="text-xl text-muted-foreground">
              Practical | Sustainable | Reliable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-primary-foreground p-4">
                    <h3 className="font-bold text-lg">{product.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Optimizing Your Financial Operations Today
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Let us help take your order with our top-rated services and how we can save thousands of dollars
                efficiently.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src={heroFabrics}
                alt="Products"
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blueprints Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blueprints of Purpose</h2>
          <p className="text-xl text-muted-foreground mb-12">Shaping Sustainable Solutions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-muted/30">
              <h3 className="font-bold text-xl mb-4">Custom Specifications</h3>
              <p className="text-muted-foreground">
                We provide detailed technical drawings and specifications for all our products, ensuring perfect
                fit for your needs.
              </p>
            </Card>
            <Card className="p-8 bg-muted/30">
              <h3 className="font-bold text-xl mb-4">Tailored Solutions</h3>
              <p className="text-muted-foreground">
                Every product can be customized to your exact requirements - from dimensions to materials and
                colors.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
