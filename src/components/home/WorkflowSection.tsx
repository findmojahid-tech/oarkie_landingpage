import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface WorkflowStep {
  id: number;
  label: string;
  headline: string;
  description: string;
  outcome: string;
  role: string;
}

const STEPS: WorkflowStep[] = [
  {
    id: 1,
    label: 'Plan',
    headline: 'Define roadmaps, critical milestones & sprint scopes',
    description: 'Break high-level product initiatives into nested work packages with Gantt dependencies and baseline estimation.',
    outcome: 'Zero vague scopes; clear critical path identified',
    role: 'Product & Project Leads',
  },
  {
    id: 2,
    label: 'Assign',
    headline: 'Allocate tasks balanced against real employee capacity',
    description: 'Inspect workload heatmaps to see who is available before assigning sprints. Prevent burnouts before kickoff.',
    outcome: 'Optimal team utilization without over-allocation',
    role: 'Engineering & Team Managers',
  },
  {
    id: 3,
    label: 'Collaborate',
    headline: 'Execute with in-context chat, docs & GitHub links',
    description: 'Contributors discuss deliverables directly in task threads, sync code commits, and co-author technical specs.',
    outcome: 'Zero lost context in disjointed Slack channels',
    role: 'Cross-Functional Contributors',
  },
  {
    id: 4,
    label: 'Approve',
    headline: 'Multi-stage sign-offs with visual proofing pins',
    description: 'Stakeholders drop pixel-accurate feedback pins on designs, videos, or PRDs. Structured approval chains prevent delays.',
    outcome: '100% compliant audit trail and formal sign-offs',
    role: 'Design, Legal & Client Reviewers',
  },
  {
    id: 5,
    label: 'Deliver',
    headline: 'Ship releases and launch client deliverables on time',
    description: 'Deploy code with automated release notes and transition client CRM deals into active billing portals.',
    outcome: 'On-time milestone delivery with zero surprises',
    role: 'DevOps & Account Executives',
  },
  {
    id: 6,
    label: 'Analyze',
    headline: 'Review cycle velocity, profit margins & team metrics',
    description: 'Inspect burndown curves, billable realization rates, and employee attendance to optimize the next operating cycle.',
    outcome: 'Data-driven continuous operational improvement',
    role: 'PMO & Executive Leadership',
  },
];

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Auto-advance workflow demonstration gently
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < 6 ? prev + 1 : 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = STEPS.find((s) => s.id === activeStep) || STEPS[0];

  return (
    <section className="py-24 bg-[#FFFFFF] text-[#141414] border-b border-[#E6E6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#777780]">
            <span>End-to-End Operating Rhythm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414]">
            From concept to executive review. In one continuous flow.
          </h2>
          <p className="text-base text-[#777780] leading-relaxed">
            Eliminate friction between planning, execution, and final sign-off. ParroDash coordinates every stage of the
            work lifecycle in a unified engine.
          </p>
        </div>

        {/* Workflow Chain Stepper */}
        <div data-motion="workflow-steps" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {STEPS.map((step) => {
            const isCurrent = activeStep === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(step.id)}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  isCurrent
                    ? 'bg-[#0D0D0F] text-white border-[#0D0D0F] shadow-lg scale-102'
                    : 'bg-[#F7F7F8] text-[#141414] border-[#E6E6E9] hover:border-[#141414]'
                }`}
              >
                <div className={`text-[10px] font-mono mb-1 ${isCurrent ? 'text-zinc-400' : 'text-[#777780]'}`}>
                  STAGE 0{step.id}
                </div>
                <div className="text-sm font-bold truncate">{step.label}</div>
                {isCurrent && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D0D0F] rotate-45" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Card */}
        <div data-motion="workflow-panel" className="p-8 sm:p-10 rounded-2xl bg-[#0D0D0F] text-white border border-[#303034] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-2.5 py-1 rounded">
                Stage 0{current.id} · {current.label}
              </span>
              <span className="text-xs text-[#777780]">Led by: {current.role}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {current.headline}
            </h3>

            <p className="text-sm text-[#A0A0A8] leading-relaxed">
              {current.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium">Measurable Outcome: {current.outcome}</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#171719] border border-[#303034] rounded-xl p-5 space-y-4">
            <div className="text-xs font-semibold text-white border-b border-[#303034] pb-2">
              ParroDash Operating Rule #0{current.id}
            </div>
            <div className="space-y-2 text-xs text-[#A0A0A8]">
              <div className="flex items-start gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>Automated handoff triggers advance tasks to next team without manual pings.</span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>All documents, chats, and asset versions remain attached to the project container.</span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>Executive rollups update in real-time as work marks completed.</span>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-[11px] text-[#777780]">
              <span>Next Stage: Stage 0{current.id < 6 ? current.id + 1 : 1}</span>
              <button
                type="button"
                onClick={() => setActiveStep(current.id < 6 ? current.id + 1 : 1)}
                className="text-white hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Advance</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
