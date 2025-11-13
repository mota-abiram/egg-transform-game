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
    <section
      className="py-12 sm:py-16 lg:py-20"
      // Updated to "Peach to Blue-Gray (Warm to Cool)" from style guide
      style={{
        background: "linear-gradient(180deg, #ffefe8 0%, #c8d5db 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 font-headline text-[#000000]"
            style={{ wordSpacing: "0.25em", letterSpacing: "0.04em" }}
          >
            What Makes
            {/* Applied gradient style directly from style guide */}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #f58351, #f58351)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {" "}
              Hello Eggs{" "}
            </span>
            Different?
          </h2>
          {/* Replaced text-muted-foreground with a color from the palette */}
          <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto px-4">
            From your first steps to your golden years, Hello Eggs provide the
            essential nutrients your body needs naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                // FIX: All background logic is now in className.
                // The inline 'style' attribute has been removed.
                className="p-4 sm:p-6 
                           transition-all duration-500 ease-out 
                           border-2 border-[#c8d5db]
                           hover:border-[#f58351]
                           hover:shadow-2xl hover:-translate-y-1
                           bg-[linear-gradient(158deg,_#f58351_0%,_#c8d5db_75%)]
                           hover:bg-gradient-to-t hover:from-white hover:to-white"
              >
                {" "}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f58351] flex items-center justify-center mt-1">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    {/* Set title color to black */}
                    <p className="text-base sm:text-lg font-semibold font-logo text-[#000000]">
                      {benefit.title}
                    </p>
                    {/* Replaced text-muted-foreground AND added text-justify */}
                    <p className="text-base text-black/80  text-left  font-stretch-50%">
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