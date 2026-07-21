import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-pets.jpg';
const Hero = () => {
  const handleWhatsAppOrder = () => {
    const phoneNumber = "254759436251"; // Updated WhatsApp number
    const message = "Hi! I'd like to explore Zypet Nutrition's whole rabbit prey products!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Happy pets" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-background">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Feed Your Pet Like Family
            <span className="block text-premium">with Whole Prey Rabbit BARF Diets</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-background/90 font-medium">
            Kenya's #1 Whole Prey Rabbit BARF Diet
            <span className="block mt-2">100% Raw, Frozen, and Natural</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={scrollToProducts} size="lg" className="bg-premium text-premium-foreground hover:bg-premium/90 px-8 py-4 text-lg shadow-premium">
              Explore Our Product Range
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button onClick={handleWhatsAppOrder} size="lg" variant="outline" className="border-2 border-background hover:bg-background px-8 py-4 text-lg text-slate-950">
              <MessageCircle className="mr-2 h-5 w-5" />
              Order Now via WhatsApp
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-background/80">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-premium rounded-full mr-2"></span>
              No Preservatives
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-premium rounded-full mr-2"></span>
              No Fillers or Grains
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-premium rounded-full mr-2"></span>
              100% Natural
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-premium rounded-full mr-2"></span>
              Made in Kenya
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-background/60" />
      </div>
    </section>;
};
export default Hero;