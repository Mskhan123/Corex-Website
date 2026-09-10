import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, Cpu, Zap, BarChart3, Layers, Bot } from 'lucide-react';
import { Card3DTilt } from './3d/Card3DTilt';

interface IndustryRecommendation {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  challenges: string[];
  recommendedStack: {
    title: string;
    description: string;
  }[];
  expectedOutcome: string;
  caseStudyLink: string;
}

const INDUSTRY_RECOMMENDATIONS: IndustryRecommendation[] = [
  {
    id: 'proptech',
    name: 'Real Estate & PropTech',
    badge: 'CRM & PIPELINE INTELLIGENCE',
    tagline: 'Connect broker pipelines, client agreements, and unit listings into one single source of truth.',
    challenges: [
      'Scattered lead tracking across WhatsApp and spreadsheets',
      'Slow manual drafting and signature collection for contracts',
      'Delayed unit availability updates between brokers and sales team'
    ],
    recommendedStack: [
      { title: 'Property Nexus CRM Platform', description: 'Centralized sales command center with 360° pipeline visibility and broker commission calculators.' },
      { title: 'AI Document Parsing & Generation', description: 'Automated contract generation with digital signature compliance and OCR manifest extraction.' },
      { title: 'WhatsApp Automation Gateway', description: 'Immediate autonomous response to new buyer inquiries and unit status inquiries.' }
    ],
    expectedOutcome: '360° pipeline transparency, 62% faster sales cycle, and zero lost leads.',
    caseStudyLink: 'Property Nexus Hub'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Omnichannel',
    badge: 'HIGH-VELOCITY COMMERCE',
    tagline: 'Lightning-fast digital storefronts built around conversion psychology and MENA payment integration.',
    challenges: [
      'High mobile checkout abandonment due to slow page loads',
      'Fragmented stock sync between online store and physical warehouse',
      'Repetitive customer support tickets regarding order status and returns'
    ],
    recommendedStack: [
      { title: 'Headless Next.js Storefront', description: 'Sub-second page speeds, Google Core Web Vitals 99+, and rich fluid micro-interactions.' },
      { title: '24/7 AI Support Copilot', description: 'Instant order tracking, return requests, and personalized cross-selling in Arabic and English.' },
      { title: 'Direct Mada & Apple Pay Checkout', description: 'Frictionless 1-click checkout flow reducing drop-offs dramatically.' }
    ],
    expectedOutcome: '3.8× revenue growth, -42% cart abandonment, and instant customer service.',
    caseStudyLink: 'Commerce Velocity'
  },
  {
    id: 'logistics',
    name: 'Logistics & Field Operations',
    badge: 'OFFLINE-FIRST FIELD PRODUCT',
    tagline: 'Keep distributed teams, dispatchers, and live customer tracking completely unified.',
    challenges: [
      'Field technicians losing connection in remote warehouses or basements',
      'Manual paper status logging and delayed proof-of-delivery photos',
      'Inefficient dispatch routing causing wasted fuel and time'
    ],
    recommendedStack: [
      { title: 'FieldFlow Mobile App (iOS/Android)', description: 'Offline-first SQLite local sync, 1-tap status logging, and GPS geo-validation.' },
      { title: 'Dispatcher Operations Dashboard', description: 'Real-time telemetry map, technician assignment, and SLA alerts.' },
      { title: 'Automated Customer SMS/WhatsApp Tracking', description: 'Live tracking links and proactive arrival notifications.' }
    ],
    expectedOutcome: '35% field efficiency improvement, 100% offline uptime, and real-time coordination.',
    caseStudyLink: 'FieldFlow Mobile'
  },
  {
    id: 'enterprise_ai',
    name: 'Enterprise & Knowledge Work',
    badge: 'AUTONOMOUS BUSINESS AGENTS',
    tagline: 'Turn manual administrative friction into reliable, self-driving AI workflows.',
    challenges: [
      'Employees spending 15+ hours weekly answering repetitive inquiries and preparing reports',
      'Company knowledge siloed in scattered PDFs, emails, and SharePoint folders',
      'Delayed approval loops between operations and leadership'
    ],
    recommendedStack: [
      { title: 'CoreX Multi-Agent Orchestrator', description: 'Coordinated AI agents for document verification, executive briefings, and ticket triage.' },
      { title: 'Secure Enterprise RAG Knowledge Base', description: 'Zero-data-leakage vector database answering queries grounded strictly in internal documents.' },
      { title: 'Audit Trail & Human-in-the-Loop', description: 'Granular role-based controls and supervisor escalation routing.' }
    ],
    expectedOutcome: '74% repeatable tasks automated, 24/7 operation, and 68% faster document processing.',
    caseStudyLink: 'AI Operations Command'
  }
];

interface AISolutionAdvisorProps {
  onOpenEstimator: (serviceId: string) => void;
}

export const AISolutionAdvisor: React.FC<AISolutionAdvisorProps> = ({ onOpenEstimator }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('proptech');

  const activeRec = INDUSTRY_RECOMMENDATIONS.find(i => i.id === selectedIndustry) || INDUSTRY_RECOMMENDATIONS[0];

  return (
    <section id="ai-advisor" className="relative py-16 sm:py-24 border-t border-slate-200 bg-slate-50/50 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTELLIGENT SOLUTION ADVISOR</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Tailored digital architecture.<br />
            <span className="text-blue-600">
              Designed for your exact industry.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Select your operating domain below to see the recommended technology stack, automation agents, and validated business impact.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {INDUSTRY_RECOMMENDATIONS.map(ind => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setSelectedIndustry(ind.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                selectedIndustry === ind.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Recommendation Showcase Card */}
        <Card3DTilt
          id="advisor-recommendation-card"
          className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Challenges & Problem Space */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold block mb-1">
                  {activeRec.badge}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
                  {activeRec.name}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {activeRec.tagline}
                </p>
              </div>

              {/* Common Friction Points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Key Friction Points We Solve:</span>
                </h4>
                <div className="space-y-2">
                  {activeRec.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Callout */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                <div className="text-[11px] font-mono text-blue-800 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Target Commercial Impact
                </div>
                <div className="text-sm font-semibold text-slate-900 leading-snug">
                  {activeRec.expectedOutcome}
                </div>
              </div>
            </div>

            {/* Right Column: Recommended CoreX Architecture */}
            <div className="lg:col-span-7 space-y-6 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8 pt-6 lg:pt-0">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>Recommended Technology Architecture</span>
                </h4>
                <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                  PRODUCTION BLUEPRINT
                </span>
              </div>

              <div className="space-y-3">
                {activeRec.recommendedStack.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  id="btn-advisor-estimate"
                  onClick={() => onOpenEstimator('ai')}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Build This Solution with CoreX</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Architecture Review</span>
                </a>
              </div>
            </div>
          </div>
        </Card3DTilt>
      </div>
    </section>
  );
};
