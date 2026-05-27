import React from 'react';
import { mockData } from '../data/mockData';

export const QuemSomos: React.FC = () => {
  return (
    <section id="quem-somos" className="py-section-gap grid-bg flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop text-center">
      <div className="max-w-4xl reveal">
        <h2 className="font-display-xl text-[48px] md:text-[80px] leading-none uppercase text-primary mb-8 tracking-widest text-center">
          {mockData.quemSomos.title}
        </h2>
        <p className="font-display-xl text-[32px] md:text-[64px] leading-tight text-on-surface">
          {mockData.quemSomos.quotePart1}{' '}
          <span className="inline-block px-8 py-2 bg-secondary rounded-full transform -rotate-2 align-middle mx-2 text-on-secondary">
            <span className="material-symbols-outlined align-middle mr-2">architecture</span>
          </span>
          {mockData.quemSomos.quotePart2}{' '}
          <span className="inline-block px-8 py-2 bg-primary rounded-full transform rotate-2 align-middle mx-2 text-on-primary">
            <span className="material-symbols-outlined align-middle mr-2">north_east</span>
          </span>
          {mockData.quemSomos.quotePart3}
        </p>
      </div>
    </section>
  );
};
