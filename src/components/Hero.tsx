import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Award } from "lucide-react";
import Game from "@/components/Game";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-amber-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Page Header */}
        
        {/* Changed items-stretch to items-start to align headings */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          {/* Changed justify-center to justify-start */}
          <div className="h-full flex flex-col justify-start space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              
              {/* Heading moved before badges */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-center lg:text-left">
              India's 1st Enriched <br />
                <span className="text-gradient bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Brown Eggs 🥚
                </span>
              </h2>

              {/* Trust Badges - MOVED HERE */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                <Badge className="bg-green-500/90 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-lg">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  100% Natural
                </Badge>
                <Badge className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-lg">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  40+ Years of Experience
                </Badge>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Packed with Vitamin D3 & DHA for smarter nutrition, every day.
                <br />
                <span className="font-semibold text-foreground">One egg. Endless benefits.</span>
              </p>

              {/* UV Sanitization Feature */}
              <div className="flex items-center justify-center lg:justify-start gap-2 p-3 bg-white/50 rounded-lg border border-green-200/50">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="text-xs sm:text-sm font-medium text-green-700">
                  UV Sanitized, Washed, Stamped
                </span>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg sm:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold" asChild>
                  <a href="#game">🎮 Experience the Power</a>
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 border-2 hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="tel:+916309416417">📞 Order Now</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Game Component */}
          <div className="relative">
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
