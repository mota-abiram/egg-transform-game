import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Variants from "@/components/Variants";
import Game from "@/components/Game";
import EggDisplay from "@/components/EggDisplay";
import Availability from "@/components/Availability";
import { useScrollFade } from "@/hooks/useScrollFade";
import { useRef } from "react";

const Home = () => {
    const { getFadeStyle } = useScrollFade();
    const benefitsRef = useRef<HTMLDivElement>(null);
    const variantsRef = useRef<HTMLDivElement>(null);
    const gameRef = useRef<HTMLDivElement>(null);
    const availabilityRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen">
            <Hero />
            <div ref={benefitsRef} style={getFadeStyle(benefitsRef.current?.offsetTop || 0, 400)}>
                <Benefits />
            </div>
            <div ref={gameRef} style={getFadeStyle(gameRef.current?.offsetTop || 0, 600)}>
                <EggDisplay />
            </div>
            <div ref={variantsRef} style={getFadeStyle(variantsRef.current?.offsetTop || 0, 400)}>
                <Variants />
            </div>
            <div ref={availabilityRef} style={getFadeStyle(availabilityRef.current?.offsetTop || 0, 400)}>
                <Availability />
            </div>

            {/* Footer */}
            <footer className="bg-[#f58351] text-white py-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-4 left-10 text-4xl opacity-20 animate-float">🥚</div>
                    <div className="absolute top-8 right-16 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🌿</div>
                    <div className="absolute bottom-6 left-1/4 text-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>☀️</div>
                    <div className="absolute bottom-4 right-1/3 text-3xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-10">
                            <img
                                src="/egg.png"
                                alt="Hello Eggs Logo"
                                className="w-full h-full object-contain"
                            />
                        </div> 
                        <p className="text-lg font-semibold">
                            Hello Eggs - Nature's Multivitamin
                        </p>
                    </div>
                    <p className="text-sm opacity-90">
                        © 2025 Srinivasa Farms. All rights reserved.
                    </p>
                    <p className="text-sm opacity-90 mt-2">
                        Enriched with Vitamin A, D3, DHA, Selenium & Omega 3
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
