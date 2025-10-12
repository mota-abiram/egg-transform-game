const EggDisplay = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-amber-50/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-20">
                <div className="flex justify-center">
                    {/* Large Egg Display */}
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

export default EggDisplay;
