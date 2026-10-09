import React from 'react';
import { ShieldCheck, Sparkles, Eye, Compass, CheckCircle } from 'lucide-react';
import { ABOUT_CARDS } from '../data/safetyData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-purple-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-pink-400" />,
  Eye: <Eye className="w-6 h-6 text-fuchsia-400" />,
  Compass: <Compass className="w-6 h-6 text-indigo-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-slate-950/60 border-t border-slate-900">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-950/30 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            <span>FOUNDATIONAL PERSPECTIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Women Safety <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Matters</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Safety is not a privilege or an afterthought; it is a fundamental human right.
            Empowering women with comprehensive safety awareness creates resilient communities where
            every woman can learn, work, travel, and thrive without fear.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-purple-900/20 hover:border-pink-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/40 group"
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:bg-purple-950/60 group-hover:border-purple-500/40 transition-colors">
                    {iconMap[card.icon]}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50 group-hover:text-pink-300 group-hover:border-pink-500/30 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="inline-block text-[11px] font-semibold text-purple-400 mb-2 uppercase tracking-wide">
                  {card.tag}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-pink-100 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-medium text-slate-400 group-hover:text-purple-300 transition-colors">
                <CheckCircle className="w-3.5 h-3.5 text-pink-400" />
                <span>Actionable Insight</span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-pink-950/40 border border-purple-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-600/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Knowledge is the Ultimate Deterrent</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Studies show that situational alertness and confident posture deter upwards of 70% of opportunistic confrontation attempts.
              </p>
            </div>
          </div>
          <a
            href="#safety-tips"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-950 hover:bg-pink-100 hover:text-slate-900 transition-colors shadow-sm"
          >
            Explore Practical Tips
          </a>
        </div>
      </div>
    </section>
  );
};
