import React from 'react';
import {
  PhoneCall,
  Phone,
  ShieldAlert,
  ExternalLink,
  AlertOctagon,
  LifeBuoy,
  Globe,
} from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/safetyData';
import type { EmergencyContact } from '../data/safetyData';

export const EmergencyHelp: React.FC = () => {
  return (
    <section id="emergency" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Radiant Glow Behind Emergency */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-bold mb-4 shadow-sm animate-pulse">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>CRITICAL AWARENESS DIRECTORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Official Emergency <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Helplines & Resources</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Verified, government-backed hotlines across India. Save these numbers in your phone, add them to ICE (In Case of Emergency) contacts, and share them with loved ones.
          </p>
        </div>

        {/* Prominent Static Website Clarification Alert */}
        <div className="mb-12 p-6 rounded-3xl bg-slate-950/80 border-2 border-rose-500/30 backdrop-blur-md flex flex-col md:flex-row items-center gap-5 shadow-2xl shadow-rose-950/20">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-400 shrink-0">
            <AlertOctagon className="w-6 h-6 animate-pulse" />
          </div>
          <div className="text-left flex-1">
            <h3 className="text-sm sm:text-base font-bold text-white mb-1">
              Important Notice: Educational & Awareness Platform
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              HER SHIELD is a 100% static educational and informational website. <strong>This site does NOT automatically contact emergency dispatchers, share your live GPS location, or trigger automated police distress alerts.</strong> In an active emergency or immediate physical danger, dial <strong>112</strong> immediately from your phone.
            </p>
          </div>
          <a
            href="tel:112"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 hover:scale-105 transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call 112 Now</span>
          </a>
        </div>

        {/* Primary Emergency Quick Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <a
            href="tel:112"
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-rose-950/80 to-slate-900 border border-rose-500/40 hover:border-rose-400 group transition-all duration-300 shadow-md hover:shadow-rose-900/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <p className="text-xs text-rose-300 font-semibold uppercase">Pan-India ERSS</p>
                <p className="text-base font-extrabold text-white">Call 112</p>
              </div>
            </div>
            <span className="text-xs font-bold text-rose-400 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="tel:181"
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-950/80 to-slate-900 border border-purple-500/40 hover:border-purple-400 group transition-all duration-300 shadow-md hover:shadow-purple-900/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-purple-300 font-semibold uppercase">Women Helpline</p>
                <p className="text-base font-extrabold text-white">Call 181</p>
              </div>
            </div>
            <span className="text-xs font-bold text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-indigo-950/80 to-slate-900 border border-indigo-500/40 hover:border-indigo-400 group transition-all duration-300 shadow-md hover:shadow-indigo-900/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-indigo-300 font-semibold uppercase">Cyber Crime Portal</p>
                <p className="text-sm font-extrabold text-white">cybercrime.gov.in</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="https://ncw.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-pink-950/80 to-slate-900 border border-pink-500/40 hover:border-pink-400 group transition-all duration-300 shadow-md hover:shadow-pink-900/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-600/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LifeBuoy className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <p className="text-xs text-pink-300 font-semibold uppercase">Official NCW Portal</p>
                <p className="text-sm font-extrabold text-white">ncw.nic.in</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-pink-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Detailed Helpline Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EMERGENCY_CONTACTS.map((item: EmergencyContact) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                item.isPrimary
                  ? 'bg-slate-900/90 border-2 border-rose-500/40 shadow-xl shadow-rose-950/20'
                  : 'bg-slate-900/60 border border-purple-500/20 hover:border-pink-500/40'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {item.service}
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                    {item.number}
                  </div>
                  <span className="text-xs text-purple-300 font-medium">
                    {item.availability}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                {item.actionType === 'tel' ? (
                  <a
                    href={`tel:${item.number}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all"
                  >
                    <Phone className="w-4 h-4 text-rose-400 group-hover:text-white" />
                    <span>Dial {item.number}</span>
                  </a>
                ) : (
                  <a
                    href={item.url || 'https://cybercrime.gov.in'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-purple-600 transition-all"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
