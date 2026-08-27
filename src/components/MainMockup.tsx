import React from 'react';
import { Heart, Sparkles, CheckCircle2, FileText, Smartphone, Printer, ShieldCheck, Zap } from 'lucide-react';

interface MainMockupProps {
  onOpenPreview?: () => void;
}

export const MainMockup: React.FC<MainMockupProps> = ({ onOpenPreview }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto select-none">
      {/* Background warm glowing aura */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#E06A48]/15 via-[#F7D488]/20 to-[#4A7C59]/15 rounded-3xl blur-2xl -z-10 transform scale-95 opacity-80" />

      {/* Floating Badges */}
      <div className="absolute -top-3 -left-2 sm:-left-4 z-30 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-[#E8E2D8] flex items-center gap-2 text-xs font-bold text-[#2C2A29] animate-float-slow">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
        <span className="flex items-center gap-1 text-[#2B533E]">
          <Smartphone className="w-3.5 h-3.5" /> No Celular ou Impresso
        </span>
      </div>

      <div className="absolute -bottom-3 right-0 sm:-right-4 z-30 bg-[#2B533E] text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-bold border border-emerald-400/30">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Kit Completo + 5 Bônus</span>
      </div>

      {/* Mockup Frame Container */}
      <div className="relative bg-gradient-to-b from-[#FDFBF7] to-[#F5EFEB] rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-[#E5DEC9] shadow-2xl overflow-hidden">
        
        {/* Layered Composition */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
          
          {/* Main Book / Tablet (Left & Center) */}
          <div className="col-span-7 sm:col-span-7 relative z-20 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border border-[#DECDB8] relative overflow-hidden group">
              
              {/* Decorative top bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0EAE1]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-bold text-[#9C8F80] uppercase tracking-wider">Guia Principal • 21 Dias</span>
              </div>

              {/* Cover Illustration & Content */}
              <div className="bg-gradient-to-br from-[#FFF9F5] via-[#FFF3EC] to-[#FEE8DC] rounded-xl p-3 sm:p-4 border border-[#F5DACB] text-center relative overflow-hidden">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E06A48] text-white flex items-center justify-center shadow-md mb-2">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#2C2A29] leading-tight mb-1">
                  21 DIAS DE CONEXÃO
                </h4>
                <p className="text-[10px] sm:text-xs text-[#E06A48] font-bold uppercase tracking-wider mb-2">
                  Em Família
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 text-[10px] sm:text-xs text-[#6B6359] leading-snug border border-amber-200/60 mb-2.5 font-medium">
                  "Pequenas missões diárias para sair do piloto automático e viver momentos de verdade."
                </div>

                {/* Day sample snippet inside book */}
                <div className="bg-[#FAF7F2] rounded-lg p-2 text-left border border-[#EAE2D5] flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#2B533E] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                    01
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-bold text-[#2C2A29] truncate">Hoje Você Escolhe</p>
                    <p className="text-[9px] text-[#7A7268] truncate">10 minutos de pura presença</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-[#7A7268] font-medium">
                <span className="flex items-center gap-1 text-[#2B533E] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 21 Missões Prontas
                </span>
                <span>PDF Alta Resolução</span>
              </div>
            </div>
          </div>

          {/* Printable Calendar & Cards Stack (Right) */}
          <div className="col-span-5 sm:col-span-5 flex flex-col gap-2.5 relative z-10">
            
            {/* Sheet 1: Calendar 21 Days */}
            <div className="bg-white rounded-xl p-2.5 sm:p-3.5 shadow-lg border border-[#DECDB8] transform rotate-3 hover:rotate-1 transition-transform">
              <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-[#F0EAE1]">
                <span className="text-[9px] sm:text-[10px] font-bold text-[#2B533E] flex items-center gap-1">
                  <Printer className="w-3 h-3" /> Calendário Mural
                </span>
                <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">A4</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[8px] font-bold text-[#7A7268] mb-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="text-[7px] text-[#9C8F80]">D{i+1}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-4 sm:h-5 rounded text-[8px] flex items-center justify-center font-bold ${
                      i < 4 
                        ? 'bg-[#E06A48] text-white shadow-xs' 
                        : i === 4 
                        ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                        : 'bg-[#FAF7F2] text-[#8C8275] border border-[#EAE2D5]'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Sheet 2: Cards Preview */}
            <div className="bg-[#FFFDF9] rounded-xl p-2.5 sm:p-3 shadow-md border border-[#E6D5C3] transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-[#E06A48] mb-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Cartões de Conversa</span>
              </div>
              <p className="text-[9px] text-[#554E46] leading-tight font-medium">
                "Qual momento de hoje você gostaria de viver de novo?"
              </p>
            </div>

            {/* Sheet 3: Gratitude Jar */}
            <div className="bg-amber-50/90 rounded-xl p-2 sm:p-2.5 shadow-sm border border-amber-200/80 text-[9px] text-amber-900 font-medium flex items-center gap-1.5">
              <span className="text-sm">🫙</span>
              <span className="truncate text-[9px] font-bold">Fichas do Pote da Gratidão</span>
            </div>

          </div>
        </div>

        {/* Bottom Feature Pill Bar */}
        <div className="mt-4 pt-3 border-t border-[#EAE2D5] flex flex-wrap items-center justify-around gap-2 text-center text-[10px] sm:text-xs text-[#6B6359] font-medium">
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-500" /> Acesso Imediato
          </span>
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-[#E06A48]" /> 100% em Português
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 7 Dias de Garantia
          </span>
        </div>

      </div>

      {/* Interactive Helper Button under mockup */}
      {onOpenPreview && (
        <div className="text-center mt-3">
          <button
            type="button"
            onClick={onOpenPreview}
            className="text-xs font-bold text-[#E06A48] hover:text-[#C55333] inline-flex items-center gap-1 cursor-pointer transition-colors underline decoration-dotted underline-offset-4"
          >
            <span>Clique para folhear uma amostra das páginas reais</span>
          </button>
        </div>
      )}
    </div>
  );
};
