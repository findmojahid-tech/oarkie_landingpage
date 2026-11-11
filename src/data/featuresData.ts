/**
 * Detailed content for all 21 ParroDash feature landing pages.
 * Each feature includes dedicated hero value propositions, realistic product mockup data,
 * core capabilities, real-world team workflows, FAQs, and related feature links.
 */

import { MockupModuleType } from '../components/ui/ProductMockup';

export interface FeatureDetail {
  slug: string;
  title: string;
  kicker: string;
  tagline: string;
  heroDescription: string;
  badge?: string;
  iconName: string;
  mockupType: MockupModuleType;
  stats: { value: string; label: string }[];
  keyCapabilities: {
    title: string;
    description: string;
    bullets: string[];
  }[];
  workflows: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const FEATURES_DATA: Record<string, FeatureDetail> = {
  'project-management': {
    slug: 'project-management',
    title: 'Project Management',
    kicker: 'Strategic Delivery',
    tagline: 'Plan, sequence, and deliver complex initiatives on time, every time.',
    heroDescription:
      'Eliminate tool fragmentation with multi-view projects, critical path baselines, real-time dependencies, and milestone tracking directly connected to team execution.',
    iconName: 'FolderKanban',
    mockupType: 'projects',
    stats: [
      { value: '38%', label: 'Faster project delivery cycles' },
      { value: '4.8x', label: 'More visibility into cross-team blockers' },
      { value: '0', label: 'Lost deliverables between departments' },
    ],
    keyCapabilities: [
      {
        title: 'Multi-Perspective Workspace Views',
        description: 'Switch instantly between Gantt, Kanban, Table, Timeline, and Calendar without losing dependencies.',
        bullets: ['Bi-directional dependency links', 'Milestone flags with automatic slippage warnings', 'Cross-project portfolio rollups'],
      },
      {
        title: 'Real-Time Baseline Variance',
        description: 'Compare current progress against original baselines to catch delays weeks before deadlines.',
        bullets: ['Automated slack-time recalculation', 'Critical path highlighting in one click', 'Sprint and milestone velocity burnups'],
      },
      {
        title: 'Integrated Resource Allocation',
        description: 'See exactly who has bandwidth across every active initiative before assigning new sprints.',
        bullets: ['FTE capacity vs logged hours', 'Over-allocation warnings', 'Skills and department filtering'],
      },
    ],
    workflows: [
      { step: '01', title: 'Define & Scope', description: 'Break epics into milestones, deliverables, and assigned work packages with custom attributes.' },
      { step: '02', title: 'Sequence Dependencies', description: 'Link blockers and predecessors; ParroDash recalculates timeline shifts automatically.' },
      { step: '03', title: 'Execute with Context', description: 'Contributors collaborate with tasks, chats, and docs stored in the exact project container.' },
      { step: '04', title: 'Track & Deliver', description: 'Automated executive rollups summarize delivery velocity and budget consumption.' },
    ],
    faqs: [
      { question: 'Can I import existing projects from Asana, Jira, or ClickUp?', answer: 'Yes. ParroDash provides 1-click native importers for Asana, Jira, ClickUp, Monday, and Trello with all tags, comments, and attachments preserved.' },
      { question: 'Does ParroDash support agile sprints and traditional waterfall?', answer: 'Yes. You can manage 2-week agile sprints with backlog groomings alongside long-term waterfall Gantt schedules in the same workspace.' },
      { question: 'Can clients or external contractors access our projects?', answer: 'Yes. You can invite external guests with strict role permissions, allowing them to view specific milestones or submit requests without seeing internal discussions.' },
    ],
    relatedSlugs: ['gantt', 'task-management', 'workload-management', 'dashboards'],
  },
  'task-management': {
    slug: 'task-management',
    title: 'Task Management',
    kicker: 'Granular Execution',
    tagline: 'Turn ambitious objectives into clear, accountable daily actions.',
    heroDescription:
      'Organize individual and team tasks with nested checklists, recurring schedules, priority matrix flags, and direct doc embeds without ever losing the big picture.',
    iconName: 'CheckSquare',
    mockupType: 'tasks',
    stats: [
      { value: '100%', label: 'Accountability across teams' },
      { value: '45m', label: 'Saved daily per contributor' },
      { value: '99.9%', label: 'On-time milestone completion' },
    ],
    keyCapabilities: [
      {
        title: 'Hierarchical Task Decomposition',
        description: 'Organize work into nested subtasks, checklist items, and milestones with independent owners and due dates.',
        bullets: ['Multi-assignee distribution', 'Custom checklist templates', 'Subtask rollup summaries'],
      },
      {
        title: 'Custom Field Schemas',
        description: 'Capture exact business data including currency, formulas, dropdowns, dates, and relations.',
        bullets: ['Calculated formula fields', 'Conditional visibility rules', 'Global workspace custom field library'],
      },
      {
        title: 'Rich In-Context Discussions',
        description: 'Eliminate disjointed email threads with task-level chat, voice memos, and file attachments.',
        bullets: ['@mention notifications with push alerts', 'Rich markdown editor with slash commands', 'Action item extraction via Parro AI'],
      },
    ],
    workflows: [
      { step: '01', title: 'Capture Work', description: 'Create tasks via email forward, Slack shortcut, Chrome extension, or Parro AI voice prompt.' },
      { step: '02', title: 'Prioritize & Estimate', description: 'Assign difficulty points, estimated hours, and impact-urgency matrix ratings.' },
      { step: '03', title: 'Collaborate & Execute', description: 'Work through checklists, attach PR drafts, and ask questions directly in the task thread.' },
      { step: '04', title: 'Mark Done & Notify', description: 'Completed tasks trigger automated handoffs to QA, clients, or downstream reviewers.' },
    ],
    faqs: [
      { question: 'Can tasks recur on custom intervals?', answer: 'Yes. Tasks can repeat daily, weekly, on the first Monday of each month, or immediately upon completion.' },
      { question: 'Is there a limit on subtask nesting depth?', answer: 'ParroDash supports up to 7 levels of nested subtasks to model even the most intricate operational workflows.' },
      { question: 'Can I view all my personal tasks across multiple workspaces?', answer: 'Yes. The unified "My Work" inbox aggregates assigned tasks, reviews, and mentions from every project you participate in.' },
    ],
    relatedSlugs: ['project-management', 'kanban-boards', 'automations', 'time-tracking'],
  },
  'dashboards': {
    slug: 'dashboards',
    title: 'Workspace Dashboards',
    kicker: 'Real-Time Intelligence',
    tagline: 'Custom command centers for team velocity, budget health, and milestones.',
    heroDescription:
      'Assemble interactive visual dashboards with 35+ widgets covering sprint velocity, team workload, billable hours, CRM pipeline, and HR leave balances in one pane of glass.',
    iconName: 'LayoutDashboard',
    mockupType: 'dashboards',
    stats: [
      { value: '35+', label: 'Pre-built analytics widgets' },
      { value: '0s', label: 'Dashboard refresh latency' },
      { value: '1-Click', label: 'Executive export to PDF & slides' },
    ],
    keyCapabilities: [
      {
        title: 'Drag-and-Drop Widget Canvas',
        description: 'Build role-tailored dashboards for engineers, marketing leads, or C-suite executives in minutes.',
        bullets: ['Burndown and velocity charts', 'Real-time financial budget utilization', 'Live attendance and team status widgets'],
      },
      {
        title: 'Cross-Workspace Rollups',
        description: 'Aggregate data from dozens of separate client projects or product repositories without manual spreadsheets.',
        bullets: ['Multi-project filtering by tag and custom field', 'Formula-driven KPI summary cards', 'Drill-down to underlying task details with one click'],
      },
      {
        title: 'Scheduled Executive Digests',
        description: 'Automatically email dashboard snapshots to stakeholders every Monday morning or at month-end.',
        bullets: ['Automated Slack broadcast integration', 'PDF export with custom company branding', 'Live embed links for intranet portals'],
      },
    ],
    workflows: [
      { step: '01', title: 'Select Dashboard Template', description: 'Choose from Executive Rollup, Sprint Health, Marketing ROI, or HR Operations.' },
      { step: '02', title: 'Pin Custom Widgets', description: 'Add charts, task lists, timesheets, and burndowns filtered by department or sprint.' },
      { step: '03', title: 'Share & Present', description: 'Present live full-screen boards in all-hands or embed securely into investor updates.' },
    ],
    faqs: [
      { question: 'Can dashboards show data from both Jira/GitHub and HR payroll?', answer: 'Yes. ParroDash is a unified business OS, meaning your engineering velocity can sit directly beside project budget and payroll costs.' },
      { question: 'Are dashboard widgets updated in real time?', answer: 'Yes. Whenever a team member completes a task, logs an hour, or approves a leave request, the dashboard refreshes instantaneously.' },
    ],
    relatedSlugs: ['reporting', 'project-management', 'workload-management'],
  },
  'calendar': {
    slug: 'calendar',
    title: 'Calendar & Scheduling',
    kicker: 'Unified Timelines',
    tagline: 'Synchronize deadlines, meetings, company holidays, and team leave in one calendar.',
    heroDescription:
      'Stop switching between Google Calendar, project roadmaps, and leave sheets. ParroDash brings team events, task deadlines, and shift schedules into a unified two-way synced grid.',
    iconName: 'CalendarDays',
    mockupType: 'calendar',
    stats: [
      { value: '2-Way', label: 'Google & Outlook calendar sync' },
      { value: '100%', label: 'Visibility on team availability' },
      { value: '0', label: 'Scheduling clashes on critical deadlines' },
    ],
    keyCapabilities: [
      {
        title: 'Integrated Availability & Deadlines',
        description: 'View task due dates alongside approved employee PTO, public holidays, and client meetings.',
        bullets: ['Two-way Google & Microsoft 365 synchronization', 'Drag-and-drop deadline rescheduling', 'Color-coded department and project layers'],
      },
      {
        title: 'Smart Meeting Scheduling',
        description: 'Book meetings without back-and-forth emails by sharing personalized booking links tied directly to your availability.',
        bullets: ['Buffer time between focus blocks', 'Auto-generated Google Meet and Zoom links', 'Direct agenda attachment to project tasks'],
      },
      {
        title: 'Multi-Timezone Team Grid',
        description: 'Easily coordinate distributed teams across Tokyo, London, San Francisco, and Singapore.',
        bullets: ['Overlap hours visualizer', 'Automatic timezone conversion for participants', 'Working hours boundaries enforcement'],
      },
    ],
    workflows: [
      { step: '01', title: 'Sync External Calendars', description: 'Connect Google Calendar or Outlook in two clicks with automated token refresh.' },
      { step: '02', title: 'Overlay Team Leave', description: 'Approved HR PTO days automatically populate the project calendar.' },
      { step: '03', title: 'Plan Sprint Deadlines', description: 'Drag tasks onto the calendar grid; due dates update across all views immediately.' },
    ],
    faqs: [
      { question: 'Does calendar sync go both ways?', answer: 'Yes. Changes made in ParroDash reflect in Google Calendar or Outlook within seconds, and vice-versa.' },
      { question: 'Can I set private personal calendar blocks?', answer: 'Yes. You can mark specific calendar items as private so teammates see you as busy without reading meeting details.' },
    ],
    relatedSlugs: ['leave-management', 'attendance', 'task-management'],
  },
  'team-chat': {
    slug: 'team-chat',
    title: 'Team Chat & Channels',
    kicker: 'In-Context Communication',
    tagline: 'Discussions where work actually lives. Replace noisy disjointed chat tools.',
    heroDescription:
      'Eliminate the gap between talking and doing. ParroDash channels, direct messages, and voice huddles connect directly to projects, tasks, customer deals, and docs.',
    iconName: 'MessageSquare',
    mockupType: 'chat',
    stats: [
      { value: '62%', label: 'Less chat noise & lost context' },
      { value: '1-Click', label: 'Convert any message to an actionable task' },
      { value: 'End-to-End', label: 'Encrypted channels for confidential deals' },
    ],
    keyCapabilities: [
      {
        title: 'Channel-to-Task Linkage',
        description: 'Hover over any message and click "Convert to Task" to generate an assigned work item with full chat history attached.',
        bullets: ['Public, private, and announcement channels', 'Pinned project resources and active milestones in channel headers', 'Rich code snippet and media rendering'],
      },
      {
        title: 'Lightweight Audio Huddles',
        description: 'Start instant screen-sharing huddles with teammates without switching to Zoom or Google Meet.',
        bullets: ['Instant 1-click room creation', 'Low-latency HD audio and screen sharing', 'Automated meeting notes via Parro AI'],
      },
      {
        title: 'Direct Client Guest Channels',
        description: 'Communicate with external agency clients or contractors in controlled, secure shared channels.',
        bullets: ['Granular file sharing controls', 'Custom domain branding for client chat', 'Strict access isolation from internal channels'],
      },
    ],
    workflows: [
      { step: '01', title: 'Organize by Project', description: 'Every project automatically gets a dedicated linked channel with all contributors.' },
      { step: '02', title: 'Share & Discuss', description: 'Drop design drafts, bug logs, or contract updates directly into the stream.' },
      { step: '03', title: 'Turn Decisions into Action', description: 'Convert key agreements into assigned tasks with due dates in one click.' },
    ],
    faqs: [
      { question: 'Can ParroDash replace Slack or Microsoft Teams entirely?', answer: 'Yes. Many organizations replace Slack or Teams with ParroDash to save money and eliminate context switching between messaging and work management.' },
      { question: 'Is there a mobile app for team chat?', answer: 'Yes. ParroDash iOS and Android apps offer instant push notifications, voice messages, and offline message caching.' },
    ],
    relatedSlugs: ['docs', 'task-management', 'approvals'],
  },
  'docs': {
    slug: 'docs',
    title: 'Docs & Wiki',
    kicker: 'Living Knowledge Base',
    tagline: 'Collaborative docs, PRDs, SOPs, and company wikis tied directly to your tasks.',
    heroDescription:
      'Stop letting company knowledge rot in isolated files. Write specifications, onboarding manuals, and release notes that embed live tasks, checklists, and dynamic widgets.',
    iconName: 'FileText',
    mockupType: 'docs',
    stats: [
      { value: 'Real-Time', label: 'Multi-player live cursor editing' },
      { value: '100%', label: 'Searchable across the entire workspace' },
      { value: '0', label: 'Outdated SOPs with auto-verification flags' },
    ],
    keyCapabilities: [
      {
        title: 'Multiplayer Real-Time Co-Authoring',
        description: 'Write specifications with teammates in real-time with live cursors, inline comments, and edit version histories.',
        bullets: ['Slash commands for headings, tables, callouts, and code blocks', 'Embed live Kanban boards, Gantt timelines, and Figma frames', 'Document status badges (Draft, In Review, Approved)'],
      },
      {
        title: 'Connected Task Mentions',
        description: 'Type @task to embed live interactive task cards that update their completion state inside the document.',
        bullets: ['Bidirectional links between docs and sprint backlogs', 'Auto-syncing table of contents', 'Nested page tree hierarchy with drag-and-drop reordering'],
      },
      {
        title: 'AI Writing & Summarization',
        description: 'Draft PRDs, simplify technical jargon, or generate release notes directly within the editor using Parro AI.',
        bullets: ['1-click grammar polishing and tone shift', 'Extract key takeaways and action items', 'Translate docs into 24+ languages'],
      },
    ],
    workflows: [
      { step: '01', title: 'Create Spec or SOP', description: 'Start from pre-built templates for PRDs, meeting agendas, design briefs, or employee handbooks.' },
      { step: '02', title: 'Embed Live Tasks', description: 'Insert work items directly into the document so project status is always current.' },
      { step: '03', title: 'Review & Publish', description: 'Send for formal manager sign-off and publish to the company-wide knowledge base.' },
    ],
    faqs: [
      { question: 'Can docs be shared publicly with password protection?', answer: 'Yes. You can publish any document as a public web link with custom domains, password protection, and view-only permissions.' },
      { question: 'Can I export docs to Markdown, PDF, or HTML?', answer: 'Yes. ParroDash supports 1-click lossless exports to PDF, Clean Markdown, DOCX, and HTML.' },
    ],
    relatedSlugs: ['team-chat', 'task-management', 'approvals'],
  },
  'automations': {
    slug: 'automations',
    title: 'Workflow Automations',
    kicker: 'No-Code Efficiency',
    tagline: 'Put busywork on autopilot. Trigger actions across projects, HR, and CRM without code.',
    heroDescription:
      'Build powerful automated recipes with visual When/If/Then logic. Reassign tasks upon status changes, notify Slack channels, generate invoices, or trigger onboarding sequences.',
    iconName: 'Zap',
    mockupType: 'automation',
    stats: [
      { value: '120+', label: 'Pre-configured automation templates' },
      { value: '10k+', label: 'Monthly hours saved for enterprise teams' },
      { value: '0', label: 'Lines of code required to build workflows' },
    ],
    keyCapabilities: [
      {
        title: 'Visual When-If-Then Builder',
        description: 'Create multi-step automation chains combining triggers, conditions, and actions in seconds.',
        bullets: ['Field value changes (e.g., status changed to "QA Ready")', 'Time-based triggers (e.g., 2 days before milestone deadline)', 'External webhooks from GitHub, Stripe, or CRM'],
      },
      {
        title: 'Cross-Module Action Triggers',
        description: 'Connect events in Project Management directly to HR leave calendars or Client CRM pipelines.',
        bullets: ['Auto-reassign tasks when an employee goes on approved PTO', 'Automatically generate onboarding tasks when a candidate is hired', 'Notify finance channels when client budget reaches 90%'],
      },
      {
        title: 'Execution Logs & Safety Limits',
        description: 'Monitor every automated run with complete audit logs, replay tools, and runaway loop protection.',
        bullets: ['Detailed run history with parameter inspection', 'Instant pause toggle for maintenance', 'Fallback notification alerts on third-party webhook failure'],
      },
    ],
    workflows: [
      { step: '01', title: 'Pick Trigger', description: 'Select an event like "Task moved to Done" or "Employee hired in HR".' },
      { step: '02', title: 'Set Conditions', description: 'Apply filters such as "Priority is Urgent" and "Client Tier is Enterprise".' },
      { step: '03', title: 'Define Actions', description: 'Notify managers, post to chat, generate invoices, or update related records automatically.' },
    ],
    faqs: [
      { question: 'Do automations count against my plan limit if they fail?', answer: 'No. Only successfully completed automation actions count against your monthly allowance.' },
      { question: 'Can I connect external webhooks and APIs?', answer: 'Yes. You can trigger inbound webhooks or make outbound HTTP POST/GET requests to Zapier, Make, or custom microservices.' },
    ],
    relatedSlugs: ['task-management', 'crm', 'hr-management'],
  },
  'hr-management': {
    slug: 'hr-management',
    title: 'HR Management Suite',
    kicker: 'Unified People Operations',
    tagline: 'Manage employee records, onboarding, org charts, and compliance in the same system as daily work.',
    heroDescription:
      'Break down the wall between people ops and project execution. ParroDash HR integrates employee profiles, onboarding roadmaps, performance evaluations, and document vaults.',
    iconName: 'Users',
    mockupType: 'hr',
    stats: [
      { value: '1-Platform', label: 'For tasks, attendance, leave & payroll' },
      { value: '75%', label: 'Reduction in employee onboarding time' },
      { value: '100%', label: 'Audit compliance for HR documentation' },
    ],
    keyCapabilities: [
      {
        title: 'Unified Employee Central',
        description: 'Maintain secure digital employee files containing contracts, emergency contacts, compensation history, and equipment logs.',
        bullets: ['Role-based access control (RBAC) protecting sensitive salary data', 'Automated birthday and company anniversary reminders', 'Custom employee attributes and certification tracking'],
      },
      {
        title: 'Automated Onboarding Blueprints',
        description: 'Assign dynamic onboarding task checklists to new hires, IT admins, and line managers the moment an offer is accepted.',
        bullets: ['Hardware provisioning workflows', 'E-signature document collection', 'Mentor matching and first-week milestone checkpoints'],
      },
      {
        title: 'Interactive Organizational Chart',
        description: 'Explore your entire company hierarchy with auto-updating org charts showing reporting lines, departments, and open requisitions.',
        bullets: ['Department headcount rollups', 'Searchable skills and location directory', 'Direct link to individual project workload'],
      },
    ],
    workflows: [
      { step: '01', title: 'Hire & Onboard', description: 'Trigger personalized onboarding task bundles for the new hire and their team lead.' },
      { step: '02', title: 'Manage Daily Records', description: 'Track equipment, certifications, job titles, and compensation changes securely.' },
      { step: '03', title: 'Connect to Work', description: 'HR records tie directly to project assignments, leave requests, and payroll calculations.' },
    ],
    faqs: [
      { question: 'Is sensitive employee salary data hidden from standard team members?', answer: 'Yes. ParroDash uses strict field-level permissions. Salary, SSN, and banking information are visible only to authorized HR and Finance admins.' },
      { question: 'Can we manage international contractors alongside full-time employees?', answer: 'Yes. ParroDash supports both W-2 employees and 1099/international contractors with dedicated profile types and tax compliance flags.' },
    ],
    relatedSlugs: ['employee-management', 'attendance', 'leave-management', 'payroll'],
  },
  'employee-management': {
    slug: 'employee-management',
    title: 'Employee Management',
    kicker: 'People Intelligence',
    tagline: 'Detailed employee profiles, skills inventories, and real-time team directories.',
    heroDescription:
      'Give every team member a home base. Discover colleagues with specific skills, view current project assignments, check local working hours, and manage reporting chains.',
    iconName: 'Contact',
    mockupType: 'employee',
    stats: [
      { value: '100%', label: 'Up-to-date team skills index' },
      { value: 'Global', label: 'Multi-timezone office directory' },
      { value: '0', label: 'Confusion about team leads and escalation paths' },
    ],
    keyCapabilities: [
      {
        title: 'Deep Employee Profile Cards',
        description: 'Every profile displays bio, department, role, local timezone, current project commitments, and skills tags.',
        bullets: ['Current sprint tasks overview', 'Direct chat & video call buttons', 'Public praise and kudos awards'],
      },
      {
        title: 'Skills & Certification Matrix',
        description: 'Find internal experts for customer deals or new technical challenges in seconds with searchable skills filters.',
        bullets: ['Certified technical & language skills', 'Years of experience flags', 'Project allocation readiness indicator'],
      },
      {
        title: 'Self-Service Employee Portal',
        description: 'Empower staff to update their personal contact details, view pay stubs, request PTO, and access tax documents.',
        bullets: ['Secure profile editing', 'Bank account change verification', 'Downloadable tax forms (W-2, 1099)'],
      },
    ],
    workflows: [
      { step: '01', title: 'Profile Creation', description: 'Onboarded members complete their profile with bio, skills, and emergency contact details.' },
      { step: '02', title: 'Discover & Staff', description: 'Project managers query the directory to find available developers with React and AWS skills.' },
      { step: '03', title: 'Maintain & Grow', description: 'Track internal promotions, performance ratings, and career milestones over time.' },
    ],
    faqs: [
      { question: 'Can employees update their own information?', answer: 'Yes. Employees have self-service access to modify contact details and emergency contacts, while job title and compensation changes require HR approval.' },
      { question: 'Can we sync with Google Workspace or Okta directory?', answer: 'Yes. SCIM and Google Workspace directory sync keep your ParroDash employee roster synchronized automatically.' },
    ],
    relatedSlugs: ['hr-management', 'attendance', 'workload-management'],
  },
  'attendance': {
    slug: 'attendance',
    title: 'Attendance Tracking',
    kicker: 'Verified Time & Presence',
    tagline: 'Modern attendance tracking with geo-fencing, tablet kiosk mode, and timesheet automation.',
    heroDescription:
      'Capture employee presence accurately without clunky hardware. Support remote work, office badge taps, mobile GPS check-ins, and flexible work schedules in one platform.',
    iconName: 'Clock',
    mockupType: 'attendance',
    stats: [
      { value: '99.8%', label: 'Timesheet accuracy rate' },
      { value: '1-Click', label: 'Mobile & desktop clock-in' },
      { value: 'Auto-Sync', label: 'Direct feed into payroll disbursement' },
    ],
    keyCapabilities: [
      {
        title: 'Multi-Mode Clock-In / Clock-Out',
        description: 'Employees can log presence via desktop web, mobile app with optional geo-fencing, or a shared tablet office kiosk.',
        bullets: ['PIN or QR-code kiosk verification', 'Configurable GPS location boundaries for job sites', 'Break and meal-period tracking compliance'],
      },
      {
        title: 'Automated Overtime & Shift Rules',
        description: 'Define custom shift rules that automatically flag daily or weekly overtime according to local labor laws.',
        bullets: ['Standard 8-hour, 10-hour, or 40-hour weekly thresholds', 'Automatic meal penalty calculations', 'Shift differential premium tracking'],
      },
      {
        title: 'Manager Approval Workflows',
        description: 'Supervisors review and approve team timesheets with discrepancy highlights before sending data to payroll.',
        bullets: ['Missing punch alerts and easy manager adjustments', 'Audit trail for every time modification', 'Batch 1-click approvals for pay periods'],
      },
    ],
    workflows: [
      { step: '01', title: 'Clock In', description: 'Employee punches in via mobile app or office kiosk; timestamp is recorded.' },
      { step: '02', title: 'Monitor Presence', description: 'Managers see live office occupancy and remote availability on the dashboard.' },
      { step: '03', title: 'Reconcile Timesheets', description: 'Timesheets automatically calculate regular and overtime hours for pay runs.' },
    ],
    faqs: [
      { question: 'Can we enforce geo-fencing so workers only clock in on-site?', answer: 'Yes. You can define geographic radiuses around specific offices or client job sites to prevent clock-ins outside designated zones.' },
      { question: 'What happens if an employee forgets to clock out?', answer: 'ParroDash automatically alerts the employee and their manager, allowing a quick one-click correction with supervisor approval.' },
    ],
    relatedSlugs: ['payroll', 'leave-management', 'time-tracking'],
  },
  'leave-management': {
    slug: 'leave-management',
    title: 'Leave Management',
    kicker: 'Effortless Time Off',
    tagline: 'Automated PTO accruals, custom policy rules, and instant manager approvals.',
    heroDescription:
      'Eliminate spreadsheet leave trackers and endless email chains. Set up complex accrual rules, track vacation balances, and visualize team absences directly on project timelines.',
    iconName: 'CalendarDays',
    mockupType: 'leave',
    stats: [
      { value: '0', label: 'Double-booked project critical paths' },
      { value: '100%', label: 'Automated policy accruals' },
      { value: '2-Clicks', label: 'For employees to submit PTO requests' },
    ],
    keyCapabilities: [
      {
        title: 'Customizable Policy Rules',
        description: 'Configure standard vacation, sick leave, parental leave, bereavement, and custom compensatory time off.',
        bullets: ['Accrue by hours worked, pay period, or annual lump-sum', 'Carryover limits and expiration cutoffs', 'Probationary waiting periods for new hires'],
      },
      {
        title: 'Smart Clash Detection',
        description: 'Warn managers during approval if multiple key engineers or leads are scheduled to take time off during the same sprint.',
        bullets: ['Department coverage minimum thresholds', 'Live calendar overlay of active project milestones', 'Delegation of authority while out of office'],
      },
      {
        title: 'Self-Service Balances & History',
        description: 'Employees view exact remaining PTO days, projected year-end accruals, and past approval logs anytime.',
        bullets: ['Projected balance calculator', 'Mobile time-off requests with optional doctor note attachments', 'Auto-sync with Google Calendar & Slack status'],
      },
    ],
    workflows: [
      { step: '01', title: 'Request Leave', description: 'Employee selects dates and leave type; system displays projected balance after request.' },
      { step: '02', title: 'Check Clashes', description: 'Manager reviews request alongside team schedule and project deadlines.' },
      { step: '03', title: 'Approve & Sync', description: 'Upon approval, dates appear on team calendar and Slack status sets to Out of Office.' },
    ],
    faqs: [
      { question: 'Can we set up different leave policies for different countries?', answer: 'Yes. You can assign location-specific policies with unique holiday calendars and statutory minimums for employees in the US, UK, EU, and Asia.' },
      { question: 'Does ParroDash update Slack or Google Calendar when an employee is on leave?', answer: 'Yes. ParroDash automatically sets their Slack status to 🌴 Away and marks their Google Calendar as Out of Office.' },
    ],
    relatedSlugs: ['attendance', 'hr-management', 'calendar', 'payroll'],
  },
  'payroll': {
    slug: 'payroll',
    title: 'Payroll Automation',
    kicker: 'Seamless Compensation',
    tagline: 'Run compliant payroll in minutes. Integrated directly with hours, attendance, and leave.',
    heroDescription:
      'Stop exporting CSVs between five different tools. ParroDash Payroll calculates gross-to-net, manages direct deposit, generates tax filings, and sends pay stubs automatically.',
    iconName: 'DollarSign',
    mockupType: 'payroll',
    stats: [
      { value: '90%', label: 'Faster payroll preparation cycles' },
      { value: '100%', label: 'Automated gross-to-net calculations' },
      { value: '50-State', label: 'US tax compliance and filings' },
    ],
    keyCapabilities: [
      {
        title: 'Zero-Data-Entry Payroll Runs',
        description: 'Approved timesheet hours, overtime premiums, and PTO deductions feed directly into pay calculation batches.',
        bullets: ['Salary, hourly, and commission compensation models', 'Reimbursements and expense integration', 'Pre-tax and post-tax benefit deductions'],
      },
      {
        title: 'Direct Deposit & Digital Stubs',
        description: 'Distribute funds directly to employee bank accounts via automated ACH with split-account deposit options.',
        bullets: ['Self-service encrypted digital pay stubs', 'Annual W-2 and 1099 generation', 'Multi-bank account split deposits'],
      },
      {
        title: 'Automated Tax Compliance',
        description: 'Calculate, deduct, and remit federal, state, and local payroll taxes automatically without manual paperwork.',
        bullets: ['Quarterly 941 filings and annual 940 summaries', 'State unemployment tax (SUTA) management', 'Contractor 1099-NEC digital filing'],
      },
    ],
    workflows: [
      { step: '01', title: 'Review Time & Leave', description: 'System imports approved attendance hours and PTO automatically.' },
      { step: '02', title: 'Preview Calculation', description: 'Review summary totals, taxes, and net disbursements before approving.' },
      { step: '03', title: 'Execute Direct Deposit', description: 'Click approve; ACH transfers initiate and digital pay stubs are delivered.' },
    ],
    faqs: [
      { question: 'Can we pay international contractors in multiple currencies?', answer: 'Yes. ParroDash supports multi-currency contractor payouts across 120+ countries via integrated global payment rails.' },
      { question: 'Does ParroDash handle garnishments and 401(k) deductions?', answer: 'Yes. Automated deductions for healthcare, 401(k), HSA, FSA, and court-ordered wage garnishments are fully supported.' },
    ],
    relatedSlugs: ['attendance', 'hr-management', 'employee-management'],
  },
  'crm': {
    slug: 'crm',
    title: 'Client CRM & Pipelines',
    kicker: 'Revenue Operations',
    tagline: 'Track leads, client contracts, deal pipelines, and client portals where project work happens.',
    heroDescription:
      'Bridge the gap between closed deals and project delivery. When sales wins an account in ParroDash CRM, client onboarding projects and shared portals launch immediately.',
    iconName: 'Briefcase',
    mockupType: 'crm',
    stats: [
      { value: '3x', label: 'Faster handoff from sales to project execution' },
      { value: '360°', label: 'Client visibility across deals and deliverables' },
      { value: '100%', label: 'White-labeled client portal available' },
    ],
    keyCapabilities: [
      {
        title: 'Visual Deal Pipelines',
        description: 'Manage sales stages with drag-and-drop Kanban columns, weighted win probabilities, and expected close dates.',
        bullets: ['Deal aging flags and stagnation alerts', 'Multiple customized pipelines for new logo vs upsell vs retainers', 'Custom fields for contract value, source, and decision makers'],
      },
      {
        title: 'Unified Client 360 Records',
        description: 'See every email exchange, meeting note, active project task, open ticket, and invoice tied to the client account.',
        bullets: ['Two-way Gmail and Outlook email sync', 'Contact activity timelines and call logs', 'Document attachments for signed MSAs and SOWs'],
      },
      {
        title: 'Client Guest Portals',
        description: 'Invite external clients into a branded portal where they can view milestone progress, approve deliverables, and pay invoices.',
        bullets: ['White-label domain and company branding', 'Restricted access preventing internal note visibility', 'Integrated review and digital sign-off'],
      },
    ],
    workflows: [
      { step: '01', title: 'Capture Inbound Lead', description: 'Leads from web forms or marketing campaigns enter the CRM automatically.' },
      { step: '02', title: 'Work Deal Pipeline', description: 'Log calls, schedule demos, send proposals, and track stage progression.' },
      { step: '03', title: 'Win & Auto-Provision', description: 'Winning a deal triggers the creation of the client onboarding project and billing account.' },
    ],
    faqs: [
      { question: 'Can we import contacts from HubSpot or Salesforce?', answer: 'Yes. We provide native two-way sync integrations for Salesforce and HubSpot, as well as CSV contact import tools.' },
      { question: 'Can clients see internal task comments in their portal?', answer: 'No. Internal comments and private project folders are strictly isolated from client guest portals.' },
    ],
    relatedSlugs: ['project-management', 'approvals', 'reporting'],
  },
  'reporting': {
    slug: 'reporting',
    title: 'Reporting & Analytics',
    kicker: 'Data-Driven Operations',
    tagline: 'Deep operational analytics, team velocity metrics, and custom drill-down reports.',
    heroDescription:
      'Stop guessing how teams spend time and money. Generate comprehensive reports on project profitability, sprint cycle times, employee utilization, and overdue bottlenecks.',
    iconName: 'LineChart',
    mockupType: 'reporting',
    stats: [
      { value: '100%', label: 'Custom query flexibility' },
      { value: '1-Click', label: 'Export to CSV, Excel, PDF' },
      { value: 'Scheduled', label: 'Automated executive weekly digests' },
    ],
    keyCapabilities: [
      {
        title: 'Custom Metric Builder',
        description: 'Create multi-dimensional charts using formula calculations, grouping by client, department, or project tier.',
        bullets: ['Cycle time and lead time histograms', 'Billable vs non-billable hour ratios', 'Sprint planned-to-done ratios'],
      },
      {
        title: 'Client Profitability Analysis',
        description: 'Combine employee hourly cost rates with client contract values to calculate real gross margins per project.',
        bullets: ['Real-time budget burn rate indicators', 'Unbilled revenue tracking', 'Projected margin variance alerts'],
      },
      {
        title: 'Executive Presentation Views',
        description: 'Export boardroom-ready visual charts and PDF reports with custom company branding and executive summaries.',
        bullets: ['Automated Monday morning email digests', 'High-resolution PDF and PNG exports', 'Shareable read-only dashboard links'],
      },
    ],
    workflows: [
      { step: '01', title: 'Define Report Query', description: 'Filter by date range, department, client, or custom project tags.' },
      { step: '02', title: 'Visualize Data', description: 'Choose from bar charts, cumulative flow diagrams, scatter plots, or pivot tables.' },
      { step: '03', title: 'Schedule Delivery', description: 'Set weekly automated reports to senior leadership via Slack or email.' },
    ],
    faqs: [
      { question: 'Can we export raw data for Snowflake or BigQuery?', answer: 'Yes. Enterprise plans support automated nightly data warehouse syncs to Snowflake, BigQuery, and Redshift.' },
      { question: 'Can we calculate employee hourly cost rates securely?', answer: 'Yes. Internal wage rates are encrypted and only accessible to users with executive financial reporting privileges.' },
    ],
    relatedSlugs: ['dashboards', 'workload-management', 'project-management'],
  },
  'approvals': {
    slug: 'approvals',
    title: 'Approvals & Governance',
    kicker: 'Risk & Quality Control',
    tagline: 'Multi-stage sign-offs, purchase order reviews, and change request workflows.',
    heroDescription:
      'Avoid dropped balls and unauthorized changes. Build clear approval sequences for marketing collateral, budget requisitions, code releases, and contractor invoices.',
    iconName: 'ShieldCheck',
    mockupType: 'approvals',
    stats: [
      { value: '4x', label: 'Faster sign-off cycles' },
      { value: '100%', label: 'Compliant immutable audit trails' },
      { value: 'Multi-tier', label: 'Sequential & parallel review logic' },
    ],
    keyCapabilities: [
      {
        title: 'Flexible Approval Routing',
        description: 'Design multi-tier approval chains that require sign-off from legal, finance, and technical leads before a task proceeds.',
        bullets: ['Sequential or parallel approval stages', 'Conditional routing based on budget thresholds', 'Automatic reassignment on reviewer absence'],
      },
      {
        title: 'Immutable Audit History',
        description: 'Maintain strict timestamped logs of every submission, comment, approval, rejection, and amendment.',
        bullets: ['SOC 2 and ISO compliance ready logs', 'Digital signature capture with IP verification', 'Exportable audit packages for regulators'],
      },
      {
        title: 'Mobile 1-Tap Reviews',
        description: 'Reviewers can inspect attached deliverables, budget memos, or contracts and sign off directly from mobile push alerts.',
        bullets: ['Inline document previews', 'Reject with mandatory revision notes', 'Quick approval via Slack or email notifications'],
      },
    ],
    workflows: [
      { step: '01', title: 'Submit for Sign-Off', description: 'Contributor attaches deliverable and requests approval from assigned reviewers.' },
      { step: '02', title: 'Sequential Review', description: 'Legal and Finance review in parallel or specified sequential order.' },
      { step: '03', title: 'Auto-Advance Work', description: 'Once all parties sign off, the task status advances and notifications are dispatched.' },
    ],
    faqs: [
      { question: 'Can approval thresholds be based on budget amounts?', answer: 'Yes. For example, purchases under $1,000 can require team lead sign-off, while requests over $10,000 automatically escalate to the VP of Finance.' },
      { question: 'Can external clients participate in approvals?', answer: 'Yes. Clients can approve creative deliverables or project milestones directly from a secure web link without creating an internal account.' },
    ],
    relatedSlugs: ['creative-studio', 'task-management', 'crm'],
  },
  'creative-studio': {
    slug: 'creative-studio',
    title: 'Creative Studio & Proofing',
    kicker: 'Visual Collaboration',
    tagline: 'Mark up designs, video frames, PDFs, and web assets with pixel-accurate feedback pins.',
    heroDescription:
      'End vague feedback like "make it pop." Pin precise comments onto PNGs, SVGs, multi-page PDFs, and 4K video timestamps directly inside your tasks.',
    iconName: 'Palette',
    mockupType: 'creative',
    stats: [
      { value: '60%', label: 'Fewer revision cycles on design assets' },
      { value: 'Pixel-Perfect', label: 'Pinpoint visual markup coordinates' },
      { value: '4K Video', label: 'Frame-accurate review and playback' },
    ],
    keyCapabilities: [
      {
        title: 'Pinpoint Visual Annotation',
        description: 'Click anywhere on an uploaded image, website screenshot, or PDF page to drop a numbered feedback pin with revision notes.',
        bullets: ['Box and arrow markup tools', 'Side-by-side version comparison with diff overlays', 'Color-coded feedback tags by discipline (Copy, UI, Brand)'],
      },
      {
        title: 'Frame-Accurate Video Proofing',
        description: 'Scrub through MP4 and MOV videos frame by frame and leave feedback tied to exact timecodes.',
        bullets: ['Timecode-linked review comments', 'Playback speed controls (0.5x, 1x, 2x)', 'Export comments as subtitle markers'],
      },
      {
        title: 'Native Figma & Adobe Sync',
        description: 'Keep design files in sync by linking Figma artboards directly to ParroDash creative studio tasks.',
        bullets: ['Live Figma frame embedding', 'Sync comments bi-directionally with Figma', 'Version snapshot history'],
      },
    ],
    workflows: [
      { step: '01', title: 'Upload Asset', description: 'Drag and drop design files, multi-page brochures, or video cuts into the task.' },
      { step: '02', title: 'Pin Exact Feedback', description: 'Stakeholders drop pins directly on typography, layout issues, or color choices.' },
      { step: '03', title: 'Resolve & Approve', description: 'Designers resolve comments and upload Version 2 for side-by-side diff comparison.' },
    ],
    faqs: [
      { question: 'What file formats can be annotated?', answer: 'ParroDash supports PNG, JPG, SVG, WebP, PDF, MP4, MOV, and live interactive HTML embeds.' },
      { question: 'Can clients annotate without logging in?', answer: 'Yes. You can generate a private guest proofing link allowing clients to leave pins and approvals without creating a username.' },
    ],
    relatedSlugs: ['approvals', 'task-management', 'docs'],
  },
  'time-tracking': {
    slug: 'time-tracking',
    title: 'Time Tracking & Timesheets',
    kicker: 'Effort & Billable Hours',
    tagline: 'Native timers, billable hourly rates, and timesheet approvals built directly into every task.',
    heroDescription:
      'Capture every billable minute without third-party extensions. Start timers from tasks, log manual hours, set client billing rates, and sync directly with invoicing.',
    iconName: 'Clock',
    mockupType: 'timetracking',
    stats: [
      { value: '25%', label: 'Increase in captured billable hours' },
      { value: '1-Click', label: 'Start timer from any task or browser tab' },
      { value: 'Auto-Sync', label: 'Direct feed into client invoicing' },
    ],
    keyCapabilities: [
      {
        title: 'Native Stopwatch & Chrome Extension',
        description: 'Start and stop timers from within any task, or use the ParroDash desktop widget and Chrome extension while working in other apps.',
        bullets: ['Idle time detection and prompt to discard inactive minutes', 'Tag entries as billable vs non-billable', 'Add detailed work memos to every time slice'],
      },
      {
        title: 'Tiered Billing & Cost Rates',
        description: 'Define billable rates per client, project, or team member, while maintaining private internal cost rates for margin calculation.',
        bullets: ['Client billing rate overrides', 'Internal hourly cost tracking', 'Real-time project budget consumption alerts'],
      },
      {
        title: 'Formal Timesheet Submissions',
        description: 'Employees submit weekly timesheets for manager review and approval with one click.',
        bullets: ['Visual weekly calendar grid of logged hours', 'Discrepancy warnings for under-logged days', '1-click export to payroll and billing'],
      },
    ],
    workflows: [
      { step: '01', title: 'Start Timer', description: 'Click the play button on any task; time logs against the project automatically.' },
      { step: '02', title: 'Categorize Entry', description: 'Mark as billable or non-billable and add short context notes.' },
      { step: '03', title: 'Submit for Approval', description: 'At week end, submit timesheet to team lead with full task breakdown.' },
    ],
    faqs: [
      { question: 'Can employees edit their time entries if they make a mistake?', answer: 'Yes, unless a manager has already locked the pay period or approved the weekly timesheet.' },
      { question: 'Does ParroDash take invasive employee screenshots?', answer: 'No. ParroDash does not support invasive employee surveillance or random screen captures. We believe in high-trust, outcome-oriented work.' },
    ],
    relatedSlugs: ['attendance', 'payroll', 'project-management', 'reporting'],
  },
  'kanban-boards': {
    slug: 'kanban-boards',
    title: 'Kanban Boards',
    kicker: 'Fluid Workflows',
    tagline: 'Custom visual columns, WIP limits, automated transitions, and swimlanes.',
    heroDescription:
      'Visualize work at every stage. Drag tasks across columns, enforce Work-In-Progress limits to prevent bottlenecks, and group boards by assignee, priority, or sprint.',
    iconName: 'Columns3',
    mockupType: 'kanban',
    stats: [
      { value: '3x', label: 'Faster sprint progression visibility' },
      { value: 'WIP Limits', label: 'Eliminate multitasking bottlenecks' },
      { value: 'Swimlanes', label: 'Group boards horizontally by priority or team' },
    ],
    keyCapabilities: [
      {
        title: 'Customizable Multi-Stage Columns',
        description: 'Map any workflow from Backlog to In Development, QA, Design Review, and Deployed.',
        bullets: ['Custom column colors and icons', 'Automatic rule triggers when cards enter a column', 'Column collapse for focused viewing'],
      },
      {
        title: 'Horizontal Swimlanes',
        description: 'Slice your board into horizontal rows grouped by assignee, epic, priority, or client tier.',
        bullets: ['Cross-functional sprint coordination', 'Urgent expediting swimlane for P0 bugs', 'Sub-team swimlanes on a single shared board'],
      },
      {
        title: 'Work-In-Progress (WIP) Guardrails',
        description: 'Set maximum card counts on columns (e.g., maximum 4 items in QA) to highlight and clear bottlenecks.',
        bullets: ['Visual warning when column limit is exceeded', 'Cumulative flow diagram generation', 'Lead time calculation per column'],
      },
    ],
    workflows: [
      { step: '01', title: 'Configure Board', description: 'Define columns that reflect your team’s real delivery steps.' },
      { step: '02', title: 'Drag & Drop Cards', description: 'Move cards as progress happens; assignees and statuses update instantly.' },
      { step: '03', title: 'Analyze Flow', description: 'Inspect cycle times to discover where tasks stall before shipping.' },
    ],
    faqs: [
      { question: 'Can I view the same tasks as a list or Gantt chart?', answer: 'Yes! Views in ParroDash are live projections of the same underlying data. Switching views preserves all changes.' },
      { question: 'Can dragging a card send a notification or run an automation?', answer: 'Yes. For example, moving a card to "Ready for Review" can automatically notify the client or assign the QA lead.' },
    ],
    relatedSlugs: ['task-management', 'project-management', 'gantt'],
  },
  'gantt': {
    slug: 'gantt',
    title: 'Gantt Timelines',
    kicker: 'Critical Path Scheduling',
    tagline: 'Interactive Gantt charts with drag-and-drop scheduling, critical paths, and automatic slack recalculation.',
    heroDescription:
      'Manage complex multi-month schedules with ease. Draw dependency links, identify the critical path, and cascade timeline shifts automatically when milestones change.',
    iconName: 'AlignLeft',
    mockupType: 'gantt',
    stats: [
      { value: '1-Click', label: 'Critical path calculation' },
      { value: 'Auto-Shift', label: 'Cascading dependency rescheduling' },
      { value: '100%', label: 'Visual alignment across cross-team roadmaps' },
    ],
    keyCapabilities: [
      {
        title: 'Interactive Drag-and-Drop Gantt Bar',
        description: 'Lengthen, shorten, or move task duration bars directly on the calendar grid with immediate visual feedback.',
        bullets: ['Finish-to-Start, Start-to-Start, Finish-to-Finish, and Start-to-Finish dependency links', 'Progress fill percentage on each bar', 'Milestone diamond markers with target dates'],
      },
      {
        title: 'Automated Critical Path Highlighting',
        description: 'Highlight the exact sequence of dependent tasks that determine the project completion date in one click.',
        bullets: ['Slack time calculation for non-critical tasks', 'Early warning when a critical delay threatens launch', 'Snapshot baseline comparisons'],
      },
      {
        title: 'Multi-Project Timeline Rollup',
        description: 'View dozens of departmental initiatives together on an enterprise executive roadmap timeline.',
        bullets: ['Group by project, program, or lead executive', 'Filter by milestone status or risk level', 'Lossless vector PDF and image export for presentations'],
      },
    ],
    workflows: [
      { step: '01', title: 'Plot Milestones', description: 'Drop major release gates and target deadlines onto the timeline.' },
      { step: '02', title: 'Connect Dependencies', description: 'Draw lines between predecessor and successor tasks to create relationships.' },
      { step: '03', title: 'Auto-Balance Shifts', description: 'When a vendor deliverable slips by 3 days, downstream tasks automatically shift.' },
    ],
    faqs: [
      { question: 'What happens if a task slips on the critical path?', answer: 'ParroDash highlights the affected downstream items in red and notifies project managers with the revised target delivery date.' },
      { question: 'Can I export Gantt charts to MS Project or PDF?', answer: 'Yes. You can export to standard Microsoft Project XML format as well as high-resolution PDF and PNG formats.' },
    ],
    relatedSlugs: ['project-management', 'kanban-boards', 'workload-management'],
  },
  'forms': {
    slug: 'forms',
    title: 'Forms & Work Intake',
    kicker: 'Structured Ingestion',
    tagline: 'Custom intake forms with conditional logic that transform submissions directly into assigned tasks.',
    heroDescription:
      'Stop receiving vague email requests and chaotic chat DMs. Build branded intake forms for creative briefs, IT helpdesk tickets, bug reports, and job applications.',
    iconName: 'ClipboardList',
    mockupType: 'forms',
    stats: [
      { value: '80%', label: 'Reduction in missing request information' },
      { value: 'Conditional', label: 'Dynamic field visibility based on answers' },
      { value: '0', label: 'Manual re-typing of form data into tasks' },
    ],
    keyCapabilities: [
      {
        title: 'Conditional Branching Logic',
        description: 'Show or hide questions dynamically based on the submitter’s previous responses.',
        bullets: ['Multi-step wizard layout or single page form', 'File attachment uploads up to 2GB', 'Dropdowns mapped directly to custom task fields'],
      },
      {
        title: 'Automated Routing & Assignment',
        description: 'Direct incoming submissions to the right team board, set priority flags, and assign owners automatically.',
        bullets: ['Round-robin assignment among support agents', 'Auto-tagging based on selected request category', 'Confirmation emails sent to the submitter with ticket tracking links'],
      },
      {
        title: 'Embed Anywhere or Share as Standalone Links',
        description: 'Share a branded URL or embed the form cleanly into your company intranet, customer portal, or website.',
        bullets: ['Custom logo and color theme branding', 'ReCAPTCHA and spam protection included', 'Prefill fields via URL query parameters'],
      },
    ],
    workflows: [
      { step: '01', title: 'Design Form', description: 'Drag in text fields, dropdowns, date pickers, and file attachment dropzones.' },
      { step: '02', title: 'Set Branching Logic', description: 'If user chooses "Bug", reveal browser and reproduction steps fields.' },
      { step: '03', title: 'Receive & Execute', description: 'Submissions arrive as fully populated tasks ready for prioritization.' },
    ],
    faqs: [
      { question: 'Can external users submit forms without a ParroDash account?', answer: 'Yes. Public forms can be submitted by anyone without requiring a login or seat license.' },
      { question: 'Can uploaded files be attached directly to the created task?', answer: 'Yes. All uploaded attachments appear in the task attachments tab ready for download and review.' },
    ],
    relatedSlugs: ['task-management', 'automations', 'creative-studio'],
  },
  'workload-management': {
    slug: 'workload-management',
    title: 'Workload & Capacity',
    kicker: 'Resource Balancing',
    tagline: 'Balance team utilization, prevent burnout, and forecast hiring needs across all active projects.',
    heroDescription:
      'See who is swamped and who has open bandwidth before assigning sprints. Visualize daily and weekly hours against individual capacity limits across all workspaces.',
    iconName: 'Scale',
    mockupType: 'workload',
    stats: [
      { value: '0', label: 'Burnout surprises on high-stakes launches' },
      { value: '100%', label: 'Visibility into true team capacity' },
      { value: 'Drag-and-Drop', label: 'Reallocate tasks to balance workload in seconds' },
    ],
    keyCapabilities: [
      {
        title: 'Visual Capacity Heatmaps',
        description: 'Color-coded indicators reveal team members who are green (under capacity), yellow (optimal), or red (over-allocated).',
        bullets: ['Measure capacity by hours, task count, or agile story points', 'Adjust individual weekly capacity for part-time staff', 'Account for scheduled PTO and public holidays automatically'],
      },
      {
        title: '1-Click Rebalance Dragging',
        description: 'Easily drag a task from an overloaded senior engineer’s row to a teammate with available capacity.',
        bullets: ['Live recalculation of capacity percentages as you drag', 'Filter by department, skill tags, or job role', 'Cross-project assignment visibility'],
      },
      {
        title: 'Future Capacity Forecasting',
        description: 'Look 3 to 6 months into the future to identify upcoming resource crunches and justify new headcount.',
        bullets: ['Forecasted vs actual capacity curves', 'Scenario planning for upcoming prospective client deals', 'Department utilization benchmarks'],
      },
    ],
    workflows: [
      { step: '01', title: 'Set Team Capacities', description: 'Define standard weekly working hours per employee (e.g., 35 or 40 hours).' },
      { step: '02', title: 'Review Sprint Allocation', description: 'Inspect the heatmap to identify red-flagged team members with over 100% load.' },
      { step: '03', title: 'Rebalance & Smooth', description: 'Drag tasks to available peers to ensure a balanced, sustainable delivery rhythm.' },
    ],
    faqs: [
      { question: 'Does workload automatically account for approved PTO?', answer: 'Yes. When an employee takes approved leave in the HR module, their available capacity drops to zero for those days.' },
      { question: 'Can we measure capacity in story points instead of hours?', answer: 'Yes. You can toggle between hours, task counts, or agile story points at any time.' },
    ],
    relatedSlugs: ['project-management', 'attendance', 'leave-management', 'dashboards'],
  },
};
