import React, { useState } from 'react';
import {
  Scale,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Info,
} from 'lucide-react';
import { LEGAL_RIGHTS_DATA } from '../data/safetyData';
import type { LegalRightCard } from '../data/safetyData';

export const LegalRights: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(LEGAL_RIGHTS_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="legal-rights" className="relative py-24 bg-slate-950/70 border-t border-slate-900">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <Scale className="w-3.5 h-3.5 text-pink-400" />
            <span>INDIAN CONSTITUTIONAL & STATUTORY RIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Women's <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Legal Rights</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The legal framework in India establishes strong protections guaranteeing safety, dignity, and free access to justice. Understanding your legal rights is the first step toward decisive protection.
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 shrink-0 mt-0.5">
            <Info className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-purple-200 uppercase tracking-wide mb-1">
              Informational Legal Awareness Disclaimer
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              This section is purely educational and aimed at general legal literacy in India. It does <strong>not</strong> constitute formal legal advice, representation, or attorney-client relationship. For specific legal issues, always consult a licensed advocate, the District Legal Services Authority (DLSA), or contact the National Commission for Women (NCW).
            </p>
          </div>
        </div>

        {/* Legal Cards Grid */}
        <div className="space-y-4">
          {LEGAL_RIGHTS_DATA.map((act: LegalRightCard) => {
            const isExpanded = expandedId === act.id;

            return (
              <div
                key={act.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-900/90 border-purple-500/50 shadow-xl shadow-purple-950/40'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Accordion / Card Trigger */}
                <button
                  type="button"
                  onClick={() => toggleExpand(act.id)}
                  className="w-full p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isExpanded
                          ? 'bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-md shadow-purple-600/30'
                          : 'bg-slate-800/80 text-purple-400 border border-slate-700/60'
                      }`}
                    >
                      <Scale className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">
                          Key Legislation
                        </span>
                        <span className="text-slate-500 text-xs hidden sm:inline">•</span>
                        <span className="text-xs text-pink-300/90 font-medium">
                          {act.actName}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {act.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                      {isExpanded ? 'Hide Details' : 'View Rights'}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-pink-400 bg-purple-950' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 animate-fadeIn">
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {act.summary}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-slate-950/60 border border-purple-500/20">
                        <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-pink-400" />
                          <span>Protected Rights & Provisions</span>
                        </h4>
                        <ul className="space-y-2">
                          {act.keyProvisions.map((prov, i) => (
                            <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                              <span>{prov}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/60 border border-purple-500/20 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-purple-400" />
                            <span>How to Exercise & File Complaints</span>
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {act.howToExercise}
                          </p>
                        </div>

                        {act.officialPortalUrl && (
                          <div className="pt-4 mt-4 border-t border-slate-800">
                            <a
                              href={act.officialPortalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
                            >
                              <span>{act.portalLabel || 'Official Resource Portal'}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Free Legal Aid Highlight */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Universal Free Legal Aid (Section 12, NALSA Act)</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                In India, all women have a statutory right to free government-appointed legal counsel regardless of income level.
              </p>
            </div>
          </div>
          <a
            href="https://nalsa.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-950 hover:bg-pink-100 transition-colors flex items-center gap-2"
          >
            <span>NALSA Legal Services</span>
            <ExternalLink className="w-4 h-4 text-slate-800" />
          </a>
        </div>
      </div>
    </section>
  );
};
