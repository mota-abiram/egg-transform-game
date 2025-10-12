const EggDisplay = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-amber-50/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-20">
                <div className="flex justify-center">
                    {/* Large Egg Display */}
                    <div className="relative">
                        <div className="relative">
                            <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl border-2 border-orange-100 shadow-2xl">
                                {/* Real Egg Image Placeholder */}
                                <div className="w-80 h-96 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full shadow-inner border-4 border-white animate-float relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-orange-300/50 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-60">🥚</div>
                                </div>
                            </div>

                            {/* Enhanced Metallic Nutrient Badges */}
                            <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-xl px-4 py-2 rounded-full text-sm font-bold border-2 border-amber-300">
                                ☀️ Vitamin D3
                            </div>
                            <div className="absolute top-20 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl px-4 py-2 rounded-full text-sm font-bold border-2 border-blue-400">
                                🧠 DHA
                            </div>
                            <div className="absolute bottom-24 left-6 bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl px-4 py-2 rounded-full text-sm font-bold border-2 border-green-400">
                                🌿 Omega 3
                            </div>
                            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl px-4 py-2 rounded-full text-sm font-bold border-2 border-purple-400">
                                💪 Selenium
                            </div>
                            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl px-4 py-2 rounded-full text-sm font-bold border-2 border-orange-400">
                                ⭐ Vitamin A
                            </div>
                            <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl px-4 py-2 rounded-full text-sm font-bold border-2 border-emerald-400">
                                🌿 Vitamin E
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

export default EggDisplay;
