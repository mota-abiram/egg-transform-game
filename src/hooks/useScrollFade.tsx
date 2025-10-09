import { useEffect, useState } from 'react';

export const useScrollFade = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getFadeStyle = (elementTop: number, elementHeight: number = 100) => {
        const windowHeight = window.innerHeight;

        // Calculate fade based on scroll position - only fade in once
        const fadeInPoint = elementTop - windowHeight * 0.8;

        let opacity = 1;
        let transform = 'translateY(0px)';

        if (scrollY < fadeInPoint) {
            // Element not yet in view - fade in from bottom
            const fadeInProgress = Math.max(0, Math.min(1, (scrollY - fadeInPoint + windowHeight * 0.3) / (windowHeight * 0.3)));
            opacity = fadeInProgress;
            transform = `translateY(${(1 - fadeInProgress) * 30}px)`;
        }

        return {
            opacity,
            transform,
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
        };
    };

    return { scrollY, getFadeStyle };
};
