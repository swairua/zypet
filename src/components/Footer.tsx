import { Heart, MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import zypetLogo from '@/assets/zypet-icon.png.asset.json';
const Footer = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "254759436251"; // Updated WhatsApp number
    const message = "Hi! I have questions about Zypet Nutrition products. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={zypetLogo.url}
                alt="Zypet Nutrition icon"
                className="h-12 w-auto bg-background/95 rounded-md p-1"
              />
              <span className="font-heading font-bold text-2xl">
                Zypet Nutrition
              </span>
            </div>


            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Kenya's premier provider of whole prey rabbit BARF diets. 
              We're committed to transforming pet health through species-appropriate, 
              natural nutrition that your pets will love.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-primary-foreground/80">
                <MapPin className="h-5 w-5 mr-3 text-premium" />
                <span>Serving Nairobi, Kisumu, Mombasa & Beyond</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Clock className="h-5 w-5 mr-3 text-premium" />
                <span>Orders: Mon-Sat, 8AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#home" className="text-primary-foreground/80 hover:text-premium transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#products" className="text-primary-foreground/80 hover:text-premium transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/#why-barf" className="text-primary-foreground/80 hover:text-premium transition-colors">
                  Why BARF?
                </a>
              </li>
              <li>
                <a href="/#benefits" className="text-primary-foreground/80 hover:text-premium transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="/#about" className="text-primary-foreground/80 hover:text-premium transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-primary-foreground/80 hover:text-premium transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Order */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="h-5 w-5 mr-3 text-premium" />
                <span>+254 759 436 251</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="h-5 w-5 mr-3 text-premium" />
                <span>info@zypet.co.ke</span>
              </div>
            </div>
            
            <Button onClick={handleWhatsAppContact} className="bg-premium text-premium-foreground hover:bg-premium/90 w-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              Order via WhatsApp
            </Button>
          </div>
        </div>

        {/* Payment & Delivery Info */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold text-lg mb-4">Payment Methods</h5>
              <div className="text-primary-foreground/80">
                <p className="mb-2">M-Pesa Till Number: <span className="font-bold text-premium">5630044</span></p>
                <p>Payment on Delivery (Nairobi only)</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-lg mb-4">Delivery Information</h5>
              <div className="text-primary-foreground/80">
                <p>Same-day delivery available for urgent orders in Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p className="mb-4 md:mb-0">
              © 2025 Zypet Nutrition
            </p>
            <p className="mb-4 md:mb-0 text-center">
              All rights reserved. Made with ❤️ for Kenyan pets.
            </p>
            <p>
              Developed with ❤️ by <a href="https://www.zira-tech.com" target="_blank" className="hover:text-premium transition-colors underline">Zira Technologies</a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
