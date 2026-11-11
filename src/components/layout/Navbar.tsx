import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Shield,
  Layers,
} from 'lucide-react';
import { NAVIGATION_CONFIG, MegaMenuConfig, APP_CONFIG } from '../../config/site';
import { DynamicIcon } from '../ui/Icons';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Handle scroll state for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop menus open only on deliberate clicks, never because the cursor
  // happens to cross the navigation bar. Close with Escape or outside click.
  useEffect(() => {
    if (!activeMenu && !mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (mobileOpen) mobileToggleRef.current?.focus();
        setActiveMenu(null);
        setMobileOpen(false);
        setExpandedMobileMenu(null);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [activeMenu, mobileOpen]);

  // Mobile menu is a fixed drawer; do not allow the page behind it to scroll.
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  const currentMegaMenu = NAVIGATION_CONFIG.find((m) => m.id === activeMenu && m.sections);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#303034] shadow-lg text-white'
          : 'bg-[#0D0D0F] border-b border-[#303034]/60 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-6 min-w-0">
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-white rounded py-1 px-0.5"
            aria-label="ParroDash Home"
          >
            <div className="w-8 h-8 rounded-lg bg-white text-black font-extrabold flex items-center justify-center text-sm shadow-sm transition-transform group-hover:scale-105">
              PD
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white text-base leading-none">
                ParroDash
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#777780] font-semibold mt-0.5">
                by {APP_CONFIG.parentCompany}
              </span>
            </div>
          </Link>

          {/* Desktop Mega Navigation Bar */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAVIGATION_CONFIG.map((menu) => {
              const hasDropdown = Boolean(menu.sections && menu.sections.length > 0);
              const isActive = activeMenu === menu.id || (menu.href && location.pathname.startsWith(menu.href) && menu.href !== '/');

              if (!hasDropdown && menu.href) {
                return (
                  <Link
                    key={menu.id}
                    to={menu.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive ? 'text-white bg-[#171719]' : 'text-[#A0A0A8] hover:text-white hover:bg-[#171719]'
                    }`}
                  >
                    {menu.label}
                  </Link>
                );
              }

              return (
                <div
                  key={menu.id}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() => setActiveMenu(activeMenu === menu.id ? null : menu.id)}
                    aria-expanded={activeMenu === menu.id}
                    aria-controls="desktop-mega-navigation"
                    aria-haspopup="true"
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                      activeMenu === menu.id || isActive
                        ? 'text-white bg-[#171719]'
                        : 'text-[#A0A0A8] hover:text-white hover:bg-[#171719]'
                    }`}
                  >
                    <span>{menu.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeMenu === menu.id ? 'rotate-180 text-white' : 'text-[#777780]'
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Right Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact-sales"
            className="px-3.5 py-1.5 text-xs font-medium text-[#A0A0A8] hover:text-white rounded-md transition-colors"
          >
            Contact Sales
          </Link>
          <a
            href={APP_CONFIG.loginUrl}
            className="px-3.5 py-1.5 text-xs font-medium text-white hover:bg-[#171719] rounded-md transition-colors border border-[#303034]"
          >
            Log In
          </a>
          <a
            href={APP_CONFIG.signupUrl}
            className="px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-[#E6E6E9] rounded-md transition-all shadow-sm flex items-center gap-1.5"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={APP_CONFIG.signupUrl}
            className="px-3 py-1.5 text-xs font-semibold text-black bg-white rounded-md"
          >
            Get Started
          </a>
          <button
            type="button"
            ref={mobileToggleRef}
            onClick={() => { setActiveMenu(null); setMobileOpen(!mobileOpen); }}
            className="p-2 rounded-md text-[#A0A0A8] hover:text-white hover:bg-[#171719]"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown Overlay */}
      {currentMegaMenu && currentMegaMenu.sections && (
        <div
          id="desktop-mega-navigation"
          className="hidden lg:block absolute left-0 right-0 top-16 bg-[#0D0D0F] border-b border-[#303034] shadow-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Sections & Links */}
              <div
                className={`${
                  currentMegaMenu.featured ? 'col-span-9' : 'col-span-12'
                } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8`}
              >
                {currentMegaMenu.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#777780] border-b border-[#303034] pb-1.5">
                      {section.title}
                    </div>
                    <div className="space-y-1">
                      {section.links.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          to={link.href}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-start gap-3 p-2 rounded-lg hover:bg-[#171719] transition-colors"
                        >
                          <div className="mt-0.5 p-1 rounded bg-[#171719] border border-[#303034] text-[#A0A0A8] group-hover:text-white group-hover:border-white transition-colors">
                            <DynamicIcon name={link.iconName} className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-white group-hover:text-white">
                                {link.title}
                              </span>
                              {link.badge && (
                                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-1.5 py-0.2 rounded">
                                  {link.badge}
                                </span>
                              )}
                            </div>
                            {link.description && (
                              <p className="text-[11px] text-[#777780] line-clamp-1 mt-0.5">
                                {link.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Card Column */}
              {currentMegaMenu.featured && (
                <div className="col-span-3 border-l border-[#303034] pl-8 flex flex-col justify-between">
                  <div className="p-4 rounded-xl bg-[#171719] border border-[#303034] space-y-3">
                    {currentMegaMenu.featured.badge && (
                      <span className="inline-block text-[10px] uppercase font-mono tracking-wider font-semibold text-purple-400 bg-purple-950/50 border border-purple-800/60 px-2 py-0.5 rounded">
                        {currentMegaMenu.featured.badge}
                      </span>
                    )}
                    <h5 className="text-sm font-bold text-white">
                      {currentMegaMenu.featured.title}
                    </h5>
                    <p className="text-xs text-[#A0A0A8] leading-relaxed">
                      {currentMegaMenu.featured.description}
                    </p>
                    <Link
                      to={currentMegaMenu.featured.href}
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:underline pt-1"
                    >
                      <span>Explore Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="pt-4 text-[11px] text-[#777780] flex items-center justify-between">
                    <span>Need live guidance?</span>
                    {onOpenDemo ? (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveMenu(null);
                          onOpenDemo();
                        }}
                        className="text-white hover:underline font-medium"
                      >
                        Watch Interactive Demo →
                      </button>
                    ) : (
                      <Link
                        to="/demo"
                        onClick={() => setActiveMenu(null)}
                        className="text-white hover:underline font-medium"
                      >
                        Book a Live Demo →
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div id="mobile-navigation-drawer" role="navigation" aria-label="Mobile navigation" className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#0D0D0F] border-t border-[#303034] z-50 overflow-y-auto p-4 space-y-4">
          <div className="space-y-1">
            {NAVIGATION_CONFIG.map((menu) => {
              const hasDropdown = Boolean(menu.sections && menu.sections.length > 0);
              const isExpanded = expandedMobileMenu === menu.id;

              if (!hasDropdown && menu.href) {
                return (
                  <Link
                    key={menu.id}
                    to={menu.href}
                    className="block px-3 py-2.5 text-sm font-medium text-white hover:bg-[#171719] rounded-lg"
                  >
                    {menu.label}
                  </Link>
                );
              }

              return (
                <div key={menu.id} className="border-b border-[#303034]/60 pb-1">
                  <button
                    type="button"
                    onClick={() => setExpandedMobileMenu(isExpanded ? null : menu.id)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white"
                  >
                    <span>{menu.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#777780] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && menu.sections && (
                    <div className="pl-3 pr-2 py-2 space-y-4 bg-[#121214] rounded-lg mb-2">
                      {menu.sections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="text-[10px] uppercase tracking-wider font-semibold text-[#777780] px-2">
                            {section.title}
                          </div>
                          {section.links.map((link, lIdx) => (
                            <Link
                              key={lIdx}
                              to={link.href}
                              className="flex items-center justify-between px-2 py-1.5 rounded text-xs text-[#A0A0A8] hover:text-white hover:bg-[#171719]"
                            >
                              <span>{link.title}</span>
                              {link.badge && (
                                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950 px-1 rounded">
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#303034] space-y-2">
            <Link
              to="/contact-sales"
              className="block w-full text-center px-4 py-2.5 rounded-lg border border-[#303034] text-xs font-semibold text-white hover:bg-[#171719]"
            >
              Contact Sales
            </Link>
            <a
              href={APP_CONFIG.loginUrl}
              className="block w-full text-center px-4 py-2.5 rounded-lg border border-[#303034] text-xs font-semibold text-white hover:bg-[#171719]"
            >
              Log In to ParroDash
            </a>
            <a
              href={APP_CONFIG.signupUrl}
              className="block w-full text-center px-4 py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-[#E6E6E9]"
            >
              Get Started Free →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
