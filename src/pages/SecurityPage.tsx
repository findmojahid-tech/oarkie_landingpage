import React, { useState } from 'react';
import { Shield, Lock, Server, FileCheck, CheckCircle2, ArrowRight, Download } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';

export const SecurityPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [requested, setRequested] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setRequested(true);
  };

  const securitySpecs = [
    {
      title: 'Data Encryption Standards',
      items: [
        'AES-256 bit encryption for all data at rest',
        'TLS 1.3 encryption with perfect forward secrecy in transit',
        'Customer-Managed Encryption Keys (CMEK) on Enterprise plans',
        'Granular field-level encryption for employee SSNs, bank details, and compensation',
      ],
    },
    {
      title: 'Compliance Certifications',
      items: [
        'SOC 2 Type II certified annually by independent AICPA auditors',
        'ISO/IEC 27001:2022 certified Information Security Management System',
        'GDPR, CCPA/CPRA, and PIPEDA full data privacy compliance',
        'HIPAA Business Associate Agreements (BAA) supported for healthcare entities',
      ],
    },
    {
      title: 'Zero Data Training AI Invariants',
      items: [
        'Customer workspace tasks, comments, and files are NEVER used to train foundation models',
        'All prompt completions operate within zero-retention private cloud enclaves',
        'Prompt inputs are memory-cleared immediately upon response delivery',
        'Option for Bring-Your-Own-Key (BYOK) with enterprise tenants',
      ],
    },
    {
      title: 'Infrastructure & Redundancy',
      items: [
        'Multi-region high-availability hosting across certified AWS & GCP regions',
        '99.99% contractual uptime SLA with real-time public status monitoring',
        'Point-in-time database backups retained with immutable write-once protection',
        'DDoS mitigation and web application firewalls (WAF) at the edge network',
      ],
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <Shield className="w-3.5 h-3.5" />
            <span>Security, Compliance & Privacy Center</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Security built into every layer.
          </h1>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            ParroDash safeguards mission-critical business data with strict encryption, multi-tenant isolation,
            comprehensive audits, and zero AI data retention.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securitySpecs.map((spec, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-[#E6E6E9] shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#141414] border-b border-[#E6E6E9] pb-3">
                {spec.title}
              </h3>
              <ul className="space-y-2.5">
                {spec.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5 text-xs text-[#303034]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Whitepaper Download Box */}
        <div className="p-8 rounded-2xl bg-[#0D0D0F] text-white border border-[#303034] shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-2">
            <h3 className="text-xl font-bold">Download the ParroDash Security & Compliance Whitepaper</h3>
            <p className="text-xs text-[#A0A0A8]">
              Includes architectural diagrams, penetration test summaries, data flow policies, and third-party audit
              certificates.
            </p>
          </div>

          <div className="md:col-span-5">
            {requested ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300">
                ✓ Security whitepaper PDF dispatched to <span className="font-mono text-white">{email}</span>.
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate email..."
                  className="flex-1 bg-[#171719] border border-[#303034] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
