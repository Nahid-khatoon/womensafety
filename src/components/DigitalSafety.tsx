import React from 'react';
import {
  KeyRound,
  EyeOff,
  AlertTriangle,
  UserX,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Smartphone,
} from 'lucide-react';
import { DIGITAL_SAFETY_CARDS } from '../data/safetyData';
import type { DigitalSafetyCard } from '../data/safetyData';

const iconMap: Record<string, React.ReactNode> = {
  KeyRound: <KeyRound className="w-5 h-5 text-purple-400" />,
  EyeOff: <EyeOff className="w-5 h-5 text-pink-400" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5 text-amber-400" />,
  UserX: <UserX className="w-5 h-5 text-rose-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
};

const badgeColorMap: Record<string, string> = {
  Essential: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  'High Priority': 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'Best Practice': 'bg-pink-500/15 text-pink-300 border-pink-500/30',
};

export const DigitalSafety: React.FC = () => {
  return (
    <section id="digital-safety" className="relative py-24 bg-slate-950">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
            <Lock className="w-3.5 h-3.5 text-pink-400" />
            <span>CYBER RESILIENCE & PRIVACY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Digital Safety & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Online Security</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            In an interconnected world, physical safety and digital safety are inseparable.
            Safeguard your accounts, personal media, spatial location, and identity from harassment and malicious actors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIGITAL_SAFETY_CARDS.map((card: DigitalSafetyCard, idx) => (
            <div
              key={card.id}
              className={`rounded-3xl bg-slate-900/70 border border-purple-500/20 p-6 sm:p-7 flex flex-col justify-between hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                    {iconMap[card.icon] || <Lock className="w-5 h-5 text-purple-400" />}
                  </div>

                  <span
                    className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${
                      badgeColorMap[card.alertLevel] || 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    }`}
                  >
                    {card.alertLevel}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {card.summary}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-800">
                  <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider block mb-2">
                    Implementation Checklist:
                  </span>
                  {card.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Emergency Reporting Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/90 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-300 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Targeted by Cyberstalking or Non-Consensual Image Leaks?</p>
              <p className="text-xs text-slate-300">
                Lodge confidential complaints at the National Cyber Crime Portal or dial toll-free 1930.
              </p>
            </div>
          </div>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-md shadow-purple-600/30"
          >
            Visit cybercrime.gov.in
          </a>
        </div>
      </div>
    </section>
  );
};
