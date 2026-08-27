import React from 'react';
import { Smartphone, Clock, Tv, Briefcase, HeartCrack, CheckCircle2 } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5EFEB] border-y border-[#E8DFC8]/60 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E06A48] bg-[#FAF2EB] px-3.5 py-1 rounded-full border border-[#F0D5C7] inline-block mb-3">
            A Realidade da Rotina
          </span>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#2C2A29] tracking-tight leading-tight max-w-3xl mx-auto uppercase">
            TODO DIA É A MESMA COISA:
          </h2>
        </div>

        {/* The Routine Story Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DACB] shadow-md mb-10">
          <div className="space-y-4 max-w-2xl mx-auto text-base sm:text-lg text-[#554E46]">
            
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06A48] shrink-0 mt-2" />
              <span>Você acorda na correria.</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06A48] shrink-0 mt-2" />
              <span>Passa o dia trabalhando, resolvendo problemas e pensando no que ainda tem que fazer.</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06A48] shrink-0 mt-2" />
              <span>Chega em casa cansado(a).</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06A48] shrink-0 mt-2" />
              <span>E quando percebe…</span>
            </div>

            <div className="bg-[#FFF5EF] p-4 rounded-2xl border border-[#F2D6C7] space-y-2">
              <p className="font-bold text-[#2C2A29]">
                📱 Cada um está em uma tela.
              </p>
              <p className="text-sm text-[#6B6359] italic">
                As conversas são só sobre obrigações: <strong className="text-[#2C2A29]">“Já fez a lição?”, “Já tomou banho?”, “Vai dormir”.</strong>
              </p>
              <p className="font-bold text-[#E06A48] text-sm">
                O tempo vai passando.
              </p>
            </div>

            {/* Culpa */}
            <div className="pt-4 border-t border-[#EAE2D5] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#E06A48] flex items-center justify-center shrink-0">
                <HeartCrack className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#2C2A29] italic">
                "E no fundo, fica aquela sensação de culpa: 'Eu queria estar mais presente.'"
              </p>
            </div>

          </div>
        </div>

        {/* Desejo: NÃO APENAS NA MESMA CASA. MAS JUNTOS DE VERDADE. */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-3xl font-black text-[#2C2A29] tracking-tight">
            NÃO APENAS NA MESMA CASA. <br />
            <span className="text-[#E06A48]">MAS JUNTOS DE VERDADE.</span>
          </h3>
        </div>

        {/* 4 Pillars of Presence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          
          <div className="bg-white rounded-2xl p-5 border border-[#E3D9C9] shadow-sm flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-2">
              <Smartphone className="w-5 h-5" />
            </div>
            <h4 className="font-black text-[#2C2A29] text-sm">Sem celular por perto</h4>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E3D9C9] shadow-sm flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-black text-[#2C2A29] text-sm">Sem pressa</h4>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E3D9C9] shadow-sm flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center mb-2">
              <Tv className="w-5 h-5" />
            </div>
            <h4 className="font-black text-[#2C2A29] text-sm">Sem televisão ligada</h4>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E3D9C9] shadow-sm flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
              <Briefcase className="w-5 h-5" />
            </div>
            <h4 className="font-black text-[#2C2A29] text-sm">Sem trabalho na cabeça</h4>
          </div>

        </div>

        {/* Conclusion line */}
        <div className="text-center">
          <p className="text-base sm:text-xl font-black text-[#2B533E] bg-[#EAF2ED] py-3 px-6 rounded-2xl border border-[#D0E2D6] inline-block">
            Apenas você e as pessoas mais importantes da sua vida.
          </p>
        </div>

      </div>
    </section>
  );
};
