import React from 'react';

export const TimelineBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle sports pitch / editing grid */}
      <div className="absolute inset-0 timeline-grid opacity-30" />

      {/* Ambient gradient spots (strictly controlled green and deep black) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#00ff87]/7 rounded-full blur-[140px]" />
      <div className="absolute top-[35%] -left-32 w-[500px] h-[500px] bg-[#00ff87]/4 rounded-full blur-[160px]" />
      <div className="absolute top-[70%] -right-32 w-[550px] h-[550px] bg-[#00ff87]/5 rounded-full blur-[160px]" />

      {/* Editing timeline visual accents (subtle markers along edges) */}
      <div className="hidden lg:block absolute left-4 top-1/4 h-64 border-l border-white/5 pl-2 font-mono-numbers text-[10px] text-zinc-700 select-none">
        <div>00:00:12:04</div>
        <div className="h-12 border-l border-white/10 my-2 ml-1" />
        <div>00:01:45:18</div>
        <div className="h-20 border-l border-emerald-500/20 my-2 ml-1" />
        <div>REC ● 60FPS</div>
      </div>

      <div className="hidden lg:block absolute right-4 top-1/2 h-64 border-r border-white/5 pr-2 font-mono-numbers text-[10px] text-zinc-700 text-right select-none">
        <div>PRORES 422 HQ</div>
        <div className="h-16 border-r border-white/10 my-2 mr-1" />
        <div>AUDIO CH 01/02</div>
        <div className="h-20 border-r border-emerald-500/20 my-2 mr-1" />
        <div>MATCH CUT // OK</div>
      </div>
    </div>
  );
};
