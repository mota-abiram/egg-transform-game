import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Variants = () => {
  const variants = [
    {
      name: "ADVANCED",
      description: "Premium nutritional blend for optimal health",
      nutrients: [
        { icon: "⭐", name: "Vitamin A" },
        { icon: "☀️", name: "Vitamin D" },
        { icon: "🌿", name: "Vitamin E" },
        { icon: "🐟", name: "Omega 3" },
        { icon: "💪", name: "Selenium" },
        { icon: "🧠", name: "DHA" },
      ],
      highlight: true,
    },
    {
      name: "DAILY",
      description: "Essential nutrients for everyday wellness",
      nutrients: [
        { icon: "⭐", name: "Vitamin A" },
        { icon: "☀️", name: "Vitamin D" },
        { icon: "🌿", name: "Vitamin E" },
        { icon: "💪", name: "Selenium" },
        { icon: "🧠", name: "DHA" },
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Nutrient Rich</span> Variants
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect blend of nutrients tailored to your lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {variants.map((variant, index) => (
            <Card
              key={index}
              className={`p-8 relative overflow-hidden transition-all duration-300 hover:scale-105 ${variant.highlight ? 'border-primary border-2 shadow-xl' : ''
                }`}
            >
              {variant.highlight && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Popular Choice
                </Badge>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{variant.name}</h3>
                  <p className="text-muted-foreground">{variant.description}</p>
                </div>

                <div className="space-y-3">
                  {variant.nutrients.map((nutrient, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border-b border-primary/10 last:border-b-0"
                    >
                      <span className="text-2xl">{nutrient.icon}</span>
                      <span className="font-medium">{nutrient.name}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="text-8xl text-center animate-float">🥚</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-accent/10">
            <p className="text-lg font-semibold mb-2">Did you know?</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-accent">5 Regular Eggs</span> = <span className="font-bold text-primary">4 Hello Eggs</span> 🎯
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Variants;
