import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieConsentModal } from '../ui/CookieConsentModal';
import { InteractiveDemoModal } from '../ui/InteractiveDemoModal';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on every route transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#141414] font-sans selection:bg-[#0D0D0F] selection:text-white">
      <Navbar onOpenDemo={() => setDemoOpen(true)} />

      <main className="flex-1 pt-16">
        {children}
      </main>

      <Footer />

      <CookieConsentModal />
      <InteractiveDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
