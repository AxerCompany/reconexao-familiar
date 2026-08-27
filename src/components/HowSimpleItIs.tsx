import React from 'react';
import { BookOpen, Users, CheckCircle2 } from 'lucide-react';

export const HowSimpleItIs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2B533E] bg-[#EAF2ED] px-4 py-1.5 rounded-full border border-[#D0E2D6] inline-flex items-center gap-1.5 mb-4">
            Zero Esforço de Planejamento
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#2C2A29] tracking-tight leading-tight mb-4">
            VOCÊ NÃO PRECISA SABER COMO SE RECONECTAR
          </h2>

          <div className="max-w-xl mx-auto bg-white p-5 rounded-2xl border border-[#E8DFC8] shadow-xs text-base sm:text-lg text-[#554E46]">
            <p className="font-bold text-[#E06A48] mb-1">
              Essa é justamente a proposta.
            </p>
            <p>
              Você não precisa acordar todos os dias pensando: <br />
              <span className="italic font-bold text-[#2C2A29]">
                “O que eu posso fazer com meus filhos hoje?”
              </span>
            </p>
            <p className="mt-2 text-sm font-bold text-[#2B533E]">
              O desafio já faz isso tudo por você.
            </p>
          </div>
        </div>

        {/* 3 Step Cards: É SÓ: */}
        <div className="text-center mb-6">
          <span className="text-lg sm:text-xl font-black tracking-widest text-[#2C2A29] uppercase">
            É SÓ:
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5DACB] shadow-md flex flex-col items-center text-center relative group hover:border-[#E06A48] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF3EC] text-[#E06A48] border border-[#F5DACB] flex items-center justify-center font-black text-xl mb-4 shadow-xs">
              1
            </div>
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#2C2A29] mb-2">
              Abrir a missão do dia
            </h3>
            <p className="text-sm text-[#6B6359] leading-relaxed">
              Veja qual pequeno momento foi preparado para vocês no celular ou no PDF.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5DACB] shadow-md flex flex-col items-center text-center relative group hover:border-[#E06A48] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF3EC] text-[#E06A48] border border-[#F5DACB] flex items-center justify-center font-black text-xl mb-4 shadow-xs">
              2
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#2C2A29] mb-2">
              Fazer juntos
            </h3>
            <p className="text-sm text-[#6B6359] leading-relaxed">
              Separe alguns minutos e participe de verdade, com presença e leveza.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5DACB] shadow-md flex flex-col items-center text-center relative group hover:border-[#E06A48] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF3EC] text-[#E06A48] border border-[#F5DACB] flex items-center justify-center font-black text-xl mb-4 shadow-xs">
              3
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#2C2A29] mb-2">
              Marcar como concluído
            </h3>
            <p className="text-sm text-[#6B6359] leading-relaxed">
              E no próximo dia, uma nova oportunidade de conexão estará esperando.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
