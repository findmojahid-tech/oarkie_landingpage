import React, { useState } from 'react';
import {
  FolderKanban,
  CheckSquare,
  Users,
  Calendar,
  MessageSquare,
  Briefcase,
  Sparkles,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ProductMockup, MockupModuleType } from '../ui/ProductMockup';
import { Link } from 'react-router-dom';

interface ShowcaseTab {
  id: MockupModuleType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  kicker: string;
  headline: string;
  description: string;
  features: string[];
  linkTo: string;
}

const TABS: ShowcaseTab[] = [
  {
    id: 'projects',
    label: 'Projects',
    icon: FolderKanban,
    kicker: 'Strategic Delivery',
    headline: 'Multi-view projects with critical path baselines.',
    description: 'Switch between Gantt, Kanban, Table, and Timelines instantly. Track cross-team blockers before deadlines slip.',
    features: ['1-click critical path highlighting', 'Automated slack-time recalculation', 'Portfolio rollups for executives'],
    linkTo: '/features/project-management',
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: CheckSquare,
    kicker: 'Granular Accountability',
    headline: 'Turn complex milestones into clear daily execution.',
    description: 'Nested subtasks, customizable checklists, rich task comments, and priority matrix tags keep everyone aligned.',
    features: ['7 levels of nested subtasks', 'Custom field calculations & formulas', 'Direct GitHub and Slack sync'],
    linkTo: '/features/task-management',
  },
  {
    id: 'hr',
    label: 'HR & People',
    icon: Users,
    kicker: 'Unified People Operations',
    headline: 'Manage employees, leave, and payroll where work happens.',
    description: 'No more separate HR portals. Maintain digital employee files, approve PTO, and calculate gross-to-net payroll in one tab.',
    features: ['Geo-fenced mobile clock-in & kiosk', 'Automated PTO accruals and calendar sync', '50-state direct deposit payroll'],
    linkTo: '/features/hr-management',
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: Calendar,
    kicker: 'Unified Scheduling',
    headline: 'Two-way synced calendars with team availability.',
    description: 'Overlay project milestones directly onto approved employee leave and public holidays. Two-way Google and Outlook sync.',
    features: ['Two-way Google & Outlook sync', 'Multi-timezone overlap visualizer', 'Buffer time between focus blocks'],
    linkTo: '/features/calendar',
  },
  {
    id: 'chat',
    label: 'Chat & Huddles',
    icon: MessageSquare,
    kicker: 'In-Context Collaboration',
    headline: 'Conversations tied directly to tasks and docs.',
    description: 'Ditch fragmented Slack channels. Chat in project context and turn any decision into an assigned task with one click.',
    features: ['1-click message to task conversion', 'Lightweight audio screen huddles', 'White-labeled guest client channels'],
    linkTo: '/features/team-chat',
  },
  {
    id: 'crm',
    label: 'Client CRM',
    icon: Briefcase,
    kicker: 'Revenue Operations',
    headline: 'Close deals and immediately spin up client onboarding.',
    description: 'Connect sales pipelines directly to project delivery. Closed-won deals automatically trigger onboarding workspaces and guest portals.',
    features: ['Visual deal pipeline stages', 'White-labeled client guest portals', 'Contact email sync with Gmail & Outlook'],
    linkTo: '/features/crm',
  },
  {
    id: 'ai',
    label: 'Parro AI',
    icon: Sparkles,
    kicker: 'Workspace Intelligence',
    headline: 'The context-aware AI that knows your entire project graph.',
    features: ['Autonomous bug triage & retro agents', 'Zero customer data training', 'Natural language automation builder'],
    description: 'Ask Parro AI to synthesize PRDs, extract tasks from messy notes, or monitor deadlines proactively with zero privacy risk.',
    linkTo: '/ai',
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: LayoutDashboard,
    kicker: 'Command Center',
    headline: 'Real-time velocity, budget health, and team utilization.',
    description: 'Drag-and-drop 35+ widgets to build executive command centers. Get automated weekly email digests delivered to stakeholders.',
    features: ['35+ pre-built analytics widgets', 'Sub-100ms refresh latency', 'Scheduled PDF and Slack digests'],
    linkTo: '/features/dashboards',
  },
];

export const InteractiveProductShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<MockupModuleType>('projects');
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section className="py-24 bg-[#0D0D0F] text-white border-t border-b border-[#303034]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#A0A0A8]">
            <span>One Unified Operating Platform</span>
            <span>·</span>
            <span>Zero App Switching</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Every module you need. Perfectly interconnected.
          </h2>
          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Click across the core modules below to explore how ParroDash unifies work management, people operations,
            and artificial intelligence into one blazing-fast workspace.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div role="group" aria-label="Choose a product feature" className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-1.5 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#171719] border border-[#303034]">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white text-black shadow-md'
                      : 'text-[#A0A0A8] hover:text-white hover:bg-[#202025]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Detail Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-2xl bg-[#171719] border border-[#303034]">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-[11px] uppercase tracking-wider font-mono text-[#A0A0A8]">
              {activeTab.kicker}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {activeTab.headline}
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0A8] leading-relaxed">
              {activeTab.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <Link
              to={activeTab.linkTo}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
            >
              <span>Explore {activeTab.label} Feature</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* The Live Interactive Mockup Display */}
        <div className="relative">
          <ProductMockup module={activeTabId} interactive={true} />
        </div>

        {/* Feature Checkpoints for Active Tab */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {activeTab.features.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#171719] border border-[#303034] text-xs text-zinc-300"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
