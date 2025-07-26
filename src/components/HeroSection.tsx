import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Building Dreams,
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              One Solution at a Time
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm here to transform your financial challenges into opportunities. 
            As a passionate Chartered Accountant, I believe every business deserves 
            personalized attention and expert guidance on their journey to success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Explore My Services
            </Button>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-lg font-semibold text-accent mb-2">Integrity First</div>
              <div className="text-primary-foreground/80 text-sm">Every decision guided by honesty and transparency</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-accent mb-2">Personal Touch</div>
              <div className="text-primary-foreground/80 text-sm">Your business gets my full attention and care</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-accent mb-2">Growth Mindset</div>
              <div className="text-primary-foreground/80 text-sm">Together, we'll build the future you envision</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;