import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Award, ShoppingCart, ChevronDown } from "lucide-react";
import Game from "@/components/Game";
import eggImage from "/egg.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Hero = () => {
  const partners = [
    {
      name: 'Blinkit',
      logo: 'blinkit.jpeg',
      link: 'https://link.blinkit.com/b/p3o9zd8v',
      padding: 'p-0',
      fit: 'object-cover'
    },
    {
      name: 'Zepto',
      logo: 'zepto.png',
      link: 'https://zepto-prod.onelink.me/tC90/iifcnkrf',
      padding: 'p-0',
      fit: 'object-cover',
      imageClass: 'scale-[1.3]'
    }
  ];

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden hero-bg-responsive pb-24 sm:pb-16">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
        {/* Page Header */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 h-full items-center">
          {/* Left Content */}
          <div className="h-full flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-5 text-center lg:text-left bg-white/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-0 p-12 sm:p-6 rounded-xl shadow-md lg:shadow-none">
            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground text-center lg:text-left font-headline "
              style={{ wordSpacing: "0.10em", letterSpacing: "0.05em", textShadow: "1px 1px 6px rgba(0,0,0,0.15)" }}
            >
              India's 1st Enriched <br />
              <span
                className="text-primary"
                style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}
              >
                Brown Eggs
                <img
                  src={eggImage}
                  alt="Egg"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 inline-block mr-4 align-middle"
                />
              </span>
            </h2>

            {/* Trust Badges */}
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-left items-center"
              style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}
            >
              <Badge className="bg-white text-primary border border-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold shadow-sm hover:bg-orange-50">
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                100% Natural
              </Badge>
              <Badge className="bg-white text-primary border border-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold shadow-sm hover:bg-orange-50">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                60+ Years of Experience
              </Badge>
            </div>

            {/* UV Sanitization Feature */}
            <div className="flex items-center justify-center lg:justify-start gap-2 p-1.5 sm:p-3 bg-orange-50/50 border border-orange-100 rounded-lg shadow-sm w-fit mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span
                className="text-xs sm:text-sm font-bold text-foreground/80"
                style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}
              >
                UV Sanitized, Washed, Stamped
              </span>
            </div>

            <p className="text-[16px] sm:text-lg md:text-xl text-gray-900 max-w-lg mx-auto lg:mx-0 text-center lg:text-left leading-relaxed">
              Packed with Vitamin D3 & DHA for smarter nutrition, every day.
              <br />
              <span className="font-semibold text-gray-900">One egg. Endless benefits.</span>
            </p>

            {/* CTA Buttons - Improved shadows for visibility */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
              <Button
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 font-bold rounded-lg min-w-[200px] sm:min-w-[220px]"
                asChild
              >
                <a href="#game">Experience the Power</a>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 border-2 border-primary hover:bg-primary hover:text-white text-primary font-semibold rounded-lg min-w-[200px] sm:min-w-[220px] shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Order Online
                    <ChevronDown className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="p-4 bg-white/95 backdrop-blur-md border-2 border-primary/20 shadow-2xl rounded-2xl flex items-center gap-6 animate-in fade-in zoom-in duration-200"
                >
                  {partners.map((partner) => (
                    <DropdownMenuItem
                      key={partner.name}
                      asChild
                      className="p-0 focus:bg-transparent"
                    >
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item outline-none"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-xl group-hover/item:ring-4 group-hover/item:ring-primary/10">
                          <img
                            src={`${import.meta.env.BASE_URL}${partner.logo}`}
                            alt={partner.name}
                            className={`w-full h-full ${partner.fit} ${partner.padding} ${partner.imageClass || ''}`}
                          />
                        </div>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Right Content - Game Component */}
          <div className="w-full h-[420px] sm:h-[520px] lg:h-[600px] flex items-center justify-center mt-8 sm:mt-0">
            <Game />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 right-4 sm:right-20 text-2xl sm:text-4xl opacity-10 animate-float">☀️</div>
      <div
        className="absolute bottom-20 sm:bottom-40 left-4 sm:left-10 text-xl sm:text-3xl opacity-10 animate-float"
        style={{ animationDelay: "1s" }}
      >
        🌿
      </div>
      <div
        className="absolute top-1/2 left-4 sm:left-20 text-lg sm:text-2xl opacity-5 animate-float"
        style={{ animationDelay: "2s" }}
      >
        🥚
      </div>
    </section>
  );
};

export default Hero;
