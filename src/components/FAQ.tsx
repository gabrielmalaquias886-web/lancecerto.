import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { FAQ_ITEMS, LINKS } from '../data/content';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true, // First one open by default for immediate preview
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="duvidas" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950/60">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00ff87] block mb-2">
            Perguntas & Respostas
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
            DÚVIDAS FREQUENTES
          </h2>
          <p className="text-base sm:text-lg text-zinc-300">
            Ficou com alguma dúvida? A gente facilita o processo para você.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00ff87] border-[#00ff87]/30' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5 whitespace-pre-line font-light">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Primary Action Button */}
        <div className="text-center">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-black bg-[#00ff87] hover:bg-[#00ff87]/90 active:scale-98 transition-all glow-green-sm"
          >
            <span>FAZER ORÇAMENTO</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
