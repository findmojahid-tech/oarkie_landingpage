/**
 * ParroDash Site & Product Configuration
 * Centralized configuration for all public marketing routes, external app links,
 * navigation menus, and subscription plan tiers.
 */

const getEnvVar = (key: string, fallback: string): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key] as string;
  }
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  return fallback;
};

export const APP_CONFIG = {
  name: 'ParroDash',
  parentCompany: 'TPARRO',
  tagline: 'One workspace. Every team. Everything connected.',
  heroHeadline: 'One workspace. Infinite possibilities.',
  heroSubheadline:
    'Bring your projects, people, conversations, and workflows together in ParroDash. Less switching. More doing.',
  // Real external app routes for Supabase/Vercel hosted application
  appBaseUrl: getEnvVar('VITE_APP_BASE_URL', 'https://app.parrodash.com'),
  signupUrl: getEnvVar('VITE_APP_SIGNUP_URL', 'https://app.parrodash.com/signup'),
  loginUrl: getEnvVar('VITE_APP_LOGIN_URL', 'https://app.parrodash.com/login'),
  demoAppUrl: '/demo',
  contactSalesUrl: '/contact-sales',
};

export interface NavLink {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  iconName?: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export interface MegaMenuConfig {
  id: string;
  label: string;
  href?: string;
  sections?: NavSection[];
  featured?: {
    title: string;
    description: string;
    href: string;
    badge?: string;
  };
}

export const NAVIGATION_CONFIG: MegaMenuConfig[] = [
  {
    id: 'product',
    label: 'Product',
    href: '/features',
    sections: [
      {
        title: 'Core Work Management',
        links: [
          { title: 'Project Management', href: '/features/project-management', description: 'Plan, execute, and deliver cross-functional projects.', iconName: 'FolderKanban' },
          { title: 'Task Management', href: '/features/task-management', description: 'Flexible lists, boards, and subtask dependencies.', iconName: 'CheckSquare' },
          { title: 'Workspace Dashboards', href: '/features/dashboards', description: 'Real-time velocity, workload, and burndown charts.', iconName: 'LayoutDashboard' },
          { title: 'Kanban Boards', href: '/features/kanban-boards', description: 'Fluid visual workflows with automated column transitions.', iconName: 'Columns3' },
          { title: 'Gantt Timelines', href: '/features/gantt', description: 'Critical path scheduling with interactive drag-and-drop.', iconName: 'AlignLeft' },
          { title: 'Workload & Capacity', href: '/features/workload-management', description: 'Balance team utilization and prevent burnouts.', iconName: 'Scale' },
        ],
      },
      {
        title: 'HR & People Operations',
        links: [
          { title: 'HR Management Suite', href: '/features/hr-management', description: 'Unified employee records, onboarding, and directory.', iconName: 'Users' },
          { title: 'Employee Directory', href: '/features/employee-management', description: 'Profiles, reporting lines, and skills matrices.', iconName: 'Contact' },
          { title: 'Attendance Tracking', href: '/features/attendance', description: 'Geo-verified time clocks, kiosk mode, and timesheets.', iconName: 'Clock' },
          { title: 'Leave Management', href: '/features/leave-management', description: 'Automated PTO accruals, policies, and calendar sync.', iconName: 'CalendarDays' },
          { title: 'Payroll Automation', href: '/features/payroll', description: 'Direct deposit, tax calculations, and pay slips.', badge: 'Pro', iconName: 'DollarSign' },
        ],
      },
      {
        title: 'Collaboration & Tools',
        links: [
          { title: 'Team Chat & Channels', href: '/features/team-chat', description: 'In-context messaging tied directly to tasks and docs.', iconName: 'MessageSquare' },
          { title: 'Docs & Wiki', href: '/features/docs', description: 'Collaborative docs with live cursor editing and wikis.', iconName: 'FileText' },
          { title: 'Workflow Automations', href: '/features/automations', description: 'No-code triggers and webhooks that eliminate busywork.', iconName: 'Zap' },
          { title: 'Client CRM', href: '/features/crm', description: 'Deals, contact timelines, and client guest portals.', iconName: 'Briefcase' },
          { title: 'Approvals & Governance', href: '/features/approvals', description: 'Multi-stage sign-offs with audit log compliance.', iconName: 'ShieldCheck' },
          { title: 'Creative Studio', href: '/features/creative-studio', description: 'Proofing, feedback pins, and visual asset reviews.', iconName: 'Palette' },
        ],
      },
    ],
    featured: {
      title: 'What is new in ParroDash v3.4',
      description: 'Explore the newly shipped autonomous Parro Agents and 1-click Gantt recalculation.',
      href: '/changelog',
      badge: 'Updated Today',
    },
  },
  {
    id: 'solutions',
    label: 'Solutions',
    href: '/solutions/engineering',
    sections: [
      {
        title: 'By Team',
        links: [
          { title: 'Engineering & Product', href: '/solutions/engineering', description: 'Sprint boards, bug backlogs, and GitHub sync.', iconName: 'Code' },
          { title: 'Marketing Teams', href: '/solutions/marketing', description: 'Campaign calendars, asset approvals, and launch trackers.', iconName: 'Megaphone' },
          { title: 'Design & Creative', href: '/solutions/design', description: 'Design sprints, feedback pins, and Figma asset sync.', iconName: 'PenTool' },
          { title: 'People & HR', href: '/solutions/hr', description: 'Onboarding checklists, PTO approvals, and payroll runs.', iconName: 'HeartHandshake' },
          { title: 'Sales & Revenue', href: '/solutions/sales', description: 'Pipeline visualization, meeting notes, and deal velocity.', iconName: 'TrendingUp' },
          { title: 'Operations & PMO', href: '/solutions/operations', description: 'Resource planning, SOP libraries, and incident tracking.', iconName: 'Sliders' },
          { title: 'Executive Leadership', href: '/solutions/leadership', description: 'Portfolio rollups, OKRs, and high-level KPIs.', iconName: 'Award' },
          { title: 'Early Startups', href: '/solutions/startups', description: 'All-in-one lean operating system from seed to Series A.', iconName: 'Rocket' },
        ],
      },
      {
        title: 'By Industry',
        links: [
          { title: 'Creative & Digital Agencies', href: '/industries/agencies', description: 'Client retainers, billable hours, and guest reviews.', iconName: 'Compass' },
          { title: 'Software & Technology', href: '/industries/software', description: 'Agile epics, automated CI status, and release gates.', iconName: 'Cpu' },
          { title: 'Professional Services', href: '/industries/professional-services', description: 'Fixed-fee project milestones, billing, and contracts.', iconName: 'Building' },
          { title: 'Management Consulting', href: '/industries/consulting', description: 'Client deliverables, stakeholder maps, and decks.', iconName: 'LineChart' },
          { title: 'E-Commerce Brands', href: '/industries/ecommerce', description: 'Inventory launches, promotions, and supply tracking.', iconName: 'ShoppingBag' },
          { title: 'Education & Universities', href: '/industries/education', description: 'Curriculum development and department coordination.', iconName: 'GraduationCap' },
        ],
      },
    ],
    featured: {
      title: 'Agency Operating System Guide',
      description: 'How top agencies replaced 6 disparate tools with ParroDash to save 14 hours per week.',
      href: '/guides',
      badge: 'Featured Playbook',
    },
  },
  {
    id: 'ai',
    label: 'Parro AI',
    href: '/ai',
    sections: [
      {
        title: 'Intelligent Workspace Capabilities',
        links: [
          { title: 'Parro AI Overview', href: '/ai', description: 'The first context-aware enterprise AI built into your work OS.', iconName: 'Sparkles' },
          { title: 'AI Workspace Assistant', href: '/ai/assistant', description: 'Chat with your entire project knowledge graph in real-time.', iconName: 'Bot' },
          { title: 'Autonomous Work Agents', href: '/ai/agents', description: 'Deploy specialized agents for triage, QA, and follow-ups.', iconName: 'Cpu' },
          { title: 'Predictive Automations', href: '/ai/automation', description: 'AI suggests workflows and triggers based on team patterns.', iconName: 'Workflow' },
          { title: 'Universal Workspace Search', href: '/ai/workspace-search', description: 'Find anything across tasks, chats, docs, and code instantly.', iconName: 'Search' },
          { title: 'Knowledge Intelligence', href: '/ai/knowledge', description: 'Synthesize messy meeting notes and specs into clean PRDs.', iconName: 'BookOpen' },
          { title: 'AI Use Cases & Prompts', href: '/ai/use-cases', description: '100+ proven prompts for product, marketing, and HR.', iconName: 'Layers' },
        ],
      },
    ],
    featured: {
      title: 'Autonomous Parro Agents',
      description: 'Triage bug reports, generate sprint retrospectives, and calculate payroll variations autonomously.',
      href: '/ai/agents',
      badge: 'New Innovation',
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources',
    sections: [
      {
        title: 'Learn & Explore',
        links: [
          { title: 'Resource Hub', href: '/resources', description: 'Articles, playbooks, benchmarks, and best practices.', iconName: 'BookOpen' },
          { title: 'Blog & Editorial', href: '/blog', description: 'Deep dives on modern work, asynchronous culture, and scale.', iconName: 'Newspaper' },
          { title: 'Implementation Guides', href: '/guides', description: 'Step-by-step migration and team onboarding blueprints.', iconName: 'FileCheck' },
          { title: 'Template Library', href: '/templates', description: 'Over 200+ pre-built workspace templates for any team.', iconName: 'Layout' },
          { title: 'Integrations Directory', href: '/integrations', description: 'Connect Slack, GitHub, Figma, Google Workspace, and 1,000+ apps.', iconName: 'Share2' },
          { title: 'Webinars & Events', href: '/webinars', description: 'Live masterclasses with modern operations leaders.', iconName: 'Video' },
        ],
      },
      {
        title: 'Trust & Comparisons',
        links: [
          { title: 'Product Comparisons', href: '/compare', description: 'See how ParroDash compares to ClickUp, Asana, Monday, and Notion.', iconName: 'Split' },
          { title: 'Customer Stories', href: '/customer-stories', description: 'How high-growth teams run their entire company on ParroDash.', iconName: 'Users' },
          { title: 'Security & Compliance', href: '/security', description: 'SOC 2 Type II, ISO 27001, GDPR, and enterprise encryption.', iconName: 'Shield' },
          { title: 'Product Updates & Changelog', href: '/changelog', description: 'Weekly release notes, improvements, and bug fixes.', iconName: 'RefreshCw' },
          { title: 'Public Roadmap', href: '/roadmap', description: 'Vote on upcoming features and track what we are building.', iconName: 'Map' },
          { title: 'Help Center & Docs', href: '/help', description: 'Comprehensive tutorials, API docs, and video walkthroughs.', iconName: 'HelpCircle' },
        ],
      },
    ],
    featured: {
      title: 'Interactive Migration Tool',
      description: 'Switch from ClickUp or Asana in under 3 minutes with zero downtime.',
      href: '/compare',
      badge: 'Free Migration',
    },
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '/pricing',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    href: '/enterprise',
  },
];
