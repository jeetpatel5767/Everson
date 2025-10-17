import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import manufacturing from "@/assets/manufacturing.jpg";

const AboutSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto">
        {/* Outer White Rounded Border Wrapper */}
        <div className="border-2 border-white rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Section */}
            <div className="px-2 sm:px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Everson
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                At Everson, we believe sustainability and innovation go hand in
                hand. As a trusted manufacturer of non-woven bags and fabric
                products, we’re dedicated to creating smart alternatives to
                single-use plastics. From carry bags and garbage bags to
                tablecloths, covers, and custom packaging, every Everson product
                reflects our commitment to quality, durability, and
                eco-responsibility. With advanced manufacturing, reliable
                delivery, and a passion for progress, we help businesses move
                toward a cleaner and more sustainable future.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/about">Read More</Link>
              </Button>
            </div>

            {/* Right: Image Section */}
            <div className="flex justify-center px-2 sm:px-4">
              <img
                src={manufacturing}
                alt="Manufacturing"
                className="rounded-2xl shadow-2xl max-w-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
