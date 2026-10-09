import React, { useState } from 'react';
import {
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { INITIAL_CHECKLIST } from '../data/safetyData';
import type { ChecklistItem } from '../data/safetyData';

export const SafetyChecklist: React.FC = () => {
  // Store completed item IDs in state
  const [completedIds, setCompletedIds] = useState<string[]>([
    'chk-1',
    'chk-2',
    'chk-5',
  ]);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const toggleItem = (id: string) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setCompletedIds(INITIAL_CHECKLIST.map((item) => item.id));
  };

  const handleReset = () => {
    setCompletedIds([]);
  };

  const percentage = Math.round(
    (completedIds.length / INITIAL_CHECKLIST.length) * 100
  );

  const filteredItems =
    selectedFilter === 'All'
      ? INITIAL_CHECKLIST
      : INITIAL_CHECKLIST.filter((item) => item.category === selectedFilter);

  const categories = ['All', 'Daily', 'Travel', 'Digital', 'Emergency'];

  const getStatusMessage = () => {
    if (percentage === 100) return 'Safety Shield 100% Active! Excellent readiness! 🎉';
    if (percentage >= 70) return 'Strong preparedness level! Keep reviewing! 💪';
    if (percentage >= 40) return 'Good progress! Check remaining precautions! 🛡️';
    return 'Tap items below as you implement safety routines! 🚀';
  };

  return (
    <section id="checklist" className="relative py-24 bg-slate-950/90 border-t border-slate-900">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
            <span>INTERACTIVE READINESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Daily Safety <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Checklist</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Track and verify your essential safety preparations. Check off habits as you implement them
            in your daily routines.
          </p>
        </div>

        {/* Progress Card */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-purple-500/30 shadow-2xl shadow-purple-950/30 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1">
                Your Readiness Score
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>{percentage}% Prepared</span>
                {percentage === 100 && (
                  <Award className="w-6 h-6 text-pink-400 animate-bounce" />
                )}
              </h3>
            </div>

            <div className="text-xs sm:text-sm font-medium text-slate-300">
              <span>{completedIds.length} of {INITIAL_CHECKLIST.length} completed</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-3 p-[2px]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 transition-all duration-500 ease-out shadow-sm shadow-pink-500/50"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Progress Feedback Note */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs pt-2">
            <span className="font-semibold text-pink-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>{getStatusMessage()}</span>
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleSelectAll}
                className="text-slate-300 hover:text-white underline cursor-pointer text-xs"
              >
                Mark all completed
              </button>
              <span className="text-slate-600">•</span>
              <button
                type="button"
                onClick={handleReset}
                className="text-slate-400 hover:text-rose-400 flex items-center gap-1 cursor-pointer text-xs"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Checklist Items */}
        <div className="space-y-3">
          {filteredItems.map((item: ChecklistItem) => {
            const isDone = completedIds.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer select-none ${
                  isDone
                    ? 'bg-purple-950/20 border-purple-500/40 text-slate-300 shadow-inner'
                    : 'bg-slate-900/60 border-slate-800/90 hover:border-purple-500/30 text-white hover:bg-slate-900/90'
                }`}
                role="checkbox"
                aria-checked={isDone}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    toggleItem(item.id);
                  }
                }}
              >
                {/* Checkbox Icon */}
                <div className="mt-0.5 shrink-0">
                  {isDone ? (
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-lg border-2 border-slate-600 hover:border-pink-400 bg-slate-950/60 transition-colors" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-sm sm:text-base font-semibold transition-all ${
                        isDone ? 'line-through text-slate-400' : 'text-white'
                      }`}
                    >
                      {item.task}
                    </span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-800 text-purple-300 border border-slate-700">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Tip: {item.tip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Static Storage Clarification */}
        <p className="text-center text-[11px] text-slate-500 mt-8">
          Note: This checklist state runs completely in your browser session for personal educational practice.
        </p>
      </div>
    </section>
  );
};
