import React, { useState } from 'react';
import {
  SAFETY_CATEGORIES,
  SAFETY_TIPS,
} from '../data/safetyData';
import type { SafetyTipItem } from '../data/safetyData';
import {
  Compass,
  Volume2,
  Car,
  Navigation,
  Briefcase,
  FileText,
  Lock,
  ShieldAlert,
  MapPin,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';

const tipIconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-purple-400" />,
  Volume2: <Volume2 className="w-5 h-5 text-pink-400" />,
  Car: <Car className="w-5 h-5 text-indigo-400" />,
  Navigation: <Navigation className="w-5 h-5 text-rose-400" />,
  Briefcase: <Briefcase className="w-5 h-5 text-purple-400" />,
  FileText: <FileText className="w-5 h-5 text-fuchsia-400" />,
  Lock: <Lock className="w-5 h-5 text-emerald-400" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-rose-400" />,
  MapPin: <MapPin className="w-5 h-5 text-amber-400" />,
};

export const SafetyTips: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('personal');

  const filteredTips = SAFETY_TIPS.filter((tip) => tip.category === activeCategory);

  return (
    <section id="safety-tips" className="relative py-24 bg-slate-950">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            <span>PRACTICAL PLAYBOOK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Safety Tips</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Select a context below to review tactical precautions, vital routines, and actionable
            checkpoints tailored for everyday scenarios.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SAFETY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>
            );
          })}
        </div>

        {/* Tip Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTips.map((tip: SafetyTipItem) => (
            <div
              key={tip.id}
              className="rounded-3xl bg-slate-900/70 border border-purple-500/20 p-6 sm:p-8 flex flex-col justify-between hover:border-pink-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/40"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0">
                      {tipIconMap[tip.icon] || <Compass className="w-5 h-5 text-purple-400" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {tip.title}
                      </h3>
                      <p className="text-xs text-purple-300 font-medium">
                        {tip.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Do's and Avoid Lists */}
                <div className="space-y-5 my-6">
                  {/* Recommended Actions */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Recommended Best Practices</span>
                    </div>
                    <ul className="space-y-2">
                      {tip.doList.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                          <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions to Avoid */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span>Pitfalls & Vulnerabilities to Avoid</span>
                    </div>
                    <ul className="space-y-2">
                      {tip.avoidList.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                          <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Takeaway Banner */}
              <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 to-pink-950/30 border border-purple-500/25 flex items-start gap-3">
                <Lightbulb className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-pink-200 leading-relaxed">
                  <strong className="text-white">Golden Rule:</strong> {tip.keyAdvice}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Help Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 text-purple-400" />
            <span>Need immediate guidance on legal remedies or reporting procedures? Check the</span>
            <a href="#legal-rights" className="text-pink-400 hover:text-pink-300 underline font-semibold">
              Women's Legal Rights section
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
