import React from 'react';
import { Film, Target, ShieldCheck, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Editorial Subheading */}
        <div className="text-center sm:text-left mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00ff87]">
            Sobre a Lance Certo
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-8 text-balance">
          MUITO MAIS QUE UMA EDIÇÃO.
        </h2>

        {/* Core content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-zinc-200 font-normal leading-relaxed">
              A Lance Certo transforma seus melhores momentos em materiais profissionais que valorizam sua trajetória dentro do futebol.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              Do vídeo ao visual, cada material é pensado para apresentar o atleta da melhor forma.
            </p>

            {/* Distinctive highlighted phrase */}
            <div className="p-5 rounded-xl bg-zinc-950/80 border-l-4 border-l-[#00ff87] border border-white/10">
              <p className="text-base sm:text-lg font-semibold text-white tracking-wide">
                "Seu futebol merece ser apresentado à altura."
              </p>
            </div>
          </div>

          {/* Graphical sports analysis card */}
          <div className="lg:col-span-5 bg-zinc-950/70 rounded-2xl border border-white/10 p-6 relative overflow-hidden backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 text-xs font-mono-numbers text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff87]" />
                PADRÃO PROFISSIONAL
              </span>
              <span>1080p / 4K UHD</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#00ff87] shrink-0 mt-0.5">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Recortes Cirúrgicos</h4>
                  <p className="text-xs text-zinc-400">Identificação clara do jogador com spot de luz e foco tático.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#00ff87] shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ritmo & Dinâmica</h4>
                  <p className="text-xs text-zinc-400">Edição com timing adequado para técnicos, scouts e intermediários.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#00ff87] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Apresentação Oficial</h4>
                  <p className="text-xs text-zinc-400">Capas e contracapas que valorizam o currículo desportivo do atleta.</p>
                </div>
              </div>
            </div>

            {/* Bottom timecode strip */}
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-numbers text-zinc-500">
              <span>LANCE CERTO STUDIO</span>
              <span className="text-[#00ff87]">MATCH READY</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
