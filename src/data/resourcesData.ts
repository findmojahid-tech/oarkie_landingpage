/**
 * Resources, Templates, Integrations, Changelog, Roadmap, and Comparison data.
 */

export interface TemplateItem {
  id: string;
  title: string;
  category: 'Engineering' | 'Marketing' | 'HR' | 'Operations' | 'Product' | 'Agency';
  description: string;
  downloads: string;
  viewsIncluded: string[];
  tasksCount: number;
}

export const TEMPLATES_DATA: TemplateItem[] = [
  {
    id: 'agile-sprint-os',
    title: 'Agile Sprint & Backlog OS',
    category: 'Engineering',
    description: 'Complete 2-week agile sprint framework with backlog grooming, velocity tracking, and burndown charts.',
    downloads: '14.2k',
    viewsIncluded: ['Kanban Board', 'Backlog List', 'Sprint Velocity Chart', 'Retro Doc'],
    tasksCount: 38,
  },
  {
    id: 'employee-onboarding-blueprint',
    title: '30-60-90 Day Employee Onboarding',
    category: 'HR',
    description: 'Structured onboarding sequence coordinating IT equipment, HR compliance, team introductions, and milestone reviews.',
    downloads: '18.9k',
    viewsIncluded: ['Checklist Table', 'Timeline Gantt', 'Handbook Wiki', 'Feedback Form'],
    tasksCount: 42,
  },
  {
    id: 'campaign-launch-control',
    title: 'Omnichannel Marketing Campaign Launch',
    category: 'Marketing',
    description: 'Coordinate copy, visual assets, video cuts, ad buys, and PR outreach leading up to a major product drop.',
    downloads: '11.5k',
    viewsIncluded: ['Campaign Calendar', 'Creative Review Board', 'Gantt Timeline', 'Asset Gallery'],
    tasksCount: 54,
  },
  {
    id: 'agency-client-retainer-hub',
    title: 'Agency Client Retainer & Portal',
    category: 'Agency',
    description: 'Track billable hours against monthly retainer budgets, collect client feedback pins, and publish progress.',
    downloads: '9.8k',
    viewsIncluded: ['Client Kanban', 'Timesheet Grid', 'Deliverable Proofing', 'Invoicing Rollup'],
    tasksCount: 29,
  },
  {
    id: 'company-okr-portfolio',
    title: 'Executive OKR & Strategic Portfolio',
    category: 'Operations',
    description: 'Align high-level company annual goals with quarterly departmental key results and weekly progress rollups.',
    downloads: '22.1k',
    viewsIncluded: ['Executive Dashboard', 'Objective Hierarchy', 'Department Scorecard', 'Quarterly Timeline'],
    tasksCount: 24,
  },
  {
    id: 'product-prd-roadmap',
    title: 'Product PRD & Feature Roadmap',
    category: 'Product',
    description: 'Write specifications with embedded user stories, track development status, and publish customer roadmaps.',
    downloads: '16.4k',
    viewsIncluded: ['Quarterly Roadmap', 'PRD Document Wiki', 'Feature Backlog', 'Release Checklist'],
    tasksCount: 47,
  },
];

export interface IntegrationItem {
  id: string;
  name: string;
  category: 'Communication' | 'Development' | 'Design' | 'Storage' | 'Productivity';
  description: string;
  popular?: boolean;
}

export const INTEGRATIONS_DATA: IntegrationItem[] = [
  { id: 'slack', name: 'Slack', category: 'Communication', description: 'Convert messages to ParroDash tasks, get instant bot alerts, and preview task cards in channels.', popular: true },
  { id: 'github', name: 'GitHub', category: 'Development', description: 'Link pull requests and commits to tasks; automatically transition task status upon branch merge.', popular: true },
  { id: 'figma', name: 'Figma', category: 'Design', description: 'Embed live interactive Figma frames in tasks and sync design review comments seamlessly.', popular: true },
  { id: 'google-workspace', name: 'Google Workspace', category: 'Productivity', description: 'Two-way calendar sync, Gmail email logging, and Google Drive file attachment picker.', popular: true },
  { id: 'microsoft-teams', name: 'Microsoft Teams', category: 'Communication', description: 'Receive daily standup summaries and interactive actionable task cards in Teams channels.', popular: true },
  { id: 'zoom', name: 'Zoom', category: 'Communication', description: 'Launch instant Zoom meetings from tasks and automatically attach recorded transcripts.', popular: true },
  { id: 'salesforce', name: 'Salesforce', category: 'Productivity', description: 'Synchronize CRM accounts and deals into ParroDash client onboarding workflows.', popular: true },
  { id: 'hubspot', name: 'HubSpot', category: 'Productivity', description: 'Bi-directional sync of lead stages, contact timelines, and closed deals to project delivery.', popular: true },
  { id: 'gitlab', name: 'GitLab', category: 'Development', description: 'Sync merge requests, pipeline build statuses, and issue discussions directly into sprint boards.' },
  { id: 'zapier', name: 'Zapier', category: 'Productivity', description: 'Connect ParroDash to 5,000+ business applications with no-code automated triggers.', popular: true },
  { id: 'dropbox', name: 'Dropbox', category: 'Storage', description: 'Attach and preview cloud files directly inside task discussions and document wikis.' },
  { id: 'box', name: 'Box', category: 'Storage', description: 'Enterprise-grade encrypted cloud file attachments for regulated document compliance.' },
];

export interface ChangelogItem {
  version: string;
  date: string;
  tag: string;
  title: string;
  summary: string;
  improvements: string[];
}

export const CHANGELOG_DATA: ChangelogItem[] = [
  {
    version: 'v3.4.0',
    date: 'November 2026',
    tag: 'Major Release',
    title: 'Autonomous Parro Agents & 1-Click Critical Path Gantt',
    summary: 'Introducing specialized autonomous agents that triage incoming bugs and synthesize sprint retros, alongside our ground-up Gantt engine rebuild.',
    improvements: [
      'New: Deploy Autonomous Bug Triage & Sprint Retro Agents',
      'New: 1-Click Critical Path highlighting with automated slack time calculation',
      'Improved: 4x faster drag-and-drop responsiveness on 1,000+ item Kanban boards',
      'Improved: High-resolution PDF export with custom company branding watermarks',
      'Fix: Resolved calendar timezone offset bug during Daylight Savings transitions',
    ],
  },
  {
    version: 'v3.3.2',
    date: 'October 2026',
    tag: 'Performance & HR',
    title: 'Geo-Fenced Attendance & Multi-Currency Contractor Payouts',
    summary: 'Enhanced HR suite capabilities with GPS office radius clock-ins and direct deposit contractor disbursements in 120+ countries.',
    improvements: [
      'New: Configurable GPS geo-fencing for job site mobile clock-in',
      'New: Multi-currency payout support for global remote contractors',
      'Improved: Automated gross-to-net tax calculations for 50 US states',
      'Fix: Enhanced Slack bot notification grouping for rapid batch approvals',
    ],
  },
  {
    version: 'v3.2.0',
    date: 'September 2026',
    tag: 'Core Platform',
    title: 'Frame-Accurate Video Proofing & White-Labeled Client Portals',
    summary: 'Creative Studio now supports frame-by-frame 4K video annotations, and agencies can now deploy custom branded domains for client collaboration.',
    improvements: [
      'New: Frame-accurate video timestamp pins with playback scrubbing',
      'New: Custom domain mapping (e.g. portal.youragency.com) for client guest hubs',
      'Improved: Real-time multiplayer collaborative doc typing latency reduced to under 15ms',
      'Improved: Custom formula field engine supporting complex mathematical expressions',
    ],
  },
];

export interface RoadmapItem {
  id: string;
  title: string;
  category: string;
  status: 'In Progress' | 'Planned' | 'Exploring';
  votes: number;
  description: string;
  targetQuarter: string;
}

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    id: '1',
    title: 'Voice-to-Task Live Ambient Transcription',
    category: 'Parro AI',
    status: 'In Progress',
    votes: 842,
    description: 'Listen to in-person or virtual team meetings, automatically distinguishing speakers and extracting assigned tasks in real-time.',
    targetQuarter: 'Q4 2026',
  },
  {
    id: '2',
    title: 'Bi-Directional Figma Component Token Sync',
    category: 'Integrations',
    status: 'In Progress',
    votes: 624,
    description: 'Synchronize design tokens between Figma styles and ParroDash component libraries to flag design drift in code.',
    targetQuarter: 'Q4 2026',
  },
  {
    id: '3',
    title: 'Global Multi-Entity Payroll & Tax Remittance',
    category: 'HR & Payroll',
    status: 'Planned',
    votes: 519,
    description: 'Support multi-national parent companies with unified payroll processing across international subsidiaries.',
    targetQuarter: 'Q1 2027',
  },
  {
    id: '4',
    title: 'Offline-First Progressive Web App Sync',
    category: 'Mobile & Desktop',
    status: 'Planned',
    votes: 488,
    description: 'Full offline editing for docs, tasks, and timesheets with conflict-free automatic synchronization upon reconnection.',
    targetQuarter: 'Q1 2027',
  },
  {
    id: '5',
    title: 'Interactive 3D Asset & CAD Annotation',
    category: 'Creative Studio',
    status: 'Exploring',
    votes: 312,
    description: 'Support GLTF, OBJ, and CAD models with 3D coordinate feedback pins directly inside product design tasks.',
    targetQuarter: 'Q2 2027',
  },
];

export interface ComparisonDetail {
  slug: string;
  competitor: string;
  headline: string;
  tagline: string;
  summary: string;
  advantages: {
    title: string;
    description: string;
  }[];
  tableRows: {
    capability: string;
    parrodash: string | boolean;
    competitor: string | boolean;
  }[];
}

export const COMPARISONS_DATA: Record<string, ComparisonDetail> = {
  'clickup': {
    slug: 'clickup',
    competitor: 'ClickUp',
    headline: 'ParroDash vs ClickUp',
    tagline: 'Why modern teams switch from ClickUp to ParroDash for speed, simplicity, and built-in HR.',
    summary:
      'While ClickUp is feature-rich, it is notorious for sluggish load times, cluttered navigation, and a lack of true native HR, attendance, and payroll operations. ParroDash delivers a blistering 60 FPS unified business OS with native HR, CRM, and context-aware AI built in from day one.',
    advantages: [
      { title: 'Sub-100ms Blazing Performance', description: 'Zero lag when switching views or loading massive 5,000-task boards.' },
      { title: 'Built-In HR & Native Payroll', description: 'ClickUp requires 3rd-party HR tools; ParroDash unites tasks, attendance, leave, and payroll directly.' },
      { title: 'Context-Aware Graph AI', description: 'Parro AI indexes real project relationships instead of just functioning as a generic chat wrapper.' },
      { title: 'Clutter-Free Monochrome UI', description: 'A clean, intentional design system that eliminates noisy cartoon gradients and visual clutter.' },
    ],
    tableRows: [
      { capability: 'Blazing Fast 60 FPS Engine', parrodash: true, competitor: 'Frequent lag' },
      { capability: 'Integrated HR & Employee Central', parrodash: true, competitor: false },
      { capability: 'Attendance & Mobile Geo Clock-In', parrodash: true, competitor: false },
      { capability: 'Native 50-State Automated Payroll', parrodash: true, competitor: false },
      { capability: 'Client CRM & Guest Portals', parrodash: true, competitor: 'Basic' },
      { capability: 'Autonomous AI Agents', parrodash: true, competitor: 'Add-on' },
      { capability: 'Interactive Gantt Critical Path', parrodash: true, competitor: true },
      { capability: 'Unlimited Tasks on Free Plan', parrodash: true, competitor: true },
    ],
  },
  'asana': {
    slug: 'asana',
    competitor: 'Asana',
    headline: 'ParroDash vs Asana',
    tagline: 'Get enterprise work management, chat, docs, and HR without Asana’s punitive tier paywalls.',
    summary:
      'Asana locks essential features like timelines, custom fields, and basic automations behind aggressive pricing paywalls. ParroDash provides unlimited tasks, nested boards, real-time chat, and docs at a fraction of the cost.',
    advantages: [
      { title: 'Full Suite at 50% Lower Cost', description: 'Stop paying $24.99/user/mo just to get Gantt timelines and workload.' },
      { title: 'In-Context Team Chat', description: 'Asana requires Slack; ParroDash provides native project chat channels.' },
      { title: 'Native HR & Time Tracking', description: 'Built-in time tracking and PTO management without third-party Harvest plugins.' },
    ],
    tableRows: [
      { capability: 'Native Time Tracking Included', parrodash: true, competitor: 'Paid add-on' },
      { capability: 'Team Chat & Channels', parrodash: true, competitor: false },
      { capability: 'Collaborative Docs & Wikis', parrodash: true, competitor: 'Basic' },
      { capability: 'Native HR & Leave Management', parrodash: true, competitor: false },
      { capability: 'Gantt Timelines on Pro Tier', parrodash: true, competitor: 'Locked in Tier 2' },
      { capability: 'Starting Price (Annual)', parrodash: '$9/user/mo', competitor: '$10.99/user/mo' },
    ],
  },
  'monday': {
    slug: 'monday',
    competitor: 'Monday.com',
    headline: 'ParroDash vs Monday.com',
    tagline: 'A unified operating platform without forced 3-seat minimums or separate product billings.',
    summary:
      'Monday forces customers to purchase separate subscriptions for Monday Work Management, Monday Dev, and Monday CRM, while enforcing rigid 3-seat minimums. ParroDash gives you everything in one transparent workspace.',
    advantages: [
      { title: 'No Forced Minimum Seats', description: 'Start with 1 user and grow at your own pace without paying for ghost seats.' },
      { title: 'One Unified Product', description: 'No need to purchase three separate products to manage dev, marketing, and sales.' },
      { title: 'Modern Clean Aesthetic', description: 'Say goodbye to over-saturated candy colors and rigid table constraints.' },
    ],
    tableRows: [
      { capability: 'Single Workspace vs Multiple Add-ons', parrodash: 'All-in-one', competitor: '3+ products' },
      { capability: 'Free Tier Available', parrodash: 'Forever free (5 seats)', competitor: 'Strict 2 seats' },
      { capability: 'Frame-Accurate Video Proofing', parrodash: true, competitor: false },
      { capability: 'Integrated Payroll Engine', parrodash: true, competitor: false },
      { capability: 'Autonomous AI Agents', parrodash: true, competitor: 'Limited' },
    ],
  },
  'notion': {
    slug: 'notion',
    competitor: 'Notion',
    headline: 'ParroDash vs Notion',
    tagline: 'Structured operational power where freeform databases fall short.',
    summary:
      'Notion is a flexible digital notebook, but it struggles with complex Gantt dependencies, critical paths, employee attendance, billable timesheets, and enterprise sprint workflows. ParroDash pairs rich collaborative docs with rigorous operational tooling.',
    advantages: [
      { title: 'True Project Governance', description: 'Automatic cascading dependencies, slack calculations, and critical paths.' },
      { title: 'Native HR, Time & Attendance', description: 'Notion cannot run payroll, log geo-fenced clock-ins, or calculate PTO accruals.' },
      { title: 'Scalable Enterprise Permissions', description: 'Granular field-level and role-based permissions that keep sensitive data safe.' },
    ],
    tableRows: [
      { capability: 'Interactive Critical Path Gantt', parrodash: true, competitor: false },
      { capability: 'Native Time Tracking & Timesheets', parrodash: true, competitor: false },
      { capability: 'HR Suite & Attendance Clock', parrodash: true, competitor: false },
      { capability: 'Multiplayer Collaborative Docs', parrodash: true, competitor: true },
      { capability: 'Visual Proofing on Assets', parrodash: true, competitor: false },
    ],
  },
};
