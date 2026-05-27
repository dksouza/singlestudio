import React from 'react';
import { mockData } from '../data/mockData';

export const Projetos: React.FC = () => {
  return (
    <section className="py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
        <div className="reveal">
          <h2 className="font-display-xl text-[48px] md:text-[80px] leading-none uppercase">
            {mockData.projetos.title1}<br />{mockData.projetos.title2}
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-24 h-6 barcode-line"></div>
            <span className="font-label-caps text-[10px] opacity-40">{mockData.projetos.subtitle}</span>
          </div>
        </div>
        <button
          className="active:scale-95 transition-transform duration-200 flex items-center gap-3 bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:bg-white hover:text-black transition-all reveal"
          style={{ transitionDelay: '200ms' }}
        >
          {mockData.projetos.btnText}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {mockData.projetos.items.map((item, idx) => (
          <div key={idx} className="group relative aspect-[4/5] rounded-[48px] overflow-hidden glass-card reveal">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              src={item.img}
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12">
              <h3 className="font-headline-lg text-white">{item.title}</h3>
              <p className="font-label-caps text-primary">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
