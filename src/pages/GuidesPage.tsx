import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'Complete Asana to ParroDash Migration Playbook',
      chapters: '6 Chapters · 15 min read',
      level: 'All Teams',
      desc: 'Step-by-step instructions to export tasks, custom fields, dependencies, and historical comments from Asana with zero downtime.',
    },
    {
      title: 'ClickUp Migration & Speed Optimization Blueprint',
      chapters: '8 Chapters · 20 min read',
      level: 'Admin & PMO',
      desc: 'How to transition complex ClickUp spaces, lists, and automations into ParroDash’s 60 FPS object architecture.',
    },
    {
      title: 'Agency Operating System: Retainers, Timesheets & Portals',
      chapters: '5 Chapters · 12 min read',
      level: 'Agencies',
      desc: 'How leading digital agencies set up billable hour caps, client review portals, and automated milestone invoicing.',
    },
    {
      title: 'HR, Attendance & 50-State Payroll Setup Guide',
      chapters: '7 Chapters · 18 min read',
      level: 'HR & Finance',
      desc: 'Configure company holidays, geo-fenced office clock-ins, leave accrual policies, and automated direct deposit ACH rules.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Operational Blueprints</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Implementation Guides</h1>
          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Proven playbooks for migrating legacy work management systems, configuring multi-department workspaces,
            and automating operational handoffs.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#E6E6E9] hover:border-[#141414] hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#777780] font-mono">
                  <span>{guide.level}</span>
                  <span>{guide.chapters}</span>
                </div>
                <h3 className="text-lg font-bold text-[#141414]">{guide.title}</h3>
                <p className="text-xs text-[#777780] leading-relaxed">{guide.desc}</p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#E6E6E9] text-xs">
                <span className="text-[#141414] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free Playbook Included
                </span>
                <span className="font-bold text-[#141414] flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
