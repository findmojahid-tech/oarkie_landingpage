import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { FEATURES_DATA } from '../data/featuresData';
import { ProductMockup } from '../components/ui/ProductMockup';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { CTASection } from '../components/home/CTASection';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { APP_CONFIG } from '../config/site';

export const FeatureDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !FEATURES_DATA[slug]) {
    return <Navigate to="/features" replace />;
  }

  const feature = FEATURES_DATA[slug];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* 1. DEDICATED HERO */}
      <section className="pt-12 pb-20 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
              <span>{feature.kicker}</span>
              <span>·</span>
              <span>ParroDash Core Feature</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {feature.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#F7F7F8] font-medium max-w-2xl mx-auto leading-relaxed">
              {feature.tagline}
            </p>

            <p className="text-sm text-[#A0A0A8] max-w-2xl mx-auto leading-relaxed">
              {feature.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={APP_CONFIG.signupUrl}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>Get Started with {feature.title} Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/demo"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#171719] border border-[#303034] text-white font-semibold text-xs hover:border-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>Schedule Guided Walkthrough</span>
              </Link>
            </div>
          </div>

          {/* 2. STATS BAR */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4">
            {feature.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#171719] border border-[#303034] text-center space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{stat.value}</div>
                <div className="text-xs text-[#A0A0A8]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 3. VISUAL PRODUCT SHOWCASE MOCKUP */}
          <div className="pt-6 max-w-6xl mx-auto">
            <div className="rounded-2xl p-1 bg-gradient-to-b from-[#303034] to-[#171719] shadow-2xl">
              <ProductMockup module={feature.mockupType} interactive={true} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES BREAKDOWN */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
            Feature Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141414]">
            Engineered for precision execution and team autonomy.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feature.keyCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E6E6E9] shadow-sm hover:border-[#141414] hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#777780]">
                  Capability 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#141414]">{cap.title}</h3>
                <p className="text-xs text-[#777780] leading-relaxed">{cap.description}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#E6E6E9]">
                {cap.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-[#303034]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WORKFLOW & USE CASES */}
      <section className="py-24 bg-[#F7F7F8] border-t border-b border-[#E6E6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
              Operational Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141414]">
              How top teams deploy {feature.title} daily.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feature.workflows.map((wf, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E6E6E9] space-y-3 shadow-sm"
              >
                <div className="text-xs font-mono font-bold text-white bg-[#0D0D0F] w-7 h-7 rounded-lg flex items-center justify-center">
                  {wf.step}
                </div>
                <h4 className="text-sm font-bold text-[#141414]">{wf.title}</h4>
                <p className="text-xs text-[#777780] leading-relaxed">{wf.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATED FEATURES */}
      {feature.relatedSlugs && feature.relatedSlugs.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b border-[#E6E6E9] pb-4">
            <div>
              <h3 className="text-xl font-bold text-[#141414]">Frequently Paired With {feature.title}</h3>
              <p className="text-xs text-[#777780] mt-0.5">Connected modules that enhance this capability</p>
            </div>
            <Link to="/features" className="text-xs font-semibold text-[#141414] hover:underline">
              All 21 Features →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {feature.relatedSlugs.map((relSlug) => {
              const rel = FEATURES_DATA[relSlug];
              if (!rel) return null;
              return (
                <Link
                  key={relSlug}
                  to={`/features/${relSlug}`}
                  className="p-4 rounded-xl border border-[#E6E6E9] hover:border-[#141414] transition-colors bg-white flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <div className="text-[10px] uppercase font-mono text-[#777780]">{rel.kicker}</div>
                    <div className="text-sm font-bold text-[#141414] group-hover:underline">{rel.title}</div>
                    <p className="text-xs text-[#777780] line-clamp-2">{rel.tagline}</p>
                  </div>
                  <div className="pt-3 flex items-center gap-1 text-[11px] font-semibold text-[#141414]">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* 7. FAQ ACCORDION */}
      <FAQAccordion
        items={feature.faqs}
        title={`${feature.title} FAQ`}
        subtitle={`Answers to common technical, migration, and billing questions about ${feature.title}.`}
      />

      {/* 8. FINAL CTA */}
      <CTASection />
    </div>
  );
};
