import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { APP_CONFIG } from '../../config/site';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0F] text-white border-t border-[#303034] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
          <Zap className="w-3.5 h-3.5" />
          <span>Launch Your ParroDash Workspace Today</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Build your best work in one place.
        </h2>

        <p className="text-base sm:text-lg text-[#A0A0A8] max-w-2xl mx-auto leading-relaxed">
          Join thousands of high-velocity teams eliminating app fatigue. Unify your projects, people, conversations,
          and automations in ParroDash.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            href={APP_CONFIG.signupUrl}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            to="/contact-sales"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#171719] border border-[#303034] hover:border-white text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Talk to Sales</span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-xs text-[#777780]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Forever for up to 5 users
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-zinc-400" /> SOC 2 Type II Certified
          </span>
        </div>
      </div>
    </section>
  );
};
