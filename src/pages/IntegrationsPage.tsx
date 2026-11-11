import React, { useState } from 'react';
import { Search, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { INTEGRATIONS_DATA } from '../data/resourcesData';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';

export const IntegrationsPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Communication', 'Development', 'Design', 'Storage', 'Productivity'];

  const filtered = INTEGRATIONS_DATA.filter((item) => {
    const matchesCat = selectedCat === 'All' || item.category === selectedCat;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Ecosystem & Integrations Directory</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Connect ParroDash with the tools your team already uses.
          </h1>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Native bi-directional integrations with GitHub, Slack, Figma, and Google Workspace, plus 5,000+ business
            apps via Zapier and enterprise REST APIs.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777780]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search 1,000+ integrations (e.g. Slack, GitHub)..."
                className="w-full bg-[#171719] border border-[#303034] rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-[#777780] focus:outline-none focus:border-white"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1 p-1 rounded-lg bg-[#171719] border border-[#303034]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    selectedCat === cat ? 'bg-white text-black shadow-sm' : 'text-[#A0A0A8] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between text-xs text-[#777780] border-b border-[#E6E6E9] pb-3">
          <span>Showing {filtered.length} native integrations</span>
          <span>Enterprise REST & GraphQL APIs available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-[#E6E6E9] hover:border-[#141414] hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0F] text-white flex items-center justify-center font-bold text-sm">
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  {item.popular && (
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                      Native Sync
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#141414]">{item.name}</h3>
                <p className="text-xs text-[#777780] leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#E6E6E9] text-xs">
                <span className="text-[#777780] font-mono">{item.category}</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ready to Connect
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
