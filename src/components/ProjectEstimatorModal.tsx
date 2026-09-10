import React, { useState, useMemo } from 'react';
import { X, Check, Calculator, Sparkles, Send, ArrowRight, Shield, Clock, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS } from '../data/siteData';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

const SERVICE_OPTIONS = [
  { id: 'ai', name: 'AI Agents & Automation', baseSAR: 35000, baseWeeks: 4, icon: 'Bot' },
  { id: 'web', name: 'High-Velocity Web / E-Commerce', baseSAR: 25000, baseWeeks: 3, icon: 'Globe' },
  { id: 'mobile', name: 'Mobile App (iOS & Android)', baseSAR: 45000, baseWeeks: 6, icon: 'Smartphone' },
  { id: 'uiux', name: 'UI/UX Engineering & Design System', baseSAR: 20000, baseWeeks: 3, icon: 'Layout' },
  { id: 'enterprise', name: 'Enterprise Software & Core Systems', baseSAR: 60000, baseWeeks: 8, icon: 'Server' },
  { id: 'cloud', name: 'Cloud, DevOps & Security', baseSAR: 30000, baseWeeks: 3, icon: 'Shield' }
];

const ENGAGEMENT_MODELS = [
  { id: 'sprint', name: 'Strategic Sprint', multiplier: 0.75, weeksDelta: -1, desc: '2–4 week sharp validation & prototype' },
  { id: 'build', name: 'Full Product Launch', multiplier: 1.0, weeksDelta: 0, desc: 'End-to-end design, build and launch' },
  { id: 'partner', name: 'Scale Partner', multiplier: 1.6, weeksDelta: 4, desc: 'Dedicated senior pod shipping continuously' }
];

const ADDON_OPTIONS = [
  { id: 'bilingual', name: 'Bilingual (Arabic RTL + English)', costSAR: 6000, weeks: 1 },
  { id: 'ai_rag', name: 'Custom AI Knowledge (RAG / Embeddings)', costSAR: 12000, weeks: 2 },
  { id: 'payment', name: 'Mada, Apple Pay & GCC Payment Gateway', costSAR: 8000, weeks: 1 },
  { id: 'offline', name: 'Offline-First Sync & Field Mode', costSAR: 9000, weeks: 1.5 },
  { id: 'security', name: 'Enterprise Zero-Trust & Audit Hardening', costSAR: 10000, weeks: 1.5 },
  { id: 'sla', name: '24/7 Priority SLA & Telemetry', costSAR: 7000, weeks: 0 }
];

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [selectedService, setSelectedService] = useState<string>(initialServiceId || 'ai');
  const [selectedModel, setSelectedModel] = useState<string>('build');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['bilingual']);
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const service = SERVICE_OPTIONS.find(s => s.id === selectedService) || SERVICE_OPTIONS[0];
    const model = ENGAGEMENT_MODELS.find(m => m.id === selectedModel) || ENGAGEMENT_MODELS[1];

    let totalSAR = service.baseSAR * model.multiplier;
    let totalWeeks = Math.max(2, Math.round(service.baseWeeks + model.weeksDelta));

    selectedAddons.forEach(addonId => {
      const addon = ADDON_OPTIONS.find(a => a.id === addonId);
      if (addon) {
        totalSAR += addon.costSAR;
        totalWeeks += addon.weeks;
      }
    });

    const minSAR = Math.round(totalSAR * 0.9 / 1000) * 1000;
    const maxSAR = Math.round(totalSAR * 1.15 / 1000) * 1000;
    const minUSD = Math.round(minSAR / 3.75);
    const maxUSD = Math.round(maxSAR / 3.75);

    return {
      service,
      model,
      minSAR,
      maxSAR,
      minUSD,
      maxUSD,
      weeks: Math.round(totalWeeks)
    };
  }, [selectedService, selectedModel, selectedAddons]);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);

    const addonsText = selectedAddons
      .map(id => ADDON_OPTIONS.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Hi Corex IT Solutions, I configured a project estimate on your website:
*Service*: ${calculation.service.name}
*Engagement*: ${calculation.model.name}
*Features*: ${addonsText || 'Standard scope'}
*Estimated Range*: SAR ${calculation.minSAR.toLocaleString()} – ${calculation.maxSAR.toLocaleString()} (~${calculation.weeks} weeks)
*Name*: ${clientName || 'Not specified'}
*Contact*: ${clientContact || 'Not specified'}
*Notes*: ${clientNotes || 'Looking forward to discussing details.'}`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl text-slate-900 overflow-hidden my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950">
                  Interactive Scope & Cost Estimator
                </h3>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  REAL-TIME MODEL
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Transparent ballpark calculations based on CoreX senior delivery standards
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Configuration Pane */}
          <div className="lg:col-span-7 p-4 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-2">
                01 / Primary Capability
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICE_OPTIONS.map(service => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedService === service.id
                        ? 'bg-blue-50 border-blue-600 text-slate-950 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{service.name}</span>
                      {selectedService === service.id && (
                        <Check className="w-4 h-4 text-blue-600 stroke-[2.5]" />
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500">
                      From SAR {(service.baseSAR).toLocaleString()} · ~{service.baseWeeks}w
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Engagement Model */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-2">
                02 / Engagement Rhythm
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {ENGAGEMENT_MODELS.map(model => (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => setSelectedModel(model.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedModel === model.id
                        ? 'bg-blue-50 border-blue-600 text-slate-950'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-sm font-semibold">{model.name}</div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-tight">{model.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-2">
                03 / Strategic Add-ons & Architecture Needs
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ADDON_OPTIONS.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-2.5 rounded-lg border text-left flex items-start justify-between gap-2 transition-all ${
                        isChecked
                          ? 'bg-blue-50/70 border-blue-300 text-slate-900'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-medium">{addon.name}</div>
                        <div className="text-[10px] text-slate-500">+SAR {addon.costSAR.toLocaleString()}</div>
                      </div>
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                        isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary & Submission Pane */}
          <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono text-slate-500 uppercase">Indicative Scope</span>
                <span className="text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> ~{calculation.weeks} Weeks Delivery
                </span>
              </div>

              {/* Price Display */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider mb-1">
                  Estimated Investment Range
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
                  SAR {calculation.minSAR.toLocaleString()} – {calculation.maxSAR.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  ≈ ${calculation.minUSD.toLocaleString()} – ${calculation.maxUSD.toLocaleString()} USD
                </div>
              </div>

              {/* Team Architecture */}
              <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-2 text-xs">
                <div className="font-semibold text-slate-800 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  Assigned Senior Squad:
                </div>
                <div className="text-slate-600 leading-relaxed">
                  • Engr Muhammad Sulaiman (Senior Systems & Architecture)<br />
                  • Engr Muhammad Kazim (Product Strategy & Direction)<br />
                  • Engr Imran Khan (Scalable Cloud & Performance)
                </div>
              </div>

              {/* Quick Input for Direct Dispatch */}
              <form onSubmit={handleSendWhatsApp} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-700 mb-1 font-medium">Your Name / Organization</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    placeholder="e.g. Tariq / Al-Nokhba Group"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-700 mb-1 font-medium">Mobile / WhatsApp Number</label>
                  <input
                    type="text"
                    value={clientContact}
                    onChange={e => setClientContact(e.target.value)}
                    placeholder="+966 5x xxx xxxx"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-700 mb-1 font-medium">Key Objectives or Questions</label>
                  <textarea
                    rows={2}
                    value={clientNotes}
                    onChange={e => setClientNotes(e.target.value)}
                    placeholder="Briefly describe what you're building or automating..."
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-estimator-send-whatsapp"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all transform active:scale-[0.99]"
                >
                  <span>Dispatch Brief to WhatsApp (+966 56 329 8385)</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span>Protected by mutual NDA · Zero spam guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
