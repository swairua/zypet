import { Check, Heart, Sparkles, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyRawRabbit = () => {
  const rawBenefits = [
    {
      icon: Heart,
      title: "Nutrient-rich",
      description: "Cooking destroys important enzymes, amino acids, and natural nutrients your pet needs to thrive. Raw keeps them intact."
    },
    {
      icon: Sparkles,
      title: "Better digestion",
      description: "Raw meat, bones, and organs are easier for pets to digest. Cooking bones can make them brittle and unsafe."
    },
    {
      icon: Shield,
      title: "Natural dental care", 
      description: "Chewing raw bones helps clean teeth and gums — reducing bad breath and tartar."
    },
    {
      icon: Heart,
      title: "Improved skin & coat",
      description: "Raw feeding can lead to shinier coats, fewer allergies, and reduced shedding."
    },
    {
      icon: Sparkles,
      title: "Picky eaters love it",
      description: "Raw food smells and tastes more natural to dogs and cats — even choosy pets enjoy it."
    }
  ];

  const rabbitBenefits = [
    "Naturally lean and nutrient-dense",
    "Cooling protein — ideal for pets in warm climates", 
    "Hypoallergenic and easy on the tummy",
    "Perfect for pets with sensitivities, allergies, or itchy skin"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">
            Why Raw Rabbit?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Raw rabbit meat follows the BARF diet — Biologically Appropriate Raw Food. 
            It's designed to mimic what dogs and cats would naturally eat in the wild.
          </p>
        </div>

        {/* Why Raw is Better */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-3xl mb-8 text-center text-primary">
            🐾 Why raw is better than cooked:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rawBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-premium transition-colors duration-300 animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-premium/10 rounded-full p-3">
                      <benefit.icon className="h-6 w-6 text-premium" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-2 text-primary">
                        ✅ {benefit.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Rabbit */}
        <div className="text-center">
          <h3 className="font-heading font-bold text-3xl mb-8 text-primary">
            🐇 Why Rabbit?
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rabbitBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-secondary rounded-xl">
                  <Check className="h-5 w-5 text-accent mr-3" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRawRabbit;