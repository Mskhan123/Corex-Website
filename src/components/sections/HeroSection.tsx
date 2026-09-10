import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, PhoneCall, Bot, Play, Compass, Package } from 'lucide-react';
import { Hero3DCanvas } from '../canvas/Hero3DCanvas';
import { COMPANY_DETAILS } from '../../data/siteData';

interface HeroSectionProps {
  onOpenEstimator: () => void;
  onOpenProducts?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEstimator, onOpenProducts }) => {
  return (
    <section className="relative min-h-[92vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden bg-white text-slate-900">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute top-6 left-1/4 w-[460px] h-[460px] bg-blue-50/80 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-slate-100/90 rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Brand Logo & Location Header */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <img
                  src="/logo.png"
                  alt="CoreX IT Solutions"
                  className="w-6 h-6 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-display font-black text-xs tracking-wider text-slate-950">
                  COREX IT SOLUTIONS
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">
                  {COMPANY_DETAILS.slogan}
                </span>
              </div>

              {onOpenProducts ? (
                <button
                  type="button"
                  onClick={onOpenProducts}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-mono transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>3 Software Tools & APKs Live</span>
                  <ArrowRight className="w-3 h-3 text-blue-600" />
                </button>
              ) : (
                <a
                  href="#products-apk"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-mono transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>3 Software Tools & APKs Live</span>
                  <ArrowRight className="w-3 h-3 text-blue-600" />
                </a>
              )}
            </div>

            {/* Main Display Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.08]">
                We engineer<br />
                <span className="text-blue-600">
                  digital momentum.
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg sm:max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Strategy, interface design, autonomous AI agents, enterprise mobile APKs, and custom software engineering—united
                to turn ambitious ideas into digital products people choose to use.
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#contact"
                id="hero-btn-build"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>Build with CoreX</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              {onOpenProducts ? (
                <button
                  type="button"
                  id="hero-btn-products"
                  onClick={onOpenProducts}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <Package className="w-4 h-4 text-blue-400" />
                  <span>Products & Softwares (3)</span>
                </button>
              ) : (
                <a
                  href="#products-apk"
                  id="hero-btn-apk"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <Package className="w-4 h-4 text-blue-400" />
                  <span>Products & Softwares (3)</span>
                </a>
              )}

              <button
                type="button"
                id="hero-btn-estimator"
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Estimate Scope</span>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-500 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center font-mono text-[10px] text-slate-700 font-bold">20</span>
                  <span className="w-7 h-7 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center font-mono text-[10px] text-blue-700 font-bold">24</span>
                  <span className="w-7 h-7 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center font-mono text-[10px] text-slate-700 font-bold">+</span>
                </div>
                <div>
                  <strong className="text-slate-900 block">Building Since 2020</strong>
                  <span className="text-[11px] text-slate-500">Products, platforms & AI agents</span>
                </div>
              </div>

              <div className="hidden sm:block h-6 w-px bg-slate-200" />

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>150+ Verified Releases · 5.0 Star Feedback</span>
              </div>
            </div>
          </div>

          {/* Right Hero 3D Interactive Stage */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[480px] lg:max-w-none rounded-3xl bg-slate-50/70 border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden backdrop-blur-sm p-2">
              <Hero3DCanvas variant="core" />
            </div>
          </div>

        </div>
      </div>

      {/* Floating Metrics Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="p-3 text-center sm:text-left">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
              {COMPANY_DETAILS.metrics.inMarketSince}
            </div>
            <div className="text-xs text-slate-500 font-mono mt-0.5">Established in Market</div>
          </div>
          <div className="p-3 text-center sm:text-left">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-blue-600">
              {COMPANY_DETAILS.metrics.projectsDelivered}
            </div>
            <div className="text-xs text-slate-500 font-mono mt-0.5">Projects Delivered</div>
          </div>
          <div className="p-3 text-center sm:text-left">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
              {COMPANY_DETAILS.metrics.supportCoverage}
            </div>
            <div className="text-xs text-slate-500 font-mono mt-0.5">Client & AI Support</div>
          </div>
          <div className="p-3 text-center sm:text-left">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-600">
              5.0 ★
            </div>
            <div className="text-xs text-slate-500 font-mono mt-0.5">Verified Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
