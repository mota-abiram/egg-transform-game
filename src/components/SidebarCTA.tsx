import React from 'react';

const SidebarCTA = () => {
    const partners = [
        {
            name: 'Blinkit',
            logo: 'blinkit.jpeg',
            link: 'https://link.blinkit.com/b/p3o9zd8v',
            bgColor: 'bg-[#F8CB46]',
            padding: 'p-0',
            fit: 'object-cover'
        },
        {
            name: 'Zepto',
            logo: 'zepto.png',
            link: 'https://zepto-prod.onelink.me/tC90/iifcnkrf',
            bgColor: 'bg-[#3C006B]',
            padding: 'p-0',
            fit: 'object-cover',
            imageClass: 'scale-[1.3]'
        },

    ];

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 p-3 pr-2 bg-primary shadow-2xl rounded-l-2xl border-y border-l border-[#d4a036] transition-transform duration-300 hover:-translate-x-1">

            {/* Vertical Text */}
            <div
                className="writing-mode-vertical text-sm sm:text-base font-black text-white uppercase tracking-widest py-2 select-none"
                style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)'
                }}
            >
                Order Now
            </div>

            {/* Separator */}
            <div className="w-8 h-[2px] bg-white/30 rounded-full" />

            {/* Partner Buttons */}
            {partners.map((partner) => (
                <a
                    key={partner.name}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Get fast delivery on ${partner.name}`}
                    className="
                        group relative flex items-center justify-center
                        w-12 h-12 sm:w-14 sm:h-14
                        rounded-xl shadow-lg
                        transition-all duration-300
                        hover:scale-110 hover:shadow-xl
                        overflow-hidden border-2 border-white/20 hover:border-white
                    "
                >
                    <img
                        src={`${import.meta.env.BASE_URL}${partner.logo}`}
                        alt={`${partner.name} logo`}
                        className={`w-full h-full ${partner.fit} ${partner.padding} ${partner.imageClass || ''}`}
                    />
                </a>
            ))}
        </div>
    );
};

export default SidebarCTA;
