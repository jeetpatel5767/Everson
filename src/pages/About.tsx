import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";
import productCollage from "@/assets/product-collage.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                About us
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Empower Your Business with Unmatched Quality
              </h1>
              <Button variant="outline" className="group" asChild>
                <Link to="/contact">
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Elevate your retail and promotional strategies with our reliable,
                custom-printed non-woven bags. Empower your marketing with cost-effective,
                reusable solutions designed for everyday use. Focus on what matters most—building
                a memorable and responsible brand.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Get the reliable, customizable non-woven bags your business needs without the
                complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story, Mission & Vision Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Our Story Image */}
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <img
                src={teamMeeting}
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h2 className="text-3xl font-bold mb-3">Our Story</h2>
                  <p className="text-sm leading-relaxed opacity-90">
                    We provide a voice to make a difference with our services. We have a big and
                    not just a strategy but an identity we are proud to present to you. Innovation
                    fuels every day, and we let you be a part of it. Today, we partner with you to
                    make a greater difference - to be a responsible brand, together.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-8">
              <Card className="p-8 bg-[hsl(var(--brand-light-slate))] border-none">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-foreground/80 leading-relaxed">
                  It begins with a quest to produce fabrics with purpose. We are a big and not
                  just a strategy but an identity we are proud to present to you. Innovation
                  fuels every day and we let you be a part of it. To continue delivering
                  high-quality, custom non-woven bags that carry your name and brand
                  consciousness further. Let's build a sustainable future, together.
                </p>
              </Card>

              <Card className="p-8 bg-[hsl(var(--brand-light-slate))] border-none">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Our vision is to become a global leader in sustainable non-woven manufacturing,
                  inspiring industries to adopt greener alternatives. We strive to have every
                  product embody responsibility, innovation, and quality—creating a legacy of
                  purpose, durability, and sustainability.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose in Every Product */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Collage */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-muted">
                <img
                  src={productCollage}
                  alt="Product Collage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Purpose in Every Product
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Everson, we specialize in manufacturing a wide range of non-woven fabric
                products designed for both everyday and specialized applications. From eco
                friendly carry bags and garbage bags to tablecloths, pillow covers, shoe bags,
                and airline headrest covers, every product is crafted with sustainability in mind.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine advanced manufacturing technology with custom design solutions to meet
                the unique needs of our clients across industries like retail, hospitality,
                healthcare, aviation, and packaging. Our goal is simple — to deliver smart,
                reliable, and sustainable alternatives that make life easier while protecting the
                planet.
              </p>
              <Button variant="outline" className="group" asChild>
                <Link to="/products">
                  Explore more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Spirit of Everson */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Spirit of Everson
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sustainability - Filled */}
            <Card className="p-8 bg-primary text-primary-foreground border-none">
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="leading-relaxed opacity-90">
                We are committed to reducing environmental impact by creating products that are
                recyclable and responsibly manufactured. Every non-woven solution we design helps
                replace single-use plastics and enables a cleaner, greener planet. Sustainability
                isn't just our promise, it's our commitment for future generations.
              </p>
            </Card>

            {/* Quality - Outline */}
            <Card className="p-8 border-2 border-border bg-background">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product we make reflects our promise of durability, precision, and long
                lasting performance. Through advanced manufacturing and strict quality checks, we
                ensure excellence in every stitch, seam, and surface.
              </p>
            </Card>

            {/* Innovation - Outline */}
            <Card className="p-8 border-2 border-border bg-background">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We continuously evolve, combining modern design, technology, and creativity to
                deliver smarter non-woven solutions. Our focus on research and development keeps
                us ahead, transforming simple materials into purposeful, sustainable creations.
              </p>
            </Card>

            {/* Integrity - Outline */}
            <Card className="p-8 border-2 border-border bg-background">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trust and transparency form the foundation of every relationship we build, from
                our clients to our team. We believe in honest communication, ethical practices,
                and delivering exactly what we promise, every single time.
              </p>
            </Card>

            {/* Responsibility - Outline */}
            <Card className="p-8 border-2 border-border bg-background">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in progress with purpose, growing our business while caring for the
                planet and the people around us. Every decision we make is guided by a commitment
                to accountability and shared success, sustainability, and responsibility for a
                better society and shared success.
              </p>
            </Card>

            {/* Customer Commitment - Outline */}
            <Card className="p-8 border-2 border-border bg-background">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">
                Customer Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our customers are at the heart of everything we do. We listen, adapt, and deliver
                solutions that align with their goals, building long-term partnerships based on
                trust, reliability, and satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
