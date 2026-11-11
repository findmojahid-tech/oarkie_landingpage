/**
 * Centralized Plans and Pricing Configuration for ParroDash
 * All tier values, discounts, and feature matrix comparisons are declared here.
 */

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  badge?: string;
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
  limits: string;
  highlights: string[];
  features: {
    workManagement: string[];
    hrOperations: string[];
    collaboration: string[];
    aiAndAutomation: string[];
    securityAndAdmin: string[];
  };
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Forever',
    description: 'Essential work management for small teams and solopreneurs getting organized.',
    monthlyPrice: 0,
    annualPricePerMonth: 0,
    ctaText: 'Get Started Free',
    ctaHref: 'https://app.parrodash.com/signup?plan=free',
    limits: 'Up to 5 team members · 100MB cloud storage',
    highlights: [
      'Unlimited tasks and subtasks',
      'Kanban board and list views',
      'Basic employee directory',
      'Team chat and direct messages',
      'Real-time doc collaboration',
      'Community support',
    ],
    features: {
      workManagement: ['Unlimited tasks & projects', 'List & Kanban views', 'Basic sprint cycles', 'Subtasks & checklists', 'Custom tags & priority flags'],
      hrOperations: ['Basic employee directory', 'Personal profile cards', 'Org chart visualization'],
      collaboration: ['Real-time 1:1 & team chat', 'Task comment threads', 'Collaborative docs & wikis (up to 10)'],
      aiAndAutomation: ['50 Parro AI queries/month', 'Basic automation rules (5 active)'],
      securityAndAdmin: ['Two-factor authentication (2FA)', 'Standard SSL encryption', 'Standard role permissions'],
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Power tools, Gantt timelines, time tracking, and advanced automations for fast-moving teams.',
    monthlyPrice: 12,
    annualPricePerMonth: 9,
    badge: 'Most Popular',
    isPopular: true,
    ctaText: 'Start 14-Day Free Trial',
    ctaHref: 'https://app.parrodash.com/signup?plan=pro',
    limits: 'Unlimited members · Unlimited storage · 30-day version history',
    highlights: [
      'Interactive Gantt charts & timelines',
      'Native time tracking & billable hours',
      'Automated leave & PTO management',
      'Custom dashboards with 30+ widgets',
      '500 automation actions per month',
      'Parro AI Assistant (1,000 queries/mo)',
    ],
    features: {
      workManagement: ['Everything in Free, plus:', 'Interactive Gantt charts', 'Calendar & timeline views', 'Native time tracking & timers', 'Custom fields (unlimited)', 'Portfolio dash rollups'],
      hrOperations: ['Automated leave & PTO requests', 'Company holidays calendar', 'Attendance clock-in/out', 'Timesheet approvals'],
      collaboration: ['Unlimited collaborative docs', 'Guest viewers (10 included)', 'File attachments up to 1GB', 'Rich media embeds'],
      aiAndAutomation: ['1,000 Parro AI queries/user/mo', 'AI task decomposition', '500 automation actions/month', 'Webhook triggers'],
      securityAndAdmin: ['Granular role permissions', 'Custom user roles', 'Audit logs (30 days)', 'Priority email support'],
    },
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Complete operating system with full HR suite, payroll automation, CRM, and unlimited AI.',
    monthlyPrice: 24,
    annualPricePerMonth: 19,
    badge: 'Full Suite Power',
    ctaText: 'Start Free Business Trial',
    ctaHref: 'https://app.parrodash.com/signup?plan=business',
    limits: 'Unlimited members · Unlimited storage · 1-year version history',
    highlights: [
      'Full HR Suite & automated payroll runs',
      'Client CRM & deal pipeline tracking',
      'Multi-stage approvals & governance',
      'Workload & capacity management',
      'Unlimited Parro AI & autonomous agents',
      'Dedicated onboarding & 24/7 SLA',
    ],
    features: {
      workManagement: ['Everything in Pro, plus:', 'Workload & capacity balancing', 'Critical path dependency calculation', 'Cross-project baseline tracking', 'Custom formula fields'],
      hrOperations: ['Complete Payroll processing', 'Automated tax calculations', 'Direct deposit disbursement', 'Contractor invoices & 1099s', 'Performance reviews & 360 feedback'],
      collaboration: ['Unlimited guest seats', 'Client portal with custom branding', 'Proofing & Creative studio pins', 'Meeting agenda auto-sync'],
      aiAndAutomation: ['Unlimited Parro AI queries', 'Autonomous task triage agents', 'Predictive workflow automation', '5,000 automation actions/month'],
      securityAndAdmin: ['Single Sign-On (Google & Microsoft SSO)', 'Advanced export & compliance logs', '1-year audit logs', 'Dedicated customer success manager'],
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom security, SAML SSO, tailored compliance, data residency, and white-glove migration.',
    monthlyPrice: 49,
    annualPricePerMonth: 39,
    badge: 'Custom Tailored',
    ctaText: 'Contact Enterprise Sales',
    ctaHref: '/contact-sales',
    limits: 'Custom volume seats · Unlimited history · Dedicated instance option',
    highlights: [
      'SAML 2.0 / Okta / Azure AD SSO',
      'HIPAA, SOC 2 Type II & ISO 27001 packages',
      'Custom data residency (US, EU, APAC)',
      '99.99% guaranteed uptime SLA',
      'Dedicated Solutions Architect & 24/7 phone',
      'Custom API rate limits & private webhooks',
    ],
    features: {
      workManagement: ['Everything in Business, plus:', 'Unlimited automated workspaces', 'Enterprise portfolio governance', 'Custom object models & relationships', 'White-labeled interface'],
      hrOperations: ['Global multi-currency payroll', 'Custom compliance workflows', 'Enterprise HRIS sync (Workday, BambooHR)', 'Custom employee review cycles'],
      collaboration: ['Enterprise message archiving', 'Legal hold capabilities', 'Air-gapped workspace options', 'Domain-restricted sharing'],
      aiAndAutomation: ['Dedicated private AI tenant', 'Zero data retention for AI training', 'Custom fine-tuned company prompts', 'Unlimited automation triggers'],
      securityAndAdmin: ['SAML 2.0 / SCIM user provisioning', 'SOC 2 Type II audit report access', 'Custom MSAs & DPAs', 'Named Technical Account Manager'],
    },
  },
];

export interface FeatureComparisonCategory {
  category: string;
  items: {
    name: string;
    description: string;
    free: string | boolean;
    pro: string | boolean;
    business: string | boolean;
    enterprise: string | boolean;
  }[];
}

export const COMPARISON_MATRIX: FeatureComparisonCategory[] = [
  {
    category: 'Work & Task Management',
    items: [
      { name: 'Tasks & Subtasks', description: 'Create and organize actionable work items', free: 'Unlimited', pro: 'Unlimited', business: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Kanban & List Views', description: 'Visual drag-and-drop workflow columns', free: true, pro: true, business: true, enterprise: true },
      { name: 'Interactive Gantt Charts', description: 'Schedule milestones and dependencies', free: false, pro: true, business: true, enterprise: true },
      { name: 'Calendar & Timeline', description: 'Multi-project scheduling grids', free: 'Basic', pro: true, business: true, enterprise: true },
      { name: 'Workload & Capacity', description: 'Real-time team utilization heatmaps', free: false, pro: false, business: true, enterprise: true },
      { name: 'Custom Fields', description: 'Formulas, dropdowns, currencies, dates', free: 'Up to 5', pro: 'Unlimited', business: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Sprint Automations', description: 'Auto-carryover incomplete sprint items', free: false, pro: true, business: true, enterprise: true },
    ],
  },
  {
    category: 'HR & People Operations',
    items: [
      { name: 'Employee Directory & Profiles', description: 'Centralized team contact cards', free: true, pro: true, business: true, enterprise: true },
      { name: 'Leave & PTO Management', description: 'Accrual policies and approval flows', free: false, pro: true, business: true, enterprise: true },
      { name: 'Attendance & Clock-In', description: 'Timesheet logging and kiosk verification', free: false, pro: true, business: true, enterprise: true },
      { name: 'Native Payroll Processing', description: 'Direct deposit, pay stubs, and tax prep', free: false, pro: false, business: true, enterprise: true },
      { name: 'HRIS Integrations', description: 'Sync with Workday, Gusto, and BambooHR', free: false, pro: false, business: 'Add-on', enterprise: true },
    ],
  },
  {
    category: 'Parro AI & Automations',
    items: [
      { name: 'Parro AI Monthly Queries', description: 'AI assistant prompts and summarizations', free: '50 / mo', pro: '1,000 / user', business: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Autonomous Work Agents', description: 'Self-executing triage and follow-up agents', free: false, pro: false, business: true, enterprise: true },
      { name: 'Monthly Automations Runs', description: 'Triggers, webhooks, and auto-actions', free: '5 runs', pro: '500 runs', business: '5,000 runs', enterprise: 'Custom' },
      { name: 'Universal Workspace Search', description: 'Semantic cross-workspace retrieval', free: false, pro: true, business: true, enterprise: true },
    ],
  },
  {
    category: 'Security & Governance',
    items: [
      { name: 'Two-Factor Authentication', description: 'Mandatory or optional 2FA enforcement', free: true, pro: true, business: true, enterprise: true },
      { name: 'Single Sign-On (SSO)', description: 'SAML 2.0, Okta, Azure AD, Google Workspace', free: false, pro: false, business: 'Google / MS', enterprise: 'Full SAML / SCIM' },
      { name: 'Audit Logs', description: 'Historical record of workspace security events', free: false, pro: '30 days', business: '1 year', enterprise: 'Indefinite' },
      { name: 'Dedicated Account Manager', description: 'Direct Slack channel and strategic reviews', free: false, pro: false, business: false, enterprise: true },
      { name: 'Uptime SLA', description: 'Contractual availability guarantee', free: 'Best effort', pro: '99.9%', business: '99.9%', enterprise: '99.99%' },
    ],
  },
];
