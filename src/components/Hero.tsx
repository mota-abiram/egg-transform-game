import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Award } from "lucide-react";
import Game from "@/components/Game";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage:
        "linear-gradient(to left top, #f58351, #fa986c, #fdac87, #ffc0a3, #ffd4c0, #ffd9d0, #fddfde, #f8e6e9, #ede1ea, #e0dde8, #d3d9e3, #c8d5db)",
    }}>
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-6">
        {/* Page Header */}
        {/* Changed items-stretch to items-start to align headings */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 h-full items-start">
          {/* Left Content */}
          {/* Changed justify-center to justify-start */}
          <div className="h-full flex flex-col justify-start space-y-4 sm:space-y-6 text-center lg:text-left overflow-y-auto">
            <div className="space-y-4 sm:space-y-6">
              
              {/* Heading moved before badges */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground text-center lg:text-left font-headline" style={{ wordSpacing: "0.25em", letterSpacing: "0.04em" }}>
  India's 1st Enriched <br />
  <span className="text-gradient bg-gradient-to-r from-[#f58351] to-[#f58351] bg-clip-text text-transparent">
    Brown Eggs 
    {/* These classes match the text size classes on the h2:
      - Base: w-8 h-8 (2rem) for text-3xl (1.875rem)
      - sm: w-10 h-10 (2.5rem) for sm:text-4xl (2.25rem)
      - md: w-12 h-12 (3rem) for md:text-5xl (3rem)
      - lg: w-16 h-16 (4rem) for lg:text-6xl (3.75rem)
      - Added 'align-middle' to better center it with the text.
    */}
    <img 
      src="/egg.png" 
      alt="Egg" 
      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 inline-block ml-2 align-middle" 
    />
  </span>
</h2>

              {/* Trust Badges - MOVED HERE */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                <Badge className="bg-[#f58351] text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold shadow-lg">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  100% Natural
                </Badge>
                <Badge className="bg-[#f58351] text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold shadow-lg">
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
              <div className="flex items-center justify-center lg:justify-start gap-2 p-3 bg-[#f58351] rounded-lg">
  {/* Icon color is changed to 'white' for better contrast and visibility 
    against the new orange background.
  */}
  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
  <span className="text-xs sm:text-sm font-medium text-[#ffffff]">
    UV Sanitized, Washed, Stamped
  </span>
</div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg sm:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#f58351] hover:bg-[#f58351]/90 text-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold" asChild>
                  <a href="#game"> Experience the Power</a>
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 border-2 border-[#f58351] hover:bg-[#f58351] hover:text-white text-[#f58351]" asChild>
                  <a href="tel:+916309416417">📞 Order Now</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Game Component */}
          <div className="w-full h-[500px] lg:h-full">
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
