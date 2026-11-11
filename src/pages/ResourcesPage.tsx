import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Newspaper, FileCheck, Video, Layout, Share2, Split, Users, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';

export const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    { title: 'Blog & Editorial', href: '/blog', icon: Newspaper, desc: 'Thought leadership on modern engineering, asynchronous operations, and work velocity.' },
    { title: 'Implementation Guides', href: '/guides', icon: FileCheck, desc: 'Step-by-step migration playbooks from ClickUp, Asana, and Jira to ParroDash.' },
    { title: 'Template Library', href: '/templates', icon: Layout, desc: 'Over 200+ pre-built workspace templates for engineering, marketing, and HR.' },
    { title: 'Integrations Directory', href: '/integrations', icon: Share2, desc: 'Connect Slack, GitHub, Figma, Google Workspace, and 1,000+ business applications.' },
    { title: 'Customer Stories', href: '/customer-stories', icon: Users, desc: 'Read how high-velocity software agencies and technology firms run their entire business on ParroDash.' },
    { title: 'Webinars & Masterclasses', href: '/webinars', icon: Video, desc: 'Deep-dive walkthroughs on agile scheduling, payroll automation, and AI workflows.' },
    { title: 'Product Comparisons', href: '/compare', icon: Split, desc: 'Detailed, honest head-to-head comparisons against ClickUp, Asana, Monday, and Notion.' },
    { title: 'Help Center & Tutorials', href: '/help', icon: BookOpen, desc: 'Comprehensive documentation, API references, keyboard shortcuts, and video guides.' },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">ParroDash Resources</h1>
          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Guides, templates, editorial deep dives, and product documentation to help your team operate faster.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.href}
                className="p-6 rounded-2xl bg-white border border-[#E6E6E9] hover:border-[#141414] hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0F] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#141414] group-hover:underline">{item.title}</h3>
                  <p className="text-xs text-[#777780] leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-[#141414]">
                  <span>Explore Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
