import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/siteData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 sm:py-20 border-t border-slate-200 bg-slate-50/60 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>06 / COMMON QUESTIONS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Straight answers to<br />
            <span className="text-blue-600">
              frequent questions.
            </span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Everything you need to know about working with CoreX senior engineers.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-white border border-slate-200 overflow-hidden transition-colors hover:border-slate-300 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-blue-600 bg-blue-50 border-blue-200' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
