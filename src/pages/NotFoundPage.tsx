import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Home, FolderKanban, DollarSign, Calendar, HelpCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/features?search=${encodeURIComponent(query)}`);
  };

  const quickLinks = [
    { label: 'Return to Homepage', href: '/', icon: Home },
    { label: 'All 21 Features', href: '/features', icon: FolderKanban },
    { label: 'Pricing & Plans', href: '/pricing', icon: DollarSign },
    { label: 'Book a Guided Demo', href: '/demo', icon: Calendar },
    { label: 'Compare vs ClickUp', href: '/compare', icon: HelpCircle },
  ];

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] text-[#141414]">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#777780]">
            Error 404 · Destination Not Found
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141414]">
            This page does not exist.
          </h1>
          <p className="text-sm text-[#777780] leading-relaxed">
            The link you followed may be broken or the route may have moved. Search below or navigate using our popular
            destinations.
          </p>
        </div>

        <form onSubmit={handleSearch} className="relative max-w-sm mx-auto">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#777780]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search features (e.g. Gantt, HR, AI)..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-[#E6E6E9] text-xs text-[#141414] focus:outline-none focus:border-[#141414]"
          />
        </form>

        <div className="space-y-2 text-left pt-2">
          <div className="text-[11px] font-mono uppercase text-[#777780] font-semibold text-center mb-2">
            Popular Destinations
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <Link
                  key={idx}
                  to={link.href}
                  className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E6E6E9] hover:border-[#141414] hover:bg-[#F7F7F8] text-xs font-semibold text-[#141414] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#777780]" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
