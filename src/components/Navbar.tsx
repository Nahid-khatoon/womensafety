import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, PhoneCall, ChevronRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-purple-900/30 shadow-lg shadow-purple-950/20 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="HER SHIELD Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-rose-400 p-[1.5px] shadow-md shadow-purple-500/30 group-hover:shadow-pink-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-pink-300 transition-colors">
                  HER SHIELD
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  AWARENESS
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 hidden sm:inline-block">
                Women Safety & Empowerment
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-purple-950/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:112"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20 transition-all"
              title="Quick SOS Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse text-rose-400" />
              <span>SOS: 112 / 181</span>
            </a>

            <a
              href="#legal-rights"
              onClick={(e) => handleLinkClick(e, '#legal-rights')}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-pink-200" />
              <span>Know Your Rights</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:112"
              className="sm:hidden inline-flex items-center p-2 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40"
              aria-label="Emergency Call 112"
            >
              <PhoneCall className="w-4 h-4 animate-pulse text-rose-400" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-pink-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-purple-500/30 shadow-2xl backdrop-blur-xl animate-fadeIn">
            <div className="grid grid-cols-1 gap-1 pb-3 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-purple-950/50 hover:text-pink-300 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="#legal-rights"
                onClick={(e) => handleLinkClick(e, '#legal-rights')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-md shadow-purple-600/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Know Your Rights</span>
              </a>

              <a
                href="tel:112"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-medium text-rose-300 bg-rose-500/10 border border-rose-500/30"
              >
                <PhoneCall className="w-4 h-4 text-rose-400" />
                <span>National Emergency: Dial 112</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
