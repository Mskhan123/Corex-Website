import React from 'react';
import { Users, ShieldCheck, Code2, Sparkles, ArrowRight, MessageSquare, Terminal } from 'lucide-react';
import { TEAM_MEMBERS, COMPANY_DETAILS } from '../../data/siteData';
import { Card3DTilt } from '../3d/Card3DTilt';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative py-16 sm:py-24 border-t border-slate-200 bg-white overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>04 / SENIOR MINDS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            The people behind<br />
            <span className="text-blue-600">
              the systems.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We keep the senior team direct to the work. No account manager telephone games.
            No disappearing after kickoff. Strategy, architecture and hands-on coding under one roof.
          </p>
        </div>

        {/* 3 Team Leadership 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map(member => (
            <Card3DTilt
              key={member.id}
              id={`team-card-${member.id}`}
              maxTilt={6}
              className="rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md p-6 flex flex-col justify-between transition-all shadow-xs"
            >
              <div className="space-y-5">
                {/* Photo Frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback avatar if external image fails
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2563eb&color=ffffff&size=512`;
                    }}
                  />
                  
                  {/* Track label */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-blue-700 font-bold shadow-xs">
                      {member.track}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-blue-600 mt-0.5">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Specialties Badges */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                    Specializations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(`Hi Corex IT Solutions, I would like to schedule a technical consultation with ${member.name} regarding a new project.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-blue-700 font-mono text-xs flex items-center justify-center gap-2 transition-colors font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book Consultation with {member.name.split(' ').pop()}</span>
                </a>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Operating Philosophy Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-slate-900">
                One table. One outcome.
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                Strategy, design and engineering collaborate as one coherent engine from day one to deployment.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Discuss your system needs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
