import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Variants = () => {
  const variants = [
    {
      name: "Hello Eggs — D3 Enriched",
      description: "For Stronger Bones & Better Immunity",
      nutrients: [
        { icon: "🦴", name: "Supports bone strength & joint health" },     
        { icon: "💪", name: "Boosts calcium absorption for muscle function" },
        { icon: "🌤️", name: "Improves immunity & energy levels" },
        { icon: "😊 ", name: "Helps maintain a positive mood and reduce fatigue" },
        { icon: "☀️", name: " Perfect for those with limited sun exposure " },
      ],
      highlight: true,
    },
    {
      name: "Hello Eggs — DHA Enriched",
      description: "For Sharper Minds & Healthier Hearts",
      nutrients: [
        { icon: "🧠", name: "Boosts memory, focus & brain development" },
        { icon: "💓", name: "Promotes heart health and balanced cholesterol" },
        { icon: "👀", name: "Supports eye health & vision clarity" },
        { icon: "👩‍👧", name: " Ideal for children, expecting mothers & active adults" },
        { icon: "🌿", name: " Natural source of essential Omega-3 fats" },
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20" 
    style={{
      background: "linear-gradient(156deg,rgba(255, 239, 232, 1) 24%, rgba(245, 131, 81, 1) 75%)",
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 font-headline" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>
            Our <span className="text-gradient">Nutrient Rich</span> Variants
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-900 max-w-2xl mx-auto px-4 leading-relaxed">
            Choose the perfect blend of nutrients tailored to your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {variants.map((variant, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 lg:p-8 relative overflow-hidden transition-all duration-300 hover:scale-105"
            >
              

              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
  <div>
    <h3 
      // CHANGED: Replaced "normal-case"
      className=" font-headline origin-left scale-x-92 text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3"

      style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}
    >
      {variant.name}
    </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">{variant.description}</p>
                </div>

                <div className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed space-y-2 sm:space-y-3">
                  {variant.nutrients.map((nutrient, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 lg:p-3 rounded-lg bg-[#ffefe8] hover:bg-[#f58351]/10 transition-colors border-b border-[#c8d5db] last:border-b-0"
                    >
                      <span className="text-lg sm:text-xl lg:text-2xl flex-shrink-0">{nutrient.icon}</span>
                      <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 leading-relaxed">{nutrient.name}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 sm:pt-3 lg:pt-4">
                  <div className="flex justify-center">
                    <div className="w-14 h-20 sm:w-20 sm:h-24 lg:w-20 lg:h-24 animate-float">
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

        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <Card className="inline-block p-4 sm:p-5 lg:p-6 bg-white border border-[#c8d5db]">
            <p className="text-sm sm:text-base lg:text-lg font-semibold mb-2">Did you know?</p>
            <p className="text-xs sm:text-sm lg:text-base text-[#000000]">
              <span className="font-bold text-[#f58351]">5 Regular Eggs</span> = <span className="font-bold text-[#f58351]">4 Hello Eggs</span> 🎯
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Variants;
