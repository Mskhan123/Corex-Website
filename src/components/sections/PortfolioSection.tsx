import React, { useState } from 'react';
import { ArrowUpRight, Check, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { PROJECTS } from '../../data/siteData';
import { ProjectItem } from '../../types';
import { Card3DTilt } from '../3d/Card3DTilt';

interface PortfolioSectionProps {
  onOpenEstimator: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenEstimator }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="portfolio" className="relative py-16 sm:py-24 border-t border-slate-200 bg-slate-50/50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
              <span>03 / SELECTED OUTCOMES</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
              Work that earns<br />
              <span className="text-blue-600">
                its place.
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Product strategy, interface design and engineering brought together around measurable business outcomes.
              Client identities are protected where non-disclosure applies.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs self-start md:self-auto">
            {['all', 'ai', 'web', 'mobile', 'enterprise', 'growth'].map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-500/80 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';
                    }}
                  />
                  
                  {/* Category & Index Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-slate-800 font-semibold uppercase shadow-xs">
                      {project.index} · {project.categoryLabel}
                    </span>
                  </div>

                  {/* Primary Outcome Metric Ribbon */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-blue-600 text-white font-display font-extrabold text-sm shadow-md">
                    {project.metrics[0].value}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-600 font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 font-mono">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="text-sm font-bold text-slate-900">{m.value}</div>
                        <div className="text-[10px] text-slate-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Bottom: Project Action */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors font-medium"
                >
                  <span>Build Similar Outcome</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
              Have an ambitious challenge worth solving?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Bring us your hardest workflow, manual bottleneck, or platform idea.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenEstimator}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Estimate Custom Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
