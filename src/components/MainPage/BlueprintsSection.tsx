import { Card } from "@/components/ui/card";

const BlueprintsSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Blueprints of Purpose</h2>
        <p className="text-xl text-muted-foreground mb-12">Shaping Sustainable Solutions</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-muted/30">
            <h3 className="font-bold text-xl mb-4">Custom Specifications</h3>
            <p className="text-muted-foreground">
              We provide detailed technical drawings and specifications for all our products, ensuring perfect fit for your needs.
            </p>
          </Card>
          <Card className="p-8 bg-muted/30">
            <h3 className="font-bold text-xl mb-4">Tailored Solutions</h3>
            <p className="text-muted-foreground">
              Every product can be customized to your exact requirements — from dimensions to materials and colors.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlueprintsSection;
