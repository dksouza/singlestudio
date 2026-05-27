import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { QuemSomos } from './components/QuemSomos';
// import { Projetos } from './components/Projetos';
import { OQueFazemos } from './components/OQueFazemos';
import { OrcamentoCTA } from './components/OrcamentoCTA';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 2.0, // Defines how long the scroll takes to stop
      easing: (t) => 1 - Math.pow(1 - t, 4), // Custom easeOutQuart for a buttery slow-down stop
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.5, // Gives more travel distance per wheel notch
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    // Polling ensures we catch any elements added by HMR or React re-renders 
    // that might have lost their .active class.
    const interval = setInterval(() => {
      const elements = document.querySelectorAll('.reveal:not(.active)');
      elements.forEach(el => observer.observe(el));
    }, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="font-body-md antialiased noise-overlay min-h-screen">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Timeline />
        <QuemSomos />
        {/* <Projetos /> */}
        <OQueFazemos />
        <OrcamentoCTA onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <Footer />
      
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
