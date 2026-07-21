import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Check, Drumstick, Rabbit, Beef } from 'lucide-react';
import rabbitWithoutFurAsset from '@/assets/rabbit-without-fur.png.asset.json?url';
import rabbitMincedAsset from '@/assets/rabbit-minced.png.asset.json?url';

type Category = 'prey' | 'human' | 'chicken';
type PreyVariant = 'with-fur' | 'without-fur' | 'minced-with-fur' | 'minced-without-fur';

const PHONE = '254759436251';

const openWhatsApp = (message: string) => {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

// ---------- PREY DATA ----------
const preyVariants: Record<PreyVariant, { title: string; pricePerKg: number; image: string; subtitle: string; benefits: string[] }> = {
  'with-fur': {
    title: 'With Fur',
    pricePerKg: 500,
    image: '/lovable-uploads/2b707307-537b-4590-ad7f-263ef87c8703.png',
    subtitle: 'Great for Large Dogs',
    benefits: ['Natural fiber for gut health', 'Dental cleaning action', 'Mental stimulation', 'Complete nutrition'],
  },
  'without-fur': {
    title: 'Without Fur',
    pricePerKg: 600,
    image: rabbitWithoutFurAsset,
    subtitle: 'Ideal for Cats & Puppies',
    benefits: ['Easier digestion', 'Perfect for cats', 'Ideal for puppies', 'Clean presentation'],
  },
  'minced-with-fur': {
    title: 'Minced With Fur',
    pricePerKg: 600,
    image: rabbitMincedAsset,
    subtitle: 'Easy-Serve Whole Prey',
    benefits: ['Ready to serve', 'Natural fiber included', 'Great for mixed feeders', 'Portion friendly'],
  },
  'minced-without-fur': {
    title: 'Minced Without Fur',
    pricePerKg: 700,
    image: rabbitMincedAsset,
    subtitle: 'Soft & Gentle',
    benefits: ['Perfect for seniors', 'Easy for small breeds', 'Fast digestion', 'No prep needed'],
  },
};

const preyPackages = [
  { name: 'Starter Pack', kg: 5 },
  { name: 'Loyal Bowl', kg: 10 },
  { name: 'Power Meal', kg: 15 },
  { name: 'Family Pack', kg: 20 },
  { name: 'Pro Pack', kg: 25 },
  { name: 'Breeders Bulk', kg: 30 },
];

// ---------- HUMAN-GRADE RABBIT ----------
const humanGradeProducts = [
  { name: 'Whole Rabbit', desc: 'No fur, no skin — human-grade cuts', pricePerKg: 900 },
  { name: 'Whole Rabbit Minced', desc: 'Cleaned & minced for easy serving', pricePerKg: 1000 },
  { name: 'Deboned / Boneless', desc: 'Pure boneless rabbit meat', pricePerKg: 1300 },
  { name: 'Minced Boneless', desc: 'Premium boneless minced meat', pricePerKg: 1400 },
];

// ---------- CHICKEN ----------
const chickenProducts = [
  { name: 'Chicken Heads', pricePerKg: 120 },
  { name: 'Chicken Feet', pricePerKg: 150 },
  { name: 'Chicken Necks', pricePerKg: 220 },
  { name: 'Chicken Liver', pricePerKg: 350 },
  { name: 'Chicken Heart', pricePerKg: 450 },
  { name: 'Chicken Gizzards', pricePerKg: 550 },
];

const ProductShowcase = () => {
  const [category, setCategory] = useState<Category>('prey');
  const [preyVariant, setPreyVariant] = useState<PreyVariant>('with-fur');

  const currentPrey = preyVariants[preyVariant];

  const categoryTabs: { key: Category; label: string; icon: typeof Rabbit }[] = [
    { key: 'prey', label: 'Whole Rabbit Prey', icon: Rabbit },
    { key: 'human', label: 'Human-Grade Rabbit', icon: Beef },
    { key: 'chicken', label: 'Chicken Products', icon: Drumstick },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From whole prey BARF diets to premium chicken cuts — nutrition for every pet.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-secondary rounded-xl p-2 flex flex-wrap gap-2 justify-center">
            {categoryTabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className={`px-5 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  category === key
                    ? 'bg-premium text-premium-foreground shadow-soft'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ===== TAB A: WHOLE RABBIT PREY ===== */}
        {category === 'prey' && (
          <div className="animate-fade-in">
            {/* Variant sub-toggle */}
            <div className="flex justify-center mb-10">
              <div className="bg-secondary/60 rounded-xl p-2 flex flex-wrap gap-2 justify-center">
                {(Object.keys(preyVariants) as PreyVariant[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setPreyVariant(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      preyVariant === key
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {preyVariants[key].title}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image + info */}
              <div className="animate-scale-in">
                <div className="relative mb-6">
                  <img
                    src={currentPrey.image}
                    alt={`Whole Rabbit Prey - ${currentPrey.title}`}
                    className="w-full h-96 object-cover rounded-2xl shadow-premium"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-premium text-premium-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {currentPrey.title}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-2xl text-primary mb-1">
                  Whole Rabbit Prey — {currentPrey.title}
                </h3>
                <p className="text-premium font-medium mb-3">{currentPrey.subtitle}</p>
                <p className="text-2xl font-bold text-primary mb-4">
                  KES {currentPrey.pricePerKg.toLocaleString()}<span className="text-base font-normal text-muted-foreground">/kg</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentPrey.benefits.map((b, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-accent mr-2" />
                      <span className="text-foreground text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packages */}
              <div>
                <h4 className="font-heading font-semibold text-xl text-primary mb-2">
                  Packages & Prices
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Minimum order: 5kg • Delivered frozen
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {preyPackages.map((pkg) => {
                    const price = pkg.kg * currentPrey.pricePerKg;
                    return (
                      <Card key={pkg.name} className="border-2 hover:border-premium transition-colors">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-primary">{pkg.name}</h5>
                          <p className="text-sm text-muted-foreground mb-1">{pkg.kg}kg</p>
                          <p className="text-xl font-bold text-premium mb-3">
                            KES {price.toLocaleString()}
                          </p>
                          <Button
                            size="sm"
                            onClick={() =>
                              openWhatsApp(
                                `Hi! I'd like to order the ${pkg.name} (${pkg.kg}kg) of ${currentPrey.title} Whole Rabbit Prey — KES ${price.toLocaleString()}.`
                              )
                            }
                            className="w-full bg-gradient-warm text-warm-foreground hover:opacity-90"
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Order
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB B: HUMAN-GRADE RABBIT ===== */}
        {category === 'human' && (
          <div className="animate-fade-in">
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                Cleaner cuts for pet parents who prefer human-grade rabbit meat — no fur, no skin.
                Perfect for gentle feeders, senior pets, and homemade recipes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {humanGradeProducts.map((p) => (
                <Card key={p.name} className="border-2 hover:border-premium hover:shadow-premium transition-all">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="bg-premium/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Rabbit className="h-7 w-7 text-premium" />
                    </div>
                    <h5 className="font-heading font-semibold text-lg text-primary mb-1">{p.name}</h5>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
                    <p className="text-2xl font-bold text-premium mb-4">
                      KES {p.pricePerKg.toLocaleString()}
                      <span className="text-sm font-normal text-muted-foreground">/kg</span>
                    </p>
                    <Button
                      onClick={() =>
                        openWhatsApp(
                          `Hi! I'd like to order ${p.name} at KES ${p.pricePerKg}/kg. Please share available quantities.`
                        )
                      }
                      className="w-full bg-gradient-warm text-warm-foreground hover:opacity-90"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Order via WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ===== TAB C: CHICKEN ===== */}
        {category === 'chicken' && (
          <div className="animate-fade-in">
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                Fresh frozen chicken products — ideal for raw feeding, breeders, kennels, trainers,
                and pet food manufacturers. <span className="font-semibold text-primary">Minimum order: 10kg per product.</span>
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {chickenProducts.map((p) => (
                <Card key={p.name} className="border-2 hover:border-premium hover:shadow-premium transition-all">
                  <CardContent className="p-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="bg-premium/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <Drumstick className="h-6 w-6 text-premium" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-heading font-semibold text-primary truncate">{p.name}</h5>
                        <p className="text-lg font-bold text-premium">
                          KES {p.pricePerKg}
                          <span className="text-xs font-normal text-muted-foreground">/kg</span>
                        </p>
                        <span className="inline-block text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded mt-1">
                          Min 10kg
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      aria-label={`Order ${p.name} via WhatsApp`}
                      onClick={() =>
                        openWhatsApp(
                          `Hi! I'd like to order ${p.name} at KES ${p.pricePerKg}/kg (min 10kg). Please confirm availability.`
                        )
                      }
                      className="bg-gradient-warm text-warm-foreground hover:opacity-90"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Payment Info */}
        <div className="mt-10 max-w-2xl mx-auto p-4 bg-secondary rounded-xl text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Payment:</strong> Till Number <span className="text-primary font-semibold">5630044</span> or Payment on Delivery
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
