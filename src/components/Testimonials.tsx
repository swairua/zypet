import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      location: "Nairobi",
      petName: "Max (Golden Retriever)",
      rating: 5,
      text: "Max's coat has never looked shinier! After switching to Zypet's whole rabbit prey, his energy levels improved dramatically. The natural diet really makes a difference.",
      image: "🐕"
    },
    {
      name: "David Ochieng",
      location: "Kisumu", 
      petName: "Luna (German Shepherd)",
      rating: 5,
      text: "Luna loves the rabbit prey with fur. Her teeth are cleaner, and she's more satisfied after meals. The quality is consistently excellent, and delivery is always on time.",
      image: "🐕‍🦺"
    },
    {
      name: "Grace Wanjiku",
      location: "Mombasa",
      petName: "Whiskers (Maine Coon)",
      rating: 5,
      text: "My cat Whiskers is thriving on the furless rabbit prey. Perfect portion sizes for cats, and I love that it's locally made with no preservatives. Highly recommend!",
      image: "🐱"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-premium text-premium" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">
            What Pet Parents Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real pet families across Kenya who've experienced the Zypet difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-premium animate-scale-in border-0 bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-premium mb-4" />
                
                {/* Rating */}
                <StarRating rating={testimonial.rating} />
                
                {/* Testimonial Text */}
                <blockquote className="text-foreground italic mt-4 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-sm text-premium font-medium">{testimonial.petName}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Join hundreds of satisfied pet parents across Kenya</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-premium font-medium">
            <span>⭐ 500+ Happy Pets</span>
            <span>🚚 Nairobi-wide Delivery</span>
            <span>🇰🇪 Made in Kenya</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;