import React from 'react';
import { X, CheckCircle, ArrowRight, Star, Bot, Globe, Smartphone, Layout, Server, TrendingUp, Cloud, ShieldCheck, Database, CheckCircle2, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';
import { REVIEWS, COMPANY_DETAILS } from '../data/siteData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
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

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenEstimator
}) => {
  if (!service) return null;

  const matchingReview = REVIEWS.find(r => r.serviceId === service.id) || REVIEWS[0];

  const handleWhatsAppInquiry = () => {
    const text = `Hi Corex IT Solutions, I am interested in discussing your "${service.title}" service for my business. Could you please share how we can get started?`;
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl text-slate-900 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
              {ICON_MAP[service.iconName] || <Bot className="w-5 h-5 text-blue-600" />}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-blue-700 font-semibold uppercase tracking-wider">
                  {service.index} / {service.label}
                </span>
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
                {service.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto text-sm leading-relaxed text-slate-600">
          {/* Summary & Description */}
          <div className="space-y-3">
            <p className="text-base text-slate-900 font-medium leading-relaxed">
              {service.summary}
            </p>
            <p className="text-slate-600">
              {service.description}
            </p>
          </div>

          {/* Deliverables Grid */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">
              What We Deliver
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800"
                >
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">
              Architecture & Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Process Breakdown: Discover -> Design -> Deliver */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">
              Delivery Sequence
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-blue-700 font-mono font-bold">01 / DISCOVER</span>
                <p className="text-slate-600 text-[12px]">We map the business bottleneck, workflows, constraints and exact measures of success.</p>
              </div>
              <div className="space-y-1">
                <span className="text-blue-700 font-mono font-bold">02 / ARCHITECT</span>
                <p className="text-slate-600 text-[12px]">We design interface systems and data models before expensive build commitments.</p>
              </div>
              <div className="space-y-1">
                <span className="text-blue-700 font-mono font-bold">03 / DELIVER</span>
                <p className="text-slate-600 text-[12px]">We build in transparent weekly cycles with continuous automated tests and deployment.</p>
              </div>
            </div>
          </div>

          {/* Client Feedback Quote */}
          {matchingReview && (
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
                <span className="text-xs font-mono text-slate-600 ml-2 font-medium">Verified Client Feedback</span>
              </div>
              <blockquote className="italic text-slate-800 text-xs leading-relaxed">
                "{matchingReview.quote}"
              </blockquote>
              <div className="text-[11px] font-mono text-slate-500">
                — {matchingReview.authorRole} · {matchingReview.companyType}
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenEstimator(service.id);
            }}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Estimate Budget & Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+966 56 329 8385)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
