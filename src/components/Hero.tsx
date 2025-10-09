import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-amber-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="text-5xl">🥚</div>
                <div className="flex flex-col">
                  <h1 className="text-4xl md:text-5xl font-bold text-primary leading-none">
                    Hello
                  </h1>
                  <span className="text-lg md:text-xl font-semibold text-muted-foreground -mt-1">
                    EGGS
                  </span>
                </div>
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">
                by Srinivasa Farms
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
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0" asChild>
                <a href="#game">🎮 Experience the Power</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="tel:+916309416417">📞 Order Now</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative">
              <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl border-2 border-orange-100">
                <div className="text-[280px] leading-none animate-float">🥚</div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-6 right-6 bg-white shadow-lg px-4 py-2 rounded-full text-sm font-semibold text-orange-600 border border-orange-200">
                ✨ Enriched
              </div>
              <div className="absolute top-20 right-6 bg-white shadow-lg px-4 py-2 rounded-full text-sm font-semibold text-blue-600 border border-blue-200">
                🧠 DHA
              </div>
              <div className="absolute bottom-24 left-6 bg-white shadow-lg px-4 py-2 rounded-full text-sm font-semibold text-green-600 border border-green-200">
                ☀️ Vitamin D3
              </div>
              <div className="absolute bottom-6 left-6 bg-white shadow-lg px-4 py-2 rounded-full text-sm font-semibold text-purple-600 border border-purple-200">
                🌿 Omega 3
              </div>
            </div>
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
