import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { ArrowRight, Clock } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const articles = [
    {
      title: 'The Hidden Cognitive Tax of 8 Different SaaS Subscriptions',
      readTime: '6 min read',
      date: 'November 2026',
      category: 'Productivity',
      summary: 'How fragmented notifications, duplicate tasks, and context switching drain up to 40% of productive engineering hours each week.',
    },
    {
      title: 'Critical Path Scheduling: Why Real Slack Calculation Matters in Sprints',
      readTime: '8 min read',
      date: 'October 2026',
      category: 'Engineering',
      summary: 'A mathematical look at dependency bottlenecks and how cascading auto-recalculation prevents project milestone slippage.',
    },
    {
      title: 'Why We Built Native Payroll and Attendance Directly into ParroDash',
      readTime: '5 min read',
      date: 'October 2026',
      category: 'Operations',
      summary: 'People operations should not live in a corporate vacuum. Connecting timesheets and PTO directly to daily project delivery eliminates hours of manual reconciliation.',
    },
    {
      title: 'Context-Aware AI vs Chat Wrappers: The Technical Distinction',
      readTime: '7 min read',
      date: 'September 2026',
      category: 'Parro AI',
      summary: 'Why generic LLM chat windows fail at work management without an indexed real-time workspace knowledge graph and strict permission filtering.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Engineering & Operational Editorial</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">The ParroDash Blog</h1>
          <p className="text-base text-[#A0A0A8] leading-relaxed">
            In-depth perspectives on modern company operating systems, agile craft, and systems architecture.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#E6E6E9] hover:border-[#141414] hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#777780] font-mono">
                  <span>{art.category}</span>
                  <span>·</span>
                  <span>{art.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {art.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[#141414] leading-snug">{art.title}</h2>
                <p className="text-xs text-[#777780] leading-relaxed">{art.summary}</p>
              </div>

              <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#141414] border-t border-[#E6E6E9]">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
