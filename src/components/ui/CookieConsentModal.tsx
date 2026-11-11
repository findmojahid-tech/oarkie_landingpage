import React, { useState, useEffect } from 'react';
import { Shield, Check, X } from 'lucide-react';

export const CookieConsentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('parrodash_cookie_consent');
    if (!saved) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  const handleSave = (custom?: { necessary: boolean; analytics: boolean; marketing: boolean }) => {
    const toSave = custom || preferences;
    localStorage.setItem('parrodash_cookie_consent', JSON.stringify(toSave));
    setPreferences(toSave);
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    const all = { necessary: true, analytics: true, marketing: true };
    handleSave(all);
  };

  const handleDeclineNonEssential = () => {
    const min = { necessary: true, analytics: false, marketing: false };
    handleSave(min);
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 px-3 py-1.5 rounded-full bg-[#171719] border border-[#303034] text-[11px] text-[#A0A0A8] hover:text-white hover:border-white shadow-lg transition-colors flex items-center gap-1.5"
        aria-label="Manage cookie preferences"
      >
        <Shield className="w-3.5 h-3.5 text-zinc-400" />
        <span>Cookie Settings</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 w-full max-w-sm sm:max-w-md p-4 bg-[#0D0D0F] border border-[#303034] rounded-xl shadow-2xl text-white space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-[#303034]">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-bold">Cookie & Privacy Preferences</h3>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="p-1 rounded text-[#777780] hover:text-white"
          aria-label="Close cookie banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-[11px] text-[#A0A0A8] leading-relaxed">
        We use essential cookies to maintain secure sessions, and optional performance cookies to measure page speed.
      </p>

      <div className="flex items-center justify-end gap-2 pt-1">
        <button
          type="button"
          onClick={handleDeclineNonEssential}
          className="px-3 py-1.5 rounded bg-[#171719] border border-[#303034] text-[11px] text-[#A0A0A8] hover:text-white"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={handleAcceptAll}
          className="px-3.5 py-1.5 rounded bg-white text-black font-semibold text-[11px] hover:bg-zinc-200"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
