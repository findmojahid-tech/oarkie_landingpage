import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { Video, Calendar, Clock, Play, ArrowRight } from 'lucide-react';

export const WebinarsPage: React.FC = () => {
  const sessions = [
    {
      title: 'Mastering Critical Path Scheduling & Baseline Drift in Complex Projects',
      type: 'On-Demand Masterclass',
      duration: '45 mins',
      speaker: 'Alex Rivera · Lead Systems Architect',
      desc: 'Deep dive into automatic slack time calculations, milestone dependency chaining, and preventing scope creep.',
    },
    {
      title: 'Unified People Operations: Setting Up Geo-Attendance & 50-State Payroll',
      type: 'Upcoming Live Session',
      duration: '35 mins',
      speaker: 'Elena Morales · VP of Customer Solutions',
      desc: 'A complete walkthrough of configuring employee leave policies, kiosk clock-in verification, and ACH payroll runs.',
    },
    {
      title: 'Building Autonomous AI Work Agents in ParroDash v3.4',
      type: 'On-Demand Masterclass',
      duration: '40 mins',
      speaker: 'Dev K. · AI Platform Engineer',
      desc: 'How to deploy specialized context-aware agents to triage bugs, draft sprint retrospectives, and scan tasks for blockers.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Video Learning & Masterclasses</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Webinars & Masterclasses</h1>
          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Live workshops and on-demand tutorials hosted by senior operations leads and product engineers.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E6E6E9] hover:border-[#141414] hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="font-bold text-white bg-[#0D0D0F] px-2 py-0.5 rounded">{item.type}</span>
                  <span className="text-[#777780]">{item.duration}</span>
                </div>
                <h3 className="text-base font-bold text-[#141414] leading-snug">{item.title}</h3>
                <p className="text-xs text-[#777780] leading-relaxed">{item.desc}</p>
                <div className="text-[11px] text-[#303034] font-medium pt-1 border-t border-[#E6E6E9]">
                  Speaker: {item.speaker}
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert(`Starting streaming playback for: ${item.title}`)}
                className="w-full py-2.5 rounded-lg bg-[#0D0D0F] text-white text-xs font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Session</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
