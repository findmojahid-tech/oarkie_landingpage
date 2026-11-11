import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../config/site';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  const handleSaveCookies = () => {
    localStorage.setItem('parrodash_cookie_consent', JSON.stringify(cookieSettings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  if (path === '/faq') {
    return (
      <div className="bg-[#FFFFFF] text-[#141414]">
        <Breadcrumbs />
        <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
              <span>Knowledge & Answers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
            <p className="text-base text-[#A0A0A8]">
              Comprehensive answers about ParroDash work management, migrations, AI security, and seat licensing.
            </p>
          </div>
        </section>
        <FAQAccordion />
        <CTASection />
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Legal & Compliance Governance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {path === '/privacy' && 'Privacy Policy'}
            {path === '/terms' && 'Terms of Service'}
            {path === '/cookies' && 'Cookie Preferences & Policy'}
          </h1>
          <p className="text-xs text-[#A0A0A8] font-mono">
            Last Updated: November 2026 · ParroDash by {APP_CONFIG.parentCompany}
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs leading-relaxed text-[#303034]">
        {path === '/cookies' && (
          <div className="p-6 rounded-2xl bg-[#F7F7F8] border border-[#E6E6E9] space-y-6">
            <div>
              <h2 className="text-base font-bold text-[#141414]">Manage Your Cookie Preferences</h2>
              <p className="text-xs text-[#777780] mt-1">
                Customize which cookies ParroDash is permitted to store in your browser. Strictly necessary cookies
                cannot be disabled as they are required for security and session tokens.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#E6E6E9]">
                <div>
                  <div className="font-bold text-[#141414]">Strictly Necessary Cookies</div>
                  <div className="text-[#777780]">Core authentication, CSRF tokens, and session persistence.</div>
                </div>
                <span className="text-[10px] uppercase font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                  Always Active
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#E6E6E9]">
                <div>
                  <div className="font-bold text-[#141414]">Performance & Telemetry</div>
                  <div className="text-[#777780]">Anonymous latency measurements and crash diagnostics.</div>
                </div>
                <input
                  type="checkbox"
                  checked={cookieSettings.analytics}
                  onChange={(e) => setCookieSettings({ ...cookieSettings, analytics: e.target.checked })}
                  className="w-4 h-4 accent-[#0D0D0F]"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#E6E6E9]">
                <div>
                  <div className="font-bold text-[#141414]">Marketing & Attribution</div>
                  <div className="text-[#777780]">Measure public marketing campaign effectiveness.</div>
                </div>
                <input
                  type="checkbox"
                  checked={cookieSettings.marketing}
                  onChange={(e) => setCookieSettings({ ...cookieSettings, marketing: e.target.checked })}
                  className="w-4 h-4 accent-[#0D0D0F]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleSaveCookies}
                className="px-4 py-2 rounded-lg bg-[#0D0D0F] text-white font-bold text-xs hover:bg-[#202025]"
              >
                Save Cookie Choices
              </button>
              {saved && <span className="text-emerald-700 font-semibold">✓ Preferences updated in local storage</span>}
            </div>
          </div>
        )}

        {path === '/privacy' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-[#141414]">1. Zero Customer Data AI Training Guarantee</h2>
            <p>
              ParroDash enforces contractual zero-data-retention invariants with all foundational AI model providers.
              Your tasks, code snippets, confidential documents, and employee salary records are strictly prohibited
              from being ingested, stored, or processed to train any public or foundational machine learning models.
            </p>

            <h2 className="text-lg font-bold text-[#141414]">2. Information We Collect</h2>
            <p>
              We collect information you explicitly provide when creating an account: your name, business email,
              company name, and billing details. We log technical diagnostic parameters including browser version,
              operating system, and IP address solely for security auditing and DDoS mitigation.
            </p>

            <h2 className="text-lg font-bold text-[#141414]">3. Data Sovereignty & GDPR Compliance</h2>
            <p>
              Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you retain
              the right to export your complete workspace archive at any time, request irrevocable data deletion, and
              designate specific European Union hosting regions for all company assets.
            </p>
          </div>
        )}

        {path === '/terms' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-[#141414]">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the ParroDash platform, marketing website, or mobile applications provided by {APP_CONFIG.parentCompany},
              you agree to be bound by these Terms of Service and our Master Subscription Agreement.
            </p>

            <h2 className="text-lg font-bold text-[#141414]">2. Account Ownership & Acceptable Use</h2>
            <p>
              You are responsible for maintaining the confidentiality of your workspace login credentials. You agree
              not to use the services for any unlawful activities, malicious penetration testing without authorization,
              or reverse engineering of proprietary algorithms.
            </p>

            <h2 className="text-lg font-bold text-[#141414]">3. Uptime SLA & Service Credits</h2>
            <p>
              Business and Enterprise tiers are governed by our contractual 99.9% and 99.99% service level agreements.
              Unscheduled downtime exceeding contractual thresholds entitles the customer to prorated service credits
              against future billing cycles.
            </p>
          </div>
        )}
      </section>

      <CTASection />
    </div>
  );
};
