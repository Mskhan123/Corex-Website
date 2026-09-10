import React, { useState } from 'react';
import { ArrowRight, Bot, Globe, Smartphone, Layout, Server, TrendingUp, Cloud, ShieldCheck, Database, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { SERVICES } from '../../data/siteData';
import { ServiceItem } from '../../types';
import { Card3DTilt } from '../3d/Card3DTilt';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenEstimator: (serviceId: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-5 h-5 text-blue-600" />,
  Globe: <Globe className="w-5 h-5 text-blue-600" />,
  Smartphone: <Smartphone className="w-5 h-5 text-blue-600" />,
  Layout: <Layout className="w-5 h-5 text-blue-600" />,
  Server: <Server className="w-5 h-5 text-blue-600" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-blue-600" />,
  Cloud: <Cloud className="w-5 h-5 text-blue-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
  Database: <Database className="w-5 h-5 text-blue-600" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-blue-600" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenEstimator
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'ai' | 'engineering' | 'cloud_data'>('all');

  const filteredServices = SERVICES.filter(s => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'ai') return s.id === 'ai' || s.id === 'growth';
    if (filterCategory === 'engineering') return s.id === 'web' || s.id === 'mobile' || s.id === 'uiux' || s.id === 'enterprise';
    if (filterCategory === 'cloud_data') return s.id === 'cloud' || s.id === 'security' || s.id === 'data' || s.id === 'quality';
    return true;
  });

  return (
    <section id="services" className="relative py-16 sm:py-24 border-t border-slate-200 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
              <span>01 / CAPABILITIES SYSTEM</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
              Everything needed to build,<br />
              <span className="text-blue-600">
                launch and scale.
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              One senior team across strategy, design, AI automation and software engineering. Choose one capability or bring us the whole product.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterCategory === 'all'
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All (10)
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('ai')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterCategory === 'ai'
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              AI & Automation
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('engineering')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterCategory === 'engineering'
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Web & Mobile
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('cloud_data')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterCategory === 'cloud_data'
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Cloud & Security
            </button>
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-500/80 p-5 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              onClick={() => onSelectService(service)}
            >
              <div className="space-y-4">
                {/* Natural Photography Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to a verified reliable Unsplash high-tech photo
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-mono font-semibold text-slate-800 shadow-xs">
                    {service.index} / {service.label}
                  </div>
                  <div className="absolute top-2.5 right-2.5 p-2 rounded-lg bg-white/95 backdrop-blur-sm shadow-xs border border-slate-100">
                    {ICON_MAP[service.iconName] || <Bot className="w-4 h-4 text-blue-600" />}
                  </div>
                </div>

                {/* Title & Summary */}
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Deliverables snippet pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Explore Service & Estimator Trigger */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Explore service specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEstimator(service.id);
                  }}
                  className="text-[11px] font-mono font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  Estimate
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
