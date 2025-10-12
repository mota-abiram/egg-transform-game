import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Sparkles, Home, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { icon: CheckCircle, text: "100% Natural", color: "text-green-600" },
    { icon: Shield, text: "No Antibiotics", color: "text-red-500" },
    { icon: Sparkles, text: "UV Sanitized, Washed, Stamped", color: "text-blue-600" },
    { icon: Home, text: "Farm Fresh Only", color: "text-orange-600" },
    { icon: Award, text: "40+ Years of Experience", color: "text-purple-600" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white/60 to-orange-50/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Hello Eggs</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From your first steps to your golden years, Hello Eggs provide the essential nutrients your body needs naturally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 bg-card border-2 hover:border-primary/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <p className="text-lg font-semibold">{benefit.text}</p>
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
