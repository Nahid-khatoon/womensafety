import React from 'react';
import { Shield, ArrowUp, PhoneCall, Sparkles, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Safety Tips', href: '#safety-tips' },
    { name: 'Self Defence', href: '#self-defence' },
    { name: 'Legal Rights', href: '#legal-rights' },
    { name: 'Emergency Help', href: '#emergency' },
    { name: 'Checklist', href: '#checklist' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 text-slate-400 text-sm overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-purple-950/20 blur-[150px] pointer-events-none" />

      {/* Emergency Strip Bar */}
      <div className="bg-gradient-to-r from-purple-950/80 via-slate-900 to-pink-950/80 border-b border-purple-900/30 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
            <span className="text-white">Emergency Helplines:</span>
            <span className="text-rose-400">Police/ERSS: 112</span>
            <span>•</span>
            <span className="text-pink-400">Women Helpline: 181</span>
            <span>•</span>
            <span className="text-purple-400">Cyber Crime: 1930</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:112"
              className="text-white hover:text-rose-400 transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>Direct Dial 112</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-rose-400 p-[1.5px] flex items-center justify-center shadow-lg shadow-purple-600/30">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-pink-400" />
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white block">
                  HER SHIELD
                </span>
                <span className="text-xs text-purple-300 font-medium">
                  Women Safety & Awareness Platform
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
              A 100% static educational platform dedicated to advancing women's safety literacy,
              legal consciousness, digital hygiene, and prompt awareness of emergency support services across India.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Built for Education & Community Awareness</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-slate-400 hover:text-pink-300 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-purple-500 text-xs">›</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Official Portals */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Official Indian Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center justify-between py-1 border-b border-slate-800/80"
                >
                  <span>Cyber Crime Reporting</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://ncw.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center justify-between py-1 border-b border-slate-800/80"
                >
                  <span>National Commission for Women</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center justify-between py-1 border-b border-slate-800/80"
                >
                  <span>NALSA (Free Legal Aid)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://shebox.wcd.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center justify-between py-1 border-b border-slate-800/80"
                >
                  <span>Ministry of WCD SHe-Box</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Informational Disclaimer Box */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
          <strong className="text-slate-300">Disclaimer:</strong> HER SHIELD is an educational awareness web application. It does not provide real-time tracking, does not automatically transmit distress signals to police, and is not a substitute for formal legal, psychological, or medical counsel. In urgent emergencies, always dial <strong>112</strong> immediately.
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 HER SHIELD. All rights reserved. Created for safety awareness & empowerment.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-pink-300 border border-slate-800 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
