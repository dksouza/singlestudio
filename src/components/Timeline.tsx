import React, { useEffect, useRef } from 'react';
import { mockData } from '../data/mockData';

export const Timeline: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Handle Title reveal
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        if (titleRect.top < windowHeight * 0.85) {
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }
      }

      // Handle Line and Items
      if (lineRef.current) {
        const rect = lineRef.current.getBoundingClientRect();
        
        // Calculate how much of the timeline is visible
        if (rect.top < windowHeight && rect.bottom > 0) {
          // The line grows as we scroll down
          const scrolled = windowHeight * 0.6 - rect.top; // The glow is slightly above the bottom
          const total = rect.height;
          const percentage = Math.min(100, Math.max(0, (scrolled / total) * 100));
          
          lineRef.current.style.setProperty('--scroll-percent', `${percentage}%`);
        }

        // Handle each item reveal
        itemsRef.current.forEach((el) => {
          if (!el) return;
          const itemRect = el.getBoundingClientRect();
          // Reveal when the item reaches 75% of the viewport height
          if (itemRect.top < windowHeight * 0.75) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      }
    };

    // Trigger once on mount to check initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="nosso-processo" className="py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-[#050505] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div 
        ref={titleRef}
        className="text-center mb-24 transition-all duration-1000 ease-out"
        style={{ opacity: 0, transform: 'translateY(40px)' }}
      >
        <h2 className="font-display-xl text-[40px] md:text-[64px] uppercase text-white tracking-widest">
          {mockData.timeline.title}
        </h2>
        <div className="w-24 h-[1px] bg-primary/40 mx-auto mt-6"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Central Vertical Line Container */}
        <div 
          ref={lineRef}
          className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-white/10"
        >
          {/* Glowing animated line that grows with scroll */}
          <div 
            className="absolute top-0 left-0 w-full bg-primary shadow-[0_0_15px_rgba(var(--color-primary),0.8)] transition-all duration-[500ms] ease-out"
            style={{ height: 'var(--scroll-percent, 0%)' }}
          ></div>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 relative z-10">
          {mockData.timeline.items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                ref={(el) => { itemsRef.current[idx] = el; }}
                className="flex flex-col md:flex-row items-start md:items-center w-full transition-all duration-1000 ease-out"
                style={{ opacity: 0, transform: 'translateY(60px)' }}
              >
                {/* Left Side (Desktop) */}
                <div className={`hidden md:block w-1/2 ${isEven ? 'pr-16 text-right' : 'order-3 pl-16 text-left'}`}>
                  {isEven ? (
                    <div>
                      <h3 className="font-headline-lg text-[24px] text-white uppercase mb-4">{item.title}</h3>
                      <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="font-display-xl text-[80px] text-white/5 font-bold leading-none">{item.step}</div>
                  )}
                </div>

                {/* Center Node */}
                <div className={`absolute left-[28px] md:static md:w-auto md:flex-shrink-0 -translate-x-1/2 md:translate-x-0 ${isEven ? 'order-2' : 'order-2'}`}>
                  <div className="w-4 h-4 rounded-full bg-[#050505] border-2 border-primary relative z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Right Side (Desktop) */}
                <div className={`pl-16 md:w-1/2 ${isEven ? 'order-3 md:pl-16 text-left' : 'order-1 md:pr-16 md:text-right'}`}>
                  {isEven ? (
                    <div className="hidden md:block font-display-xl text-[80px] text-white/5 font-bold leading-none">{item.step}</div>
                  ) : (
                    <div className="hidden md:block">
                      <h3 className="font-headline-lg text-[24px] text-white uppercase mb-4">{item.title}</h3>
                      <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                    </div>
                  )}

                  {/* Mobile Content (Always right of the line) */}
                  <div className="md:hidden block">
                    <div className="font-display-xl text-[40px] text-white/10 font-bold leading-none mb-2">{item.step}</div>
                    <h3 className="font-headline-lg text-[20px] text-white uppercase mb-3">{item.title}</h3>
                    <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
