import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Sparkles, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS, SERVICES } from '../../data/siteData';

const WHATSAPP_PROMPTS = [
  {
    id: 'p1',
    label: 'Start a New Project',
    msg: 'Hi Corex IT Solutions, I would like to discuss a new project. Could you please tell me what information you need to get started?'
  },
  {
    id: 'p2',
    label: 'Request Price Quotation',
    msg: 'Hi Corex IT Solutions, I would like an estimated price for my project. What details should I send you for an accurate quotation?'
  },
  {
    id: 'p3',
    label: 'Book Consultation',
    msg: 'Hi Corex IT Solutions, I would like to book a consultation with your engineering leadership. Please let me know your available times.'
  },
  {
    id: 'p4',
    label: 'Project Timeline',
    msg: 'Hi Corex IT Solutions, I would like to understand the expected timeline for my project. What details do you need from me?'
  },
  {
    id: 'p5',
    label: 'Existing System Support',
    msg: 'Hi Corex IT Solutions, I need help with an existing digital system or app. Can we discuss the issue and support options?'
  }
];

export const ContactSection: React.FC = () => {
  // Direct Brief Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Autonomous AI Agents & Workflows');
  const [budget, setBudget] = useState('SAR 25,000 – 50,000');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // WhatsApp Tab State
  const [selectedPrompt, setSelectedPrompt] = useState(WHATSAPP_PROMPTS[0].id);
  const [customWhatsAppMsg, setCustomWhatsAppMsg] = useState(WHATSAPP_PROMPTS[0].msg);

  // Map Zoom State
  const [mapZoomLevel, setMapZoomLevel] = useState<'office' | 'province' | 'saudi'>('office');

  const handleSelectPrompt = (p: typeof WHATSAPP_PROMPTS[0]) => {
    setSelectedPrompt(p.id);
    setCustomWhatsAppMsg(p.msg);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setFormSubmitted(true);

    // Prepare WhatsApp message as companion option
    const briefText = `*New Project Inquiry from CoreX Website*:
*Client*: ${name}
*Email*: ${email}
*Phone*: ${phone}
*Service*: ${service}
*Budget Range*: ${budget}
*Brief*: ${message}`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(briefText)}`;
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const handleSendCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(customWhatsAppMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Map zoom query params for OpenStreetMap iframe
  const mapCoordinates = {
    office: { lat: 26.4207, lon: 50.0888, zoom: 12 },
    province: { lat: 26.3927, lon: 50.1903, zoom: 10 },
    saudi: { lat: 24.7136, lon: 46.6753, zoom: 6 }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 border-t border-slate-200 bg-slate-50/50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>07 / GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Ready to engineer<br />
            <span className="text-blue-600">
              digital momentum?
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Let’s turn your ideas into functional, beautiful digital reality. Send a project brief directly to our senior engineers or connect instantly on WhatsApp.
          </p>
        </div>

        {/* Contact Grid: Form & Direct Communication */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Project Brief Submission */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Submit a Project Brief
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct review by Kazim, Sulaiman and Imran within 2–4 hours.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-700 flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                ACTIVE
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-xl text-slate-900">
                  Project Brief Received!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-blue-600 font-semibold">{name}</span>. We are reviewing your requirements and have also opened your WhatsApp channel for instant coordination.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-blue-600 hover:underline"
                  >
                    Submit another inquiry →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Sultan Al-Ghamdi"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:outline-none text-slate-900 text-xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:outline-none text-slate-900 text-xs transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+966 5x xxx xxxx"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:outline-none text-slate-900 text-xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={service}
                      onChange={e => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:outline-none text-slate-900 text-xs transition-colors"
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Complex Multi-Platform System">
                        Custom Complex Multi-Platform System
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Estimated Budget Bracket
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['SAR 20k - 35k', 'SAR 35k - 60k', 'SAR 60k - 120k', 'SAR 120k+ / Scale'].map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-2 rounded-lg border text-center text-[11px] font-medium transition-colors ${
                          budget === b
                            ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Describe your project or core challenge *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell us about what you want to build, current technical bottlenecks, timeline goals, and user scale..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:outline-none text-slate-900 text-xs resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-contact-submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all transform active:scale-[0.99]"
                >
                  <span>Submit Brief & Open Direct Channel</span>
                  <Send className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Mutual NDA protected
                  </span>
                  <span>Zero spam guarantee</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Instant WhatsApp Presets & Office Hub */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Launcher Box */}
            <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">
                      Instant WhatsApp Channel
                    </h3>
                    <p className="text-[11px] font-mono text-emerald-700 font-medium">
                      +966 56 329 8385 · Real engineer on standby
                    </p>
                  </div>
                </div>
              </div>

              {/* Presets */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase text-slate-500 block font-semibold">
                  Quick Inquiry Questions:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {WHATSAPP_PROMPTS.map(prompt => (
                    <button
                      key={prompt.id}
                      type="button"
                      onClick={() => handleSelectPrompt(prompt)}
                      className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                        selectedPrompt === prompt.id
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 font-semibold'
                          : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
                      }`}
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSendCustomWhatsApp} className="space-y-3">
                <textarea
                  rows={3}
                  value={customWhatsAppMsg}
                  onChange={e => setCustomWhatsAppMsg(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:bg-white focus:outline-none focus:border-emerald-500 resize-none font-sans"
                />
                <button
                  type="submit"
                  id="btn-whatsapp-section-send"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Chat on WhatsApp (+966 56 329 8385)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Direct Communication Channels */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-700 font-semibold">
                Direct Contact Lines
              </h4>

              <div className="space-y-3 text-xs">
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-blue-300 hover:bg-blue-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-blue-600">{COMPANY_DETAILS.email}</div>
                      <div className="text-[10px] text-slate-500 font-mono">Formal proposals & NDAs</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.phoneDirect}`}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-blue-300 hover:bg-blue-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-blue-600">{COMPANY_DETAILS.primaryMobile}</div>
                      <div className="text-[10px] text-slate-500 font-mono">Mobile & WhatsApp (Direct)</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">{COMPANY_DETAILS.headquarters}</div>
                    <div className="text-[10px] text-slate-500 font-mono">Eastern Province · Kingdom of Saudi Arabia</div>
                  </div>
                </div>
              </div>

              {/* Interactive Office Location Map */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold">
                    Location Radar
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setMapZoomLevel('office')}
                      className={`px-2 py-0.5 rounded transition-colors ${mapZoomLevel === 'office' ? 'bg-blue-50 text-blue-700 border border-blue-200 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      Dammam/Khobar
                    </button>
                    <button
                      type="button"
                      onClick={() => setMapZoomLevel('saudi')}
                      className={`px-2 py-0.5 rounded transition-colors ${mapZoomLevel === 'saudi' ? 'bg-blue-50 text-blue-700 border border-blue-200 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      Saudi Arabia
                    </button>
                  </div>
                </div>

                <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <iframe
                    title="CoreX Office Dammam-Khobar Location"
                    className="w-full h-full"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapCoordinates[mapZoomLevel].lon - 0.2}%2C${mapCoordinates[mapZoomLevel].lat - 0.15}%2C${mapCoordinates[mapZoomLevel].lon + 0.2}%2C${mapCoordinates[mapZoomLevel].lat + 0.15}&layer=mapnik&marker=${mapCoordinates[mapZoomLevel].lat}%2C${mapCoordinates[mapZoomLevel].lon}`}
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-mono font-semibold text-slate-800 shadow-xs">
                    📍 Dammam–Khobar, KSA
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
