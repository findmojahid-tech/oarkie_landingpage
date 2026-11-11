import React, { useState } from 'react';
import { Check, X, ArrowRight, HelpCircle, Shield, Sparkles } from 'lucide-react';
import { PRICING_PLANS, COMPARISON_MATRIX } from '../config/plans';
import { calculateBilling, formatCurrency } from '../lib/pricing-calculator';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { CTASection } from '../components/home/CTASection';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Link } from 'react-router-dom';

export const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [seatCount, setSeatCount] = useState(10);

  const pricingFaqs = [
    {
      question: 'Can we switch between plans or cancel at any time?',
      answer: 'Yes. You can upgrade, downgrade, or cancel your subscription at any time directly from workspace settings. Unused time on annual plans is prorated as workspace credit.',
    },
    {
      question: 'Do you charge for view-only guest reviewers or external clients?',
      answer: 'No. Guest reviewers, external clients in client portals, and view-only stakeholders are completely free on Pro and Business plans.',
    },
    {
      question: 'Are there hidden seat minimums like competitors impose?',
      answer: 'Never. You can purchase exactly 1 seat on Pro or Business if you are a solo founder or small team, without being forced to pay for 3 or 5 seats.',
    },
    {
      question: 'How does the 14-day free trial work?',
      answer: 'You can test Pro or Business with your full team for 14 days without entering a credit card. If you choose not to upgrade, your workspace automatically converts to the Free Forever plan.',
    },
    {
      question: 'Do you offer non-profit or educational discounts?',
      answer: 'Yes! Verified educational institutions, students, and registered 501(c)(3) non-profit organizations receive a 50% discount on Pro and Business subscriptions.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Header */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Transparent Pricing · No Seat Traps</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Simple, honest pricing for high-velocity teams.
          </h1>

          <p className="text-base sm:text-lg text-[#A0A0A8] max-w-2xl mx-auto leading-relaxed">
            Replace separate subscriptions for project management, time tracking, employee attendance, and HR with one
            unified platform.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span
              className={`text-xs font-semibold cursor-pointer ${
                !isAnnual ? 'text-white' : 'text-[#777780]'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Billed Monthly
            </span>

            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle annual billing"
              className="relative w-14 h-7 bg-[#171719] border border-[#303034] rounded-full p-1 transition-colors focus-visible:ring-2 focus-visible:ring-white"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>

            <span
              className={`text-xs font-semibold cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? 'text-white' : 'text-[#777780]'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              <span>Billed Annually</span>
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded">
                Save 25%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const pricing = calculateBilling(plan.id, isAnnual, 1);
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? 'bg-[#0D0D0F] text-white shadow-2xl border-2 border-[#141414] scale-102 z-10'
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
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        {plan.id === 'enterprise' ? 'Custom' : formatCurrency(pricing.unitPrice)}
                      </span>
                      {plan.monthlyPrice > 0 && plan.id !== 'enterprise' && (
                        <span className={`text-xs ${isPopular ? 'text-[#777780]' : 'text-[#777780]'}`}>
                          / user / mo
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
                        : plan.id === 'enterprise'
                        ? 'Tailored volume quote'
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
                      Key Inclusions
                    </div>
                    {plan.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
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

        {/* Interactive Team Seat Calculator */}
        <div className="mt-16 p-8 rounded-2xl bg-[#F7F7F8] border border-[#E6E6E9] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#141414]">Interactive Team ROI & Annual Savings Calculator</h3>
              <p className="text-xs text-[#777780] mt-0.5">
                Calculate total investment and estimate savings versus paying for separate task, HR, and chat tools.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#777780]">Team Size:</span>
              <span className="text-sm font-extrabold font-mono text-[#141414] bg-white px-3 py-1 rounded border border-[#E6E6E9]">
                {seatCount} {seatCount === 1 ? 'Seat' : 'Seats'}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <input
              type="range"
              min={1}
              max={100}
              value={seatCount}
              onChange={(e) => setSeatCount(parseInt(e.target.value) || 1)}
              className="w-full accent-[#0D0D0F] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#777780] font-mono">
              <span>1 Seat</span>
              <span>25 Seats</span>
              <span>50 Seats</span>
              <span>100+ Seats</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E6E6E9]">
              <div className="text-[10px] uppercase text-[#777780]">Pro Tier Cost</div>
              <div className="text-xl font-bold text-[#141414] mt-1">
                {formatCurrency(calculateBilling('pro', isAnnual, seatCount).totalMonthly)} / mo
              </div>
              <div className="text-[10px] text-[#777780] mt-0.5">
                {formatCurrency(calculateBilling('pro', isAnnual, seatCount).totalAnnual)} billed annually
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E6E6E9]">
              <div className="text-[10px] uppercase text-[#777780]">Business Tier Cost</div>
              <div className="text-xl font-bold text-[#141414] mt-1">
                {formatCurrency(calculateBilling('business', isAnnual, seatCount).totalMonthly)} / mo
              </div>
              <div className="text-[10px] text-[#777780] mt-0.5">
                {formatCurrency(calculateBilling('business', isAnnual, seatCount).totalAnnual)} billed annually
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0D0D0F] text-white border border-[#303034]">
              <div className="text-[10px] uppercase text-emerald-400">Estimated Tool Consolidation Savings</div>
              <div className="text-xl font-bold text-white mt-1">
                {formatCurrency(seatCount * 28 * 12)} / yr
              </div>
              <div className="text-[10px] text-[#A0A0A8] mt-0.5">
                By replacing separate PM ($12), Slack ($8), and HR ($15) tools
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Feature Comparison Matrix (50+ Capabilities) */}
      <section className="py-20 bg-[#F7F7F8] border-t border-b border-[#E6E6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-[#777780]">
              Full Comparison
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#141414]">
              Compare every plan feature side-by-side.
            </h2>
            <p className="text-sm text-[#777780]">
              Complete breakdown of limits, security certifications, HR automation, and Parro AI allocations.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-[#E6E6E9] shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0D0D0F] text-white border-b border-[#303034]">
                  <th className="py-4 px-6 text-sm font-bold w-1/3">Features & Capabilities</th>
                  <th className="py-4 px-4 text-center font-bold">Free</th>
                  <th className="py-4 px-4 text-center font-bold text-emerald-400">Pro</th>
                  <th className="py-4 px-4 text-center font-bold">Business</th>
                  <th className="py-4 px-4 text-center font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E6E9]">
                {COMPARISON_MATRIX.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    <tr className="bg-[#F7F7F8] text-[#141414] font-bold text-xs uppercase tracking-wider">
                      <td colSpan={5} className="py-3 px-6 text-[11px] text-[#141414]">
                        {group.category}
                      </td>
                    </tr>
                    {group.items.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-zinc-50 transition-colors">
                        <td className="py-3.5 px-6">
                          <div className="font-semibold text-[#141414]">{row.name}</div>
                          <div className="text-[11px] text-[#777780]">{row.description}</div>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {typeof row.free === 'boolean' ? (
                            row.free ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-zinc-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-medium text-zinc-700">{row.free}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center bg-emerald-50/20">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-zinc-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold text-[#141414]">{row.pro}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {typeof row.business === 'boolean' ? (
                            row.business ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-zinc-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold text-[#141414]">{row.business}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {typeof row.enterprise === 'boolean' ? (
                            row.enterprise ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-zinc-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold text-[#141414]">{row.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <FAQAccordion items={pricingFaqs} title="Pricing FAQ" subtitle="Common billing, trial, and seat licensing questions." />

      <CTASection />
    </div>
  );
};
