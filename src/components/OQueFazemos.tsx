import React from 'react';
import { mockData } from '../data/mockData';

export const OQueFazemos: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="o-que-fazemos" className="py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div className="reveal">
          <h2 className="font-display-xl text-[48px] md:text-[80px] leading-none uppercase">
            {mockData.services.title1}<br />{mockData.services.title2}
          </h2>
          <div className="flex items-center gap-2 mt-4 text-primary">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="font-label-caps text-[12px] tracking-widest">{mockData.services.subtitle}</span>
          </div>
        </div>
        <p className="max-w-md font-body-md opacity-60 reveal" style={{ transitionDelay: '200ms' }}>
          {mockData.services.description}
        </p>
      </div>

      <div className="space-y-4">
        {mockData.services.items.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-[180px] rounded-[40px] overflow-hidden glass-card cursor-pointer flex items-center px-6 md:px-12 transition-all hover:h-[220px] reveal"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
              src={item.img}
              alt={item.title}
            />
            <div className="relative z-10 flex w-full justify-between items-center">
              <h3 className="font-display-xl text-[24px] md:text-[40px] uppercase group-hover:translate-x-4 transition-transform text-white">
                {item.title}
              </h3>
              <span className="material-symbols-outlined text-4xl group-hover:rotate-45 transition-transform text-white">
                arrow_outward
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
