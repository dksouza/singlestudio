import React from 'react';
import { mockData } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-10 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="font-headline-lg text-[20px] tracking-widest text-on-surface uppercase">
          {mockData.footer.logo}
        </div>
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
          {mockData.header.navLinks.map((link, idx) => (
            <a
              key={idx}
              className="text-on-surface/40 font-label-caps text-[10px] tracking-[0.2em] hover:text-on-surface transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-label-caps text-[10px] text-on-surface/40">
          {mockData.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
