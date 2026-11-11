import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles, Bot, ShieldCheck, ArrowRight, CheckCircle2, Send, RotateCcw } from 'lucide-react';
import { AI_PAGES_DATA } from '../data/aiData';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ProductMockup } from '../components/ui/ProductMockup';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { CTASection } from '../components/home/CTASection';
import { APP_CONFIG } from '../config/site';

export const AiPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const pageKey = slug && AI_PAGES_DATA[slug] ? slug : 'ai';
  const page = AI_PAGES_DATA[pageKey];

  const [prompt, setPrompt] = useState('Extract sprint tasks and assignees from customer interview notes');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSimulate = () => {
    setLoading(true);
    setOutput(null);
    setTimeout(() => {
      setOutput(
        'Parro AI Context Engine Analysis:\n\n1. [Task] Redesign Mobile Filter Drawer · 3 pts · Assign: Sarah T. (UI Lead)\n2. [Task] Implement Algolia multi-attribute facets · 5 pts · Assign: Alex R. (Backend)\n3. [Task] Add customer interview recording to PRD wiki doc · Assign: Marcus C.\n\nAutomated Linkages: Tied to Epic #EPIC-42 · Scheduled for Sprint 24.'
      );
      setLoading(false);
    }, 500);
  };

  const aiSubPages = [
    { title: 'AI Assistant', slug: 'assistant', desc: 'Universal everyday copilot for notes and tasks' },
    { title: 'Autonomous Agents', slug: 'agents', desc: 'Self-executing triage and retrospective agents' },
    { title: 'Predictive Automations', slug: 'automation', desc: 'Pattern-based workflow recommendations' },
    { title: 'Universal Search', slug: 'workspace-search', desc: 'Semantic question retrieval across docs and code' },
    { title: 'Knowledge Intelligence', slug: 'knowledge', desc: 'Auto-updating living company wikis and PRDs' },
    { title: 'Use Cases & Prompts', slug: 'use-cases', desc: '100+ proven prompts across departments' },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-12 pb-20 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-900/60 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{page.kicker}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {page.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#F7F7F8] font-medium max-w-2xl mx-auto leading-relaxed">
              {page.tagline}
            </p>

            <p className="text-sm text-[#A0A0A8] max-w-2xl mx-auto leading-relaxed">
              {page.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={APP_CONFIG.signupUrl}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>Try Parro AI Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/demo"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#171719] border border-[#303034] text-white font-semibold text-xs hover:border-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>Watch Live AI Demo</span>
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4">
            {page.stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#171719] border border-[#303034] text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{stat.value}</div>
                <div className="text-xs text-[#A0A0A8]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Interactive AI Simulation Console */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-[#121214] border border-[#303034] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#303034]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-white">Interactive Parro AI Simulation Console</span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono">Zero Data Retention</span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 bg-[#0D0D0F] border border-[#303034] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white font-mono"
                placeholder="Ask Parro AI to generate, summarize, or query..."
              />
              <button
                type="button"
                onClick={handleSimulate}
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shrink-0"
              >
                {loading ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>{loading ? 'Processing...' : 'Run Simulation'}</span>
              </button>
            </div>

            {output && (
              <div className="p-4 rounded-lg bg-[#0D0D0F] border border-purple-900/60 text-xs text-zinc-300 font-sans leading-relaxed whitespace-pre-wrap">
                {output}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* AI Sub-module Navigation Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141414]">
            Explore the Parro AI Workspace Suite
          </h2>
          <p className="text-xs text-[#777780]">
            Deep-dive into each specialized intelligence capability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {aiSubPages.map((item) => (
            <Link
              key={item.slug}
              to={`/ai/${item.slug}`}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between group ${
                pageKey === item.slug
                  ? 'bg-[#0D0D0F] text-white border-[#0D0D0F] shadow-lg'
                  : 'bg-white text-[#141414] border-[#E6E6E9] hover:border-[#141414]'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <Sparkles className={`w-4 h-4 ${pageKey === item.slug ? 'text-purple-400' : 'text-[#777780]'}`} />
                </div>
                <p className={`text-xs leading-relaxed ${pageKey === item.slug ? 'text-[#A0A0A8]' : 'text-[#777780]'}`}>
                  {item.desc}
                </p>
              </div>

              <div className={`pt-4 flex items-center gap-1 text-xs font-semibold ${pageKey === item.slug ? 'text-white' : 'text-[#141414]'}`}>
                <span>Explore Capability</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-[#F7F7F8] border-t border-b border-[#E6E6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141414]">
              Core Intelligence Invariants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.keyCapabilities.map((cap, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-[#E6E6E9] space-y-3">
                <h3 className="text-base font-bold text-[#141414]">{cap.title}</h3>
                <p className="text-xs text-[#777780] leading-relaxed">{cap.description}</p>
                <div className="space-y-1.5 pt-2 border-t border-[#E6E6E9]">
                  {cap.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-[#303034]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion items={page.faqs} title={`${page.title} FAQ`} subtitle="Security, privacy, and architectural questions." />

      <CTASection />
    </div>
  );
};
