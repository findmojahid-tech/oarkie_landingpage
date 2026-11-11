import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  Calendar,
  MessageSquare,
  Users,
  Search,
  Filter,
  ArrowUpRight,
  TrendingUp,
  AlertCircle,
  Send,
  Pin,
  Play,
  RotateCcw,
} from 'lucide-react';

export type MockupModuleType =
  | 'projects'
  | 'tasks'
  | 'dashboards'
  | 'hr'
  | 'calendar'
  | 'chat'
  | 'crm'
  | 'ai'
  | 'gantt'
  | 'kanban'
  | 'attendance'
  | 'payroll'
  | 'creative'
  | 'workload'
  | 'forms'
  | 'approvals'
  | 'timetracking'
  | 'employee'
  | 'leave'
  | 'reporting'
  | 'docs'
  | 'automation';

interface ProductMockupProps {
  module?: MockupModuleType;
  interactive?: boolean;
  className?: string;
}

export const ProductMockup: React.FC<ProductMockupProps> = ({
  module = 'projects',
  interactive = true,
  className = '',
}) => {
  // Interactive state for tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Architect critical path auto-calculation engine', status: 'In Progress', priority: 'Urgent', assignee: 'Alex R.', done: false, date: 'Nov 14' },
    { id: 2, title: 'Finalize HR 50-state tax deduction ruleset', status: 'In Review', priority: 'High', assignee: 'Elena M.', done: false, date: 'Nov 16' },
    { id: 3, title: 'Implement frame-accurate video proofing player', status: 'Done', priority: 'Medium', assignee: 'Dev K.', done: true, date: 'Nov 12' },
    { id: 4, title: 'Connect Supabase auth session token refresh', status: 'In Progress', priority: 'High', assignee: 'Sarah T.', done: false, date: 'Nov 18' },
    { id: 5, title: 'Design dark-monochrome executive dashboard widget', status: 'Backlog', priority: 'Low', assignee: 'Liam W.', done: false, date: 'Nov 20' },
  ]);

  // Interactive AI prompt simulation state
  const [aiPrompt, setAiPrompt] = useState('Create sprint tasks for Mobile App v3 checkout redesign');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const toggleTask = (id: number) => {
    if (!interactive) return;
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done, status: !t.done ? 'Done' : 'In Progress' } : t))
    );
  };

  const handleSimulateAi = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setAiResponse(null);
    setTimeout(() => {
      setAiResponse(
        'Parsed 3 actionable tasks from prompt:\n1. [UI] Design 1-click Apple Pay modal (Assign: Sarah T. · 5 pts)\n2. [API] Add Stripe idempotency keys for payment retries (Assign: Alex R. · 8 pts)\n3. [QA] Run cross-device card tokenization test suite (Assign: Elena M. · 3 pts)'
      );
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div
      className={`rounded-xl border border-[#303034] bg-[#0D0D0F] text-[#F7F7F8] shadow-2xl overflow-hidden font-sans text-xs select-none transition-all duration-300 ${className}`}
      data-testid="product-mockup"
    >
      {/* Top Application Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#171719] border-b border-[#303034]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E6E6E9]/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E6E6E9]/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E6E6E9]/20" />
          </div>
          <span className="text-[#777780] mx-2">|</span>
          <div className="flex items-center gap-1.5 text-[11px] text-[#A0A0A8]">
            <span className="font-semibold text-white">ParroDash Workspace</span>
            <span>/</span>
            <span className="capitalize">{module}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0D0D0F] border border-[#303034] text-[#777780] text-[11px] w-48">
            <Search className="w-3.5 h-3.5" />
            <span>Search workspace (⌘K)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-white text-black font-bold flex items-center justify-center text-[10px]">
              PD
            </span>
          </div>
        </div>
      </div>

      {/* Main Workspace Frame */}
      <div className="grid grid-cols-12 min-h-[460px]">
        {/* Left Workspace Sidebar */}
        <div className="hidden md:block col-span-3 lg:col-span-2 bg-[#121214] border-r border-[#303034] p-3 space-y-4 text-[11px]">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#777780] font-semibold mb-2 px-1">
              Core Workspace
            </div>
            <div className="space-y-0.5">
              {[
                { name: 'Projects', icon: 'FolderKanban', active: module === 'projects' || module === 'gantt' || module === 'kanban' },
                { name: 'Tasks & Inbox', icon: 'CheckSquare', active: module === 'tasks' },
                { name: 'Dashboards', icon: 'LayoutDashboard', active: module === 'dashboards' || module === 'reporting' },
                { name: 'HR & People', icon: 'Users', active: module === 'hr' || module === 'employee' || module === 'attendance' || module === 'leave' || module === 'payroll' },
                { name: 'Client CRM', icon: 'Briefcase', active: module === 'crm' },
                { name: 'Parro AI', icon: 'Sparkles', active: module === 'ai' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded transition-colors ${
                    item.active
                      ? 'bg-white text-black font-semibold'
                      : 'text-[#A0A0A8] hover:bg-[#1A1A1D] hover:text-white'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#777780] font-semibold mb-2 px-1">
              Active Sprints
            </div>
            <div className="space-y-1 text-[#A0A0A8]">
              <div className="flex items-center justify-between px-2 py-1 rounded bg-[#1A1A1D] text-white">
                <span className="truncate">Sprint 24 · Q4 Mobile</span>
                <span className="text-[10px] text-emerald-400 font-mono">82%</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded hover:bg-[#1A1A1D]/60">
                <span className="truncate">HRIS Integration</span>
                <span className="text-[10px] text-[#777780] font-mono">45%</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#303034] text-[10px] text-[#777780] px-1">
            <div className="flex items-center justify-between">
              <span>Sync Status</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live 60 FPS
              </span>
            </div>
          </div>
        </div>

        {/* Center / Right Content Canvas */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10 p-4 sm:p-6 overflow-x-auto bg-[#0D0D0F]">
          {/* Subheader controls */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#303034]">
            <div className="flex items-center gap-3">
              <h4 className="text-sm sm:text-base font-semibold text-white capitalize">
                {module === 'projects' && 'Q4 Cross-Functional Product Initiatives'}
                {module === 'tasks' && 'Active Sprint Backlog & Deliverables'}
                {module === 'dashboards' && 'Executive Velocity & Delivery Command Center'}
                {module === 'hr' && 'People Operations & Global Team Directory'}
                {module === 'calendar' && 'Company Delivery & Team Availability Schedule'}
                {module === 'chat' && '#proj-mobile-v3 In-Context Channel'}
                {module === 'crm' && 'Enterprise Revenue & Client Onboarding Pipeline'}
                {module === 'ai' && 'Parro AI Workspace Assistant & Agent Console'}
                {module === 'gantt' && 'Critical Path Milestone Timeline'}
                {module === 'kanban' && 'Sprint Delivery Kanban Board'}
                {module === 'attendance' && 'Live Attendance Clock & Job-Site Kiosk'}
                {module === 'payroll' && 'Bi-Weekly Direct Deposit Payroll Run'}
                {module === 'creative' && 'Creative Studio Proofing & Asset Markup'}
                {module === 'workload' && 'Team Capacity & Allocation Heatmap'}
                {module === 'forms' && 'Work Intake & Request Dispatcher'}
                {module === 'approvals' && 'Multi-Stage Governance & Audit Sign-Off'}
                {module === 'timetracking' && 'Timesheet Logging & Billable Hours'}
                {module === 'employee' && 'Team Directory & Skills Matrix'}
                {module === 'leave' && 'PTO Accrual & Leave Calendar'}
                {module === 'reporting' && 'Profitability & Cycle Time Analytics'}
                {module === 'docs' && 'Collaborative PRD & Engineering Wiki'}
                {module === 'automation' && 'Predictive Workflow Automations'}
              </h4>
              <span className="hidden sm:inline-block text-[10px] text-[#A0A0A8] bg-[#171719] px-2 py-0.5 rounded border border-[#303034]">
                Live Interactive Preview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-2.5 py-1 rounded bg-[#171719] border border-[#303034] text-[#A0A0A8] hover:text-white flex items-center gap-1 text-[11px]"
              >
                <Filter className="w-3 h-3" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* DYNAMIC MODULE DISPLAY */}
          {/* 1. Projects & Tasks List */}
          {(module === 'projects' || module === 'tasks') && (
            <div className="space-y-2">
              <div className="grid grid-cols-12 text-[10px] text-[#777780] uppercase tracking-wider pb-1 px-3 border-b border-[#303034]">
                <span className="col-span-6 sm:col-span-5">Task Item</span>
                <span className="col-span-2 hidden sm:block">Status</span>
                <span className="col-span-2 hidden sm:block">Priority</span>
                <span className="col-span-3 sm:col-span-2">Assignee</span>
                <span className="col-span-3 sm:col-span-1 text-right">Due</span>
              </div>
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`grid grid-cols-12 items-center p-2.5 sm:px-3 rounded border transition-all cursor-pointer ${
                    task.done
                      ? 'bg-[#121214]/60 border-[#303034]/40 opacity-60'
                      : 'bg-[#171719] border-[#303034] hover:border-[#4B4B52]'
                  }`}
                >
                  <div className="col-span-6 sm:col-span-5 flex items-center gap-2.5">
                    {task.done ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-[#777780] hover:text-white shrink-0" />
                    )}
                    <span className={`text-xs truncate ${task.done ? 'line-through text-[#777780]' : 'text-white'}`}>
                      {task.title}
                    </span>
                  </div>

                  <div className="col-span-2 hidden sm:flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        task.status === 'Done'
                          ? 'bg-emerald-400'
                          : task.status === 'In Progress'
                          ? 'bg-sky-400'
                          : task.status === 'In Review'
                          ? 'bg-amber-400'
                          : 'bg-zinc-500'
                      }`}
                    />
                    <span className="text-[11px] text-[#A0A0A8]">{task.status}</span>
                  </div>

                  <div className="col-span-2 hidden sm:block">
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        task.priority === 'Urgent'
                          ? 'text-rose-400 bg-rose-950/40 border border-rose-900/60'
                          : task.priority === 'High'
                          ? 'text-amber-400 bg-amber-950/40 border border-amber-900/60'
                          : 'text-[#A0A0A8] bg-[#1F1F23]'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  <div className="col-span-3 sm:col-span-2 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#303034] text-[9px] flex items-center justify-center font-bold text-white">
                      {task.assignee.slice(0, 2)}
                    </span>
                    <span className="text-[11px] text-[#A0A0A8] truncate">{task.assignee}</span>
                  </div>

                  <div className="col-span-3 sm:col-span-1 text-right text-[11px] font-mono text-[#777780]">
                    {task.date}
                  </div>
                </div>
              ))}
              <div className="pt-2 text-[11px] text-[#777780] flex items-center justify-between">
                <span>Tip: Click any task row to toggle completion status</span>
                <span className="font-mono text-white">5 Active Items</span>
              </div>
            </div>
          )}

          {/* 2. Dashboards */}
          {(module === 'dashboards' || module === 'reporting') && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-[#171719] border border-[#303034]">
                  <div className="text-[10px] text-[#777780] uppercase">Sprint Velocity</div>
                  <div className="text-xl font-bold text-white mt-1">48 pts</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> +14% vs last cycle
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#171719] border border-[#303034]">
                  <div className="text-[10px] text-[#777780] uppercase">Budget Burn</div>
                  <div className="text-xl font-bold text-white mt-1">68.4%</div>
                  <div className="text-[10px] text-[#A0A0A8] mt-0.5">$48.2k / $70.5k</div>
                </div>
                <div className="p-3 rounded-lg bg-[#171719] border border-[#303034]">
                  <div className="text-[10px] text-[#777780] uppercase">Active Team</div>
                  <div className="text-xl font-bold text-white mt-1">42 staff</div>
                  <div className="text-[10px] text-sky-400 mt-0.5">100% clocked in</div>
                </div>
                <div className="p-3 rounded-lg bg-[#171719] border border-[#303034]">
                  <div className="text-[10px] text-[#777780] uppercase">Open Blockers</div>
                  <div className="text-xl font-bold text-rose-400 mt-1">1 item</div>
                  <div className="text-[10px] text-rose-300 mt-0.5 flex items-center gap-0.5">
                    <AlertCircle className="w-3 h-3" /> Stripe review gate
                  </div>
                </div>
              </div>

              {/* Chart visualization */}
              <div className="p-4 rounded-lg bg-[#171719] border border-[#303034]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-white">Sprint Burndown & Velocity Real-Time Flow</div>
                  <span className="text-[10px] text-[#777780] font-mono">Day 8 of 14</span>
                </div>
                <div className="h-32 flex items-end gap-2 pt-4 px-2 border-b border-[#303034]">
                  {[85, 76, 68, 62, 54, 48, 38, 28, 22, 14, 8].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                      <div
                        style={{ height: `${height}%` }}
                        className={`w-full rounded-t transition-all ${
                          i < 7 ? 'bg-white hover:bg-zinc-200' : 'bg-[#303034] border-dashed border-t border-[#777780]'
                        }`}
                      />
                      <span className="text-[9px] text-[#777780] font-mono">d{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#777780] mt-2">
                  <span>Target Completion: Nov 22</span>
                  <span className="text-emerald-400 font-medium">On Track (+2.4 days slack)</span>
                </div>
              </div>
            </div>
          )}

          {/* 3. Parro AI */}
          {module === 'ai' && (
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-[#171719] border border-[#303034]">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="font-semibold text-white text-xs">Parro Context Engine v3.4</span>
                  <span className="text-[10px] text-[#777780]">· Zero Data Retention Enclave</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="flex-1 bg-[#0D0D0F] border border-[#303034] rounded px-3 py-2 text-white text-xs focus:outline-none focus:border-white"
                    placeholder="Ask Parro AI to generate tasks, summarize, or triage..."
                  />
                  <button
                    type="button"
                    onClick={handleSimulateAi}
                    disabled={isGenerating}
                    className="px-4 py-2 bg-white text-black font-semibold rounded text-xs hover:bg-zinc-200 flex items-center gap-1.5 shrink-0"
                  >
                    {isGenerating ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                    <span>{isGenerating ? 'Thinking...' : 'Simulate'}</span>
                  </button>
                </div>
              </div>

              {aiResponse ? (
                <div className="p-4 rounded-lg bg-[#121214] border border-purple-900/50 text-xs space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-purple-300">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Parro AI Synthesis
                    </span>
                    <span>140ms execution</span>
                  </div>
                  <pre className="font-sans whitespace-pre-wrap text-zinc-300 leading-relaxed">{aiResponse}</pre>
                  <div className="pt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => alert('Tasks successfully staged for workspace import!')}
                      className="px-3 py-1 bg-white text-black font-semibold rounded text-[11px] hover:bg-zinc-200"
                    >
                      Insert 3 Tasks into Sprint
                    </button>
                    <button
                      type="button"
                      onClick={() => setAiResponse(null)}
                      className="px-3 py-1 bg-[#171719] text-[#A0A0A8] rounded text-[11px] border border-[#303034]"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Summarize #proj-mobile-v3 blockers',
                    'Decompose Q4 payroll tax audit into checklist',
                    'Scan tasks for overdue client dependencies',
                  ].map((preset, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setAiPrompt(preset);
                        handleSimulateAi();
                      }}
                      className="text-left p-2.5 rounded bg-[#171719] border border-[#303034] hover:border-white text-[11px] text-[#A0A0A8] hover:text-white transition-colors"
                    >
                      "{preset}"
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. HR Suite / Employee */}
          {(module === 'hr' || module === 'employee') && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: 'Marcus Chen', role: 'Staff Systems Architect', dept: 'Engineering', status: 'In Office · London', tz: 'GMT+0', pto: '18 days left' },
                  { name: 'Amara Okafor', role: 'VP of People Operations', dept: 'HR & People', status: 'Remote · San Francisco', tz: 'PST', pto: '22 days left' },
                  { name: 'Sophia Larsson', role: 'Senior Brand Lead', dept: 'Creative Studio', status: '🌴 PTO through Friday', tz: 'CET', pto: '14 days left' },
                ].map((emp, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#171719] border border-[#303034] space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-xs">
                        {emp.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div className="overflow-hidden">
                        <div className="font-semibold text-white truncate text-xs">{emp.name}</div>
                        <div className="text-[10px] text-[#777780] truncate">{emp.role}</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-[#A0A0A8] flex items-center justify-between pt-1 border-t border-[#303034]">
                      <span>{emp.dept}</span>
                      <span className="font-mono text-zinc-400">{emp.tz}</span>
                    </div>
                    <div className="text-[10px] text-zinc-300 bg-[#0D0D0F] px-2 py-1 rounded flex items-center justify-between">
                      <span>{emp.status}</span>
                      <span className="text-[#777780]">{emp.pto}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Calendar */}
          {module === 'calendar' && (
            <div className="space-y-3">
              <div className="grid grid-cols-5 gap-2 text-center text-[10px] text-[#777780] uppercase tracking-wider pb-1 border-b border-[#303034]">
                <span>Mon 11</span>
                <span>Tue 12</span>
                <span>Wed 13</span>
                <span>Thu 14</span>
                <span>Fri 15</span>
              </div>
              <div className="grid grid-cols-5 gap-2 min-h-[180px]">
                <div className="p-2 rounded bg-[#171719] border border-[#303034] space-y-1.5">
                  <div className="p-1 rounded bg-sky-950/40 border border-sky-800 text-[10px] text-sky-300">
                    Sprint Planning (10:00 AM)
                  </div>
                </div>
                <div className="p-2 rounded bg-[#171719] border border-[#303034] space-y-1.5">
                  <div className="p-1 rounded bg-purple-950/40 border border-purple-800 text-[10px] text-purple-300">
                    Design Review: Mobile v3
                  </div>
                </div>
                <div className="p-2 rounded bg-[#171719] border border-[#303034] space-y-1.5">
                  <div className="p-1 rounded bg-amber-950/40 border border-amber-800 text-[10px] text-amber-300">
                    🌴 Sophia Out of Office
                  </div>
                </div>
                <div className="p-2 rounded bg-[#171719] border border-[#303034] space-y-1.5">
                  <div className="p-1 rounded bg-rose-950/40 border border-rose-800 text-[10px] text-rose-300">
                    ⚡ Code Freeze Target
                  </div>
                </div>
                <div className="p-2 rounded bg-[#171719] border border-[#303034] space-y-1.5">
                  <div className="p-1 rounded bg-emerald-950/40 border border-emerald-800 text-[10px] text-emerald-300">
                    🚀 Release v3.4 Deploy
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. Chat */}
          {module === 'chat' && (
            <div className="space-y-3">
              <div className="space-y-3 max-w-xl">
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white text-black font-bold flex items-center justify-center text-[10px] shrink-0">
                    AR
                  </div>
                  <div className="space-y-1 bg-[#171719] p-3 rounded-lg border border-[#303034]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-xs">Alex Rivera</span>
                      <span className="text-[10px] text-[#777780]">10:42 AM</span>
                    </div>
                    <p className="text-xs text-zinc-300">
                      Just pushed the Critical Path auto-recalculation patch. We are seeing 60 FPS transitions even with 2,000 tasks linked.
                    </p>
                    <div className="mt-2 p-2 rounded bg-[#0D0D0F] border border-[#303034] flex items-center justify-between text-[11px]">
                      <span className="text-white font-mono">PR #482 · Merged</span>
                      <button
                        type="button"
                        onClick={() => alert('Converted message to assigned task #842')}
                        className="px-2 py-0.5 rounded bg-white text-black font-semibold text-[10px] hover:bg-zinc-200"
                      >
                        Convert to Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 7. CRM */}
          {module === 'crm' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-[#171719] border border-[#303034] space-y-2">
                <div className="text-[11px] font-semibold text-white flex items-center justify-between">
                  <span>Discovery & Pitch</span>
                  <span className="text-[#777780] font-mono">$180,000</span>
                </div>
                <div className="p-2 rounded bg-[#0D0D0F] border border-[#303034] space-y-1">
                  <div className="font-semibold text-white text-xs">Vanguard Global Logistics</div>
                  <div className="text-[10px] text-[#777780]">250 seats · $75k ARR</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#171719] border border-[#303034] space-y-2">
                <div className="text-[11px] font-semibold text-white flex items-center justify-between">
                  <span>Contract Security Review</span>
                  <span className="text-[#777780] font-mono">$240,000</span>
                </div>
                <div className="p-2 rounded bg-[#0D0D0F] border border-[#303034] space-y-1">
                  <div className="font-semibold text-white text-xs">Aura FinTech Holding</div>
                  <div className="text-[10px] text-[#777780]">500 seats · $144k ARR</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#171719] border border-[#303034] space-y-2">
                <div className="text-[11px] font-semibold text-emerald-400 flex items-center justify-between">
                  <span>Closed Won (Provisioned)</span>
                  <span className="font-mono text-emerald-400">$320,000</span>
                </div>
                <div className="p-2 rounded bg-[#0D0D0F] border border-emerald-900/60 space-y-1">
                  <div className="font-semibold text-white text-xs">Nexus Creative Group</div>
                  <div className="text-[10px] text-emerald-400">Onboarding Project Active</div>
                </div>
              </div>
            </div>
          )}

          {/* 8. Gantt */}
          {module === 'gantt' && (
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#171719] border border-[#303034] space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-white">Critical Path Scheduling Engine</span>
                  <span className="text-rose-400 font-mono text-[10px]">Zero Slack Buffer on Phase 2</span>
                </div>
                <div className="space-y-2 pt-2">
                  {[
                    { name: '1. Architecture & API Contracts', width: '35%', offset: '0%', critical: true },
                    { name: '2. Backend Security & RBAC Enclave', width: '40%', offset: '35%', critical: true },
                    { name: '3. Frontend Design System Tokens', width: '30%', offset: '20%', critical: false },
                    { name: '4. Executive Launch & Release Rollout', width: '25%', offset: '75%', critical: true },
                  ].map((row, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#A0A0A8]">
                        <span>{row.name}</span>
                        {row.critical && <span className="text-rose-400 font-mono">Critical Path</span>}
                      </div>
                      <div className="h-5 rounded bg-[#0D0D0F] border border-[#303034] relative overflow-hidden">
                        <div
                          style={{ width: row.width, left: row.offset }}
                          className={`absolute top-0 bottom-0 rounded ${
                            row.critical ? 'bg-rose-500' : 'bg-sky-500'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Fallback for other modules (Attendance, Payroll, Creative, Kanban, Workload, etc.) */}
          {![
            'projects',
            'tasks',
            'dashboards',
            'ai',
            'hr',
            'employee',
            'calendar',
            'chat',
            'crm',
            'gantt',
            'reporting',
          ].includes(module) && (
            <div className="p-6 rounded-lg bg-[#171719] border border-[#303034] text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center mx-auto text-sm">
                PD
              </div>
              <h5 className="text-sm font-semibold text-white capitalize">{module} Interactive Control View</h5>
              <p className="text-xs text-[#A0A0A8] max-w-md mx-auto">
                All data in this demonstration runs on the unified ParroDash core object engine. Real-time updates cascade
                across every view with zero latency.
              </p>
              <div className="pt-2">
                <span className="text-[11px] text-emerald-400 font-mono bg-[#0D0D0F] px-3 py-1 rounded border border-[#303034]">
                  ✓ System Synchronized · 60 FPS
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
