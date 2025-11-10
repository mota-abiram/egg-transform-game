const EggDisplay = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-amber-50/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Page Header */}
                <div className="mb-8 sm:mb-10 text-center">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                        EGGS ARE MORE THAN JUST PROTEIN
                    </h3>
                    <div className="mx-auto mt-3 h-1 w-24 sm:w-28 rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400"></div>
                </div>
                <div className="flex justify-center">
                    {/* Large Egg Display */}
                    <div className="relative w-full max-w-2xl">
                        <div className="relative">
                            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl sm:rounded-3xl border-2 border-orange-100 shadow-2xl">
                                {/* Real Egg Image Placeholder */}
                                <div className="w-48 h-56 sm:w-64 sm:h-72 lg:w-80 lg:h-96 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full shadow-inner border-2 sm:border-4 border-white animate-float relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-orange-300/50 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl lg:text-6xl opacity-60">🥚</div>
                                </div>
                            </div>

                            {/* Enhanced Metallic Nutrient Badges */}
                            <div className="absolute top-2 sm:top-4 lg:top-6 right-2 sm:right-4 lg:right-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-amber-300">
                            Iron
                            </div>
                            <div className="absolute top-6 sm:top-10 lg:top-12 left-2 sm:left-4 lg:left-6 bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-cyan-400">
                                Vitamin D
                            </div>
                            <div className="absolute top-12 sm:top-16 lg:top-20 right-2 sm:right-4 lg:right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-blue-400">
                            Zinc & Selenium
                            </div>
                            <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-2 sm:left-4 lg:left-6 bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-green-400">
                            Good Fats
                            </div>
                            <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-2 sm:right-4 lg:right-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-rose-400">
                                Antioxidants
                            </div>
                            <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-2 sm:left-4 lg:left-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-purple-400">
                            Choline
                            </div>
                            <div className="absolute top-1/2 left-2 sm:left-4 lg:left-6 transform -translate-y-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-orange-400">
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
