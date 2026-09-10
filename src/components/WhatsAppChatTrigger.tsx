import React, { useState } from 'react';
import { MessageCircle, Send, X, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';

const WHATSAPP_PRESETS = [
  {
    id: 'project',
    title: 'New Project Discussion',
    text: 'Hi Corex IT Solutions, I would like to discuss a new project. Could you please tell me what information you need to get started?'
  },
  {
    id: 'price',
    title: 'Price & Scope Estimate',
    text: 'Hi Corex IT Solutions, I would like an estimated price for my project. What details should I send you for an accurate quotation?'
  },
  {
    id: 'consultation',
    title: 'Book Technical Consultation',
    text: 'Hi Corex IT Solutions, I would like to book a consultation with your senior engineering team. Please let me know your available times.'
  },
  {
    id: 'timeline',
    title: 'Timeline & Delivery Sprint',
    text: 'Hi Corex IT Solutions, I would like to understand the expected timeline for an MVP or automated agent. What details do you need from me?'
  },
  {
    id: 'support',
    title: 'Help with Existing System',
    text: 'Hi Corex IT Solutions, I need assistance with an existing web or software system. Can we discuss the issue and support options?'
  }
];

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState(WHATSAPP_PRESETS[0].text);
  const [selectedPreset, setSelectedPreset] = useState(WHATSAPP_PRESETS[0].id);

  const handleSelectPreset = (preset: typeof WHATSAPP_PRESETS[0]) => {
    setSelectedPreset(preset.id);
    setCustomMsg(preset.text);
  };

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(customMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Action Trigger */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
        {isOpen && (
          <div className="mb-3 w-[calc(100vw-32px)] sm:w-96 rounded-2xl bg-slate-900 border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 p-4 text-slate-100 animate-slideUp">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Direct WhatsApp with CoreX</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono">+966 56 329 8385 · Dammam–Khobar</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md"
                aria-label="Close WhatsApp prompt"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Presets */}
            <div className="my-3 space-y-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Select inquiry type:
              </span>
              <div className="flex flex-wrap gap-1">
                {WHATSAPP_PRESETS.slice(0, 3).map(preset => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                      selectedPreset === preset.id
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
                    }`}
                  >
                    {preset.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <form onSubmit={handleOpenWhatsApp} className="space-y-3">
              <textarea
                rows={3}
                value={customMsg}
                onChange={e => setCustomMsg(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-200 focus:outline-none focus:border-emerald-400 resize-none font-sans"
                placeholder="Type your message for CoreX..."
                required
              />
              <button
                type="submit"
                id="btn-whatsapp-floating-send"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <span>Continue in WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="mt-2 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Direct engineer response · Response within minutes</span>
            </div>
          </div>
        )}

        {/* Floating Bubble Button */}
        <button
          type="button"
          id="btn-whatsapp-bubble-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs shadow-xl shadow-emerald-950/40 transition-all transform hover:scale-105 active:scale-95 border border-emerald-300/30"
          aria-label="Direct WhatsApp chat"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-slate-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-950 rounded-full border-2 border-emerald-400 animate-ping" />
          </div>
          <span className="hidden sm:inline">Chat on WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
      </div>
    </>
  );
};
