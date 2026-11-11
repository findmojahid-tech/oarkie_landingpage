import React, { useState } from 'react';
import { Search, Download, Layout, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TEMPLATES_DATA, TemplateItem } from '../data/resourcesData';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { APP_CONFIG } from '../config/site';

export const TemplatesPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Engineering', 'Marketing', 'HR', 'Operations', 'Product', 'Agency'];

  const filtered = TEMPLATES_DATA.filter((t) => {
    const matchesCat = selectedCat === 'All' || t.category === selectedCat;
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#FFFFFF] text-[#141414]">
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-[#0D0D0F] text-white border-b border-[#303034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-full">
            <span>Template Library · 200+ Workspaces</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Launch your team in minutes with pre-built workspace templates.
          </h1>

          <p className="text-base text-[#A0A0A8] leading-relaxed">
            Battle-tested operational blueprints created by agile leads, PMO directors, and HR executives. Fully
            customizable for your exact workflows.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777780]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search templates (e.g. Sprint, Onboarding)..."
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

      {/* Templates Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between text-xs text-[#777780] border-b border-[#E6E6E9] pb-3">
          <span>Showing {filtered.length} workspace templates</span>
          <span>1-click instantiation in ParroDash</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-[#E6E6E9] hover:border-[#141414] hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-white bg-[#0D0D0F] px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-[#777780] flex items-center gap-1">
                    <Download className="w-3 h-3" /> {item.downloads} uses
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#141414]">{item.title}</h3>
                <p className="text-xs text-[#777780] leading-relaxed">{item.description}</p>

                <div className="pt-2 border-t border-[#E6E6E9] space-y-1">
                  <div className="text-[10px] uppercase font-semibold text-[#777780]">Views Included</div>
                  <div className="flex flex-wrap gap-1">
                    {item.viewsIncluded.map((v, vIdx) => (
                      <span key={vIdx} className="text-[10px] bg-[#F7F7F8] border border-[#E6E6E9] px-2 py-0.5 rounded text-[#303034]">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#E6E6E9]">
                <span className="text-xs font-mono text-[#777780]">{item.tasksCount} pre-built tasks</span>
                <a
                  href={`${APP_CONFIG.signupUrl}?template=${item.id}`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0D0D0F] text-white font-semibold text-xs hover:bg-[#25252A] transition-colors flex items-center gap-1.5"
                >
                  <span>Use Template</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
