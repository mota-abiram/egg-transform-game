import { Card } from "@/components/ui/card";
import { CheckCircle, Ban, Sun, Brain, Trophy, Wheat } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "100% Natural & Farm Fresh",
      description:
        "Straight from healthy, well-cared-for hens raised in optimal conditions.",
      color: "text-green-600",
    },
    {
      icon: Ban,
      title: "No Antibiotics or Hormones",
      description:
        "We believe nutrition should be clean, honest, and chemical-free.",
      color: "text-red-500",
    },
    {
      icon: Sun,
      title: "UV Sanitized, Washed & Stamped",
      description:
        "Every egg goes through a hygienic, certified process for your family’s safety.",
      color: "text-yellow-500",
    },
    {
      icon: Brain,
      title: "Farm fresh daily",
      description:
        "Designed to support stronger bones, sharper minds, and overall vitality.",
      color: "text-purple-600",
    },
    {
      icon: Trophy,
      title: "40+ Years of experience",
      description:
        "From the house of Srinivasa Farms — pioneers in India’s poultry nutrition and innovation for over four decades.",
      color: "text-amber-600",
    },
    {
      icon: Wheat,
      title: "One Egg. Endless Benefits",
      description:
        "A simple daily choice that transforms everyday nutrition into lasting wellness.",
      color: "text-amber-600",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white/60 to-orange-50/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          What Makes  <span className="text-gradient">Hello Eggs </span>Different?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            From your first steps to your golden years, Hello Eggs provide the essential nutrients your body needs naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 bg-card border-2 hover:border-primary/20"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${benefit.color}`} />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-semibold">
                      {benefit.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
