import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, CheckCircle2, Filter } from 'lucide-react';
import { FEATURES_DATA } from '../data/featuresData';
import { DynamicIcon } from '../components/ui/Icons';
import { CTASection } from '../components/home/CTASection';

export const FeaturesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Work' | 'HR' | 'Collaboration'>('All');

  const allFeatures = Object.values(FEATURES_DATA);

  const getCategory = (slug: string): 'Work' | 'HR' | 'Collaboration' => {
    if (['hr-management', 'employee-management', 'attendance', 'leave-management', 'payroll'].includes(slug)) {
      return 'HR';
    }
    if (['team-chat', 'docs', 'creative-studio', 'forms', 'crm', 'approvals'].includes(slug)) {
      return 'Collaboration';
    }
    return 'Work';
  };

  const filtered = allFeatures.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.tagline.toLowerCase().includes(search.toLowerCase()) ||
      item.heroDescription.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || getCategory(item.slug) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      {/* Header */}
      <section className="pt-16 pb-12 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center max-w-3xl">
          <div className="text-xs uppercase font-mono tracking-widest text-[#A0A0A8]">
            Product Directory · 21 Integrated Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Every feature your company needs to operate at peak speed.
          </h1>
          <p className="text-base text-[#A0A0A8] leading-relaxed">
            From critical path Gantt charts to 50-state direct deposit payroll and context-aware Parro AI, discover the
            full depth of the ParroDash business operating system.
          </p>

          {/* Search Bar & Filter Tabs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777780]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search all 21 features (e.g. Gantt, Payroll, AI, CRM)..."
                className="w-full bg-[#171719] border border-[#303034] rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-[#777780] focus:outline-none focus:border-white"
              />
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#171719] border border-[#303034]">
              {(['All', 'Work', 'HR', 'Collaboration'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-black shadow-sm'
                      : 'text-[#A0A0A8] hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'All (21)' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex items-center justify-between text-xs text-[#777780] pb-4 border-b border-[#E6E6E9]">
          <span>Showing {filtered.length} features</span>
          <span>Click any capability to view dedicated documentation</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              to={`/features/${item.slug}`}
              className="group p-6 rounded-2xl bg-[#FFFFFF] border border-[#E6E6E9] hover:border-[#0D0D0F] hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0F] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <DynamicIcon name={item.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#777780] font-semibold">
                    {item.kicker}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#141414] group-hover:text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#777780] mt-1.5 leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#E6E6E9]/60">
                  {item.keyCapabilities.slice(0, 2).map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-[11px] text-[#303034]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{cap.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between text-xs font-semibold text-[#141414] group-hover:underline">
                <span>View Full Feature Overview</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
