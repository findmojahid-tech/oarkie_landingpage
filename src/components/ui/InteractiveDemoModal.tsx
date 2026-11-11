import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { X, Play, ArrowRight, CheckCircle, Sparkles, FolderKanban, Users, Shield } from 'lucide-react';
import { ProductMockup, MockupModuleType } from './ProductMockup';
import { APP_CONFIG } from '../../config/site';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isOpen || !modalRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(modalRef.current, { autoAlpha: 0, y: 22, scale: 0.98 }, {
        autoAlpha: 1, y: 0, scale: 1, duration: 0.46, ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
      });
    }, modalRef);
    return () => context.revert();
  }, [isOpen]);

  useLayoutEffect(() => {
    if (!isOpen || !screenRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(screenRef.current, { autoAlpha: 0, y: 12 }, {
        autoAlpha: 1, y: 0, duration: 0.34, ease: 'power2.out',
        clearProps: 'transform,opacity,visibility',
      });
    }, screenRef);
    return () => context.revert();
  }, [isOpen, currentStep]);

  if (!isOpen) return null;

  const steps: {
    title: string;
    subtitle: string;
    module: MockupModuleType;
    highlights: string[];
  }[] = [
    {
      title: '01. Unified Work & Project Delivery',
      subtitle: 'See how tasks, critical path Gantt charts, and sprint Kanban boards connect without missing dependencies.',
      module: 'projects',
      highlights: ['Bi-directional dependency recalculation', 'Real-time baseline tracking', '1-click Asana and ClickUp importer'],
    },
    {
      title: '02. Native HR, Attendance & Payroll',
      subtitle: 'Manage employee profiles, geo-fenced attendance clock-ins, leave approvals, and direct deposit payroll.',
      module: 'hr',
      highlights: ['Zero data entry payroll preparation', 'Automated PTO accruals and calendar sync', '50-state tax withholding engine'],
    },
    {
      title: '03. Context-Aware Parro AI',
      subtitle: 'Query your entire workspace knowledge graph with zero data training risk. Extract tasks from raw notes in seconds.',
      module: 'ai',
      highlights: ['Deep graph context across all tasks and docs', 'Autonomous bug triage and sprint retro agents', 'Zero customer data retention'],
    },
    {
      title: '04. Real-Time Command Center Dashboards',
      subtitle: 'Assemble 35+ widgets tracking sprint velocity, team workload, billable hours, and gross profit margins.',
      module: 'dashboards',
      highlights: ['Sub-100ms dashboard refresh latency', 'Automated Monday morning executive email digests', 'Drill-down to individual task commits'],
    },
  ];

  const active = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div ref={modalRef} role="dialog" aria-modal="true" aria-label="Interactive Product Walkthrough" className="relative w-full max-w-5xl bg-[#0D0D0F] border border-[#303034] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#303034] bg-[#171719]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white text-sm">Interactive Product Walkthrough</span>
            <span className="text-xs text-[#777780]">· ParroDash v3.4</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[#777780] hover:text-white hover:bg-[#303034] transition-colors"
            aria-label="Close interactive demo modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Step Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {steps.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentStep(idx)}
                aria-pressed={currentStep === idx}
                className={`p-3 text-left rounded-lg border transition-all text-xs ${
                  currentStep === idx
                    ? 'bg-[#171719] border-white text-white font-semibold shadow-sm'
                    : 'bg-[#121214] border-[#303034] text-[#A0A0A8] hover:border-[#777780]'
                }`}
              >
                <div className="font-mono text-[10px] text-[#777780] mb-1">STEP 0{idx + 1}</div>
                <div className="truncate">{s.title.split('. ')[1]}</div>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-[#171719] border border-[#303034]">
            <div>
              <h3 className="text-base font-bold text-white">{active.title}</h3>
              <p className="text-xs text-[#A0A0A8] mt-1 max-w-2xl">{active.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="px-3 py-1.5 rounded bg-[#0D0D0F] border border-[#303034] text-xs text-white hover:bg-[#202025]"
                >
                  Previous
                </button>
              )}
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className="px-4 py-1.5 rounded bg-white text-black font-semibold text-xs hover:bg-zinc-200 flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <a
                  href={APP_CONFIG.signupUrl}
                  className="px-4 py-1.5 rounded bg-white text-black font-semibold text-xs hover:bg-zinc-200 flex items-center gap-1.5"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Interactive Live Screen Mockup */}
          <div ref={screenRef}>
            <ProductMockup module={active.module} interactive={true} />
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {active.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 p-2.5 rounded bg-[#121214] border border-[#303034]">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-[#303034] bg-[#121214] text-xs text-[#777780]">
          <span>Ready to see it with your real team?</span>
          <div className="flex items-center gap-3">
            <a href="/demo" className="text-white hover:underline">
              Book a 1-on-1 Guided Demo
            </a>
            <span>·</span>
            <a href={APP_CONFIG.signupUrl} className="font-semibold text-white hover:underline">
              Start Free (No Credit Card Required) →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
