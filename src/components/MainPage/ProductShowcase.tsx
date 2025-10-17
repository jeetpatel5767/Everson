import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFabrics from "@/assets/hero-fabrics.jpg";
import toteBags from "@/assets/tote-bags.jpg";
import laundryBags from "@/assets/laundry-bags.jpg";
import tableCover from "@/assets/table-cover.jpg";
import drawstringBags from "@/assets/drawstring-bags.jpg";

const products = [
  { title: "Non-woven Rolls", image: heroFabrics },
  { title: "Tote Bags", image: toteBags },
  { title: "Laundry Bag", image: laundryBags },
  { title: "Table Cover", image: tableCover },
  { title: "Drawstring Bag", image: drawstringBags },
  { title: "Loop Bag", image: toteBags },
];

const ProductShowcase = () => {
  return (
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
  );
};

export default ProductShowcase;
