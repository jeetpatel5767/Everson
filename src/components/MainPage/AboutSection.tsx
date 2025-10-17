import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import manufacturing from "@/assets/manufacturing.jpg";

const AboutSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Everson</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Everson, a name synonymous with innovative nonwoven solutions, stands out with its
              48+ years of exceptional expertise. With an unwavering commitment to quality,
              environmental consciousness, and customer satisfaction, Everson has earned its position
              as one of the most reliable names in the nonwoven fabric industry.
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
  );
};

export default AboutSection;
