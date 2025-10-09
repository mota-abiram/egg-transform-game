import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-secondary/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <img 
                src="https://images.unsplash.com/photo-1569288052389-dac9b0ac9eac?w=200&h=80&fit=crop" 
                alt="Hello Eggs Logo" 
                className="h-20 w-auto"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Say Hello to<br />
                <span className="text-gradient">Nature's<br />Multivitamin</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground italic">
                One Egg Endless Benefits at Every Stage of Your Life
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#game">🎮 Try Interactive Game</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="tel:+916309416417">📞 Call Now</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative animate-float">
              <div className="w-full h-[500px] flex items-center justify-center">
                <div className="text-[300px] leading-none">🥚</div>
              </div>
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                Enriched Brown Eggs
              </div>
              <div className="absolute bottom-20 left-0 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold">
                D3 & DHA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 text-6xl opacity-20 animate-float">☀️</div>
      <div className="absolute bottom-40 left-10 text-4xl opacity-20 animate-float" style={{animationDelay: '1s'}}>🌿</div>
    </section>
  );
};

export default Hero;
