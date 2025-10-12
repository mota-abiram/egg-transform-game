import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Variants = () => {
  const variants = [
    {
      name: "ADVANCED",
      description: "Premium nutritional blend for optimal health",
      nutrients: [
        { icon: "⭐", name: "Vitamin A" },
        { icon: "☀️", name: "Vitamin D3" },
        { icon: "🧠", name: "DHA" },
        { icon: "🌿", name: "Omega 3" },
        { icon: "💪", name: "Selenium" },
      ],
      highlight: true,
    },
    {
      name: "DAILY",
      description: "Essential nutrients for everyday wellness",
      nutrients: [
        { icon: "⭐", name: "Vitamin A" },
        { icon: "☀️", name: "Vitamin D3" },
        { icon: "🧠", name: "DHA" },
        { icon: "💪", name: "Selenium" },
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our <span className="text-gradient">Nutrient Rich</span> Variants
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Choose the perfect blend of nutrients tailored to your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {variants.map((variant, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:scale-105 ${variant.highlight ? 'border-primary border-2 shadow-xl' : ''
                }`}
            >
              {variant.highlight && (
                <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary text-primary-foreground text-xs sm:text-sm">
                  Popular Choice
                </Badge>
              )}

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{variant.name}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{variant.description}</p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {variant.nutrients.map((nutrient, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border-b border-primary/10 last:border-b-0"
                    >
                      <span className="text-xl sm:text-2xl">{nutrient.icon}</span>
                      <span className="text-sm sm:text-base font-medium">{nutrient.name}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 sm:pt-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-20 sm:w-20 sm:h-24 animate-float">
                      <img
                        src="/egg.png"
                        alt="Hello Eggs"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Card className="inline-block p-4 sm:p-6 bg-accent/10">
            <p className="text-base sm:text-lg font-semibold mb-2">Did you know?</p>
            <p className="text-sm sm:text-base text-muted-foreground">
              <span className="font-bold text-accent">5 Regular Eggs</span> = <span className="font-bold text-primary">4 Hello Eggs</span> 🎯
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Variants;
