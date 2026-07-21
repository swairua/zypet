import { Rabbit, Snowflake, MapPin } from 'lucide-react';

const Pillars = () => {
  const pillars = [
    {
      icon: Rabbit,
      title: "Whole Prey",
      description: "Complete nutrition with bones, organs, meat, and fur - exactly as nature intended for your pets."
    },
    {
      icon: Snowflake,
      title: "Raw & Frozen",
      description: "Flash-frozen to preserve nutrients and eliminate harmful bacteria while maintaining natural taste."
    },
    {
      icon: MapPin,
      title: "Kenyan Made",
      description: "Locally sourced from trusted suppliers with strict quality control for the freshest product."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-background rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-soft group-hover:shadow-premium transition-shadow">
                  <IconComponent className="h-10 w-10 text-premium" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;