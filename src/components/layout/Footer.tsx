import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Package } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/siteData';

interface FooterProps {
  onOpenProducts?: () => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProducts, onNavigateHome }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-slate-200 text-slate-600 text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <button
              type="button"
              onClick={onNavigateHome}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 p-0.5 shadow-xs overflow-hidden flex items-center justify-center shrink-0 group-hover:border-blue-500 transition-colors">
                <img
                  src="/logo.png"
                  alt="CoreX IT Solutions Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-slate-950 leading-none group-hover:text-blue-600 transition-colors">
                  COREX
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase mt-0.5">
                  {COMPANY_DETAILS.slogan}
                </span>
              </div>
            </button>

            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              Intelligent digital systems, AI autonomous agents, mobile products, and enterprise software engineering.
              Built for ambitious organizations from Dammam–Khobar to the world.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs font-mono">
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{COMPANY_DETAILS.email}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phoneDirect}`}
                className="text-slate-700 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{COMPANY_DETAILS.primaryMobile}</span>
              </a>
              <div className="text-slate-600 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{COMPANY_DETAILS.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">Capabilities</h4>
            <ul className="space-y-2">
              <li>
                {onOpenProducts ? (
                  <button
                    type="button"
                    onClick={onOpenProducts}
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>Products & APKs</span>
                    <span className="text-[9px] bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">3 TOOLS</span>
                  </button>
                ) : (
                  <a href="#products-apk" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center gap-1">
                    Products & APKs
                  </a>
                )}
              </li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">AI Agents</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Website Building</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Mobile Products</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">UI/UX Systems</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Enterprise Core</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">Company</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Selected Work</a></li>
              <li><a href="#team" className="hover:text-blue-600 transition-colors">Engineering Leadership</a></li>
              <li><a href="#process" className="hover:text-blue-600 transition-colors">Operating Rhythm</a></li>
              <li><a href="#impact" className="hover:text-blue-600 transition-colors">Impact Analytics</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Start a Brief</a></li>
            </ul>
          </div>

          {/* Project Dispatch & Availability Badge */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs text-emerald-700 font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>PROJECT QUEUE OPEN</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accepting new strategic sprints & product partnerships for upcoming quarters.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 pt-1"
              >
                <span>Book senior consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Registered in Saudi Arabia · Working globally
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {currentYear} CoreX IT Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Dammam–Khobar, KSA</span>
            <span>Worldwide Delivery</span>
            <span className="text-blue-600 font-medium">3 Proprietary Tools Live</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
