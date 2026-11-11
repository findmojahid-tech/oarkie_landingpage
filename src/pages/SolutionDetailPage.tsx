import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, ChevronRight, Layers, Building } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { CTASection } from '../components/home/CTASection';
import { APP_CONFIG } from '../config/site';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !SOLUTIONS_DATA[slug]) {
    return <Navigate to="/solutions/engineering" replace />;
  }

  const solution = SOLUTIONS_DATA[slug];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-12 pb-20 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
              <span>{solution.kicker}</span>
              <span>·</span>
              <span>{solution.type === 'team' ? 'Team Operating Solution' : 'Industry Specialized OS'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {solution.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#F7F7F8] font-medium max-w-2xl mx-auto leading-relaxed">
              {solution.tagline}
            </p>

            <p className="text-sm text-[#A0A0A8] max-w-2xl mx-auto leading-relaxed">
              {solution.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={APP_CONFIG.signupUrl}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>Deploy Solution Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/demo"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#171719] border border-[#303034] text-white font-semibold text-xs hover:border-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>Book Guided Walkthrough</span>
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4">
            {solution.stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#171719] border border-[#303034] text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{stat.value}</div>
                <div className="text-xs text-[#A0A0A8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pains vs Solutions */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
            Problem & Resolution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141414]">
            Why standard fragmented tools fail {solution.title.split('for ')[1] || 'teams'}.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solution.painsAndGains.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E6E6E9] shadow-sm space-y-4">
              <div className="space-y-2 p-3 rounded-xl bg-rose-50/60 border border-rose-200/80 text-xs text-rose-950">
                <div className="font-bold flex items-center gap-1.5 text-rose-700">
                  <XCircle className="w-4 h-4" />
                  <span>The Legacy Friction</span>
                </div>
                <p className="leading-relaxed">{item.problem}</p>
              </div>

              <div className="space-y-2 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-xs text-emerald-950">
                <div className="font-bold flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The ParroDash Solution</span>
                </div>
                <p className="leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Features Grid */}
      <section className="py-20 bg-[#F7F7F8] border-t border-b border-[#E6E6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#141414]">
              Connected Core Capabilities
            </h2>
            <p className="text-xs text-[#777780]">
              Key modules included in this solution blueprint
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.featuredFeatures.map((feat, idx) => (
              <Link
                key={idx}
                to={`/features/${feat.slug}`}
                className="p-6 rounded-2xl bg-white border border-[#E6E6E9] hover:border-[#141414] hover:shadow-lg transition-all space-y-3 flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-base font-bold text-[#141414] group-hover:underline">{feat.title}</h3>
                  <p className="text-xs text-[#777780] mt-1 leading-relaxed">{feat.description}</p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-[#141414]">
                  <span>Explore Feature</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Workflow */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#141414]">
            How Teams Deploy This Operating Rhythm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solution.workflows.map((wf, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E6E6E9] space-y-3 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-[#0D0D0F] text-white font-mono text-xs font-bold flex items-center justify-center">
                {wf.step}
              </div>
              <h4 className="text-base font-bold text-[#141414]">{wf.title}</h4>
              <p className="text-xs text-[#777780] leading-relaxed">{wf.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion items={solution.faqs} title={`${solution.title.split('for ')[1] || 'Solution'} FAQ`} />

      <CTASection />
    </div>
  );
};
