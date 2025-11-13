const EggDisplay = () => {
    return (
        <section 
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            // Applied the new linear-gradient background here and removed the old Tailwind classes
            style={{
                background: 'linear-gradient(180deg,rgba(255, 239, 232, 1) 34%, rgba(245, 131, 81, 1) 87%)'
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 max-w-7xl">
                {/* Page Header */}
                <div className="mb-8 sm:mb-10 lg:mb-12 text-center px-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-[#f58351] drop-shadow-sm font-headline" style={{ wordSpacing: "0.25em", letterSpacing: "0.05em" }}>
                        EGGS ARE MORE THAN JUST PROTEIN
                    </h3>
                    <div className="mx-auto mt-3 sm:mt-4 h-1 w-24 sm:w-28 rounded-full bg-[#f58351]"></div>
                </div>
                <div className="flex justify-center px-4">
                    {/* Large Egg Display */}
                    <div className="relative w-full max-w-2xl">
                        <div className="relative">
                            <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-[#c8d5db] shadow-2xl p-4 sm:p-6">
                                {/* Real Egg Image Placeholder - Responsive with proper aspect ratio */}
                                <div className="w-40 h-48 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-80 lg:h-96 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full shadow-inner border-2 sm:border-4 border-white animate-float relative overflow-hidden" style={{ aspectRatio: '1/1.2' }}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-orange-300/50 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-60">🥚</div>
                                </div>
                            </div>

                            {/* Enhanced Metallic Nutrient Badges - Responsive positioning */}
                            <div className="absolute top-1 sm:top-2 md:top-4 lg:top-6 right-1 sm:right-2 md:right-4 lg:right-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-xl px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border-2 border-amber-300">
                            Iron
                            </div>
                            <div className="absolute top-4 sm:top-6 md:top-8 lg:top-12 left-1 sm:left-2 md:left-4 lg:left-6 bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-xl px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border-2 border-cyan-400">
                                Vitamin D
                            </div>
                            <div className="absolute top-8 sm:top-10 md:top-14 lg:top-20 right-1 sm:right-2 md:right-4 lg:right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border-2 border-blue-400">
                            Zinc & Selenium
                            </div>
                            <div className="absolute bottom-12 sm:bottom-14 md:bottom-18 lg:bottom-24 left-1 sm:left-2 md:left-4 lg:left-6 bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border-2 border-green-400">
                            Good Fats
                            </div>
                            <div className="absolute bottom-8 sm:bottom-10 md:bottom-14 lg:bottom-20 right-1 sm:right-2 md:right-4 lg:right-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-xl px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border-2 border-rose-400">
                                Antioxidants
                            </div>
                            <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 lg:bottom-6 left-1 sm:left-2 md:left-4 lg:left-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border-2 border-purple-400">
                            Choline
                            </div>
                            <div className="absolute top-1/2 left-1 sm:left-2 md:left-4 lg:left-6 transform -translate-y-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border-2 border-orange-400">
                                 Vitamin B
                            </div>
                        </div>
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

export default EggDisplay;