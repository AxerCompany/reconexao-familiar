import React from 'react';
import { Heart, Sparkles, Clock, Lock } from 'lucide-react';
import { FEATURED_MISSIONS } from '../data/missions';

export const MissionSamples: React.FC = () => {
  return (
    <section id="exemplos" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F5EFEB] border-y border-[#E8DFC8]/60">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E06A48] bg-white px-4 py-1.5 rounded-full border border-[#F0D5C7] inline-flex items-center gap-1.5 shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Amostras do Material
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#2C2A29] tracking-tight leading-tight mb-3">
            VEJA ALGUMAS EXPERIÊNCIAS QUE VOCÊS VÃO VIVER JUNTOS
          </h2>
          <p className="text-base sm:text-lg text-[#6B6359] max-w-2xl mx-auto">
            Uma pequena amostra do tipo de missão leve e envolvente que você encontrará ao longo dos 21 dias.
          </p>
        </div>

        {/* 5 Featured Material Sample Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {FEATURED_MISSIONS.map((mission, index) => {
            const isWide = index === 4;
            return (
              <div 
                key={mission.day}
                className={`bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D7C4] shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group ${
                  isWide ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#FFFDF9] to-[#FFF6F0]' : ''
                }`}
              >
                {/* Badge [EXEMPLO DO MATERIAL] */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E06A48] bg-[#FFF3EC] border border-[#F5DACB] px-2.5 py-1 rounded-md">
                    {mission.badge}
                  </span>
                  <span className="text-xs font-bold text-[#2B533E] flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <Clock className="w-3 h-3" /> {mission.timeMinutes} min
                  </span>
                </div>

                {/* Card Title & Icon */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#FAF2EB] text-[#E06A48] font-bold text-xs flex items-center justify-center">
                      #{mission.day < 10 ? `0${mission.day}` : mission.day}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#2C2A29] leading-tight">
                      {mission.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A433A] font-semibold leading-snug mb-3">
                    {mission.shortDesc}
                  </p>

                  {/* Rule / Requirement Box */}
                  {mission.rule && (
                    <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EAE2D5] text-xs text-[#5D554B] leading-relaxed">
                      <strong className="text-[#E06A48] block mb-0.5">
                        {mission.day === 1 ? "Mas existe uma regra:" : "Dica de ouro:"}
                      </strong>
                      <span>{mission.rule}</span>
                    </div>
                  )}
                </div>

                {/* Footer preview note */}
                <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] text-[#8C8275]">
                  <div className="flex items-center gap-1.5 italic">
                    <Heart className="w-3.5 h-3.5 text-[#E06A48] fill-[#E06A48]/30 shrink-0" />
                    <span className="line-clamp-1">{mission.quote}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance banner */}
        <div className="bg-white/80 rounded-2xl p-4 sm:p-5 border border-[#E5DACB] text-center max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-[#7A7268]">
          <Lock className="w-4 h-4 text-[#E06A48] shrink-0" />
          <span>
            Todas as <strong>21 missões exclusivas</strong> com variações por idade e fichas de registro estão inclusas no material digital.
          </span>
        </div>

      </div>
    </section>
  );
};
