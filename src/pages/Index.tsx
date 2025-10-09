import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Variants from "@/components/Variants";
import Game from "@/components/Game";
import Availability from "@/components/Availability";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Variants />
      <Game />
      <Availability />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">
            🥚 Hello Eggs - Nature's Multivitamin
          </p>
          <p className="text-sm opacity-80">
            © 2025 Srinivasa Farms. All rights reserved.
          </p>
          <p className="text-sm opacity-80 mt-2">
            Enriched with D3, DHA, Selenium & Omega 3
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
