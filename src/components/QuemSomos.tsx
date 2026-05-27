import React from 'react';
import { mockData } from '../data/mockData';

export const QuemSomos: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 md:py-section-gap relative overflow-hidden bg-[#050505]">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <h2 className="font-display-xl text-[40px] md:text-[64px] leading-none uppercase text-white tracking-widest text-center mb-16 md:mb-24 reveal">
          {mockData.quemSomos.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Floating Image Section */}
          <div className="relative flex justify-center reveal">
            <div className="relative w-full max-w-[400px] aspect-[4/5] animate-float glass-card rounded-2xl overflow-hidden p-2">
              <div className="w-full h-full relative rounded-xl overflow-hidden bg-[#0a0a0a]">
                {/* Image overlay to ensure dark aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src={mockData.quemSomos.image} 
                  alt={mockData.quemSomos.founderName}
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-primary/20 rounded-full animate-spin-slow pointer-events-none hidden md:block"></div>
            <div className="absolute top-12 -right-4 text-primary/40 font-label-caps text-xs tracking-[0.3em] rotate-90 hidden md:block">
              FOUNDER_ID_01
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="inline-flex items-center border border-white/10 px-6 py-2 rounded-full w-fit bg-white/5 backdrop-blur-sm">
              <span className="font-label-caps text-[12px] tracking-widest text-primary font-bold">
                {mockData.quemSomos.founderName}
              </span>
              <span className="text-white/20 mx-3">|</span>
              <span className="font-label-caps text-[12px] tracking-widest text-on-surface-variant">
                {mockData.quemSomos.founderRole}
              </span>
            </div>
            
            <h3 className="font-headline-lg text-[28px] md:text-[40px] leading-tight text-white uppercase">
              Transformando a Complexidade em <span className="text-primary italic">Elegância</span>.
            </h3>

            <p className="font-body-md text-on-surface-variant text-[16px] md:text-[18px] leading-relaxed md:leading-loose">
              {mockData.quemSomos.description}
            </p>

            <div className="mt-4 pt-8 border-t border-white/10 flex gap-12">
              <div>
                <div className="font-display-xl text-3xl text-white mb-1">15+</div>
                <div className="font-label-caps text-[10px] tracking-widest text-on-surface/50">ANOS DE EXPERIÊNCIA</div>
              </div>
              <div>
                <div className="font-display-xl text-3xl text-primary mb-1">100%</div>
                <div className="font-label-caps text-[10px] tracking-widest text-on-surface/50">PERFORMANCE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
