import React from 'react';
import { Upload, Scissors, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

const iconSteps = [Upload, Scissors, Sparkles, CheckCircle2];

export const ProcessSteps: React.FC = () => {
  return (
    <section id="como-funciona" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00ff87] block mb-2">
            Fluxo de Produção
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
            DO SEU LANCE AO MATERIAL FINAL.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Processo ágil e direto para que o seu futebol seja visto o quanto antes.
          </p>
        </div>

        {/* Timeline Steps with connecting visual line */}
        <div className="relative">
          
          {/* Desktop connecting horizontal line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-[#00ff87]/10 via-[#00ff87]/50 to-[#00ff87]/10 -translate-y-8 pointer-events-none" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const IconComp = iconSteps[index];
              return (
                <div
                  key={step.step}
                  className="rounded-2xl bg-zinc-950/90 border border-white/10 hover:border-[#00ff87]/40 p-6 flex flex-col justify-between transition-all duration-300 relative group"
                >
                  <div>
                    {/* Step badge and icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono-numbers font-bold text-[#00ff87] px-2.5 py-1 rounded bg-[#00ff87]/10 border border-[#00ff87]/20">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 text-white flex items-center justify-center group-hover:text-[#00ff87] group-hover:border-[#00ff87]/30 transition-all">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-numbers text-zinc-600">
                    <span>FASE 0{index + 1}</span>
                    <span className="text-[#00ff87]">● ATIVO</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
