import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Heart,
  ChevronUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-glow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <ChevronUp className="w-6 h-6 text-accent-foreground" />
      </button>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">CA</span>
              </div>
              <span className="text-lg font-semibold">Professional Services</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Your trusted partner for comprehensive accounting, taxation, and financial 
              consulting services. Committed to helping you achieve financial success 
              with integrity and expertise.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-primary-foreground/80 hover:text-accent transition-smooth text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-primary-foreground/80 hover:text-accent transition-smooth text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/80 hover:text-accent transition-smooth text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/80 hover:text-accent transition-smooth text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">ca@professional.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">123 Business Ave, Suite 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2025 CA Professional Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;