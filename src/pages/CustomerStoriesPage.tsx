import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { CheckCircle2, TrendingUp, ArrowRight, Building } from 'lucide-react';

export const CustomerStoriesPage: React.FC = () => {
  const caseStudies = [
    {
      industry: 'Global Digital Agency · 85 Staff',
      title: 'How a 85-person agency consolidated 5 tools to reclaim 14 hours per contributor weekly',
      challenge: 'Managing billable retainers across Harvest, client reviews in frame.io, and task backlogs in Asana caused $60k in missed scope creep each quarter.',
      solution: 'Moved all retainers, timesheets, and pixel-accurate creative proofing to ParroDash. Clients collaborate directly in branded guest portals.',
      impact: ['28% increase in captured billable hours', '$14,000 saved annually on redundant software licenses', 'Zero delayed client deliverables on major drops'],
    },
    {
      industry: 'Enterprise SaaS Startup · 140 Staff',
      title: 'Scaling from Seed to Series B without replacing the operational backbone',
      challenge: 'Rapid headcount expansion led to fragmented onboarding in Google Docs and engineering sprints decoupled from product roadmaps.',
      solution: 'Deployed ParroDash unified workspaces connecting GitHub PR merges, employee onboarding checklists, and executive OKR scorecards.',
      impact: ['75% faster onboarding completion for new engineers', '1-click sprint burndown charts visible to leadership', 'Zero data migration required as team doubled'],
    },
    {
      industry: 'Professional Services Firm · 220 Staff',
      title: 'Unifying fixed-fee milestone delivery with automated employee payroll',
      challenge: 'Finance spent three full business days every two weeks reconciling paper timesheets with project budgets before submitting payroll.',
      solution: 'Attendance clock-in and approved project timesheets now flow directly into pre-calculated direct deposit payroll batches in ParroDash.',
      impact: ['Payroll preparation reduced from 3 days to 45 minutes', '100% compliant overtime calculations across 14 state jurisdictions', 'Real-time project gross margin visibility'],
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Operational Vignettes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Customer Case Studies</h1>
          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Discover how fast-growing teams replace tool sprawl with ParroDash to accelerate delivery velocity and reduce
            overhead.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {caseStudies.map((cs, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E6E6E9] shadow-sm hover:border-[#141414] transition-all space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>{cs.industry}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#141414] leading-snug">
              {cs.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-[#F7F7F8] border border-[#E6E6E9] space-y-1.5 text-xs">
                <div className="font-bold text-rose-700">The Challenge</div>
                <p className="text-[#777780] leading-relaxed">{cs.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F7F8] border border-[#E6E6E9] space-y-1.5 text-xs">
                <div className="font-bold text-emerald-700">The ParroDash Solution</div>
                <p className="text-[#777780] leading-relaxed">{cs.solution}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E6E6E9] space-y-2">
              <div className="text-xs font-bold text-[#141414] uppercase tracking-wider">
                Demonstrated Results
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {cs.impact.map((imp, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2 text-xs text-[#303034]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{imp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTASection />
    </div>
  );
};
