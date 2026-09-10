import React, { useState } from 'react';
import { Activity, BarChart2, TrendingUp, CheckCircle, Clock, ShieldCheck, Zap } from 'lucide-react';
import { Card3DTilt } from '../3d/Card3DTilt';

export const ImpactSection: React.FC = () => {
  const [activeSignal, setActiveSignal] = useState<'satisfaction' | 'leads' | 'tasks'>('satisfaction');
  const [simulatedAgents, setSimulatedAgents] = useState<number>(3);

  // Dynamic calculations based on simulated agents
  const efficiencyMultiplier = (1 + (simulatedAgents - 1) * 0.28).toFixed(1);
  const hoursSavedWeekly = Math.round(simulatedAgents * 18);
  const responseSpeedSec = Math.max(3, Math.round(45 / simulatedAgents));

  return (
    <section id="impact" className="relative py-16 sm:py-24 border-t border-slate-200 bg-white overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>02 / MEASURABLE IMPACT</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Ideas are cheap.<br />
            <span className="text-blue-600">
              Impact is engineered.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            AI agents and custom platforms are most valuable when their effect is clearly visible on the balance sheet.
            We map every automation to response latency, completed work, and customer satisfaction.
          </p>
        </div>

        {/* Impact Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Performance Signals & Dynamic Bar Model */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-mono text-blue-600 uppercase tracking-wider block font-semibold">
                    Performance Signals
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900 mt-0.5">
                    Live Automation Impact Model
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                  LIVE BENCHMARKS
                </span>
              </div>

              {/* Dynamic Animated Bars */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-700 flex items-center gap-2 font-medium">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Customer Satisfaction Score
                    </span>
                    <strong className="text-blue-600 text-sm font-bold">92%</strong>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-700"
                      style={{ width: '92%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-700 flex items-center gap-2 font-medium">
                      <Zap className="w-4 h-4 text-indigo-600" />
                      Lead Response Acceleration
                    </span>
                    <strong className="text-indigo-600 text-sm font-bold">86%</strong>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bg-indigo-600 rounded-full transition-all duration-700"
                      style={{ width: '86%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-700 flex items-center gap-2 font-medium">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      Repetitive Work Automated
                    </span>
                    <strong className="text-emerald-600 text-sm font-bold">74%</strong>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bg-emerald-600 rounded-full transition-all duration-700"
                      style={{ width: '74%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Multi-agent Simulator Slider */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-700 uppercase font-semibold">
                    Interactive Agent Fleet Simulator
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {simulatedAgents} Active Agents
                  </span>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={simulatedAgents}
                  onChange={e => setSimulatedAgents(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />

                <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-base font-bold text-slate-900">~{hoursSavedWeekly}h</div>
                    <div className="text-[10px] text-slate-500">Weekly Saved</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-base font-bold text-blue-600">{efficiencyMultiplier}×</div>
                    <div className="text-[10px] text-slate-500">Team Velocity</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-base font-bold text-emerald-600">{responseSpeedSec}s</div>
                    <div className="text-[10px] text-slate-500">Response Time</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-mono mt-6">
              Illustrative automation opportunity model benchmarked from active enterprise deployments.
            </p>
          </div>

          {/* Right: Selected Real Performance Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 flex items-start gap-4 shadow-xs"
            >
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-display font-extrabold text-2xl text-slate-900">24/7 Autopilot</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Support and lead triage operates round-the-clock without shift fatigue or delayed replies during holidays and weekends.
                </p>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 flex items-start gap-4 shadow-xs"
            >
              <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-display font-extrabold text-2xl text-slate-900">3.8× Growth Impact</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From sub-second Next.js web systems to headless checkout and conversion architecture engineered to win trust.
                </p>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 flex items-start gap-4 shadow-xs"
            >
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-display font-extrabold text-2xl text-slate-900">360° Visibility</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consolidate scattered documents and fragmented spreadsheets into one hardened, audit-compliant digital operations hub.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
