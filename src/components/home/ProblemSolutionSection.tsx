import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFFFFF] text-[#141414] border-b border-[#E6E6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
            The Problem with Disconnected Tools
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414]">
            Your team is not moving slow. Your tools are scattered.
          </h2>
          <p className="text-base text-[#777780] leading-relaxed">
            The average company uses 6+ separate subscriptions just to operate. Work lives in one app, docs in another,
            conversations in a third, and employee records in a fourth.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Disconnected Chaos */}
          <div className="rounded-2xl p-8 bg-[#F7F7F8] border border-[#E6E6E9] space-y-6">
            <div className="flex items-center gap-2 text-rose-600 font-bold text-sm uppercase tracking-wide">
              <XCircle className="w-5 h-5" />
              <span>The Disconnected SaaS Trap</span>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Siloed Information & Lost Context', desc: 'Tasks sit in Jira, discussions in Slack, PRDs in Google Docs, and client notes in HubSpot. No one knows the real status.' },
                { title: 'Astronomical Software Bills', desc: 'Paying $12/user for task management + $8 for Slack + $15 for HR + $10 for time tracking = over $45/user every single month.' },
                { title: 'Manual Double Data Entry', desc: 'Managers spend hours every Friday exporting CSVs between attendance clocks, payroll systems, and project budgets.' },
                { title: 'Context-Blind AI Bots', desc: 'Generic AI chatbots know nothing about your actual team deadlines, employee PTO, or client deliverables.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E6E6E9]">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#141414]">{item.title}</h4>
                    <p className="text-xs text-[#777780] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unified ParroDash Architecture */}
          <div className="rounded-2xl p-8 bg-[#0D0D0F] text-white border border-[#303034] space-y-6 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wide">
              <CheckCircle2 className="w-5 h-5" />
              <span>The ParroDash Unified Architecture</span>
            </div>

            <div className="space-y-4">
              {[
                { title: 'One Shared Object Graph', desc: 'A task is linked directly to the developer’s GitHub PR, the client’s CRM account, the project budget, and the employee’s timesheet.' },
                { title: 'Cut SaaS Spend by 40-60%', desc: 'Replace task managers, team chat, wikis, attendance clocks, and PTO trackers with one affordable seat.' },
                { title: 'Zero CSV Exports to Run Payroll', desc: 'Approved attendance hours and PTO automatically calculate gross-to-net pay runs with 1-click direct deposit.' },
                { title: 'Context-Aware Workspace Intelligence', desc: 'Parro AI reasons over your live tasks, docs, and calendar to draft PRDs, flag blockers, and triage bugs.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#171719] border border-[#303034]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-[#A0A0A8] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
