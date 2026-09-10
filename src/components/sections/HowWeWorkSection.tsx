import React, { useState } from 'react';
import { Compass, ArrowRight } from 'lucide-react';
import { PRINCIPLES, WORKING_MODELS } from '../../data/siteData';
import { Card3DTilt } from '../3d/Card3DTilt';

interface HowWeWorkSectionProps {
  onOpenEstimator: (serviceId?: string) => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenEstimator }) => {
  const [selectedModel, setSelectedModel] = useState<string>('02');

  return (
    <section id="process" className="relative py-16 sm:py-24 border-t border-slate-200 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>05 / OPERATING RHYTHM</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            How we think.<br />
            <span className="text-blue-600">
              How we build.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            High standards. Low ego. We believe the best digital work happens when client and engineering teams share context, respect constraints and move with deliberate speed.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {PRINCIPLES.map((principle, pIdx) => (
            <div
              key={principle.index || pIdx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400/80 transition-colors space-y-3 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-blue-600 font-bold">
                  {principle.index}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 px-2 py-0.5 rounded bg-white border border-slate-200 font-medium">
                  {principle.tag}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-slate-900">
                {principle.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engagement Models Header */}
        <div className="pt-12 border-t border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 block mb-1 font-semibold">
              Engage at your pace
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-950">
              Three clear ways to work with CoreX
            </h3>
          </div>

          {/* Engagement Models Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORKING_MODELS.map((model) => (
              <div
                key={model.index}
                className={`p-6 sm:p-7 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                  selectedModel === model.index
                    ? 'bg-white border-2 border-blue-600 shadow-md ring-1 ring-blue-600/20'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
                onClick={() => setSelectedModel(model.index)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-blue-600 tracking-wider font-semibold">
                      {model.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {model.timeline}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-xl text-slate-900">
                      {model.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {model.description}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 block mb-1 font-semibold">
                      Ideal For:
                    </span>
                    {model.idealFor}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenEstimator();
                    }}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      selectedModel === model.index
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-medium'
                    }`}
                  >
                    <span>Configure {model.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
