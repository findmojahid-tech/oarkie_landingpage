import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { APP_CONFIG } from '../config/site';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Question', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const offices = [
    { city: 'San Francisco', role: 'Global Headquarters & Engineering', address: '500 Howard Street, Suite 400', phone: '+1 (415) 800-PARRO' },
    { city: 'London', role: 'EMEA Operations & Solutions', address: '100 Bishopsgate, Level 18', phone: '+44 20 7946 0192' },
    { city: 'Tokyo', role: 'APAC Operations & Support', address: 'Roppongi Hills Mori Tower, 24F', phone: '+81 3 5555 0148' },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Direct Channels</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact ParroDash</h1>
          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Have questions about migrations, support, partnerships, or our parent company {APP_CONFIG.parentCompany}? We are here to assist.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E6E6E9] rounded-2xl p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-[#141414]">Send Us a Message</h2>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">Message Received</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, {formData.name}. Our support team will respond to <span className="font-mono font-semibold">{formData.email}</span> within 4 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#0D0D0F] text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#141414] mb-1">Your Name</label>
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
                  <label className="block font-semibold text-[#141414] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#141414] mb-1">Inquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414] bg-white"
                  >
                    <option value="General Question">General Product Question</option>
                    <option value="Technical Support">Technical Support / Bug Report</option>
                    <option value="Press & Media">Press & Media Inquiries</option>
                    <option value="Partnership">Technology Partner / Integration</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#141414] mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help your team?"
                    className="w-full px-3 py-2 rounded-lg border border-[#E6E6E9] focus:outline-none focus:border-[#141414]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0D0D0F] text-white font-bold text-xs hover:bg-[#202025] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0D0D0F] text-white border border-[#303034] space-y-4">
              <h3 className="text-base font-bold">Quick Inquiries</h3>
              <div className="space-y-2.5 text-xs text-[#A0A0A8]">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" />
                  <span>General: hello@parrodash.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" />
                  <span>Support: support@parrodash.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" />
                  <span>Press: press@tparro.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#777780] font-semibold">
                Global Office Hubs
              </h4>
              {offices.map((off, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F7F7F8] border border-[#E6E6E9] text-xs space-y-1">
                  <div className="font-bold text-[#141414] flex items-center justify-between">
                    <span>{off.city}</span>
                    <span className="text-[10px] text-[#777780] font-normal">{off.role}</span>
                  </div>
                  <div className="text-[#777780]">{off.address}</div>
                  <div className="text-[11px] font-mono text-[#141414] pt-1">{off.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
