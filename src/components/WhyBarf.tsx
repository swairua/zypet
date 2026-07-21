import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Heart, Sparkles } from 'lucide-react';

const WhyBarf = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Boosts Immunity",
      description: "Raw nutrition strengthens your pet's natural immune system, reducing illness and vet visits."
    },
    {
      icon: Zap,
      title: "Increased Energy",
      description: "Natural proteins and nutrients provide sustained energy for active, playful pets."
    },
    {
      icon: Heart,
      title: "Better Digestion",
      description: "Species-appropriate food improves gut health and reduces digestive issues."
    },
    {
      icon: Sparkles,
      title: "Shinier Coat",
      description: "Natural oils and proteins promote healthy skin and a lustrous, soft coat."
    }
  ];

  const comparison = [
    {
      category: "Ingredients",
      processed: "Fillers, grains, preservatives",
      barf: "100% natural rabbit prey"
    },
    {
      category: "Nutrition",
      processed: "Heat-damaged nutrients",
      barf: "Raw, bioavailable nutrients"
    },
    {
      category: "Digestion",
      processed: "Hard to digest",
      barf: "Species-appropriate"
    },
    {
      category: "Energy",
      processed: "Sugar spikes & crashes",
      barf: "Sustained natural energy"
    }
  ];

  return (
    <section id="why-barf" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">
            Why Choose BARF?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BARF (Biologically Appropriate Raw Food) mimics what your pets would eat in the wild. 
            It's not just food – it's species-appropriate nutrition that transforms health.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index}
                className="text-center hover:transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-premium animate-scale-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-premium/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-premium" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h3 className="font-heading font-bold text-3xl text-center mb-12 text-primary">
            BARF vs. Processed Pet Food
          </h3>
          
          <Card className="overflow-hidden shadow-premium border-0">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-warm">
                      <th className="px-6 py-4 text-left font-heading font-bold text-warm-foreground">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-bold text-warm-foreground">
                        Processed Food
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-bold text-warm-foreground">
                        BARF Diet
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr 
                        key={index}
                        className={`border-b border-border ${index % 2 === 0 ? 'bg-secondary/30' : 'bg-background'}`}
                      >
                        <td className="px-6 py-4 font-semibold text-primary">
                          {row.category}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {row.processed}
                        </td>
                        <td className="px-6 py-4 text-premium font-medium">
                          {row.barf}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-subtle rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="font-heading font-bold text-2xl mb-4 text-primary">
              Ready to Transform Your Pet's Health?
            </h4>
            <p className="text-muted-foreground mb-6">
              Join thousands of pet parents who've made the switch to natural, species-appropriate nutrition.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-premium font-medium">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-premium rounded-full mr-2"></span>
                No Transition Period Needed
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-premium rounded-full mr-2"></span>
                Visible Results in 2-3 Weeks
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-premium rounded-full mr-2"></span>
                Veterinarian Approved
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBarf;