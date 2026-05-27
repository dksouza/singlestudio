import React, { useEffect, useRef } from 'react';
import { mockData } from '../data/mockData';

export const Hero: React.FC = () => {
  const heroImgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ticker1Ref = useRef<HTMLDivElement>(null);
  const ticker2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${scroll * 0.3}px)`;
      }
      if (textRef.current) {
        textRef.current.style.opacity = `${Math.max(0, 1 - scroll / 500)}`;
        textRef.current.style.transform = `translateY(${scroll * 0.5}px)`;
      }
      if (ticker1Ref.current) {
        ticker1Ref.current.style.transform = `translateX(${-scroll * 0.8}px)`;
      }
      if (ticker2Ref.current) {
        ticker2Ref.current.style.transform = `translateX(${-1500 + scroll * 0.8}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="home" className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <img
            ref={heroImgRef}
            src={mockData.hero.image}
            alt={mockData.hero.imageAlt}
            className="w-full h-[120%] -top-[10%] relative object-cover opacity-40 mix-blend-screen"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]"></div>
          <div className="absolute inset-0 noise-overlay opacity-30"></div>
        </div>

        {/* Centered Text */}
        <div ref={textRef} className="relative z-10 text-center px-4 w-full flex flex-col items-center will-change-transform">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-primary/60"></span>
            <span className="font-label-caps text-primary tracking-[0.4em]">{mockData.hero.badge}</span>
            <span className="w-12 h-[1px] bg-primary/60"></span>
          </div>
          
          <h1 className="font-display-xl text-[48px] md:text-[100px] uppercase leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
            {mockData.hero.titleStart}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary drop-shadow-2xl">
              {mockData.hero.titleHighlight}
            </span>
          </h1>
        </div>
      </section>

      {/* Tickers Section */}
      <section className="relative w-full pb-24 bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
        {/* Faixa Principal */}
        <div className="w-[110%] -ml-[5%] relative -rotate-2 bg-white/5 py-6 border-y border-white/10 overflow-hidden z-10 backdrop-blur-md shadow-2xl">
          <div ref={ticker1Ref} className="flex whitespace-nowrap font-label-caps text-on-surface will-change-transform w-max">
            {[...mockData.hero.tickerItems, ...mockData.hero.tickerItems, ...mockData.hero.tickerItems, ...mockData.hero.tickerItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 px-10 hover:text-primary transition-colors cursor-default">
                <span className="material-symbols-outlined text-[16px] text-primary/50">bolt</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Faixa Secundária (Fundo/Reversa) */}
        <div className="w-[110%] -ml-[5%] absolute top-1/2 -translate-y-1/2 rotate-3 py-6 overflow-hidden opacity-20 z-0">
          <div ref={ticker2Ref} className="flex whitespace-nowrap font-label-caps text-primary will-change-transform w-max" style={{ transform: 'translateX(-1500px)' }}>
            {[...mockData.hero.tickerItems, ...mockData.hero.tickerItems, ...mockData.hero.tickerItems, ...mockData.hero.tickerItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 px-10 cursor-default">
                <span className="material-symbols-outlined text-[16px] opacity-50">bolt</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
