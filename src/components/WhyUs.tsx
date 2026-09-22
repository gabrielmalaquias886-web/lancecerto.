import React from 'react';
import { Award, Palette, Trophy, Sparkles } from 'lucide-react';
import { WHY_US_CARDS } from '../data/content';

const iconList = [Award, Palette, Trophy, Sparkles];

export const WhyUs: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00ff87] block mb-2">
            Diferenciais Exclusivos
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            POR QUE LANCE CERTO?
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-medium">
            "Seu futebol não precisa falar sozinho."
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_CARDS.map((card, index) => {
            const IconComponent = iconList[index % iconList.length];
            return (
              <div
                key={card.title}
                className="group rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#00ff87]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00ff87]/5"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 text-[#00ff87] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold uppercase tracking-wide text-white mb-2 group-hover:text-[#00ff87] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-numbers text-zinc-600 group-hover:text-zinc-400">
                  <span>0{index + 1}</span>
                  <span>LANCE CERTO</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
