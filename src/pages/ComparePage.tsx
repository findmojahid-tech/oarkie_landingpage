import React, { useState } from 'react';
import { Check, X, ArrowRight, Split, ShieldCheck, Zap } from 'lucide-react';
import { COMPARISONS_DATA } from '../data/resourcesData';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { APP_CONFIG } from '../config/site';

export const ComparePage: React.FC = () => {
  const [activeSlug, setActiveSlug] = useState<'clickup' | 'asana' | 'monday' | 'notion'>('clickup');
  const activeComparison = COMPARISONS_DATA[activeSlug];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <Split className="w-3.5 h-3.5" />
            <span>Honest Product Comparisons</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            See how ParroDash compares.
          </h1>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Discover why high-velocity teams choose ParroDash over legacy task managers and fragmented single-purpose tools.
          </p>

          {/* Competitor Selector */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {(['clickup', 'asana', 'monday', 'notion'] as const).map((slug) => (
              <button
                key={slug}
                type="button"
                onClick={() => setActiveSlug(slug)}
                className={`px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all ${
                  activeSlug === slug
                    ? 'bg-white text-black shadow-md'
                    : 'bg-[#171719] text-[#A0A0A8] hover:text-white border border-[#303034]'
                }`}
              >
                vs {COMPARISONS_DATA[slug].competitor}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Detail */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#141414]">
            {activeComparison.headline}
          </h2>
          <p className="text-base text-[#777780] leading-relaxed">
            {activeComparison.summary}
          </p>
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activeComparison.advantages.map((adv, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#F7F7F8] border border-[#E6E6E9] space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-[#141414]">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>{adv.title}</span>
              </div>
              <p className="text-xs text-[#777780] leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto bg-white rounded-2xl border border-[#E6E6E9] shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#0D0D0F] text-white border-b border-[#303034]">
                <th className="py-4 px-6 text-sm font-bold w-1/2">Capability</th>
                <th className="py-4 px-4 text-center font-bold text-emerald-400 bg-[#171719]">ParroDash</th>
                <th className="py-4 px-4 text-center font-bold text-[#A0A0A8]">{activeComparison.competitor}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6E6E9]">
              {activeComparison.tableRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-zinc-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#141414]">{row.capability}</td>
                  <td className="py-4 px-4 text-center bg-emerald-50/20">
                    {typeof row.parrodash === 'boolean' ? (
                      row.parrodash ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-[#141414]">{row.parrodash}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-[#777780]">
                    {typeof row.competitor === 'boolean' ? (
                      row.competitor ? (
                        <Check className="w-4 h-4 text-zinc-500 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-300 mx-auto" />
                      )
                    ) : (
                      <span>{row.competitor}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 1-Click Migration Guarantee */}
        <div className="p-8 rounded-2xl bg-[#0D0D0F] text-white border border-[#303034] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl font-bold">1-Click Automated Migration Guarantee</h3>
            <p className="text-xs text-[#A0A0A8]">
              Switching from {activeComparison.competitor}? Our native migration tool imports your active boards, custom
              fields, comments, and attachments in under 3 minutes with zero downtime.
            </p>
          </div>
          <a
            href={APP_CONFIG.signupUrl}
            className="px-5 py-3 rounded-lg bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors shrink-0 flex items-center justify-center gap-2"
          >
            <span>Start Free Migration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
