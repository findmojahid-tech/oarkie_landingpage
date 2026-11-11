import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Play, CheckCircle2, Shield, Sparkles, FolderKanban, Users, Clock, Layers } from 'lucide-react';
import { APP_CONFIG } from '../config/site';
import { ProductMockup, type MockupModuleType } from '../components/ui/ProductMockup';
import { InteractiveDemoModal } from '../components/ui/InteractiveDemoModal';
import { TrustSection } from '../components/home/TrustSection';
import { ProblemSolutionSection } from '../components/home/ProblemSolutionSection';
import { InteractiveProductShowcase } from '../components/home/InteractiveProductShowcase';
import { AiShowcaseSection } from '../components/home/AiShowcaseSection';
import { SolutionsGridSection } from '../components/home/SolutionsGridSection';
import { WorkflowSection } from '../components/home/WorkflowSection';
import { PricingPreviewSection } from '../components/home/PricingPreviewSection';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { CTASection } from '../components/home/CTASection';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [heroModule, setHeroModule] = useState<MockupModuleType>('projects');
  const [heroPaused, setHeroPaused] = useState(false);
  const [motionReduced, setMotionReduced] = useState(false);
  const heroScreenRef = useRef<HTMLDivElement>(null);
  const screenProgressRef = useRef<HTMLDivElement>(null);

  const heroModules: { id: MockupModuleType; title: string; index: string }[] = [
    { id: 'projects', title: 'Projects', index: '01' },
    { id: 'tasks', title: 'Tasks', index: '02' },
    { id: 'dashboards', title: 'Dashboards', index: '03' },
    { id: 'calendar', title: 'Calendar', index: '04' },
  ];

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMotionReduced(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  // Auto-play a genuine product walkthrough. Pause when a visitor interacts
  // with the mockup; reduced-motion visitors control it manually.
  useEffect(() => {
    if (heroPaused || motionReduced) return;
    const timer = window.setInterval(() => {
      setHeroModule(current => {
        const at = heroModules.findIndex(item => item.id === current);
        return heroModules[(at + 1) % heroModules.length].id;
      });
    }, 4800);
    return () => window.clearInterval(timer);
  }, [heroPaused, motionReduced]);

  useLayoutEffect(() => {
    const screen = heroScreenRef.current;
    if (!screen || motionReduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(screen, { opacity: 0.25, y: 12, scale: 0.988 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.75,
        ease: 'power3.out', clearProps: 'opacity,transform',
      });
    }, screen);
    return () => ctx.revert();
  }, [heroModule, motionReduced]);

  useLayoutEffect(() => {
    const bar = screenProgressRef.current;
    if (!bar || motionReduced) return;
    const tween = gsap.fromTo(bar, { scaleX: 0 }, {
      scaleX: 1, duration: 4.8, ease: 'none',
      transformOrigin: 'left center', repeat: -1,
      paused: heroPaused,
    });
    return () => tween.kill();
  }, [heroModule, heroPaused, motionReduced]);

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      {/* SECTION 2 — HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-[#0D0D0F] text-white border-b border-[#303034] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Hero Copy */}
          <div data-motion="hero-copy" className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171719] border border-[#303034] text-xs font-mono text-[#A0A0A8]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ParroDash v3.4 is live</span>
              <span className="text-[#777780]">·</span>
              <span className="text-white hover:underline cursor-pointer" onClick={() => setDemoModalOpen(true)}>
                Explore What is New →
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              {APP_CONFIG.heroHeadline}
            </h1>

            <p className="text-base sm:text-xl text-[#A0A0A8] max-w-2xl mx-auto leading-relaxed">
              {APP_CONFIG.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={APP_CONFIG.signupUrl}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setDemoModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#171719] border border-[#303034] hover:border-white text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Watch Product Demo</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#777780] pt-2">
              <span>Free forever for up to 5 users</span>
              <span>·</span>
              <span>No credit card required</span>
              <span>·</span>
              <span>Setup takes under 2 minutes</span>
            </div>
          </div>

          {/* Product Interface Showcase Underneath Hero */}
          <div data-motion="hero-product" className="relative pt-6 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-end sm:justify-between mb-3">
              <div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#777780] font-mono">Inside the workspace</div>
                <div className="text-sm sm:text-base font-semibold text-white mt-1">See real workflows, not a static screenshot.</div>
              </div>
              <div role="group" aria-label="Select product preview" className="flex items-center gap-1 p-1 rounded-xl bg-[#171719] border border-[#303034] overflow-x-auto max-w-full">
                {heroModules.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={heroModule === item.id}
                    onClick={() => { setHeroModule(item.id); setHeroPaused(true); }}
                    className={`shrink-0 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${heroModule === item.id
                      ? 'bg-white text-black'
                      : 'text-[#A0A0A8] hover:bg-[#28282d] hover:text-white'}`}
                  >
                    <span className="opacity-60 font-mono mr-1">{item.index}</span> {item.title}
                  </button>
                ))}
              </div>
            </div>
            <div
              onMouseEnter={() => setHeroPaused(true)}
              onMouseLeave={() => setHeroPaused(false)}
              onFocusCapture={() => setHeroPaused(true)}
              onBlurCapture={event => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHeroPaused(false);
              }}
              className="relative rounded-2xl p-1 bg-[#202025] border border-[#303034] shadow-2xl overflow-hidden"
            >
              <div ref={screenProgressRef} aria-hidden="true" className="absolute top-0 inset-x-0 h-[2px] bg-white/75 z-10 origin-left" />
              <div ref={heroScreenRef} aria-live="off">
                <ProductMockup key={heroModule} module={heroModule} interactive={true} />
              </div>
            </div>
            <div className="flex justify-between gap-4 items-center mt-3 text-[11px] text-[#777780]">
              <span>Live interactive product demonstration</span>
              <button type="button" onClick={() => setHeroPaused(v => !v)}
                aria-label={heroPaused ? 'Resume automatic previews' : 'Pause automatic previews'}
                className="hover:text-white underline underline-offset-4">
                {heroPaused ? 'Play walkthrough' : 'Pause walkthrough'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TRUST AND POSITIONING */}
      <TrustSection />

      {/* SECTION 4 — PROBLEM AND SOLUTION */}
      <ProblemSolutionSection />

      {/* SECTION 5 — INTERACTIVE PRODUCT SHOWCASE (8 TABS) */}
      <InteractiveProductShowcase />

      {/* SECTION 6 — FEATURE SHOWCASE (Alternating Editorial Blocks) */}
      <section className="py-24 bg-[#FFFFFF] text-[#141414] border-b border-[#E6E6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
              Deep Architectural Power
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Designed with enterprise depth. Refined for daily speed.
            </h2>
            <p className="text-base text-[#777780]">
              Every module is designed to eliminate friction between planning, communicating, and paying your team.
            </p>
          </div>

          {/* Editorial Block 1: Critical Path & Multi-View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#777780]">
                01 · Work Management
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] leading-tight">
                Critical path Gantt charts that recalculate in milliseconds.
              </h3>
              <p className="text-sm text-[#777780] leading-relaxed">
                When a client review slips or an API deploy is delayed, ParroDash automatically identifies the
                cascading impact across dependent deliverables, highlighting zero-slack bottlenecks instantly.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Interactive drag-and-drop milestone resizing</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Slack-time calculation and baseline comparisons</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>1-click export to MS Project, PDF, and high-res PNG</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/features/gantt"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141414] hover:underline"
                >
                  <span>Explore Gantt Timelines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ProductMockup module="gantt" interactive={false} />
            </div>
          </div>

          {/* Editorial Block 2: HR, Attendance & Payroll */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ProductMockup module="hr" interactive={false} />
            </div>

            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#777780]">
                02 · People Operations
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] leading-tight">
                Attendance, leave management & direct deposit payroll in one tab.
              </h3>
              <p className="text-sm text-[#777780] leading-relaxed">
                Why maintain a separate payroll subscription and third-party time clock? ParroDash unifies employee
                timesheets, vacation approvals, and 50-state tax calculations directly into your operating platform.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Geo-fenced mobile clock-in & tablet office kiosk</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Automated PTO accruals and clash detection</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero-data-entry payroll preparation</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/features/payroll"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141414] hover:underline"
                >
                  <span>Explore Payroll Automation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Editorial Block 3: Real-Time Command Dashboards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#777780]">
                03 · Executive Visibility
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] leading-tight">
                Command center dashboards that eliminate weekly status meetings.
              </h3>
              <p className="text-sm text-[#777780] leading-relaxed">
                Assemble interactive dashboards with 35+ pre-built widgets. Track sprint burndowns, billable realization
                rates, gross profit margins, and department capacity in one pane of glass.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sub-100ms dashboard refresh latency</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Automated Monday morning executive email digests</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Drill down to individual task commits with one click</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/features/dashboards"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141414] hover:underline"
                >
                  <span>Explore Workspace Dashboards</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ProductMockup module="dashboards" interactive={false} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PARRO AI SHOWCASE */}
      <AiShowcaseSection />

      {/* SECTION 8 — SOLUTIONS (BY TEAM & INDUSTRY) */}
      <SolutionsGridSection />

      {/* SECTION 9 — WORKFLOWS (Plan → Assign → Collaborate → Approve → Deliver → Analyze) */}
      <WorkflowSection />

      {/* SECTION 10 — PRICING PREVIEW */}
      <PricingPreviewSection />

      {/* SECTION 11 — FAQ ACCORDION */}
      <FAQAccordion />

      {/* SECTION 12 — FINAL CTA */}
      <CTASection />

      {/* Guided Walkthrough Modal */}
      <InteractiveDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
};
