/**
 * Content and interactive demonstration data for Parro AI pages.
 * Note: All AI interactions on the marketing site are clearly marked as interactive previews
 * and simulated demonstration models.
 */

export interface AiPageDetail {
  slug: string;
  title: string;
  kicker: string;
  tagline: string;
  heroDescription: string;
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
}

export const AI_PAGES_DATA: Record<string, AiPageDetail> = {
  'ai': {
    slug: 'ai',
    title: 'Parro AI Workspace',
    kicker: 'Context-Aware Intelligence',
    tagline: 'The first AI that actually knows your projects, people, docs, and deadlines.',
    heroDescription:
      'Unlike generic chat tools, Parro AI sits directly atop your work graph. Ask it to write sprint briefs, triage bug backlogs, summarize missed meetings, or detect schedule risks before they happen.',
    stats: [
      { value: '100%', label: 'Context-aware of your tasks and docs' },
      { value: '3.2 hrs', label: 'Saved per employee every week' },
      { value: 'Zero', label: 'Customer data used to train foundation models' },
    ],
    keyCapabilities: [
      {
        title: 'Deep Graph Context Awareness',
        description: 'Parro AI understands relationships between tasks, docs, assignees, client deals, and deadlines across your workspace.',
        bullets: ['Queries cross-project dependencies without hallucination', 'Accesses past sprint retrospectives and decision logs', 'Strict role-based access checks on every prompt'],
      },
      {
        title: 'Autonomous Multi-Agent Architecture',
        description: 'Deploy specialized agents that work in the background to triage tickets, draft release notes, and check code reviews.',
        bullets: ['Bug Triage Agent', 'Daily Standup Synthesizer', 'Compliance & Policy Auditor'],
      },
      {
        title: 'Enterprise Data Privacy & Security',
        description: 'Your company data is never used to train public LLM models. All prompts run in encrypted zero-retention private enclaves.',
        bullets: ['SOC 2 Type II compliant AI processing', 'Custom fine-tuned company prompts', 'Bring-your-own-key (BYOK) enterprise support'],
      },
    ],
    workflows: [
      { step: '01', title: 'Connect Your Workspace', description: 'Parro AI indexes your projects, tasks, chat channels, and docs with zero configuration.' },
      { step: '02', title: 'Ask in Plain English', description: 'Ask questions like "What are the top 3 risks to the Q3 Mobile launch?" or "Draft the sprint PRD".' },
      { step: '03', title: 'Execute with 1-Click', description: 'Review AI suggestions and create tasks, update timelines, or post announcements with one tap.' },
    ],
    faqs: [
      { question: 'Is my data used to train AI models?', answer: 'Never. Parro AI has strict agreements with foundation model providers ensuring zero data retention and zero training on customer data.' },
      { question: 'Does Parro AI respect user permissions?', answer: 'Yes. If a user does not have permission to view a private HR folder or executive financial doc, Parro AI will never disclose that information to them.' },
      { question: 'How is this different from ChatGPT?', answer: 'ChatGPT knows the public web but knows nothing about your company. Parro AI has real-time context on your active tasks, deadlines, team availability, and docs.' },
    ],
  },
  'assistant': {
    slug: 'assistant',
    title: 'AI Workspace Assistant',
    kicker: 'Everyday Copilot',
    tagline: 'Your personal chief of staff for drafting, planning, and organizing work.',
    heroDescription:
      'Summon the Parro AI Assistant anywhere with Cmd+K. Ask it to clean up messy meeting notes into structured user stories, summarize long Slack channels, or extract action items from client emails.',
    stats: [
      { value: 'Cmd+K', label: 'Universal shortcut anywhere in ParroDash' },
      { value: 'Instant', label: 'Meeting notes to structured tasks' },
      { value: '24+', label: 'Languages supported natively' },
    ],
    keyCapabilities: [
      {
        title: 'Instant Task Generation from Raw Text',
        description: 'Paste unformatted customer notes or rough interview transcripts, and watch Parro AI extract actionable tasks with owners and due dates.',
        bullets: ['Detects implicit deadlines and priorities', 'Maps to existing custom fields', 'Suggests relevant tags automatically'],
      },
      {
        title: 'Thread & Channel Summaries',
        description: 'Returned from vacation? Get a concise 3-bullet summary of a 150-message chat thread in two seconds.',
        bullets: ['Highlights key decisions made', 'Identifies unresolved questions', 'Generates list of items needing your approval'],
      },
      {
        title: 'Writing & Voice Polish',
        description: 'Refine documentation, executive update emails, and customer proposals with tailored professional tones.',
        bullets: ['Change tone (Executive, Casual, Urgent)', 'Grammar and clarity enhancement', 'Automatic translation across 24 languages'],
      },
    ],
    workflows: [
      { step: '01', title: 'Summon Assistant', description: 'Press Cmd+K or tap the Parro AI icon on any page.' },
      { step: '02', title: 'Provide Prompt or Context', description: 'Type your request or highlight any text on your screen.' },
      { step: '03', title: 'Review & Insert', description: 'Accept generated output directly into your doc, task, or comment.' },
    ],
    faqs: [
      { question: 'Can the assistant create subtasks automatically?', answer: 'Yes. Asking "Decompose this project into a 4-week task checklist" generates nested subtasks with assigned roles.' },
      { question: 'Can I customize default assistant prompts for my company?', answer: 'Yes. Workspace admins can configure custom company prompt libraries for standard PRDs, marketing briefs, and support replies.' },
    ],
  },
  'agents': {
    slug: 'agents',
    title: 'Autonomous Work Agents',
    kicker: 'Self-Driving Operations',
    tagline: 'Specialized AI agents that handle repetitive operational chores while you sleep.',
    heroDescription:
      'Move beyond passive chat. Parro Agents proactively monitor your workspace, triage incoming customer tickets, remind owners of stalled tasks, and draft weekly project retrospectives.',
    stats: [
      { value: '5 Agents', label: 'Pre-built and ready to deploy' },
      { value: '24/7', label: 'Continuous workspace monitoring' },
      { value: 'Human-in-the-Loop', label: 'Full approval controls before actions take effect' },
    ],
    keyCapabilities: [
      {
        title: 'Bug & Ticket Triage Agent',
        description: 'Analyzes incoming bug reports, checks for duplicates, extracts device logs, and assigns to the right developer.',
        bullets: ['Identifies duplicate reports automatically', 'Estimates bug severity based on error stack traces', 'Assigns to the developer with the most relevant Git commits'],
      },
      {
        title: 'Sprint Retrospective Agent',
        description: 'Aggregates sprint velocity, burndown data, and team feedback into a comprehensive retrospective draft before your sprint review.',
        bullets: ['Calculates planned vs completed story points', 'Identifies recurring bottleneck columns', 'Suggests 3 actionable improvements for next sprint'],
      },
      {
        title: 'Compliance & Policy Sentinel',
        description: 'Scans public channels and tasks to ensure sensitive customer PII or API credentials are not exposed accidentally.',
        bullets: ['Immediate redaction of detected secrets or card numbers', 'Alerts compliance officer with audit metadata', 'Enforces corporate naming conventions'],
      },
    ],
    workflows: [
      { step: '01', title: 'Select an Agent', description: 'Choose from Triage, Retro, Follow-Up, or Compliance agents.' },
      { step: '02', title: 'Set Guardrails', description: 'Define what the agent can do automatically vs what requires human sign-off.' },
      { step: '03', title: 'Deploy & Monitor', description: 'Inspect agent activity logs in real-time from the agent command center.' },
    ],
    faqs: [
      { question: 'Can agents take destructive actions on their own?', answer: 'No. By default, all Parro Agents operate in "Suggested" mode requiring human approval, and they can never delete data or alter security permissions.' },
      { question: 'Can we build custom agents with custom rules?', answer: 'Yes. Enterprise plans include the Parro Agent Studio to define custom triggers, prompts, tools, and actions.' },
    ],
  },
  'automation': {
    slug: 'automation',
    title: 'Predictive Automations',
    kicker: 'Smart Workflow Intelligence',
    tagline: 'AI that analyzes your daily patterns and suggests custom automations to eliminate friction.',
    heroDescription:
      'Instead of building complex automation recipes by hand, Parro AI observes repeated manual actions and recommends 1-click recipes that save your team hours every week.',
    stats: [
      { value: '1-Click', label: 'To deploy suggested smart workflows' },
      { value: 'Pattern-Based', label: 'Learns from real team operations' },
      { value: 'Zero Code', label: 'Natural language recipe creator' },
    ],
    keyCapabilities: [
      {
        title: 'Natural Language Automation Builder',
        description: 'Simply type "When a design task is marked done, notify the marketing channel and assign Sarah to QA". Parro AI converts it into a reliable recipe.',
        bullets: ['Translates plain text into When/If/Then logic', 'Validates field mappings automatically', 'Tests recipe with sandbox data before activation'],
      },
      {
        title: 'Proactive Workflow Recommendations',
        description: 'Parro AI detects when managers repeatedly reassign tasks or ping colleagues for status, and suggests an automated solution.',
        bullets: ['Identifies repetitive manual status updates', 'Flags recurring deadline slippages across sprints', '1-click "Automate This" recommendations'],
      },
      {
        title: 'Anomaly & Deadlock Detection',
        description: 'Detects circular dependencies or tasks that have sat in "In Review" for 10+ days and triggers smart escalations.',
        bullets: ['Automatic notification to project lead', 'Slack alert to assigned reviewer', 'Historical resolution time comparisons'],
      },
    ],
    workflows: [
      { step: '01', title: 'Describe Desired Flow', description: 'Type your automation idea in conversational English.' },
      { step: '02', title: 'Preview Generated Recipe', description: 'Inspect the visual trigger, filter conditions, and resulting actions.' },
      { step: '03', title: 'Enable with 1-Click', description: 'Activate the recipe across all or selected projects.' },
    ],
    faqs: [
      { question: 'Can I edit the generated automation recipe later?', answer: 'Yes. All recipes generated by Parro AI can be fine-tuned in the visual automation editor at any time.' },
      { question: 'Does Parro AI create infinite automation loops?', answer: 'No. Built-in rate limiting and circular trigger detection prevent loops from executing more than once.' },
    ],
  },
  'workspace-search': {
    slug: 'workspace-search',
    title: 'Universal Workspace Search',
    kicker: 'Instant Knowledge Retrieval',
    tagline: 'Search across tasks, comments, docs, code, and chat with semantic understanding.',
    heroDescription:
      'Forget exact keywords. Ask Parro Search conceptual questions like "What was our agreed refund policy for enterprise pilots?" and get the exact paragraph and task link immediately.',
    stats: [
      { value: '< 100ms', label: 'Vector search retrieval latency' },
      { value: 'Semantic', label: 'Finds answers by meaning, not just exact keywords' },
      { value: '100%', label: 'Permission-trimmed search results' },
    ],
    keyCapabilities: [
      {
        title: 'Hybrid Semantic & Keyword Search',
        description: 'Combines full-text indexing with dense vector embeddings to return the most accurate results even with typos or synonyms.',
        bullets: ['Instant results as you type', 'Filters by author, project, date, file type, and channel', 'Snippet highlights showing exact context'],
      },
      {
        title: 'Synthesized Answer Box',
        description: 'Rather than just listing 10 blue links, Parro Search synthesizes an authoritative answer with clickable source citations.',
        bullets: ['Direct links to source tasks and docs', 'Displays last verified date of information', 'Indicates confidence score for findings'],
      },
      {
        title: 'External Tool Indexing',
        description: 'Optionally search across connected Google Drive files, Figma artboards, GitHub issues, and Slack channels in the same unified query.',
        bullets: ['Multi-app unified search results', 'Direct deep-links to external tools', 'Unified permissions governance'],
      },
    ],
    workflows: [
      { step: '01', title: 'Press Cmd+K', description: 'Open search anywhere across desktop, web, or mobile.' },
      { step: '02', title: 'Ask Any Question', description: 'Type natural questions or specific project codes.' },
      { step: '03', title: 'Open or Act', description: 'Jump directly to the relevant document section or take action.' },
    ],
    faqs: [
      { question: 'Can users see search results from confidential projects?', answer: 'No. Parro Search strictly filters results according to the user’s individual permissions before displaying any text.' },
      { question: 'How quickly are newly created docs indexed?', answer: 'All newly created or edited tasks and documents are indexed within 2 seconds.' },
    ],
  },
  'knowledge': {
    slug: 'knowledge',
    title: 'Knowledge Intelligence',
    kicker: 'Living Organizational Memory',
    tagline: 'Transform messy transcripts, scattered docs, and chat history into verified company knowledge.',
    heroDescription:
      'Stop losing institutional knowledge when employees depart. Parro Knowledge continuously organizes meeting notes, specs, and architectural decisions into an auto-updating company wiki.',
    stats: [
      { value: 'Zero', label: 'Orphaned or rotting documentation' },
      { value: 'Auto-Wiki', label: 'Converts discussions into permanent docs' },
      { value: '1-Click', label: 'Outdated document verification workflow' },
    ],
    keyCapabilities: [
      {
        title: 'Automated SOP & PRD Synthesis',
        description: 'Converts raw design feedback, Slack threads, and customer interviews into structured product requirement documents.',
        bullets: ['Standardized templates across departments', 'Auto-generated user journey diagrams', 'Requirement checklist verification'],
      },
      {
        title: 'Content Freshness Verification',
        description: 'Flags documentation that has not been updated in 90 days and pings the original author to verify or archive.',
        bullets: ['Outdated warning banners on stale pages', '1-click "Still Accurate" verification button', 'Archival history preservation'],
      },
      {
        title: 'Intelligent Knowledge Graph',
        description: 'Maps the connections between customer requests, product specs, engineering epics, and marketing launches.',
        bullets: ['Visual entity relationship graph', 'Discovers conflicting documentation across teams', 'Recommends related reading for new hires'],
      },
    ],
    workflows: [
      { step: '01', title: 'Capture Discussions', description: 'Meeting notes and channel threads are indexed automatically.' },
      { step: '02', title: 'Synthesize Specs', description: 'Parro Knowledge organizes key takeaways into living wiki pages.' },
      { step: '03', title: 'Maintain Freshness', description: 'Automated triggers alert authors when policies need annual review.' },
    ],
    faqs: [
      { question: 'Can we import our existing Notion or Confluence wiki?', answer: 'Yes. ParroDash provides lossless importers for Notion, Confluence, Google Docs, and Markdown directories.' },
      { question: 'Can we export the entire knowledge base for backups?', answer: 'Yes. Full workspace export is available in standardized Markdown and HTML formats.' },
    ],
  },
  'use-cases': {
    slug: 'use-cases',
    title: 'Parro AI Use Cases & Prompts',
    kicker: 'Practical Playbooks',
    tagline: 'Discover 100+ proven prompts and workflows across Product, Engineering, Marketing, and HR.',
    heroDescription:
      'Explore real-world examples of how high-velocity teams use Parro AI to write user stories, debug code, draft onboarding handbooks, and run automated sprint standups.',
    stats: [
      { value: '100+', label: 'Tested prompts across 8 departments' },
      { value: '3x', label: 'Faster time from idea to project kickoff' },
      { value: 'Free', label: 'Ready-to-use prompt templates included' },
    ],
    keyCapabilities: [
      {
        title: 'Product & Engineering Prompts',
        description: 'From turning user interviews into Jira-ready user stories to generating database schemas and test cases.',
        bullets: ['Gherkin syntax acceptance criteria generator', 'API endpoint specification writer', 'Release notes synthesizer from Git commits'],
      },
      {
        title: 'Marketing & Creative Prompts',
        description: 'Generate multi-channel launch calendars, creative ad briefs, email sequences, and SEO blog outlines in seconds.',
        bullets: ['Omnichannel campaign timeline planner', 'Social media snippet generator', 'Audience persona generator from CRM notes'],
      },
      {
        title: 'HR & People Operations Prompts',
        description: 'Draft job descriptions, compile interview scorecards, generate performance review frameworks, and summarize policy handbooks.',
        bullets: ['Role-specific interview rubrics', 'New hire 30-60-90 day roadmap generator', 'Company holiday announcement drafter'],
      },
    ],
    workflows: [
      { step: '01', title: 'Browse by Department', description: 'Filter use cases for Engineering, Marketing, Sales, or HR.' },
      { step: '02', title: 'Copy Prompt Template', description: 'Select a proven prompt with fill-in-the-blank variables.' },
      { step: '03', title: 'Execute in ParroDash', description: 'Run the prompt directly in your workspace with live project context.' },
    ],
    faqs: [
      { question: 'Can teams save custom prompt libraries for their organization?', answer: 'Yes. Workspace admins can save standard company prompts that appear in every team member’s Parro AI shortcut menu.' },
      { question: 'Are these prompts compatible with other models?', answer: 'While optimized for ParroDash’s context-aware engine, prompt templates can also be used with external LLMs.' },
    ],
  },
};
