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
            <div ref={benefitsRef} className="mt-8 sm:mt-12" style={getFadeStyle(benefitsRef.current?.offsetTop || 0, 400)}>
                <Benefits />
            </div>
            <div ref={gameRef} className="mt-8 sm:mt-12" style={getFadeStyle(gameRef.current?.offsetTop || 0, 600)}>
                <EggDisplay />
            </div>
            <div ref={variantsRef} className="mt-8 sm:mt-12" style={getFadeStyle(variantsRef.current?.offsetTop || 0, 400)}>
                <Variants />
            </div>
            <div ref={availabilityRef} style={getFadeStyle(availabilityRef.current?.offsetTop || 0, 400)}>
                <Availability />
            </div>

            {/* Repeated CTA Section - Near Bottom */}
            {/* Footer */}
            <footer className="bg-[#f58351] text-white py-12 sm:py-16 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-4 left-10 text-4xl opacity-20 animate-float">🥚</div>
                    <div className="absolute top-8 right-16 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🌿</div>
                    <div className="absolute bottom-6 left-1/4 text-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>☀️</div>
                    <div className="absolute bottom-4 right-1/3 text-3xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
                        {/* Brand Section */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                <div className="w-8 h-10">
                                    <img
                                        src="/egg.png"
                                        alt="Hello Eggs Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div> 
                                <p className="text-lg sm:text-xl font-bold font-logo"  style={ {wordSpacing: "0.10em", letterSpacing : "0.05em" }}>
                                    Hello Eggs
                                </p>
                            </div>
                            <p className="text-sm sm:text-base text-white/90 mb-2">
                                Nature's Multivitamin
                            </p>
                            <p className="text-xs sm:text-sm text-white/80">
                                Enriched with Vitamin A, D3, DHA, Selenium & Omega 3
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center md:text-left">
                            <h3 className="text-base sm:text-lg font-semibold mb-4 font-headline" style={{ wordSpacing: "0.10em", letterSpacing: "0.10em" }}>Quick Links</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li>
                                    <a href="/" className="text-sm sm:text-base text-white/90 hover:text-white transition-colors">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="text-sm sm:text-base text-white/90 hover:text-white transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/faqs" className="text-sm sm:text-base text-white/90 hover:text-white transition-colors">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-sm sm:text-base text-white/90 hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center md:text-left">
                            <h3 className="text-base sm:text-lg font-semibold mb-4 font-headline" style={{ wordSpacing: "0.10em", letterSpacing: "0.10em" }}>Get in Touch</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li>
                                    <a href="tel:+916309416417" className="text-sm sm:text-base text-white/90 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                                        <span>📞</span> +91 6309 416 417
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/helloeggs_india" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-white/90 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                                        <span>📷</span> @helloeggs_india
                                    </a>
                                </li>
                                <li>
                                    <a href="https://srinivasafarms.com" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-white/90 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                                        <span>🌐</span> Visit Website
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
                        <p className="text-xs sm:text-sm text-white/80">
                            © 2025 Srinivasa Farms. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
