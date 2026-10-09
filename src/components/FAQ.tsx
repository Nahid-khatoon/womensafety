import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/safetyData';
import type { FAQItem } from '../data/safetyData';

export const FAQ: React.FC = () => {
  // Support keeping one or multiple items open
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-4']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="relative py-24 bg-slate-950">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-pink-400" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Direct, practical answers to common questions about public transit safety, online privacy, legal remedies, and emergency actions.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq: FAQItem) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-purple-500/50 shadow-xl shadow-purple-950/30'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-pink-400 bg-purple-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-fadeIn">
                    <p className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/60">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helpful Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-purple-950/30 to-pink-950/20 border border-purple-500/20">
          <p className="text-xs sm:text-sm text-slate-300 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>Have a question not addressed here? Feel free to reach out via our demonstration feedback form below.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
