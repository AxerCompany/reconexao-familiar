import React, { useState } from 'react';
import { Calendar, CheckCircle2, Sparkles, Lock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { ALL_21_DAYS, DayCalendarItem } from '../data/missions';

interface TimelineSectionProps {
  onOpenCheckout?: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onOpenCheckout }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const keyMilestones = [
    {
      day: "DIA 01",
      number: 1,
      title: "O Primeiro Passo",
      desc: "Uma primeira pequena pausa na rotina para vocês fazerem algo juntos.",
      highlight: "Quebra inicial do piloto automático",
      color: "from-amber-500 to-orange-500"
    },
    {
      day: "DIA 05",
      number: 5,
      title: "Novos Momentos",
      desc: "Vocês começam a criar novos momentos de conversa e brincadeira.",
      highlight: "O filho começa a pedir a missão",
      color: "from-orange-500 to-rose-500"
    },
    {
      day: "DIA 10",
      number: 10,
      title: "Hábitos de Presença",
      desc: "Novos pequenos hábitos de presença começam a aparecer.",
      highlight: "A mesa e a sala ficam mais leves",
      color: "from-rose-500 to-pink-500"
    },
    {
      day: "DIA 15",
      number: 15,
      title: "Memórias Acumuladas",
      desc: "Vocês já terão acumulado diversos momentos que provavelmente não aconteceriam no piloto automático.",
      highlight: "Risadas e histórias compartilhadas",
      color: "from-purple-500 to-indigo-500"
    },
    {
      day: "DIA 21",
      number: 21,
      title: "Família Reconectada",
      desc: "Vocês chegam ao final olhando para trás e lembrando de 21 momentos que escolheram viver juntos.",
      highlight: "Novo capítulo e certificado de conquista",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const currentDayData: DayCalendarItem = ALL_21_DAYS.find(d => d.day === selectedDay) || ALL_21_DAYS[0];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F5EFEB] border-t border-[#E8DFC8]/70">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E06A48] bg-white px-4 py-1.5 rounded-full border border-[#F0D5C7] inline-flex items-center gap-1.5 shadow-xs mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#E06A48]" /> A Jornada Passo a Passo
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#2C2A29] tracking-tight leading-tight mb-3">
            COMO FUNCIONAM OS 21 DIAS?
          </h2>
          <p className="text-lg sm:text-2xl font-bold text-[#E06A48]">
            DIA APÓS DIA, VOCÊ VAI REAPROXIMANDO SUA FAMÍLIA
          </p>
        </div>

        {/* Milestone Cards (Dia 01, 05, 10, 15, 21) */}
        <div className="space-y-4 mb-16 max-w-3xl mx-auto">
          {keyMilestones.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5DACB] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF3EC] border border-[#F5DACB] flex flex-col items-center justify-center text-[#E06A48] shrink-0 font-extrabold group-hover:scale-105 transition-transform shadow-xs">
                  <span className="text-[10px] tracking-widest text-[#9C8F80]">DIA</span>
                  <span className="text-xl leading-none">{item.number < 10 ? `0${item.number}` : item.number}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#2B533E] uppercase tracking-wider">
                      {item.title}
                    </span>
                    <span className="text-[10px] bg-[#FAF2EB] text-[#E06A48] px-2 py-0.5 rounded-full font-bold">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#3D3730] leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-emerald-600 sm:self-center self-end">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* [IMAGEM DO CALENDÁRIO COMPLETO DOS 21 DIAS] */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3D7C4] shadow-xl">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 bg-[#FFF4E8] text-[#E06A48] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Mapa dos 21 Dias de Conexão</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-[#2C2A29]">
              Cronograma Estruturado em 5 Fases
            </h3>
            <p className="text-xs sm:text-sm text-[#7A7268] mt-1">
              Clique nos dias para visualizar a evolução das fases e os marcos da jornada:
            </p>
          </div>

          {/* Interactive 21-Day Calendar Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 sm:gap-2.5 mb-6">
            {ALL_21_DAYS.map((dayItem) => {
              const isSelected = selectedDay === dayItem.day;
              return (
                <button
                  key={dayItem.day}
                  type="button"
                  onClick={() => setSelectedDay(dayItem.day)}
                  className={`p-2.5 sm:p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between h-20 sm:h-24 relative ${
                    isSelected 
                      ? 'bg-[#E06A48] text-white border-[#C95535] shadow-lg scale-105 z-10' 
                      : dayItem.isLocked
                        ? 'bg-[#FAF7F2]/80 text-[#5C554E] border-[#EAE2D5] hover:border-[#D4C8B5] hover:bg-white'
                        : 'bg-[#FFF9F5] text-[#2C2A29] border-[#F2DACD] hover:border-[#E06A48] hover:bg-white font-bold'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold tracking-wider ${isSelected ? 'text-white/90' : 'text-[#8C8275]'}`}>
                      DIA {dayItem.day < 10 ? `0${dayItem.day}` : dayItem.day}
                    </span>
                    <span className="text-xs">{dayItem.icon}</span>
                  </div>

                  <div>
                    <p className={`text-[11px] sm:text-xs font-bold leading-tight line-clamp-1 ${isSelected ? 'text-white' : dayItem.isLocked ? 'text-[#7A7268]' : 'text-[#2C2A29]'}`}>
                      {dayItem.isLocked ? '🔒 Bloqueado' : dayItem.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Day Feature Spotlight Box */}
          <div className="bg-gradient-to-br from-[#FFF9F5] to-[#FFF3EC] rounded-2xl p-5 sm:p-6 border border-[#F5DACB] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4 text-left w-full md:w-auto">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-xs shrink-0 ${
                currentDayData.isLocked ? 'bg-[#FAF2EB] text-[#8C8275] border border-[#E8DEC9]' : 'bg-[#E06A48] text-white'
              }`}>
                {currentDayData.icon}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#E06A48]">
                    Dia {currentDayData.day < 10 ? `0${currentDayData.day}` : currentDayData.day} • {currentDayData.phase}
                  </span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold border ${
                    currentDayData.isLocked 
                      ? 'bg-amber-50 text-amber-800 border-amber-200' 
                      : 'bg-emerald-50 text-[#2B533E] border-emerald-200'
                  }`}>
                    {currentDayData.focus}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-[#2C2A29]">
                  {currentDayData.isLocked ? `Missão #${currentDayData.day < 10 ? `0${currentDayData.day}` : currentDayData.day} (Roteiro Completo no Material)` : currentDayData.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B6359] mt-0.5 font-medium max-w-xl">
                  {currentDayData.isLocked 
                    ? "Esta missão guiada com passo a passo e dinâmica em família é liberada no seu acesso completo ao material digital."
                    : currentDayData.subtitle}
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col items-center gap-2">
              {currentDayData.isLocked ? (
                <button
                  type="button"
                  onClick={onOpenCheckout}
                  className="w-full md:w-auto bg-[#E06A48] hover:bg-[#C95535] text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer whitespace-nowrap"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Liberar Todos os 21 Dias</span>
                </button>
              ) : (
                <span className="text-xs font-bold text-[#2B533E] bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 block text-center whitespace-nowrap">
                  ✨ Exemplo de Demonstração
                </span>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
