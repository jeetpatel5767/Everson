import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Catalog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="hover:text-accent transition-colors">Non-woven Rolls</li>
              <li className="hover:text-accent transition-colors">Tote Bags</li>
              <li className="hover:text-accent transition-colors">Laundry Bags</li>
              <li className="hover:text-accent transition-colors">Table Covers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Plot No. 17-B, Atal Nagar, Vizag-530002, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+91-8642-245788</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">info@everson.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold">EVERSON</span>
          </div>
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Everson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
