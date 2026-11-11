import React from 'react';
import { Shield, Zap, Layers, Cpu, Lock, CheckCircle2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Unified Architecture',
      description: 'One single data graph uniting projects, tasks, attendance, and payroll.',
    },
    {
      icon: Zap,
      title: 'Sub-100ms Latency',
      description: 'Built for 60 FPS fluidity with instantaneous view switching and real-time updates.',
    },
    {
      icon: Lock,
      title: 'Enterprise Trust',
      description: 'SOC 2 Type II compliant, AES-256 encryption at rest, and zero AI data retention.',
    },
    {
      icon: Cpu,
      title: 'Context-Aware AI',
      description: 'Autonomous agents and assistant models that understand your actual project graph.',
    },
  ];

  return (
    <section className="py-14 bg-[#FFFFFF] border-b border-[#E6E6E9] text-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <p className="text-xs uppercase font-mono tracking-widest text-[#777780]">
            The Modern Standard for Business Operations
          </p>
          <h3 className="text-lg font-bold text-[#141414]">
            Engineered for companies demanding speed, simplicity, and complete data governance
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F7F7F8] border border-[#E6E6E9] space-y-2 hover:border-[#141414] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0D0D0F] text-white flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#141414]">{p.title}</h4>
                <p className="text-xs text-[#777780] leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Factual platform indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-4 text-xs text-[#777780] border-t border-[#E6E6E9]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> W-2 & 1099 Native Payroll
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Geo-Verified Kiosk Clock-In
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 1-Click Asana & ClickUp Importers
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Two-Way Google & Outlook Sync
          </span>
        </div>
      </div>
    </section>
  );
};
