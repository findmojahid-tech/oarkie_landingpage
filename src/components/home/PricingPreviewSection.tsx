import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../../config/plans';
import { calculateBilling, formatCurrency } from '../../lib/pricing-calculator';
import { APP_CONFIG } from '../../config/site';

export const PricingPreviewSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-24 bg-[#F7F7F8] text-[#141414] border-b border-[#E6E6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#777780]">
            <span>Transparent Pricing · No Seat Traps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414]">
            Start free. Scale seamlessly as your company grows.
          </h2>
          <p className="text-base text-[#777780] leading-relaxed">
            Every plan includes unlimited tasks and subtasks. Upgrade when you need critical path Gantt charts, native
            HR, automated payroll, and context-aware Parro AI.
          </p>

          {/* Billing Interval Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={`text-xs font-semibold cursor-pointer ${
                !isAnnual ? 'text-[#141414]' : 'text-[#777780]'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Billed Monthly
            </span>

            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle annual billing"
              className="relative w-12 h-6 bg-[#0D0D0F] rounded-full p-0.5 transition-colors focus-visible:ring-2 focus-visible:ring-black"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>

            <span
              className={`text-xs font-semibold cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? 'text-[#141414]' : 'text-[#777780]'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              <span>Billed Annually</span>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                Save 25%
              </span>
            </span>
          </div>

          <p className="text-[11px] text-[#777780]">
            *Proposed pricing for ParroDash Cloud. All plans backed by our 30-day money-back satisfaction guarantee.
          </p>
        </div>

        {/* Pricing Cards Grid (Free, Pro, Business) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.filter((p) => p.id !== 'enterprise').map((plan) => {
            const pricing = calculateBilling(plan.id, isAnnual, 1);
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? 'bg-[#0D0D0F] text-white shadow-2xl border-2 border-[#141414] scale-102'
                    : 'bg-[#FFFFFF] text-[#141414] border border-[#E6E6E9] shadow-sm hover:border-[#141414]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-white text-black border border-[#E6E6E9] shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isPopular ? 'text-[#A0A0A8]' : 'text-[#777780]'
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight">
                        {formatCurrency(pricing.unitPrice)}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span
                          className={`text-xs ${
                            isPopular ? 'text-[#777780]' : 'text-[#777780]'
                          }`}
                        >
                          / user / month
                        </span>
                      )}
                    </div>
                    <div
                      className={`text-[11px] mt-1 font-mono ${
                        isPopular ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    >
                      {plan.monthlyPrice === 0
                        ? 'Free Forever'
                        : isAnnual
                        ? 'Billed annually ($' + plan.annualPricePerMonth * 12 + '/yr)'
                        : 'Billed monthly ($' + plan.monthlyPrice + '/mo)'}
                    </div>
                  </div>

                  <div
                    className={`text-[11px] p-2.5 rounded-lg border ${
                      isPopular
                        ? 'bg-[#171719] border-[#303034] text-[#A0A0A8]'
                        : 'bg-[#F7F7F8] border-[#E6E6E9] text-[#777780]'
                    }`}
                  >
                    {plan.limits}
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div
                      className={`text-[11px] font-semibold uppercase tracking-wider ${
                        isPopular ? 'text-white' : 'text-[#141414]'
                      }`}
                    >
                      Core Capabilities
                    </div>
                    {plan.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPopular ? 'text-emerald-400' : 'text-[#141414]'
                          }`}
                        />
                        <span className={isPopular ? 'text-zinc-200' : 'text-[#303034]'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 space-y-3">
                  <a
                    href={plan.ctaHref}
                    className={`block w-full text-center py-2.5 px-4 rounded-lg font-semibold text-xs transition-all shadow-sm ${
                      isPopular
                        ? 'bg-white text-black hover:bg-zinc-200'
                        : 'bg-[#0D0D0F] text-white hover:bg-[#202025]'
                    }`}
                  >
                    {plan.ctaText} →
                  </a>
                  <p
                    className={`text-[10px] text-center ${
                      isPopular ? 'text-[#777780]' : 'text-[#777780]'
                    }`}
                  >
                    Instant setup · Cancel anytime
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Callout Banner */}
        <div className="p-8 rounded-2xl bg-[#0D0D0F] text-white border border-[#303034] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-[10px] uppercase font-mono tracking-wider text-emerald-400">
              Enterprise Scale & Governance
            </div>
            <h3 className="text-xl font-bold">
              Looking for custom security, SAML SSO, or dedicated private AI enclaves?
            </h3>
            <p className="text-xs text-[#A0A0A8] leading-relaxed">
              Our Enterprise plan includes custom MSAs, HIPAA/SOC 2 Type II packages, 99.99% uptime SLAs, and dedicated
              Technical Account Managers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/enterprise"
              className="px-4 py-2.5 rounded-lg border border-[#303034] hover:border-white text-xs font-semibold text-white text-center transition-colors"
            >
              Learn About Enterprise
            </Link>
            <Link
              to="/contact-sales"
              className="px-4 py-2.5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Talk to Sales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Link to Full Comparison Table */}
        <div className="text-center pt-2">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141414] hover:underline"
          >
            <span>See detailed feature comparison matrix (50+ capabilities)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
