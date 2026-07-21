import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, MessageCircle } from 'lucide-react';
import zypetLogo from '@/assets/zypet-icon.png.asset.json';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Products', href: '/#products' },
    { name: 'Why BARF?', href: '/#why-barf' },
    { name: 'Benefits', href: '/#benefits' },
    { name: 'About', href: '/#about' },
    { name: 'FAQ', href: '/faq' },
  ];

  const handleWhatsAppOrder = () => {
    const phoneNumber = "254759436251"; // Updated WhatsApp number
    const message = "Hi! I'm interested in ordering Zypet Nutrition's whole rabbit prey. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/#home" className="flex items-center gap-2">
            <img
              src={zypetLogo.url}
              alt="Zypet Nutrition icon"
              className="h-10 w-auto"
            />
            <span className="font-heading font-bold text-xl text-primary leading-tight">
              Zypet Nutrition
            </span>
          </a>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-premium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Order Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleWhatsAppOrder}
              className="bg-gradient-warm text-warm-foreground hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-premium transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                onClick={handleWhatsAppOrder}
                className="bg-gradient-warm text-warm-foreground hover:opacity-90 transition-opacity mt-4"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Order via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;