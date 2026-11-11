import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0F] text-[#777780] border-t border-[#303034] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top summary row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#303034]">
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-white text-black font-extrabold flex items-center justify-center text-sm">
                PD
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight leading-none">
                  ParroDash
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#777780] font-semibold mt-0.5">
                  by {APP_CONFIG.parentCompany}
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#A0A0A8] max-w-sm leading-relaxed">
              {APP_CONFIG.tagline} Plan projects, manage employees, track attendance, run payroll, and collaborate with
              context-aware AI in one unified operating system.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-[#A0A0A8] pt-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All Systems Operational (99.99%)
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-zinc-400" /> SOC 2 Type II
              </span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* Column 1: Core Platform */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase font-semibold tracking-wider text-white">
                Core Platform
              </div>
              <ul className="space-y-2">
                <li><Link to="/features/project-management" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/features/task-management" className="hover:text-white transition-colors">Tasks</Link></li>
                <li><Link to="/features/dashboards" className="hover:text-white transition-colors">Dashboards</Link></li>
                <li><Link to="/features/gantt" className="hover:text-white transition-colors">Gantt Timelines</Link></li>
                <li><Link to="/features/kanban-boards" className="hover:text-white transition-colors">Kanban Boards</Link></li>
                <li><Link to="/features/workload-management" className="hover:text-white transition-colors">Workload</Link></li>
                <li><Link to="/features/automations" className="hover:text-white transition-colors">Automations</Link></li>
                <li><Link to="/features" className="text-white hover:underline font-medium">All 21 Features →</Link></li>
              </ul>
            </div>

            {/* Column 2: HR & People */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase font-semibold tracking-wider text-white">
                HR & People OS
              </div>
              <ul className="space-y-2">
                <li><Link to="/features/hr-management" className="hover:text-white transition-colors">HR Suite</Link></li>
                <li><Link to="/features/employee-management" className="hover:text-white transition-colors">Employee Directory</Link></li>
                <li><Link to="/features/attendance" className="hover:text-white transition-colors">Attendance & Kiosk</Link></li>
                <li><Link to="/features/leave-management" className="hover:text-white transition-colors">Leave & PTO</Link></li>
                <li><Link to="/features/payroll" className="hover:text-white transition-colors">Payroll Automation</Link></li>
                <li><Link to="/features/time-tracking" className="hover:text-white transition-colors">Timesheets</Link></li>
                <li><Link to="/features/crm" className="hover:text-white transition-colors">Client CRM</Link></li>
                <li><Link to="/features/approvals" className="hover:text-white transition-colors">Approvals</Link></li>
              </ul>
            </div>

            {/* Column 3: Parro AI & Solutions */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase font-semibold tracking-wider text-white">
                AI & Solutions
              </div>
              <ul className="space-y-2">
                <li><Link to="/ai" className="hover:text-white transition-colors">Parro AI Overview</Link></li>
                <li><Link to="/ai/assistant" className="hover:text-white transition-colors">AI Assistant</Link></li>
                <li><Link to="/ai/agents" className="hover:text-white transition-colors">Autonomous Agents</Link></li>
                <li><Link to="/solutions/engineering" className="hover:text-white transition-colors">Engineering</Link></li>
                <li><Link to="/solutions/marketing" className="hover:text-white transition-colors">Marketing</Link></li>
                <li><Link to="/solutions/hr" className="hover:text-white transition-colors">People Ops</Link></li>
                <li><Link to="/industries/agencies" className="hover:text-white transition-colors">Digital Agencies</Link></li>
                <li><Link to="/enterprise" className="hover:text-white transition-colors">Enterprise Suite</Link></li>
              </ul>
            </div>

            {/* Column 4: Resources & Trust */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase font-semibold tracking-wider text-white">
                Trust & Company
              </div>
              <ul className="space-y-2">
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing & Plans</Link></li>
                <li><Link to="/compare" className="hover:text-white transition-colors">Compare vs ClickUp</Link></li>
                <li><Link to="/templates" className="hover:text-white transition-colors">Template Library</Link></li>
                <li><Link to="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link to="/security" className="hover:text-white transition-colors">Security & Trust</Link></li>
                <li><Link to="/changelog" className="hover:text-white transition-colors">Product Changelog</Link></li>
                <li><Link to="/roadmap" className="hover:text-white transition-colors">Public Roadmap</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About ParroDash</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#777780]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} {APP_CONFIG.name} · A {APP_CONFIG.parentCompany} Product</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Preferences</Link>
            <Link to="/security" className="hover:text-white transition-colors">Security Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={APP_CONFIG.loginUrl}
              className="hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <span>App Login</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={APP_CONFIG.signupUrl}
              className="text-white hover:underline transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Get Started Free</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
