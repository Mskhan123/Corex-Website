import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Calculator, PhoneCall, ArrowLeft, Package, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/siteData';

interface NavbarProps {
  currentView?: 'home' | 'products';
  onNavigateView: (view: 'home' | 'products') => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView = 'home', onNavigateView, onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeNavLinks = [
    { name: 'Services', href: '#services' },
    { name: 'AI Advisor', href: '#ai-advisor' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Impact', href: '#impact' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-sm'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Uploaded Logo */}
          <button
            type="button"
            onClick={() => onNavigateView('home')}
            className="flex items-center gap-2.5 group focus:outline-none text-left"
            aria-label="CoreX IT Solutions Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-white border border-slate-200 p-0.5 shadow-xs overflow-hidden flex items-center justify-center shrink-0 group-hover:border-blue-500 transition-colors">
              <img
                src="/logo.png"
                alt="CoreX IT Solutions Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<span class="text-blue-600 font-black text-xl">C</span>';
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-slate-950 leading-none group-hover:text-blue-600 transition-colors">
                  COREX
                </span>
                <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">
                  IT
                </span>
              </div>
              <span className="text-[8.5px] font-mono tracking-widest text-slate-500 uppercase leading-tight mt-0.5">
                {COMPANY_DETAILS.slogan}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-medium">
            {currentView === 'products' ? (
              <>
                <button
                  type="button"
                  onClick={() => onNavigateView('home')}
                  className="px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-xs transition-all flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateView('home');
                    setTimeout(() => {
                      const el = document.getElementById('services');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-xs transition-all"
                >
                  Services
                </button>
                <span className="px-3 py-1.5 rounded-full bg-blue-600 text-white font-semibold flex items-center gap-1 shadow-xs">
                  <Package className="w-3.5 h-3.5" />
                  <span>Products & Softwares</span>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateView('home');
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-xs transition-all"
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                {homeNavLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-xs transition-all flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                ))}

                {/* Products Dedicated Navigation Button */}
                <button
                  type="button"
                  id="nav-btn-products-tab"
                  onClick={() => onNavigateView('products')}
                  className="relative px-3.5 py-1.5 rounded-full text-blue-700 font-semibold bg-blue-50/80 hover:bg-blue-600 hover:text-white border border-blue-200 transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Products</span>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 leading-none">
                    3 APPS
                  </span>
                </button>
              </>
            )}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Products Button if on home */}
            {currentView === 'home' && (
              <button
                type="button"
                id="nav-btn-products-action"
                onClick={() => onNavigateView('products')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 shadow-2xs transition-all"
              >
                <Package className="w-3.5 h-3.5 text-blue-600" />
                <span>Products & APKs</span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md bg-blue-600 text-white">
                  3
                </span>
              </button>
            )}

            <button
              type="button"
              id="nav-btn-estimator"
              onClick={onOpenEstimator}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-xs transition-all"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span>Estimator</span>
            </button>

            {currentView === 'products' ? (
              <button
                type="button"
                onClick={() => onNavigateView('home')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 shadow-xs transition-all transform active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </button>
            ) : (
              <a
                href="#contact"
                id="nav-btn-start-project"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 shadow-xs transition-all transform active:scale-95"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigateView(currentView === 'home' ? 'products' : 'home')}
              className="px-2.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold flex items-center gap-1"
              aria-label="Toggle Products"
            >
              <Package className="w-3.5 h-3.5 text-blue-600" />
              <span>{currentView === 'home' ? 'Products (3)' : 'Home'}</span>
            </button>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-xl animate-slideDown">
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-950">CoreX Proprietary Tools</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateView(currentView === 'home' ? 'products' : 'home');
              }}
              className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-xs"
            >
              {currentView === 'home' ? 'Open Products & APKs →' : '← Back to Home'}
            </button>
          </div>

          {currentView === 'home' ? (
            <div className="grid grid-cols-2 gap-2 pt-1">
              {homeNavLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:text-blue-600 text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateView('home');
                }}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:text-blue-600 text-center flex items-center justify-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Back to Home</span>
              </button>
              <a
                href="#apk-install-guide"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:text-blue-600 text-center"
              >
                Install Guide
              </a>
            </div>
          )}

          <div className="pt-2 border-t border-slate-200 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs font-medium flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>Project Scope & Cost Estimator</span>
            </button>

            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentView !== 'home') onNavigateView('home');
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <span>Start a Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-500 pt-1">
              <a href={`tel:${COMPANY_DETAILS.phoneDirect}`} className="flex items-center gap-1 hover:text-slate-900">
                <PhoneCall className="w-3 h-3 text-blue-600" />
                <span>056 329 8385</span>
              </a>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500">Dammam–Khobar</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
