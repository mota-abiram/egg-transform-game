import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Award } from "lucide-react";
import Game from "@/components/Game";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-amber-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <div className="text-8xl drop-shadow-2xl filter brightness-110">🥚</div>
                <div className="flex flex-col">
                  <h1 className="text-7xl md:text-8xl font-black text-primary leading-none drop-shadow-lg">
                    Hello
                  </h1>
                  <span className="text-3xl md:text-4xl font-black text-foreground -mt-2 drop-shadow-md">
                    EGGS
                  </span>
                </div>
              </div>
              <div className="mt-3 text-lg text-muted-foreground font-medium">
                by Srinivasa Farms
              </div>

              {/* Trust Badges */}
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge className="bg-green-500/90 text-white px-4 py-2 text-sm font-medium shadow-lg">
                  <Leaf className="w-4 h-4 mr-2" />
                  100% Natural
                </Badge>
                <Badge className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 text-sm font-medium shadow-lg">
                  <Award className="w-4 h-4 mr-2" />
                  40+ Years of Experience
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Nature's Perfect<br />
                <span className="text-gradient bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Multivitamin
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Enriched with D3, DHA, Selenium & Omega 3.
                <br />
                <span className="font-semibold text-foreground">One egg, endless benefits.</span>
              </p>

              {/* UV Sanitization Feature */}
              <div className="flex items-center gap-2 p-3 bg-white/50 rounded-lg border border-green-200/50">
                <Sparkles className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-700">
                  UV Sanitized, Washed, Stamped
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-xl px-10 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold" asChild>
                  <a href="#game">🎮 Experience the Power</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="tel:+916309416417">📞 Order Now</a>
                </Button>
              </div>

              {/* Trust Signals - Retailer Logos */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <p className="text-sm text-muted-foreground font-medium">Available at:</p>
                <div className="flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                    <span className="text-sm font-semibold text-gray-700">Big Basket</span>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                    <span className="text-sm font-semibold text-gray-700">Amazon</span>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                    <span className="text-sm font-semibold text-gray-700">Flipkart</span>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                    <span className="text-sm font-semibold text-gray-700">Reliance Fresh</span>
                  </div>
                </div>
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
      <div className="absolute top-20 right-20 text-4xl opacity-10 animate-float">☀️</div>
      <div className="absolute bottom-40 left-10 text-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🌿</div>
      <div className="absolute top-1/2 left-20 text-2xl opacity-5 animate-float" style={{ animationDelay: '2s' }}>🥚</div>
    </section>
  );
};

export default Hero;
