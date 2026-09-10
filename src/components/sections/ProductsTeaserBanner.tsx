import React from 'react';
import { Package, ArrowRight, ExternalLink, Download, ShieldCheck, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/siteData';

interface ProductsTeaserBannerProps {
  onOpenProducts: () => void;
}

export const ProductsTeaserBanner: React.FC<ProductsTeaserBannerProps> = ({ onOpenProducts }) => {
  return (
    <section className="py-12 bg-white text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 sm:p-8 md:p-10 text-white shadow-xl overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-700/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono">
                <Package className="w-3.5 h-3.5 text-blue-400" />
                <span>COREX PROPRIETARY SOFTWARE SUITE</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Looking for CoreX Softwares & Mobile APKs?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We build and maintain standalone enterprise tools. Explore our <strong>Social Media Automation Engine</strong>, 
                <strong> CoreX Copier</strong>, and <strong>CoreX Cloner</strong> with direct downloads, checksums, and installation guides.
              </p>

              {/* 3 Product Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {PRODUCTS.map(p => (
                  <span
                    key={p.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white backdrop-blur-xs font-mono"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {p.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                id="btn-open-products-page"
                onClick={onOpenProducts}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <Package className="w-4 h-4" />
                <span>Open Products & APKs Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center sm:text-left lg:text-center text-[11px] font-mono text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>3 Tools Available · Direct Downloads & Web Portals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
