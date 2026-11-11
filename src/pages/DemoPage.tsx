import React, { useState } from 'react';
import { Play, CheckCircle2, ArrowRight, Calendar, Clock, User, Building, Mail, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ProductMockup } from '../components/ui/ProductMockup';
import { CTASection } from '../components/home/CTASection';

export const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '25-50',
    primaryInterest: 'Consolidating multiple tools',
    datePreference: 'Tomorrow Morning',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'hr' | 'ai' | 'dashboards'>('projects');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Header */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Live 1-on-1 Product Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            See ParroDash in action with your real workflow.
          </h1>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Schedule a personalized 25-minute live walkthrough with a product specialist or explore the interactive
            simulation below immediately.
          </p>
        </div>
      </section>

      {/* Main Booking & Interactive Canvas */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E6E6E9] rounded-2xl p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#141414]">Schedule Your Guided Demo</h2>
              <p className="text-xs text-[#777780] mt-1">
                We will tailor the session to your team’s exact challenges and tool stack.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">Demo Request Confirmed!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, {formData.name}. A calendar invite and Google Meet link have been dispatched to{' '}
                  <span className="font-mono font-semibold">{formData.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#0D0D0F] text-white text-xs font-semibold hover:bg-zinc-800"
                >
                  Schedule Another Demo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#141414] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Rivera"
                    className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#141414] mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#141414] mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#141414] mb-1">Team Size</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414] bg-white"
                    >
                      <option value="1-10">1 - 10 members</option>
                      <option value="11-50">11 - 50 members</option>
                      <option value="51-200">51 - 200 members</option>
                      <option value="201-1000">201 - 1,000 members</option>
                      <option value="1000+">1,000+ Enterprise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#141414] mb-1">Primary Interest</label>
                  <select
                    value={formData.primaryInterest}
                    onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414] bg-white"
                  >
                    <option value="Consolidating multiple tools">Consolidating multiple tools (Tasks, HR, Chat)</option>
                    <option value="Migrating from ClickUp or Asana">Migrating from ClickUp or Asana</option>
                    <option value="HR, Attendance & Payroll Suite">HR, Attendance & Native Payroll Suite</option>
                    <option value="Parro AI & Autonomous Agents">Parro AI & Autonomous Work Agents</option>
                    <option value="Enterprise Security & SAML SSO">Enterprise Security & SAML SSO</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#141414] mb-1">Preferred Time Window</label>
                  <select
                    value={formData.datePreference}
                    onChange={(e) => setFormData({ ...formData, datePreference: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414] bg-white"
                  >
                    <option value="Tomorrow Morning">Tomorrow Morning (9:00 AM - 12:00 PM EST)</option>
                    <option value="Tomorrow Afternoon">Tomorrow Afternoon (1:00 PM - 5:00 PM EST)</option>
                    <option value="Later this week">Later this week</option>
                    <option value="Next week">Next week</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0D0D0F] text-white font-bold text-xs hover:bg-[#202025] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Confirm Live Demo Booking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[10px] text-center text-[#777780]">
                  No sales pressure · Live technical walkthrough · Zero obligations
                </p>
              </form>
            )}
          </div>

          {/* Right Live Simulation Canvas */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#141414]">Try It Live in Sandbox Mode</h3>
                <p className="text-xs text-[#777780]">Switch modules to interact with simulated real-time data</p>
              </div>

              <div className="flex items-center gap-1 p-1 rounded-lg bg-[#F7F7F8] border border-[#E6E6E9] text-xs">
                {(['projects', 'hr', 'ai', 'dashboards'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded font-semibold capitalize transition-all ${
                      activeTab === tab ? 'bg-[#0D0D0F] text-white shadow-xs' : 'text-[#777780] hover:text-[#141414]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <ProductMockup module={activeTab} interactive={true} />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
