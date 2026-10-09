import React from 'react';
import {
  Radar,
  Maximize2,
  Megaphone,
  Zap,
  Award,
  AlertTriangle,
  ShieldAlert,
  ArrowDownCircle,
  CheckCircle2,
} from 'lucide-react';
import { SELF_DEFENCE_MODULES } from '../data/safetyData';
import type { SelfDefenceTip } from '../data/safetyData';
import selfDefenceImg from '../assets/self-defence.jpg';

const moduleIconMap: Record<string, React.ReactNode> = {
  Radar: <Radar className="w-5 h-5 text-purple-400" />,
  Maximize2: <Maximize2 className="w-5 h-5 text-pink-400" />,
  Megaphone: <Megaphone className="w-5 h-5 text-fuchsia-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Award: <Award className="w-5 h-5 text-emerald-400" />,
};

export const SelfDefence: React.FC = () => {
  const scrollToBasics = () => {
    const el = document.querySelector('#defence-modules');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="self-defence" className="relative py-24 bg-slate-950/80 border-t border-slate-900">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
              <ShieldAlert className="w-3.5 h-3.5 text-pink-400" />
              <span>DEFENSIVE CAPABILITY & DISENGAGEMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Self-Defence Awareness & <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                De-escalation Strategy
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Practical self-defense is not about fighting or scoring points in a ring; it is about early threat recognition, decisive vocal boundaries, preserving reaction distance, and creating an opening to flee to safety.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToBasics}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm"
              >
                <span>Learn Safety Basics</span>
                <ArrowDownCircle className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400 font-medium">
                Focus on Escape • De-escalation First
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/50 group">
              <img
                src={selfDefenceImg}
                alt="Women self defence and boundary assertion training demonstration"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-5">
                <p className="text-xs font-semibold text-pink-200">
                  Building instinctive muscle memory and assertive vocal power
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vital Safety Caution Box */}
        <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-amber-950/25 border border-amber-500/40 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-200 uppercase tracking-wide mb-1">
              Important Safety & Defensive Notice
            </h4>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              No physical technique or self-defense maneuver can guarantee complete physical safety in every situation. The primary objective of all defensive readiness is <strong>de-escalation, deterrence, and rapid escape</strong>. Material possessions are always replaceable; your personal safety and preservation are the sole priorities.
            </p>
          </div>
        </div>

        {/* Modules Grid */}
        <div id="defence-modules" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SELF_DEFENCE_MODULES.map((module: SelfDefenceTip, idx) => (
            <div
              key={module.id}
              className={`rounded-3xl bg-slate-900/70 border border-purple-500/20 p-6 flex flex-col justify-between hover:border-pink-500/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/40 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                    {moduleIconMap[module.icon] || <Radar className="w-5 h-5 text-purple-400" />}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 tracking-wider">
                    MODULE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {module.title}
                </h3>
                <h4 className="text-xs font-semibold text-pink-400 mb-3">
                  {module.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {module.description}
                </p>

                <div className="pt-3 border-t border-slate-800">
                  <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Tactical Takeaways:
                  </h5>
                  <ul className="space-y-2">
                    {module.actionPoints.map((pt, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
