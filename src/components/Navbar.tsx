import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(mockData.header.navLinks[0].href);

  useEffect(() => {
    const handleScroll = () => {
      // Find all sections that have IDs matching our navLinks
      const sections = mockData.header.navLinks.map(link => {
        const id = link.href.replace('#', '');
        return document.getElementById(id);
      }).filter(Boolean) as HTMLElement[];

      // Find the current section
      let currentActive = mockData.header.navLinks[0].href;
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // If the section top is above the middle of the viewport, it's active
        if (rect.top <= window.innerHeight / 2) {
          currentActive = `#${section.id}`;
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 md:py-6 bg-[#050505]/30 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div 
        className="font-headline-lg text-[24px] tracking-widest text-on-surface uppercase cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {mockData.header.logo}
      </div>
      <div className="hidden md:flex items-center gap-8">
        {mockData.header.navLinks.map((link, idx) => {
          const isActive = activeSection === link.href;
          return (
            <a
              key={idx}
              className={`font-label-caps text-[12px] tracking-[0.2em] transition-all duration-300 ease-in-out ${
                isActive
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface/70 hover:text-primary'
              }`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
            </a>
          );
        })}
      </div>
      <button
        onClick={() => {
          document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="active:scale-95 transition-transform duration-200 bg-primary text-on-primary font-label-caps px-6 py-2 tracking-widest hover:bg-white transition-colors"
      >
        {mockData.header.cta}
      </button>
    </nav>
  );
};
