import React from 'react';
import { Heart, Sparkles, Clock } from 'lucide-react';

export const Transformation: React.FC = () => {
  const benefits = [
    "Conversar mais",
    "Brincar juntos",
    "Ouvir o que seus filhos realmente pensam",
    "Demonstrar carinho",
    "Criar memórias reais",
    "Rir das coisas simples",
    "Fortalecer o vínculo da sua família"
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Tag */}
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2B533E] bg-[#EAF2ED] px-4 py-1.5 rounded-full border border-[#D0E2D6] inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> A Proposta de Mudança
          </span>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#2C2A29] tracking-tight leading-tight max-w-3xl mx-auto uppercase">
            E SE, PELOS PRÓXIMOS 21 DIAS, <br />
            <span className="text-[#E06A48]">VOCÊ TIVESSE UM ROTEIRO SIMPLES PARA:</span>
          </h2>
        </div>

        {/* 7 Hearts Card Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFC8] shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FFF9F5] border border-[#F5DACB] hover:bg-[#FFF3EC] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#E06A48] text-white flex items-center justify-center shrink-0 shadow-xs text-base">
                  ❤️
                </div>
                <span className="text-base sm:text-lg font-black text-[#3D3730]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Golden Highlight Box */}
          <div className="bg-gradient-to-r from-[#FFF4E5] to-[#FDF0DE] p-6 sm:p-7 rounded-2xl border border-[#F0D5AC] text-center">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-200 text-amber-900 mb-2">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-lg sm:text-2xl font-black text-[#2C2A29] leading-snug">
              Tudo isso em missões rápidas de 10 minutos por dia.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
