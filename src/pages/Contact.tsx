import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Get in Touch with Our Team - We're Here to Help
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+91-8642-245788</p>
              <p className="text-muted-foreground text-sm">+91-8642-245789</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">info@everson.com</p>
              <p className="text-muted-foreground text-sm">sales@everson.com</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-muted-foreground text-sm">
                Plot No. 17-B, Atal Nagar
              </p>
              <p className="text-muted-foreground text-sm">Vizag-530002, India</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-bold mb-2">Business Hours</h3>
              <p className="text-muted-foreground text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground text-sm">Sat: 9:00 AM - 2:00 PM</p>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 12345 67890"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your requirements..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Map Placeholder and Additional Info */}
            <div className="space-y-6">
              <Card className="p-8 bg-secondary">
                <h2 className="text-2xl font-bold mb-6">Visit Our Office</h2>
                <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                  <MapPin size={48} className="text-muted-foreground" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Head Office</h3>
                    <p className="text-muted-foreground">
                      Plot No. 17-B, Atal Nagar, Vizag-530002, Andhra Pradesh, India
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Manufacturing Unit</h3>
                    <p className="text-muted-foreground">
                      Industrial Area Phase-II, Vizag, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
                <p className="mb-4">
                  We value your time and strive to respond to all inquiries within 24 hours during
                  business days.
                </p>
                <p className="text-sm opacity-90">
                  For urgent matters, please call us directly at +91-8642-245788
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">What is the minimum order quantity?</h3>
              <p className="text-muted-foreground">
                Our minimum order quantity varies by product. Please contact us with your specific
                requirements for accurate information.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Do you offer customization?</h3>
              <p className="text-muted-foreground">
                Yes! We specialize in custom nonwoven solutions. We can customize size, color,
                printing, and specifications to meet your needs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">What is your delivery time?</h3>
              <p className="text-muted-foreground">
                Delivery time depends on order quantity and customization requirements. Standard
                orders typically take 2-4 weeks.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Do you ship internationally?</h3>
              <p className="text-muted-foreground">
                Yes, we ship to various countries. Contact us for international shipping rates and
                delivery timelines.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
