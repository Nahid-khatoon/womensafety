import React from 'react';
import { ArrowRight, Sparkles, Shield, BookOpen, Lock, HeartHandshake } from 'lucide-react';
import heroImage from '../assets/hero-empowerment.jpg';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center">
      {/* Decorative Gradient Background Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-[-5%] w-[450px] h-[450px] bg-pink-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[300px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-950/80 to-pink-950/80 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-pink-400 animate-ping" />
              <span>WOMEN SAFETY • AWARENESS • EMPOWERMENT</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Your Safety. <br />
              Your Voice. <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                Your Power.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              Empowering women with safety awareness, practical guidance, knowledge of legal rights,
              and resources to make informed decisions in everyday life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => scrollToSection('#safety-tips')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Explore Safety Tips</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#legal-rights')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-purple-500/30 hover:border-pink-500/50 hover:text-white shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>Know Your Rights</span>
              </button>
            </div>

            {/* Three Small Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Focus Area</h4>
                  <p className="text-sm font-bold text-white">Personal Safety</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Statutory</h4>
                  <p className="text-sm font-bold text-white">Legal Awareness</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cyber Shield</h4>
                  <p className="text-sm font-bold text-white">Digital Security</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Illustration & Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Background Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl transform scale-95" />

            {/* Central Artwork Card */}
            <div className="relative z-10 w-full max-w-[440px] rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/60 bg-slate-900 group">
              <div className="relative aspect-square overflow-hidden bg-slate-950">
                <img
                  src={heroImage}
                  alt="Confident empowered woman surrounded by a protective luminous aura"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Knowledge is Defense</p>
                      <p className="text-[11px] text-slate-400">Education • Resilience • Agency</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Awareness
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 1: Top-Left */}
            <div className="absolute -top-4 -left-4 sm:-left-8 z-20 animate-float hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-purple-500/40 shadow-xl backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Stay Aware, Stay Safe</p>
                <p className="text-[10px] text-purple-300">Proactive alertness</p>
              </div>
            </div>

            {/* Floating Card 2: Right Middle */}
            <div className="absolute -right-4 sm:-right-8 top-1/3 z-20 animate-float-delayed hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-pink-500/40 shadow-xl backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-pink-500/20 text-pink-300 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Your Rights Matter</p>
                <p className="text-[10px] text-pink-300">Legal awareness</p>
              </div>
            </div>

            {/* Floating Card 3: Bottom Left */}
            <div className="absolute -bottom-6 left-6 z-20 animate-float hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-indigo-500/40 shadow-xl backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Digital Safety First</p>
                <p className="text-[10px] text-indigo-300">Privacy & protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
