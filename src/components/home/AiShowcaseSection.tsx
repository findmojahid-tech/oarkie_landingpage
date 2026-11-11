import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Bot, Send, ArrowRight, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';
import { ProductMockup } from '../ui/ProductMockup';

export const AiShowcaseSection: React.FC = () => {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    {
      prompt: 'Decompose the Q4 Mobile App Checkout sprint into actionable tasks with estimates and owners',
      response:
        'Parsed 4 sprint tasks based on repository history and current team velocity:\n\n• [UI] Implement 1-Click Apple Pay & Google Wallet modal (Assign: Sarah T. · 5 pts)\n• [API] Integrate Stripe idempotency keys for resilient checkout retries (Assign: Alex R. · 8 pts)\n• [Compliance] Add automated cardholder data tokenization safeguards (Assign: Marcus C. · 3 pts)\n• [QA] Cross-device checkout test on iOS 18 & Android 15 (Assign: Elena M. · 5 pts)\n\nDependencies linked: UI depends on API contract completion. Added to Sprint 24.',
    },
    {
      prompt: 'Summarize the top risks to the Vanguard Logistics project before Monday’s client steering committee',
      response:
        'Vanguard Logistics Risk Analysis:\n\n1. Critical Path Slack: Milestone 3 (Customs clearance API) has 0 days of slack. A 1-day delay will postpone the public launch.\n2. Key Personnel: Lead Architect Marcus Chen is on approved PTO this Wednesday.\n3. Recommendation: Reassign API integration PR review to Sarah T. today to preserve the schedule buffer.',
    },
    {
      prompt: 'Deploy Autonomous Bug Triage Agent on the inbound customer support queue',
      response:
        'Autonomous Agent Activated:\n\n• Rule: When a new bug is reported via customer portal\n• Agent Actions: Parses reproduction steps, searches for duplicate Git issues, tags severity (P0-P3), and assigns directly to on-call engineer.\n• Safety: Non-destructive execution; all reassignments logged in audit vault.',
    },
  ];

  const current = samplePrompts[activePromptIndex];

  return (
    <section className="py-24 bg-[#0D0D0F] text-white border-b border-[#303034]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-900/60 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Parro AI Context Engine v3.4</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            The first AI that actually knows your company.
          </h2>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Generic chatbots know Wikipedia. Parro AI understands your actual team availability, sprint deadlines,
            unresolved pull requests, client contracts, and employee leave calendars.
          </p>
        </div>

        {/* Interactive AI Simulation Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Prompt Selector & Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#777780]">
              Select an Interactive AI Demonstration
            </div>

            <div className="space-y-3">
              {[
                { title: 'Natural Language Task Decomposition', desc: 'Converts high-level briefs into assigned, estimated sprint tasks.' },
                { title: 'Proactive Project Risk Analysis', desc: 'Detects schedule slippage and resource bottlenecks before they happen.' },
                { title: 'Autonomous Work Agent Deployment', desc: 'Dispatches self-executing triage agents to handle ticket flows.' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePromptIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-xs ${
                    activePromptIndex === idx
                      ? 'bg-[#171719] border-white text-white shadow-lg'
                      : 'bg-[#121214] border-[#303034] text-[#A0A0A8] hover:border-[#777780]'
                  }`}
                >
                  <div className="font-bold text-white mb-1 flex items-center justify-between">
                    <span>{item.title}</span>
                    {activePromptIndex === idx && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
                  </div>
                  <p className="text-[11px] text-[#A0A0A8] leading-relaxed">{item.desc}</p>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#171719] border border-[#303034] space-y-2 text-xs text-[#A0A0A8]">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Customer Data Training Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Your company’s code, employee salaries, and tasks are never used to train foundation models. All
                inference runs in encrypted zero-retention private cloud enclaves.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/ai"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline"
              >
                <span>Learn more about Parro AI & Autonomous Agents</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Simulation Window */}
          <div className="lg:col-span-7 rounded-2xl bg-[#121214] border border-[#303034] p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#303034]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white text-black font-extrabold flex items-center justify-center text-xs">
                  AI
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Parro Context Workspace Assistant</div>
                  <div className="text-[10px] text-[#777780]">Simulated Preview Mode · Connected to Workspace Graph</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 border border-purple-800/60 px-2 py-0.5 rounded">
                60 FPS Live
              </span>
            </div>

            {/* Prompt Display */}
            <div className="space-y-2">
              <div className="text-[10px] text-[#777780] uppercase tracking-wider font-mono">User Query Prompt</div>
              <div className="p-3 rounded-lg bg-[#171719] border border-[#303034] text-xs text-white font-mono">
                "{current.prompt}"
              </div>
            </div>

            {/* Simulated Response */}
            <div className="space-y-2">
              <div className="text-[10px] text-[#777780] uppercase tracking-wider font-mono flex items-center justify-between">
                <span>Synthesized Execution Plan</span>
                <span className="text-emerald-400">Response Latency: 120ms</span>
              </div>
              <div className="p-4 rounded-lg bg-[#0D0D0F] border border-purple-900/40 text-xs text-zinc-300 font-sans leading-relaxed whitespace-pre-wrap">
                {current.response}
              </div>
            </div>

            {/* Interactive Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[#303034]">
              <span className="text-[#777780] text-[11px]">Notice: Live API inference requires backend workspace authentication.</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => alert('Simulated action: Items verified and staged for workspace insertion!')}
                  className="px-3.5 py-1.5 rounded bg-white text-black font-semibold text-xs hover:bg-zinc-200"
                >
                  Execute Plan in Workspace
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
