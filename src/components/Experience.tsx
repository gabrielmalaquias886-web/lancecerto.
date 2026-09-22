import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/content';

export const Experience: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center sm:text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00ff87] block mb-2">
            Histórico & Abrangência
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white max-w-2xl leading-tight">
            EXPERIÊNCIA QUE VAI ALÉM DO CAMPO.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Stat Card (+1.000 ATLETAS ATENDIDOS) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl border border-white/10 p-8 text-center sm:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff87]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-[#00ff87] text-xs font-semibold mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>MARCA COMPROVADA</span>
            </div>

            <div className="text-5xl sm:text-6xl font-black text-white font-mono-numbers tracking-tight mb-2">
              +1.000
            </div>

            <div className="text-lg font-bold uppercase tracking-wider text-[#00ff87] mb-2">
              ATLETAS ATENDIDOS
            </div>

            <p className="text-sm text-zinc-400 font-medium">
              Em todo o Brasil e fora dele.
            </p>
          </div>

          {/* Text and Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
              A Lance Certo já desenvolve materiais para atletas profissionais e atletas das categorias de base, criando vídeos e materiais visuais pensados para valorizar cada trajetória.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {EXPERIENCE_LIST.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm sm:text-base text-zinc-200">
                  <div className="w-6 h-6 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Highlighted Quote */}
            <div className="pt-4 border-t border-white/5">
              <p className="text-base sm:text-lg font-semibold text-white tracking-wide">
                "Cada lance conta. Cada detalhe também."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
