import React, { useState } from 'react';
import { Mail, Phone, Building, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';

export const ContactSalesPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    teamSize: '50-200',
    currentTools: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Header */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Direct Enterprise Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Talk with our product and solutions team.
          </h1>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Whether evaluating volume pricing, compliance questionnaires, or custom migrations, our solutions engineers
            are here to help.
          </p>
        </div>
      </section>

      {/* Form & Office Information */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E6E6E9] rounded-2xl p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#141414]">Enterprise Inquiry Form</h2>
              <p className="text-xs text-[#777780] mt-1">
                Guaranteed response within 2 business hours from a senior solutions architect.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950">Inquiry Dispatched Successfully</h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, {formData.firstName}. We have logged your request. A designated enterprise solutions
                  architect has received your parameters and will reply to{' '}
                  <span className="font-mono font-semibold">{formData.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#0D0D0F] text-white text-xs font-semibold hover:bg-zinc-800"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#141414] mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Sarah"
                      className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#141414] mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Jenkins"
                      className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#141414] mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@enterprise.com"
                      className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#141414] mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Apex Global Group"
                      className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#141414] mb-1">Team Headcount</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414] bg-white"
                    >
                      <option value="10-50">10 - 50 employees</option>
                      <option value="50-200">50 - 200 employees</option>
                      <option value="200-1000">200 - 1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-[#141414] mb-1">Current Primary Tools</label>
                    <input
                      type="text"
                      value={formData.currentTools}
                      onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                      placeholder="e.g. Jira, Slack, BambooHR, Asana"
                      className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#141414] mb-1">Tell us about your requirements</label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe specific timelines, compliance requirements (SOC 2 / HIPAA), or data residency needs..."
                    className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0D0D0F] text-white font-bold text-xs hover:bg-[#202025] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Submit Inquiry to Enterprise Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0D0D0F] text-white border border-[#303034] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Direct Contact Channels
              </div>
              <h3 className="text-lg font-bold">Prefer immediate contact?</h3>
              <div className="space-y-3 text-xs text-[#A0A0A8]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="font-mono text-white">enterprise@parrodash.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="font-mono text-white">+1 (800) 542-PARRO</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-white" />
                  <span>Coverage: 24/7 Global Enterprise Support</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F7F8] border border-[#E6E6E9] space-y-3 text-xs">
              <h4 className="font-bold text-[#141414] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Enterprise SLA Commitments</span>
              </h4>
              <ul className="space-y-2 text-[#777780]">
                <li>• Under 2-hour initial response SLA on enterprise sales inquiries</li>
                <li>• Formal mutual Non-Disclosure Agreements (NDAs) executed in under 24 hours</li>
                <li>• Dedicated technical solutions engineer assigned for PoCs and architecture reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
