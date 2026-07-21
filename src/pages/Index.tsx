import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import ProductShowcase from '@/components/ProductShowcase';
import WhyBarf from '@/components/WhyBarf';
import WhyRawRabbit from '@/components/WhyRawRabbit';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zypet Nutrition — Kenya's #1 Whole Prey Rabbit BARF Diet</title>
        <meta name="description" content="Premium raw frozen rabbit and chicken BARF diets for dogs and cats in Kenya. 100% natural, no preservatives. Order via WhatsApp." />
        <link rel="canonical" href="https://zypet-nutrition.lovable.app/" />
        <meta property="og:url" content="https://zypet-nutrition.lovable.app/" />
      </Helmet>
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section - Moved up for better hierarchy */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8 text-primary">
            About Zypet Nutrition
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are Kenya's premier provider of whole prey rabbit BARF diets, committed to transforming pet health through species-appropriate, natural nutrition that your pets will love.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="font-heading font-semibold text-xl mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">To transform pet health in Kenya through species-appropriate, natural nutrition</p>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-semibold text-xl mb-4 text-primary">Quality Assurance</h3>
                <p className="text-muted-foreground">Locally sourced, frozen fresh, with no preservatives, fillers, or grains</p>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-semibold text-xl mb-4 text-primary">Our Promise</h3>
                <p className="text-muted-foreground">Treating your pets like family with nutrition they deserve</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Three Pillars / Benefits Section */}
      <section id="benefits" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading" className="sr-only">Why choose Zypet Nutrition — Key benefits</h2>
        <Pillars />
      </section>
      
      {/* Main Product Showcase */}
      <ProductShowcase />
      
      {/* Why BARF Education */}
      <WhyBarf />
      
      {/* Why Raw Rabbit */}
      <WhyRawRabbit />
      
      {/* Customer Testimonials */}
      <Testimonials />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
