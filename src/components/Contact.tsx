import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  Mail,
  User,
  RotateCcw,
} from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: 'General Awareness Question',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate front-end demonstration submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: 'General Awareness Question',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950/80 border-t border-slate-900">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-purple-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
            <span>COMMUNITY FEEDBACK & CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get in <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Touch</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have questions regarding awareness material, curriculum ideas, or community collaborations?
            Send an educational inquiry through our interactive demo form.
          </p>
        </div>

        {/* Safety Disclaimer Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
            <strong className="text-amber-200">Demonstration Warning:</strong> This form is an interactive frontend demo. It does <strong>not</strong> transmit, save, or forward messages to any database or authority. <strong>Do not submit emergency reports, confidential legal details, or personal distress messages here.</strong> If in danger, please call <strong>112</strong> immediately.
          </div>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-slate-900/90 border border-purple-500/30 p-6 sm:p-10 shadow-2xl shadow-purple-950/40 backdrop-blur-md">
          {isSubmitted ? (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Thank You for Your Message!
              </h3>

              <p className="text-slate-300 text-sm max-w-md mx-auto mb-4 leading-relaxed">
                Your demonstration query from <strong className="text-pink-300">{formData.fullName}</strong> was validated successfully.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 max-w-lg mx-auto mb-6">
                💡 <em>Static Website Notice:</em> Because HER SHIELD is 100% frontend-based without an external database, this interaction is purely illustrative. No personal information was stored or dispatched to any external server.
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 transition-all cursor-pointer shadow-md shadow-purple-600/30"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Send Another Demonstration Message</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name <span className="text-pink-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-purple-500 focus:ring-purple-500/20'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <span>•</span> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-pink-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-purple-500 focus:ring-purple-500/20'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <span>•</span> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Subject Category
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all cursor-pointer"
                >
                  <option value="General Awareness Question">General Safety Inquiry</option>
                  <option value="College/Campus Workshop Proposal">College/Campus Workshop Inquiry</option>
                  <option value="Feedback on Safety Resources">Resource Feedback & Suggestion</option>
                  <option value="Community Initiative Inquiry">Community Collaboration</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Message <span className="text-pink-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your general question, feedback, or suggestion regarding safety awareness materials..."
                  className={`w-full p-4 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-y ${
                    errors.message
                      ? 'border-rose-500 focus:ring-rose-500/30'
                      : 'border-slate-800 focus:border-purple-500 focus:ring-purple-500/20'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                    <span>•</span> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Validating Demo Entry...</span>
                    </span>
                  ) : (
                    <>
                      <span>Submit Inquiry (Demo)</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
