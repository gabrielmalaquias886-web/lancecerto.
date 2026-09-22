import React from 'react';
import { Film, Image as ImageIcon, Award, ArrowUpRight } from 'lucide-react';
import { SERVICES, LINKS } from '../data/content';

const iconMap = [Film, ImageIcon, Award];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00ff87] block mb-2">
              Serviços Especializados
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              SEU MATERIAL. <br />
              <span className="text-[#00ff87]">NOSSO TRABALHO.</span>
            </h2>
          </div>

          <div className="text-zinc-400 text-sm sm:text-base max-w-xs sm:text-right font-medium">
            <span className="text-white font-semibold">"Do lance à apresentação."</span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <div
                key={service.number}
                className="group relative rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#00ff87]/40 p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00ff87]/5"
              >
                {/* Top line decoration */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#00ff87]/50 to-transparent transition-all" />

                <div>
                  {/* Top card bar with number & icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono-numbers text-2xl font-bold text-zinc-600 group-hover:text-[#00ff87] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-[#00ff87] group-hover:border-[#00ff87]/30 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card footer CTA link */}
                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 group-hover:text-[#00ff87] transition-colors"
                  >
                    <span>SOLICITAR MATERIAL</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
