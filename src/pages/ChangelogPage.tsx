import React from 'react';
import { Tag, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHANGELOG_DATA } from '../data/resourcesData';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';

export const ChangelogPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Weekly Release Cadence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Product Updates & Changelog
          </h1>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            We ship meaningful platform improvements and performance optimizations every single week. Follow our
            engineering changelog below.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {CHANGELOG_DATA.map((release, idx) => (
          <div key={idx} className="relative pl-8 sm:pl-10 border-l-2 border-[#E6E6E9] space-y-6">
            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#0D0D0F] border-4 border-white shadow-sm" />

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-base sm:text-lg font-mono font-bold text-[#141414]">{release.version}</span>
                <span className="text-xs font-mono text-[#777780]">{release.date}</span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                  {release.tag}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#141414]">
                {release.title}
              </h2>

              <p className="text-sm text-[#777780] leading-relaxed">
                {release.summary}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F7F8] border border-[#E6E6E9] space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#141414]">
                Detailed Improvements & Bug Fixes
              </div>
              <ul className="space-y-2 text-xs text-[#303034]">
                {release.improvements.map((imp, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <CTASection />
    </div>
  );
};
