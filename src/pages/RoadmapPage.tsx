import React, { useState } from 'react';
import { ThumbsUp, Map, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { ROADMAP_DATA, RoadmapItem } from '../data/resourcesData';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';

export const RoadmapPage: React.FC = () => {
  const [items, setItems] = useState<RoadmapItem[]>(ROADMAP_DATA);
  const [votedIds, setVotedIds] = useState<Record<string, boolean>>({});

  const handleVote = (id: string) => {
    if (votedIds[id]) return;
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, votes: item.votes + 1 } : item))
    );
    setVotedIds((prev) => ({ ...prev, [id]: true }));
  };

  const inProgress = items.filter((i) => i.status === 'In Progress');
  const planned = items.filter((i) => i.status === 'Planned');
  const exploring = items.filter((i) => i.status === 'Exploring');

  const renderColumn = (title: string, count: number, columnItems: RoadmapItem[], tagColor: string) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-3 border-b-2 border-[#141414]">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${tagColor}`} />
          <h3 className="text-sm font-bold text-[#141414]">{title}</h3>
        </div>
        <span className="text-xs font-mono font-bold text-[#777780] bg-[#F7F7F8] px-2 py-0.5 rounded border border-[#E6E6E9]">
          {count}
        </span>
      </div>

      <div className="space-y-3">
        {columnItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-white border border-[#E6E6E9] hover:border-[#141414] transition-all space-y-3 shadow-xs"
          >
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-[#777780] uppercase tracking-wider font-semibold">{item.category}</span>
              <span className="text-[#141414] font-bold">{item.targetQuarter}</span>
            </div>

            <h4 className="text-sm font-bold text-[#141414]">{item.title}</h4>
            <p className="text-xs text-[#777780] leading-relaxed">{item.description}</p>

            <div className="pt-2 flex items-center justify-between border-t border-[#E6E6E9]">
              <button
                type="button"
                onClick={() => handleVote(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors ${
                  votedIds[item.id]
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-[#F7F7F8] text-[#141414] hover:bg-[#E6E6E9] border border-[#E6E6E9]'
                }`}
              >
                <ThumbsUp className="w-3 h-3" />
                <span>{item.votes}</span>
                {votedIds[item.id] && <span className="text-[10px]">· Voted</span>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Community-Driven Product Direction</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            ParroDash Public Roadmap
          </h1>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            See what our engineering team is actively building, what is scheduled next, and vote on upcoming features.
          </p>
        </div>
      </section>

      {/* Columns Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderColumn('In Active Development', inProgress.length, inProgress, 'bg-sky-500')}
          {renderColumn('Planned for Upcoming Cycles', planned.length, planned, 'bg-amber-500')}
          {renderColumn('Under Technical Exploration', exploring.length, exploring, 'bg-purple-500')}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
