import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Server, Cpu, CheckCircle2, ArrowRight, FileCheck, Headphones, Globe } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';

export const EnterprisePage: React.FC = () => {
  const securityPillars = [
    {
      icon: Lock,
      title: 'SAML 2.0 & SCIM Provisioning',
      desc: 'Seamless integration with Okta, Azure AD (Entra ID), OneLogin, and Google Workspace with automated employee de-provisioning.',
    },
    {
      icon: Server,
      title: 'Dedicated Tenant & Data Residency',
      desc: 'Host your data in dedicated VPCs or choose regional data residency across the United States, European Union, and Asia-Pacific.',
    },
    {
      icon: Cpu,
      title: 'Zero Data Retention AI Enclaves',
      desc: 'Run Parro AI with private enterprise contracts guaranteeing your tasks, documents, and code are never stored or used to train models.',
    },
    {
      icon: FileCheck,
      title: 'SOC 2 Type II & HIPAA Compliance',
      desc: 'Full third-party audit reports available under NDA. Execute custom Business Associate Agreements (BAAs) and DPAs.',
    },
    {
      icon: Headphones,
      title: 'Named Technical Account Manager',
      desc: 'Dedicated solutions architects, tailored migration assistance, custom API rate limits, and 24/7/365 emergency phone escalation.',
    },
    {
      icon: Globe,
      title: '99.99% Financially-Backed SLA',
      desc: 'Enterprise-grade reliability with real-time multi-region redundancy, automated failover, and contractual credit guarantees.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-16 pb-20 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <Shield className="w-3.5 h-3.5" />
            <span>Enterprise Operating Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Security, governance, and scale for global organizations.
          </h1>

          <p className="text-base sm:text-lg text-[#A0A0A8] max-w-2xl mx-auto leading-relaxed">
            ParroDash Enterprise provides the granular administrative controls, data isolation, and white-glove support
            demanded by regulated industries and multinational corporations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/contact-sales"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Contact Enterprise Sales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/security"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#171719] border border-[#303034] text-white font-semibold text-xs hover:border-white transition-all flex items-center justify-center gap-2"
            >
              <span>Review Security Whitepaper</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Security Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
            Enterprise Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141414]">
            Built from the ground up for zero-trust security.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E6E6E9] shadow-sm hover:border-[#141414] hover:shadow-lg transition-all space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D0D0F] text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141414]">{item.title}</h3>
                <p className="text-xs text-[#777780] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Migration & White-Glove Support */}
      <section className="py-20 bg-[#F7F7F8] border-t border-b border-[#E6E6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#777780]">
              White-Glove Migration Services
            </div>
            <h2 className="text-3xl font-extrabold text-[#141414]">
              Seamless transition from Jira, ClickUp, or legacy ERP systems.
            </h2>
            <p className="text-xs sm:text-sm text-[#777780] leading-relaxed">
              Our dedicated solutions engineering team manages the complete end-to-end migration of your projects,
              custom fields, documents, and historical comments with zero downtime for your active operations.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#141414] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pre-migration data audit and field mapping</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#141414] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Dedicated sandbox staging environment for testing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#141414] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Custom team training workshops and live administrator onboarding</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-2xl bg-[#0D0D0F] text-white border border-[#303034] space-y-6 shadow-xl">
            <h3 className="text-lg font-bold">Request an Enterprise Architecture Review</h3>
            <p className="text-xs text-[#A0A0A8]">
              Speak directly with an enterprise solutions architect about compliance requirements, custom VPC hosting,
              and volume seat discounts.
            </p>
            <Link
              to="/contact-sales"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
