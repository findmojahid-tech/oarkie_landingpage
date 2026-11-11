import React, { useState } from 'react';
import { Search, HelpCircle, BookOpen, Layers, Shield, Zap, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { Link } from 'react-router-dom';

export const HelpPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const helpSections = [
    {
      title: 'Getting Started & Workspaces',
      icon: Zap,
      articles: [
        'How to create your first workspace and invite team members',
        'Importing data from ClickUp, Asana, Monday, and Trello',
        'Understanding workspace roles: Admin, Member, Guest, and Reviewer',
        'Setting up company-wide custom fields and tags',
      ],
    },
    {
      title: 'Projects, Tasks & Gantt',
      icon: Layers,
      articles: [
        'Creating critical path dependency chains in Gantt timelines',
        'Configuring automated Kanban board transitions and WIP limits',
        'Using formula fields to calculate project margins and velocity',
        'Subtask hierarchies and checklist decomposition',
      ],
    },
    {
      title: 'HR, Attendance & Payroll',
      icon: HelpCircle,
      articles: [
        'Configuring geo-fenced mobile clock-in and tablet office kiosks',
        'Setting up paid time off (PTO) accrual schedules and policies',
        'Running 50-state direct deposit payroll with automated tax filings',
        'Managing contractor invoices and international payouts',
      ],
    },
    {
      title: 'Security, SSO & Administration',
      icon: Shield,
      articles: [
        'Configuring Okta, Azure AD, and Google Workspace SAML 2.0 SSO',
        'Automated SCIM user provisioning and de-provisioning',
        'Accessing SOC 2 Type II audit reports and compliance vaults',
        'Parro AI zero customer data retention security guarantees',
      ],
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Documentation & Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">How can we help?</h1>
          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Search tutorials, API documentation, troubleshooting guides, and operational blueprints.
          </p>

          <div className="pt-4 max-w-xl mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777780]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help articles (e.g. Gantt dependencies, SAML SSO, Payroll)..."
              className="w-full bg-[#171719] border border-[#303034] rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#777780] focus:outline-none focus:border-white shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {helpSections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-[#E6E6E9] shadow-xs space-y-4">
                <div className="flex items-center gap-3 border-b border-[#E6E6E9] pb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0D0D0F] text-white flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#141414]">{sec.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {sec.articles.map((art, aIdx) => (
                    <li key={aIdx}>
                      <a
                        href="#article"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Viewing article: ${art}`);
                        }}
                        className="text-xs text-[#303034] hover:text-black hover:underline flex items-start gap-2"
                      >
                        <span className="text-[#777780]">•</span>
                        <span>{art}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="p-8 rounded-2xl bg-[#F7F7F8] border border-[#E6E6E9] text-center space-y-3">
          <h3 className="text-base font-bold text-[#141414]">Still need technical support?</h3>
          <p className="text-xs text-[#777780] max-w-md mx-auto">
            Our 24/7 global engineering support team is standing by to resolve any issue with your workspace.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0D0D0F] text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
            >
              <span>Submit a Support Ticket</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
