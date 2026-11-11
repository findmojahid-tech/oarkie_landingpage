import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Megaphone,
  PenTool,
  HeartHandshake,
  TrendingUp,
  Sliders,
  Award,
  Rocket,
  Compass,
  Cpu,
  Building,
  LineChart,
  ShoppingBag,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

export const SolutionsGridSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'teams' | 'industries'>('teams');

  const teams = [
    { name: 'Engineering & Product', slug: 'engineering', icon: Code, desc: 'Agile sprint boards, bug backlogs, and GitHub commit synchronization.' },
    { name: 'Marketing Teams', slug: 'marketing', icon: Megaphone, desc: 'Omnichannel campaign calendars, visual proofing, and asset approvals.' },
    { name: 'Design & Creative', slug: 'design', icon: PenTool, desc: 'Figma frame embedding, pixel-accurate feedback pins, and design tokens.' },
    { name: 'People & HR', slug: 'hr', icon: HeartHandshake, desc: 'Automated onboarding, leave balance approvals, and direct deposit payroll.' },
    { name: 'Sales & Revenue', slug: 'sales', icon: TrendingUp, desc: 'Visual deal stages, client contract timelines, and customer onboarding handoffs.' },
    { name: 'Operations & PMO', slug: 'operations', icon: Sliders, desc: 'Enterprise portfolio health, standardized SOP templates, and capacity balancing.' },
    { name: 'Executive Leadership', slug: 'leadership', icon: Award, desc: 'Live company OKRs, real-time KPI scorecards, and automated Monday digests.' },
    { name: 'Early Startups', slug: 'startups', icon: Rocket, desc: 'All-in-one lean operating system to maximize runway from day one.' },
  ];

  const industries = [
    { name: 'Creative & Digital Agencies', slug: 'agencies', icon: Compass, desc: 'Client retainers, billable time tracking, and white-labeled client guest hubs.' },
    { name: 'Software & Technology', slug: 'software', icon: Cpu, desc: 'Fast backlog grooming, CI/CD release gates, and verified engineering wikis.' },
    { name: 'Professional Services', slug: 'professional-services', icon: Building, desc: 'Fixed-fee SOW milestones, realization rates, and client contract sign-offs.' },
    { name: 'Management Consulting', slug: 'consulting', icon: LineChart, desc: 'Associate staffing utilization, slide deck reviews, and executive memos.' },
    { name: 'E-Commerce Brands', slug: 'ecommerce', icon: ShoppingBag, desc: 'Seasonal collection launches, factory timelines, and social ad variations.' },
    { name: 'Education & Universities', slug: 'education', icon: GraduationCap, desc: 'Curriculum schedules, research grant milestones, and faculty leave policies.' },
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] text-[#141414] border-b border-[#E6E6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
            Tailored Operating Blueprints
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414]">
            Built for how your specific team works.
          </h2>
          <p className="text-base text-[#777780] leading-relaxed">
            Whether you are managing engineering sprints, launching marketing campaigns, or running agency retainers,
            ParroDash adapts to your exact operational workflows.
          </p>

          {/* Category Toggle */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory('teams')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'teams'
                  ? 'bg-[#0D0D0F] text-white shadow-sm'
                  : 'bg-[#F7F7F8] text-[#777780] hover:text-[#141414]'
              }`}
            >
              Solutions by Team ({teams.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('industries')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'industries'
                  ? 'bg-[#0D0D0F] text-white shadow-sm'
                  : 'bg-[#F7F7F8] text-[#777780] hover:text-[#141414]'
              }`}
            >
              Solutions by Industry ({industries.length})
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeCategory === 'teams' ? teams : industries).map((item, idx) => {
            const Icon = item.icon;
            const targetUrl = activeCategory === 'teams' ? `/solutions/${item.slug}` : `/industries/${item.slug}`;

            return (
              <Link
                key={idx}
                to={targetUrl}
                className="group p-6 rounded-2xl bg-[#FFFFFF] border border-[#E6E6E9] hover:border-[#0D0D0F] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0F] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#141414] group-hover:text-black">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#777780] mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-center gap-1 text-xs font-semibold text-[#141414] group-hover:underline">
                  <span>View Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
