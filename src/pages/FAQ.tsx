import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: "How much should I feed my dog daily?",
      answer: "Feed 2–3% of your dog's body weight per day. For a 30kg dog, that's about 600–900g daily."
    },
    {
      question: "Why feed raw instead of cooking the rabbit?",
      answer: "Cooking destroys essential enzymes and nutrients. Raw feeding mimics your pet's natural diet and supports better digestion."
    },
    {
      question: "Will feeding raw make my dog aggressive or hunt livestock?",
      answer: "No. That's a myth. Diet does not influence aggression or prey drive."
    },
    {
      question: "Is raw meat harmful to my dog?",
      answer: "Not when it's properly handled and frozen. Dogs are biologically adapted to raw diets due to their strong stomach acids."
    },
    {
      question: "How do I serve the whole rabbit prey?",
      answer: "Thaw, chop if necessary, and serve raw. Do not cook. Large dogs can eat it whole."
    },
    {
      question: "How long can rabbit prey stay frozen?",
      answer: "Up to 6 months when stored below -18°C. Once thawed, use within 1–2 days."
    },
    {
      question: "What's the quality of the rabbit meat? Are they sick or waste animals?",
      answer: "We only supply healthy, clean, hygienically handled rabbits. Never waste or rejects."
    },
    {
      question: "Where are you located?",
      answer: "Venus Complex, along Northern Bypass Road, Nairobi."
    },
    {
      question: "Can I buy less than 12kg?",
      answer: "Yes, we do offer smaller quantities. However, delivery charges apply for orders below 12kg."
    },
    {
      question: "Do you deliver outside Nairobi?",
      answer: "Yes, via public transport or courier services like G4S, Fargo, etc., based on your preference."
    },
    {
      question: "How long does it take to thaw a rabbit?",
      answer: "Approx. 4–6 hours at room temperature or overnight in the fridge."
    },
    {
      question: "Is whole rabbit prey suitable for small dogs or cats?",
      answer: "Yes. The 'without fur' option is ideal. You can cut the meat to portion sizes."
    },
    {
      question: "Do you offer other BARF products?",
      answer: "Coming soon: Raw duck, quail, etc., Minced BARF, and Freeze-dried options for convenience."
    },
    {
      question: "Is the rabbit meat frozen or cooked?",
      answer: "It's delivered frozen raw — never cooked."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ — Raw Rabbit BARF Feeding Questions | Zypet Nutrition</title>
        <meta name="description" content="Answers on feeding amounts, thawing, storage, delivery, and safety of Zypet Nutrition's raw rabbit BARF diet for dogs and cats in Kenya." />
        <link rel="canonical" href="https://zypet-nutrition.lovable.app/faq" />
        <meta property="og:title" content="FAQ — Raw Rabbit BARF Feeding Questions | Zypet Nutrition" />
        <meta property="og:description" content="Answers on feeding amounts, thawing, storage, delivery, and safety of Zypet Nutrition's raw rabbit BARF diet." />
        <meta property="og:url" content="https://zypet-nutrition.lovable.app/faq" />
      </Helmet>
      <Navigation />
      
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our BARF diet products and feeding practices.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-premium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;