/**
 * Department and Industry solution page configurations for ParroDash.
 * Provides custom messaging, tailored workflows, and department-specific feature pairings.
 */

export interface SolutionPageDetail {
  slug: string;
  type: 'team' | 'industry';
  title: string;
  kicker: string;
  tagline: string;
  heroDescription: string;
  stats: { value: string; label: string }[];
  painsAndGains: {
    problem: string;
    solution: string;
  }[];
  featuredFeatures: {
    title: string;
    description: string;
    slug: string;
  }[];
  workflows: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: { question: string; answer: string }[];
}

export const SOLUTIONS_DATA: Record<string, SolutionPageDetail> = {
  // BY TEAM
  'engineering': {
    slug: 'engineering',
    type: 'team',
    title: 'ParroDash for Engineering & Product Teams',
    kicker: 'Engineering Velocity',
    tagline: 'Ship faster with agile sprints, GitHub sync, bug backlogs, and PRD docs connected to code.',
    heroDescription:
      'Bridge the divide between product managers and developers. Connect sprint backlogs directly to GitHub pull requests, automated release notes, and real-time burndown charts.',
    stats: [
      { value: '35%', label: 'Faster sprint delivery cycle' },
      { value: '2-Way', label: 'GitHub and GitLab issue synchronization' },
      { value: '0', label: 'Context loss between product specs and code' },
    ],
    painsAndGains: [
      { problem: 'Product specs in Notion, bugs in Jira, and discussions lost in Slack.', solution: 'All-in-one workspace uniting PRDs, sprint backlogs, code links, and release tracking.' },
      { problem: 'Manual sprint status reporting drains developer focus.', solution: 'Automated burndown charts and PR status updates update project state automatically.' },
      { problem: 'Engineers interrupted for status updates throughout the day.', solution: 'Asynchronous updates with live Gantt and Kanban progress visible to all stakeholders.' },
    ],
    featuredFeatures: [
      { title: 'Interactive Kanban Boards', description: 'Fluid sprint boards with WIP limits, agile estimates, and automated transitions.', slug: 'kanban-boards' },
      { title: 'Docs & PRD Wikis', description: 'Write technical architecture specs with live embedded task checklists.', slug: 'docs' },
      { title: 'Workload & Capacity', description: 'Balance developer story points across sprints to prevent burnouts.', slug: 'workload-management' },
    ],
    workflows: [
      { step: '01', title: 'Plan Sprint Backlog', description: 'Estimate story points, prioritize epics, and decompose tasks with nested checklists.' },
      { step: '02', title: 'Code & Sync PRs', description: 'Link branch names and pull requests to tasks; PR merge advances task status.' },
      { step: '03', title: 'Automated Retrospective', description: 'Review sprint velocity and calculate carryover story points automatically.' },
    ],
    faqs: [
      { question: 'Does ParroDash integrate with GitHub and GitLab?', answer: 'Yes. Commits, branch names, and pull request statuses sync bi-directionally with ParroDash tasks.' },
      { question: 'Can we calculate agile velocity and burndown charts?', answer: 'Yes. Story points and estimated hours feed directly into sprint velocity and burndown widgets.' },
    ],
  },
  'marketing': {
    slug: 'marketing',
    type: 'team',
    title: 'ParroDash for Marketing Teams',
    kicker: 'Campaign Execution',
    tagline: 'Run omnichannel campaigns, editorial calendars, creative proofing, and asset approvals.',
    heroDescription:
      'From product launches to daily social content, keep your marketing team aligned. Manage content calendars, review creative drafts with visual pins, and track campaign ROI in one place.',
    stats: [
      { value: '4x', label: 'Faster campaign launch velocity' },
      { value: '60%', label: 'Fewer revision cycles with visual proofing' },
      { value: '100%', label: 'Visibility into marketing editorial schedules' },
    ],
    painsAndGains: [
      { problem: 'Chaotic campaign feedback scattered across Slack, email, and Google Docs.', solution: 'Pixel-accurate visual feedback pins directly on design mockups and video timestamps.' },
      { problem: 'Missed launch dates due to unclear cross-functional dependencies.', solution: 'Interactive Gantt charts coordinating copywriters, designers, legal, and media buyers.' },
      { problem: 'Disconnected content calendars leading to duplicated work.', solution: 'Unified campaign calendar with multi-channel filtering and social asset previews.' },
    ],
    featuredFeatures: [
      { title: 'Creative Studio & Proofing', description: 'Annotate images, videos, and PDFs with frame-accurate pins.', slug: 'creative-studio' },
      { title: 'Campaign Calendars', description: 'Visualize publishing schedules across blog, social, email, and paid ads.', slug: 'calendar' },
      { title: 'Approvals & Governance', description: 'Multi-stage sign-offs for brand compliance and legal review.', slug: 'approvals' },
    ],
    workflows: [
      { step: '01', title: 'Campaign Brief', description: 'Marketing lead drafts the campaign brief in a shared collaborative document.' },
      { step: '02', title: 'Asset Production', description: 'Copywriters and designers produce assets with clear subtask deadlines.' },
      { step: '03', title: 'Proofing & Launch', description: 'Stakeholders pin visual feedback, approve final cuts, and schedule multi-channel release.' },
    ],
    faqs: [
      { question: 'Can we invite freelance copywriters and agency partners?', answer: 'Yes. You can invite external contributors as guests with access limited strictly to specific campaign folders.' },
      { question: 'Can we store brand guidelines and marketing templates?', answer: 'Yes. Keep brand colors, logo packages, and document templates in the marketing team wiki.' },
    ],
  },
  'design': {
    slug: 'design',
    type: 'team',
    title: 'ParroDash for Design & Creative Teams',
    kicker: 'Creative Operations',
    tagline: 'Connect Figma designs, user research, feedback pins, and design system tasks.',
    heroDescription:
      'Give designers the focused space they need without leaving project managers in the dark. Embed live Figma files, collect pinpoint annotations, and track design sprint deliverables.',
    stats: [
      { value: '50%', label: 'Reduction in design review meeting hours' },
      { value: 'Live', label: 'Figma frame embedding directly in tasks' },
      { value: '100%', label: 'Clarity on design handoff specifications' },
    ],
    painsAndGains: [
      { problem: 'Vague verbal feedback like "make it feel cleaner" that delays deadlines.', solution: 'Precision annotation pins with clear checkbox resolutions directly on assets.' },
      { problem: 'Engineers building from outdated Figma versions or deprecated specs.', solution: 'Direct link between design tokens, specs, and engineering backlog tasks.' },
      { problem: 'Unstructured design requests arriving in chaotic Slack DMs.', solution: 'Custom design intake forms that require briefs, specs, and target dimensions upfront.' },
    ],
    featuredFeatures: [
      { title: 'Creative Studio', description: 'Precision markup on PNGs, SVGs, and MP4 video frames.', slug: 'creative-studio' },
      { title: 'Intake Forms', description: 'Standardized design request forms with conditional logic.', slug: 'forms' },
      { title: 'Docs & Design System', description: 'Living brand guidelines and component specs with live interactive embeds.', slug: 'docs' },
    ],
    workflows: [
      { step: '01', title: 'Intake Request', description: 'Stakeholder submits design brief via custom intake form.' },
      { step: '02', title: 'Design & Prototype', description: 'Designer works in Figma, syncing progress frames directly to the task.' },
      { step: '03', title: 'Feedback & Sign-Off', description: 'Reviewers leave visual pins and approve the asset for engineering handoff.' },
    ],
    faqs: [
      { question: 'Can we annotate multi-page PDF documents?', answer: 'Yes. Multi-page brand guidelines, brochures, and pitch decks can be annotated page by page.' },
      { question: 'Does ParroDash support side-by-side version comparison?', answer: 'Yes. You can view Version 1 and Version 2 side by side with visual diff highlights.' },
    ],
  },
  'hr': {
    slug: 'hr',
    type: 'team',
    title: 'ParroDash for People & HR Teams',
    kicker: 'People Operations',
    tagline: 'Onboard employees, manage leave, track attendance, and run payroll in one unified workspace.',
    heroDescription:
      'Say goodbye to juggling four disconnected HR tools. ParroDash brings employee directories, PTO approvals, geo-verified time tracking, and automated payroll runs into the core work system.',
    stats: [
      { value: '75%', label: 'Faster employee onboarding checklist completion' },
      { value: '100%', label: 'Compliance with PTO and overtime regulations' },
      { value: 'Zero', label: 'CSV exports required to run payroll' },
    ],
    painsAndGains: [
      { problem: 'Managing onboarding checklists in one app and payroll in another.', solution: 'Unified people platform where new hires get automated tasks and payroll records simultaneously.' },
      { problem: 'Endless back-and-forth emails asking "how much PTO do I have left?"', solution: 'Self-service employee portal with live vacation accruals and projected balances.' },
      { problem: 'Timesheet errors causing payroll recalculation delays every month.', solution: 'Automated attendance tracking feeding directly into pre-calculated pay batches.' },
    ],
    featuredFeatures: [
      { title: 'HR Management Suite', description: 'Digital employee records, compliance vaults, and dynamic org charts.', slug: 'hr-management' },
      { title: 'Payroll Automation', description: 'Direct deposit, gross-to-net tax calculations, and 1099 filings.', slug: 'payroll' },
      { title: 'Leave & PTO Management', description: 'Custom policy accruals, clash detection, and calendar sync.', slug: 'leave-management' },
    ],
    workflows: [
      { step: '01', title: 'Onboard New Hire', description: 'Automated task bundles assigned to IT, hiring manager, and employee on day one.' },
      { step: '02', title: 'Daily Presence & PTO', description: 'Employees punch time, request vacation, and view holiday calendars.' },
      { step: '03', title: 'Run Payroll', description: 'Review pre-calculated timesheet hours and approve direct deposits in minutes.' },
    ],
    faqs: [
      { question: 'Can we keep confidential HR documents private from managers?', answer: 'Yes. Granular permissions ensure salaries, medical notes, and background checks remain strictly private.' },
      { question: 'Does ParroDash support international remote teams?', answer: 'Yes. We support localized holiday calendars, leave policies, and international contractor payouts.' },
    ],
  },
  'sales': {
    slug: 'sales',
    type: 'team',
    title: 'ParroDash for Sales & Revenue Teams',
    kicker: 'Revenue Operations',
    tagline: 'Track deals, manage accounts, automate follow-ups, and hand off closed deals to delivery.',
    heroDescription:
      'Close deals faster and eliminate the friction between signing a contract and delivering the work. ParroDash CRM connects pipelines directly to client onboarding projects.',
    stats: [
      { value: '3x', label: 'Faster client onboarding after contract signature' },
      { value: '360°', label: 'Visibility into client communication and deliverables' },
      { value: '25%', label: 'Increase in deal pipeline velocity' },
    ],
    painsAndGains: [
      { problem: 'Sales promises get lost during the handoff to customer onboarding.', solution: 'Winning a deal automatically spins up the onboarding project with all deal notes attached.' },
      { problem: 'Reps wasting hours manually logging calls and updating CRM stages.', solution: 'Parro AI summarizes email threads and updates deal values automatically.' },
      { problem: 'No visibility for account managers on whether clients are satisfied.', solution: 'Unified client 360 showing active support tickets and project delivery status.' },
    ],
    featuredFeatures: [
      { title: 'Client CRM & Pipelines', description: 'Visual deal stages with win probabilities and revenue forecasting.', slug: 'crm' },
      { title: 'Automated Workflows', description: 'Auto-create onboarding tasks when a deal moves to Closed-Won.', slug: 'automations' },
      { title: 'Guest Client Portals', description: 'Share project progress and deliverable sign-offs with key clients.', slug: 'crm' },
    ],
    workflows: [
      { step: '01', title: 'Lead Capture', description: 'Inbound requests from web forms auto-populate the sales pipeline.' },
      { step: '02', title: 'Opportunity Stage', description: 'Reps log demo notes, send proposals, and track stage progression.' },
      { step: '03', title: 'Closed-Won Handoff', description: 'Contract signature triggers project kickoff and customer success assignment.' },
    ],
    faqs: [
      { question: 'Can we sync emails with Gmail and Outlook?', answer: 'Yes. ParroDash CRM includes two-way email sync, logging email interactions directly to contact timelines.' },
      { question: 'Can we customize deal stages for our sales cycle?', answer: 'Yes. Create custom pipelines for inbound leads, enterprise accounts, renewals, and partner channels.' },
    ],
  },
  'operations': {
    slug: 'operations',
    type: 'team',
    title: 'ParroDash for Operations & PMO Teams',
    kicker: 'Operational Excellence',
    tagline: 'Standardize standard operating procedures, track enterprise portfolio health, and balance resources.',
    heroDescription:
      'Transform operational chaos into predictable execution. Build standardized workspace templates, monitor portfolio health across dozens of teams, and automate repetitive handoffs.',
    stats: [
      { value: '100%', label: 'Adoption of standardized company SOPs' },
      { value: '40%', label: 'Reduction in operational administrative overhead' },
      { value: 'Real-Time', label: 'Executive portfolio health monitoring' },
    ],
    painsAndGains: [
      { problem: 'Every department using different tools and inconsistent naming conventions.', solution: 'Standardized operational blueprint templates and shared global custom fields.' },
      { problem: 'PMO teams spending days compiling manual status decks for executives.', solution: 'Live portfolio dashboard rollups aggregating milestone progress across all business units.' },
      { problem: 'Bottlenecks hidden until critical launch deadlines are missed.', solution: 'Automated critical path and slack time calculations that highlight risks early.' },
    ],
    featuredFeatures: [
      { title: 'Workspace Dashboards', description: 'Multi-project rollups, burndown charts, and financial budget tracking.', slug: 'dashboards' },
      { title: 'Workflow Automations', description: 'Enforce standard stage gates and compliance checks across all projects.', slug: 'automations' },
      { title: 'Resource Capacity', description: 'Forecast upcoming bandwidth constraints across all functional teams.', slug: 'workload-management' },
    ],
    workflows: [
      { step: '01', title: 'Deploy SOP Template', description: 'Spin up new initiatives with pre-configured tasks, views, and automations.' },
      { step: '02', title: 'Monitor Execution', description: 'Track cross-departmental dependencies and burn rates on the executive dashboard.' },
      { step: '03', title: 'Refine & Scale', description: 'Analyze cycle times to continuously improve company-wide operating cadences.' },
    ],
    faqs: [
      { question: 'Can we create locked workspace templates for departments?', answer: 'Yes. PMO teams can publish approved templates that junior staff can instantiate with one click.' },
      { question: 'Can we enforce mandatory task fields for compliance?', answer: 'Yes. You can require specific fields (such as Risk Assessment or Budget Approval) before a task can advance.' },
    ],
  },
  'leadership': {
    slug: 'leadership',
    type: 'team',
    title: 'ParroDash for Executive Leadership',
    kicker: 'Executive Visibility',
    tagline: 'Real-time company health, strategic OKRs, portfolio rollups, and zero status-meeting friction.',
    heroDescription:
      'Gain unfiltered visibility into company execution. Align strategic OKRs with daily sprint tasks, track overall gross margins, and eliminate hours of slide-deck preparation.',
    stats: [
      { value: '360°', label: 'Visibility across all business units' },
      { value: '5 hrs', label: 'Saved per executive each week on status checks' },
      { value: '100%', label: 'Alignment between high-level OKRs and daily tasks' },
    ],
    painsAndGains: [
      { problem: 'Executives waiting for quarterly reviews to discover delayed initiatives.', solution: 'Live portfolio dashboards showing real-time milestone delivery and budget burn rates.' },
      { problem: 'Strategic company goals disconnected from daily employee work.', solution: 'Hierarchical OKRs where daily tasks roll up directly into key company results.' },
      { problem: 'Massive software bills from dozens of redundant subscriptions.', solution: 'Consolidate 6+ separate SaaS tools into one unified business operating platform.' },
    ],
    featuredFeatures: [
      { title: 'Executive Dashboards', description: 'High-level KPI scorecards, delivery velocity, and financial metrics.', slug: 'dashboards' },
      { title: 'Reporting & Analytics', description: 'Automated Monday morning digests sent directly to executive email.', slug: 'reporting' },
      { title: 'Security & Governance', description: 'Enterprise SSO, comprehensive audit trails, and strict role permissions.', slug: 'approvals' },
    ],
    workflows: [
      { step: '01', title: 'Set Strategic OKRs', description: 'Define company annual and quarterly objectives with measurable targets.' },
      { step: '02', title: 'Cascade to Teams', description: 'Department leaders link their sprint projects and deliverables directly to OKRs.' },
      { step: '03', title: 'Track Real-Time Progress', description: 'View dynamic rollups showing progress percentage without scheduling status meetings.' },
    ],
    faqs: [
      { question: 'Can executives access high-level views on mobile?', answer: 'Yes. ParroDash iOS and Android apps provide fast executive summary dashboards on the go.' },
      { question: 'How much money does ParroDash save on software licenses?', answer: 'By replacing separate tools for tasks, chat, HR, time tracking, and CRM, companies typically save 40-60% on SaaS spend.' },
    ],
  },
  'startups': {
    slug: 'startups',
    type: 'team',
    title: 'ParroDash for Fast-Growing Startups',
    kicker: 'Startup Speed',
    tagline: 'The lean, all-in-one operating system that grows with your company from seed to Series A.',
    heroDescription:
      'Do not waste precious seed runway on 10 different subscription tools. ParroDash gives early teams everything they need—product roadmaps, developer sprints, hiring boards, and team chat—in one fast platform.',
    stats: [
      { value: '$15k+', label: 'Average annual savings on SaaS licenses' },
      { value: 'Day 1', label: 'Set up your entire company operating system' },
      { value: 'Zero', label: 'Data migration needed as you scale headcount' },
    ],
    painsAndGains: [
      { problem: 'Paying thousands of dollars per month for a messy patchwork of single-purpose apps.', solution: 'A single, cost-effective platform for roadmaps, hiring, tasks, docs, and communication.' },
      { problem: 'Onboarding early hires takes days of setting up permissions across 12 different tools.', solution: 'Invite new hires once and grant instant access to their relevant projects and docs.' },
      { problem: 'Founders losing hours organizing work instead of talking to customers.', solution: 'Parro AI automatically decomposes product ideas into actionable sprint checklists.' },
    ],
    featuredFeatures: [
      { title: 'Free Tier to Start', description: 'Generous Free Forever plan for early founders and small core teams.', slug: 'project-management' },
      { title: 'All-in-One Breadth', description: 'Tasks, docs, employee profiles, and CRM in a single tab.', slug: 'task-management' },
      { title: 'Parro AI Copilot', description: 'Draft investor updates, pitch deck outlines, and sprint backlogs instantly.', slug: 'ai' },
    ],
    workflows: [
      { step: '01', title: 'Sign Up Free', description: 'Launch your workspace in 30 seconds with no credit card required.' },
      { step: '02', title: 'Pick Starter Template', description: 'Select the Startup Operating System template with pre-built roadmaps and hiring boards.' },
      { step: '03', title: 'Scale Headcount', description: 'As you raise funding, turn on HR and payroll seamlessly without migrating data.' },
    ],
    faqs: [
      { question: 'Is ParroDash really free for early startups?', answer: 'Yes. Our Free Forever tier supports up to 5 members with unlimited tasks, boards, and team chat.' },
      { question: 'Do you offer a startup discount program?', answer: 'Yes. Qualified early-stage venture-backed and bootstrapped startups can apply for up to $5,000 in ParroDash credits.' },
    ],
  },

  // BY INDUSTRY
  'agencies': {
    slug: 'agencies',
    type: 'industry',
    title: 'ParroDash for Creative & Digital Agencies',
    kicker: 'Agency Operations',
    tagline: 'Manage client retainers, billable hours, creative proofs, and white-labeled client portals.',
    heroDescription:
      'Deliver client work on time and protect your profit margins. Track billable hours, collaborate with clients in branded portals, and eliminate endless revision rounds with pinpoint visual proofing.',
    stats: [
      { value: '28%', label: 'Increase in agency gross profit margins' },
      { value: '100%', label: 'Branded client portals with custom domain' },
      { value: '4x', label: 'Faster client sign-off on design revisions' },
    ],
    painsAndGains: [
      { problem: 'Scope creep eating into agency project profitability.', solution: 'Real-time budget burn rate indicators and task-level hour estimates.' },
      { problem: 'Clients emailing vague feedback like "tweak the header".', solution: 'Pinpoint visual pins dropped directly on design comps, PDFs, and video frames.' },
      { problem: 'Managing client communications across messy email threads.', solution: 'Dedicated client guest portals where clients review deliverables and approve milestones.' },
    ],
    featuredFeatures: [
      { title: 'Client CRM & Portals', description: 'Manage accounts, deals, retainers, and guest collaboration.', slug: 'crm' },
      { title: 'Time Tracking & Billing', description: 'Capture billable hours and sync directly with project budgets.', slug: 'time-tracking' },
      { title: 'Creative Studio', description: 'Precision markup and frame-by-frame video proofing.', slug: 'creative-studio' },
    ],
    workflows: [
      { step: '01', title: 'Scope & Retainer', description: 'Create project with billable hourly budget and milestones.' },
      { step: '02', title: 'Collaborate & Track', description: 'Designers log billable time while clients review drafts in their portal.' },
      { step: '03', title: 'Deliver & Invoice', description: 'Clients approve final deliverable and timesheet hours feed into billing.' },
    ],
    faqs: [
      { question: 'Can clients see internal team chatter or profit margins?', answer: 'Never. Guest client roles are strictly restricted to public milestone cards and approved deliverable files.' },
      { question: 'Can we apply our agency logo and custom domain to the client portal?', answer: 'Yes. Business and Enterprise plans include full white-labeling with custom subdomains and branding.' },
    ],
  },
  'software': {
    slug: 'software',
    type: 'industry',
    title: 'ParroDash for Software & Technology Companies',
    kicker: 'Software Development',
    tagline: 'Agile sprints, automated CI/CD release gates, bug triage, and cross-team roadmap delivery.',
    heroDescription:
      'Unite developers, designers, QA engineers, and product managers in one platform. Manage backlogs, automate Git PR status handoffs, and maintain technical documentation beside your code.',
    stats: [
      { value: '45%', label: 'Faster time to market on major releases' },
      { value: 'Zero', label: 'Stale documentation with verified wiki pages' },
      { value: '100%', label: 'Traceability from customer request to deployed PR' },
    ],
    painsAndGains: [
      { problem: 'Engineers bogged down updating tickets in bloated legacy trackers.', solution: 'Fast, keyboard-driven interface with instant filters, shortcuts, and GitHub sync.' },
      { problem: 'QA teams disconnected from developer bug fixes.', solution: 'Automated state triggers that notify QA engineers the moment a PR merges.' },
      { problem: 'Disconnect between customer bug reports and sprint priority.', solution: 'Inbound bug intake forms feeding directly into prioritized engineering backlogs.' },
    ],
    featuredFeatures: [
      { title: 'Gantt & Roadmaps', description: 'High-level multi-quarter release timelines with dependency tracking.', slug: 'gantt' },
      { title: 'Kanban Boards', description: 'Agile sprint boards with story point estimation and WIP limits.', slug: 'kanban-boards' },
      { title: 'Autonomous AI Agents', description: 'Self-triage incoming bug reports and summarize sprint retros.', slug: 'ai' },
    ],
    workflows: [
      { step: '01', title: 'Roadmap & PRD', description: 'Product managers draft specs in collaborative docs linked to epics.' },
      { step: '02', title: 'Sprint Execution', description: 'Engineers pick up tasks; branch commits sync automatically.' },
      { step: '03', title: 'Release Gate & QA', description: 'QA validates builds and triggers automated release notes.' },
    ],
    faqs: [
      { question: 'Can we link pull requests directly to tasks?', answer: 'Yes. Mentioning the task ID in your Git commit or branch name automatically links the pull request.' },
      { question: 'Does ParroDash support custom issue types and priority matrixes?', answer: 'Yes. You can define custom issue schemas with severity, reproduction steps, and platform fields.' },
    ],
  },
  'education': {
    slug: 'education',
    type: 'industry',
    title: 'ParroDash for Education & Universities',
    kicker: 'Academic Administration',
    tagline: 'Curriculum planning, faculty coordination, department budgets, and student project management.',
    heroDescription:
      'Coordinate academic departments, research labs, and institutional initiatives without administrative friction. Plan course schedules, manage faculty leave, and collaborate on grant proposals.',
    stats: [
      { value: '50%', label: 'Reduction in departmental email coordination' },
      { value: '100%', label: 'Audit compliance on grant fund allocation' },
      { value: 'Edu Discount', label: 'Special pricing for verified institutions' },
    ],
    painsAndGains: [
      { problem: 'Siloed academic departments operating on outdated paper processes.', solution: 'Unified university workspace with shared calendar grids and document vaults.' },
      { problem: 'Complex faculty leave tracking across academic terms.', solution: 'Custom academic leave policies accounting for sabbaticals and term schedules.' },
      { problem: 'Research grant deliverables slipping through the cracks.', solution: 'Milestone tracking with automated compliance checklists and budget monitors.' },
    ],
    featuredFeatures: [
      { title: 'Docs & Research Wikis', description: 'Collaborative writing for grant proposals and curriculum specifications.', slug: 'docs' },
      { title: 'HR & Faculty Leave', description: 'Manage academic contracts, sabbaticals, and department staffing.', slug: 'hr-management' },
      { title: 'Calendar & Scheduling', description: 'Multi-term event calendars and exam scheduling coordination.', slug: 'calendar' },
    ],
    workflows: [
      { step: '01', title: 'Curriculum Plan', description: 'Draft semester milestones and map required departmental resources.' },
      { step: '02', title: 'Faculty Assignment', description: 'Assign course modules and verify teaching load across faculty.' },
      { step: '03', title: 'Term Review', description: 'Archive past semester records and roll forward course templates.' },
    ],
    faqs: [
      { question: 'Do you offer educational discounts for schools and universities?', answer: 'Yes. Accredited educational institutions and non-profits receive a 50% discount on Pro and Business tiers.' },
      { question: 'Can students use ParroDash for group projects?', answer: 'Yes. Instructors can set up student project workspaces with restricted view-only or editor permissions.' },
    ],
  },
  'consulting': {
    slug: 'consulting',
    type: 'industry',
    title: 'ParroDash for Management Consulting',
    kicker: 'Consulting Practice OS',
    tagline: 'Deliver high-impact client engagements, manage stakeholder deliverables, and optimize partner utilization.',
    heroDescription:
      'Keep strategic client engagements on track and protect realization rates. Track consultant staffing across engagements, coordinate slide deck production, and share deliverables securely.',
    stats: [
      { value: '94%', label: 'On-time delivery of client engagement milestones' },
      { value: 'Real-Time', label: 'Consultant staffing utilization metrics' },
      { value: 'Bank-Grade', label: 'Security for sensitive client advisory documents' },
    ],
    painsAndGains: [
      { problem: 'Consultants double-booked across competing client proposals.', solution: 'Cross-engagement workload heatmaps showing true partner and associate capacity.' },
      { problem: 'Version chaos when editing confidential client decks and financial models.', solution: 'Secure document vaults with version comparison and immutable audit histories.' },
      { problem: 'Delayed sign-offs on engagement phase milestones.', solution: 'Structured approval sequences with electronic signature verification.' },
    ],
    featuredFeatures: [
      { title: 'Workload & Capacity', description: 'Forecast associate availability and balance project allocations.', slug: 'workload-management' },
      { title: 'Time Tracking & Expenses', description: 'Log engagement hours and billable travel expenses seamlessly.', slug: 'time-tracking' },
      { title: 'Client Approvals', description: 'Formal phase sign-offs and executive milestone acknowledgments.', slug: 'approvals' },
    ],
    workflows: [
      { step: '01', title: 'Engagement Kickoff', description: 'Deploy standardized consulting project template with phase milestones.' },
      { step: '02', title: 'Deliver Workstreams', description: 'Coordinate workstreams with daily task checklists and shared doc memos.' },
      { step: '03', title: 'Executive Presentation', description: 'Export milestone summary reports and client realization metrics.' },
    ],
    faqs: [
      { question: 'Can we sign a custom Business Associate Agreement (BAA) or DPA?', answer: 'Yes. Enterprise consulting clients can execute custom DPAs, security riders, and BAAs.' },
      { question: 'Can client stakeholders access engagement dashboards without seeing billable rates?', answer: 'Yes. Role permissions strictly hide consultant billing and cost rates from client guest viewers.' },
    ],
  },
  'ecommerce': {
    slug: 'ecommerce',
    type: 'industry',
    title: 'ParroDash for E-Commerce & DTC Brands',
    kicker: 'Retail & DTC Operations',
    tagline: 'Coordinate product drops, supply chain timelines, digital ad creative, and seasonal promotions.',
    heroDescription:
      'Launch new collections on time without supply chain chaos. Connect product photography, packaging design, influencer campaigns, and inventory arrival dates in one calendar.',
    stats: [
      { value: '100%', label: 'On-time seasonal collection launches' },
      { value: '45%', label: 'Faster creative turnaround on ad variations' },
      { value: 'Zero', label: 'Missed supplier manufacturing deadlines' },
    ],
    painsAndGains: [
      { problem: 'Marketing preparing campaigns before manufacturing has shipped inventory.', solution: 'Gantt schedules linking sample approvals and freight arrival to ad launch dates.' },
      { problem: 'Managing hundreds of TikTok and Instagram ad iterations in chaotic folders.', solution: 'Creative studio proofing with visual feedback pins on video cuts and packaging.' },
      { problem: 'Customer service tickets disconnected from supply chain delays.', solution: 'Unified workspace connecting support teams with warehouse operations updates.' },
    ],
    featuredFeatures: [
      { title: 'Gantt Timelines', description: 'Map factory production, customs clearance, and warehouse stocking.', slug: 'gantt' },
      { title: 'Creative Studio', description: 'Frame-accurate review of short-form video ads and lifestyle photos.', slug: 'creative-studio' },
      { title: 'Intake Forms', description: 'Influencer collaboration and product seeding request forms.', slug: 'forms' },
    ],
    workflows: [
      { step: '01', title: 'Collection Planning', description: 'Map product SKUs, packaging design, and supplier production milestones.' },
      { step: '02', title: 'Creative Production', description: 'Proof ad creatives, unboxing videos, and product detail page copy.' },
      { step: '03', title: 'Launch & Promo Day', description: 'Coordinate email blasts, paid ad activation, and live inventory sync.' },
    ],
    faqs: [
      { question: 'Can we attach high-resolution packaging CAD files and mockups?', answer: 'Yes. ParroDash supports file uploads up to 5GB per asset with fast cloud storage.' },
      { question: 'Can we track recurring promotional sales events?', answer: 'Yes. Set up recurring annual campaign templates for Black Friday, Cyber Monday, and Summer Sales.' },
    ],
  },
  'professional-services': {
    slug: 'professional-services',
    type: 'industry',
    title: 'ParroDash for Professional Services',
    kicker: 'Services Delivery',
    tagline: 'Fixed-fee milestones, client communications, contract approvals, and timesheets.',
    heroDescription:
      'Run a more profitable professional services firm. Plan client deliverables, track realization rates against fixed-fee budgets, and provide clients with seamless, transparent updates.',
    stats: [
      { value: '32%', label: 'Improvement in project profit margins' },
      { value: '100%', label: 'Contract and deliverable audit compliance' },
      { value: '1-Platform', label: 'Replacing disparate CRM, time tracking, and PM tools' },
    ],
    painsAndGains: [
      { problem: 'Fixed-fee projects going over budget due to uncaptured scope expansion.', solution: 'Real-time project budget caps and scope change approval sequences.' },
      { problem: 'Endless status inquiry phone calls from demanding corporate clients.', solution: 'Self-service client portal showing real-time milestone progress and next steps.' },
      { problem: 'Timesheets submitted weeks late leading to delayed client invoices.', solution: 'Automated Friday afternoon timesheet reminders and 1-click approvals.' },
    ],
    featuredFeatures: [
      { title: 'Client CRM & Portals', description: 'Manage accounts, SOW deliverables, and client interactions.', slug: 'crm' },
      { title: 'Time Tracking & Timesheets', description: 'Log billable hours against specific SOW work packages.', slug: 'time-tracking' },
      { title: 'Workload & Capacity', description: 'Balance senior and junior staff billable utilization targets.', slug: 'workload-management' },
    ],
    workflows: [
      { step: '01', title: 'Contract Execution', description: 'SOW signature generates project structure with defined billing milestones.' },
      { step: '02', title: 'Milestone Execution', description: 'Staff log hours against tasks while managers monitor budget burn rates.' },
      { step: '03', title: 'Formal Deliverable Sign-Off', description: 'Client approves milestone in their portal; invoice generates automatically.' },
    ],
    faqs: [
      { question: 'Can we set up fixed-fee milestone billing as well as hourly T&M?', answer: 'Yes. ParroDash supports fixed-fee milestones, time-and-materials, and monthly retainer arrangements.' },
      { question: 'Is client data isolated for enterprise confidentiality?', answer: 'Yes. Granular workspace access controls guarantee strict separation between competing client accounts.' },
    ],
  },
};
