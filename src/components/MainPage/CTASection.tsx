import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroFabrics from "@/assets/hero-fabrics.jpg";

const CTASection = () => {
  return (
    <section className="bg-secondary py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Optimizing Your Financial Operations Today
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Let us help take your order with our top-rated services and show you how we can save thousands efficiently.
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
  );
};

export default CTASection;
