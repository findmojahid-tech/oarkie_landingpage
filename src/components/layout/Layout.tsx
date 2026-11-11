import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useSiteMotion } from '../../lib/useSiteMotion';
import { Footer } from './Footer';
import { CookieConsentModal } from '../ui/CookieConsentModal';
import { InteractiveDemoModal } from '../ui/InteractiveDemoModal';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // One scoped GSAP lifecycle per route; all previous ScrollTriggers are reverted.
  useSiteMotion(mainRef, progressRef, location.pathname);

  // Scroll to top on every route transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#141414] font-sans selection:bg-[#0D0D0F] selection:text-white">
      <Navbar onOpenDemo={() => setDemoOpen(true)} />

      <div ref={progressRef} aria-hidden="true" className="pointer-events-none fixed left-0 right-0 top-16 z-30 h-[2px] origin-left bg-white/80" style={{ transform: "scaleX(0)" }} />

      <main ref={mainRef} className="flex-1 pt-16">
        {children}
      </main>

      <Footer />

      <CookieConsentModal />
      <InteractiveDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
