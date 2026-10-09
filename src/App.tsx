import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SafetyTips } from './components/SafetyTips';
import { SelfDefence } from './components/SelfDefence';
import { DigitalSafety } from './components/DigitalSafety';
import { LegalRights } from './components/LegalRights';
import { EmergencyHelp } from './components/EmergencyHelp';
import { SafetyChecklist } from './components/SafetyChecklist';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PhoneCall, ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-fuchsia-500 selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <SafetyTips />
        <SelfDefence />
        <DigitalSafety />
        <LegalRights />
        <EmergencyHelp />
        <SafetyChecklist />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Elements (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Quick Floating SOS Button */}
        <a
          href="tel:112"
          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs shadow-xl shadow-rose-900/40 hover:scale-105 active:scale-95 transition-all border border-rose-400/40"
          title="Emergency 112"
          aria-label="Direct Call 112"
        >
          <PhoneCall className="w-3.5 h-3.5 animate-pulse text-white" />
          <span>SOS 112</span>
        </a>

        {/* Floating Back to Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-purple-500/30 flex items-center justify-center shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4 text-pink-400" />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
