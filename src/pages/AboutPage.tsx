import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { APP_CONFIG } from '../config/site';
import { CheckCircle2, Shield, Heart, Zap, Globe } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Blazing Fast Interaction Speed',
      desc: 'Software should feel like an extension of your thought. We engineer every view for 60 FPS fluidity with zero micro-stutter.',
    },
    {
      title: 'Zero Hidden Paywalls & Minimums',
      desc: 'Transparent pricing with no forced 3-seat minimums or essential feature lockouts. Honest tools for honest work.',
    },
    {
      title: 'Unified First Principles',
      desc: 'Tasks, chats, attendance, and payroll are not separate companies; they are interconnected expressions of the same team effort.',
    },
    {
      title: 'Uncompromising Customer Privacy',
      desc: 'Your business secrets and employee records belong solely to you. Zero customer data is ever sold or used to train public AI.',
    },
  ];

  const leaders = [
    { name: 'Kaelen Vance', role: 'Chief Executive Officer', bio: 'Former systems architect with 15+ years scaling distributed enterprise work platforms.' },
    { name: 'Dr. Michelle Thorne', role: 'Chief Technology Officer', bio: 'PhD in Distributed Systems; pioneer in real-time graph databases and operational telemetry.' },
    { name: 'Liam O’Connor', role: 'Head of Product Design', bio: 'Passionate about minimalist, distraction-free interfaces that eliminate visual clutter.' },
    { name: 'Siddharth Rao', role: 'VP of Engineering', bio: 'Specialist in high-concurrency microservices and real-time state synchronization.' },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>A {APP_CONFIG.parentCompany} Product</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our mission is to bring coherence back to modern work.
          </h1>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            We believe teams accomplish great things when they spend less time switching tools and more time building.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
            The ParroDash Story
          </div>
          <h2 className="text-3xl font-extrabold text-[#141414]">
            Why we built ParroDash from scratch.
          </h2>
          <p className="text-sm text-[#303034] leading-relaxed">
            In 2024, our founding team looked around at the enterprise software landscape and saw total chaos. The
            average knowledge worker was toggling between 8 different browser tabs every single hour: Jira for engineering
            tickets, Slack for conversations, Notion for specs, BambooHR for vacation requests, Harvest for time
            tracking, and QuickBooks for contractor payments.
          </p>
          <p className="text-sm text-[#303034] leading-relaxed">
            Every application claimed to be all-in-one, yet none of them truly integrated daily project execution with
            people operations and payroll. Important context vanished into the cracks between tools, and software bills
            ballooned to unsustainable numbers.
          </p>
          <p className="text-sm text-[#303034] leading-relaxed">
            Under parent company <span className="font-semibold text-black">{APP_CONFIG.parentCompany}</span>, we set out
            to build <span className="font-semibold text-black">ParroDash</span>: an elegant, blisteringly fast,
            monochrome operating system where projects, people, conversations, and context-aware AI live on a single
            unified object graph.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F7F7F8] border-t border-b border-[#E6E6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-[#141414]">Our Operating Principles</h2>
            <p className="text-xs text-[#777780]">How we make decisions and engineer the platform every day.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E6E6E9] space-y-2">
                <h3 className="text-base font-bold text-[#141414]">{v.title}</h3>
                <p className="text-xs text-[#777780] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-[#141414]">Leadership Team</h2>
          <p className="text-xs text-[#777780]">Engineering leaders and product craftspeople.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-[#E6E6E9] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0D0D0F] text-white font-extrabold flex items-center justify-center text-sm">
                {leader.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#141414]">{leader.name}</h4>
                <div className="text-xs text-[#777780] font-mono">{leader.role}</div>
              </div>
              <p className="text-xs text-[#777780] leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
