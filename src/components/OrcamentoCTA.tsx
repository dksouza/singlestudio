import React from 'react';
import { mockData } from '../data/mockData';

interface OrcamentoCTAProps {
  onOpenModal: () => void;
}

export const OrcamentoCTA: React.FC<OrcamentoCTAProps> = ({ onOpenModal }) => {
  return (
    <section id="cta-section" className="px-margin-mobile md:px-margin-desktop py-24 md:py-section-gap">
      <div className="relative w-full aspect-square md:aspect-[21/7] rounded-[40px] md:rounded-[60px] overflow-hidden group reveal">
        <img
          className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
          src={mockData.cta.img}
          alt="CTA Background"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8 bg-black/40 backdrop-blur-[2px]">
          <h2 className="font-display-xl text-[36px] sm:text-[48px] md:text-[100px] leading-none mb-8 md:mb-12 text-white">
            {mockData.cta.title1}<br />{mockData.cta.title2}
          </h2>
          <button
            onClick={onOpenModal}
            className="active:scale-95 transition-transform duration-200 bg-white text-black px-6 py-4 md:px-12 md:py-6 rounded-full font-label-caps text-[12px] md:text-[16px] tracking-wider md:tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-2 md:gap-4 whitespace-nowrap w-full sm:w-auto"
          >
            {mockData.cta.btnText}
            <span className="material-symbols-outlined text-[18px] md:text-[24px]">bolt</span>
          </button>
        </div>
      </div>
    </section>
  );
};
