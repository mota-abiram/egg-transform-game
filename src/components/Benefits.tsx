import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { icon: "✓", text: "100% Natural" },
    { icon: "✓", text: "Veg Feed Only" },
    { icon: "✓", text: "Nutritionally Enhanced" },
    { icon: "✓", text: "Farm to Table in 24hrs" },
    { icon: "✓", text: "1 Egg = 4 Essentials Per Day" },
    { icon: "✓", text: "Cleaned, Graded, Stamped" },
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
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-semibold">{benefit.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
