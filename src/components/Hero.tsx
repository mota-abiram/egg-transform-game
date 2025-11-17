import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Award } from "lucide-react";
import Game from "@/components/Game";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-responsive">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
        {/* Page Header */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 h-full items-center">
          {/* Left Content */}
          <div className="h-full flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-5 text-center lg:text-left">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground text-center lg:text-left font-headline" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>
              India's 1st Enriched <br />
              <span className="text-[#f58351]" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>
                Brown Eggs<img 
                  src="/egg.png" 
                  alt="Egg" 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 inline-block ml-1 align-middle" 
                />
              </span>
            </h2>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center items-center">
              <Badge className="bg-[#f58351] text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold shadow-lg">
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                100% Natural
              </Badge>
              <Badge className="bg-[#f58351] text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold shadow-lg">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                40+ Years of Experience
              </Badge>
            </div>

            <p className="text-[16px] sm:text-lg md:text-xl text-gray-900 max-w-lg mx-auto lg:mx-0 text-center lg:text-left leading-relaxed" >
              Packed with Vitamin D3 & DHA for smarter nutrition, every day.
              <br />
              <span className="font-semibold text-gray-900">One egg. Endless benefits.</span>
            </p>

            {/* UV Sanitization Feature */}
            <div className="flex items-center justify-center lg:justify-start gap-2 p-2.5 sm:p-3 bg-[#f58351] rounded-lg">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-xs sm:text-sm font-medium text-white">
                UV Sanitized, Washed, Stamped
              </span>
            </div>

            {/* CTA Buttons - Optimized for above the fold */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 bg-[#f58351] hover:bg-[#e67542] text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 font-bold rounded-lg min-w-[200px] sm:min-w-[220px]" 
                asChild
              >
                <a href="#game">Experience the Power</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 border-2 border-[#f58351] hover:bg-[#f58351] hover:text-white text-[#f58351] font-semibold rounded-lg min-w-[200px] sm:min-w-[220px]" 
                asChild
              >
                <a href="tel:+916309416417">📞 Order Now</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Game Component */}
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <Game />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 right-4 sm:right-20 text-2xl sm:text-4xl opacity-10 animate-float">☀️</div>
      <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-10 text-xl sm:text-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🌿</div>
      <div className="absolute top-1/2 left-4 sm:left-20 text-lg sm:text-2xl opacity-5 animate-float" style={{ animationDelay: '2s' }}>🥚</div>
    </section>
  );
};

export default Hero;
