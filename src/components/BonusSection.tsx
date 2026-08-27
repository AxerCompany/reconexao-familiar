import React from 'react';
import { Gift, Sparkles, Check, Download, Heart } from 'lucide-react';
import { BONUSES_LIST } from '../data/bonuses';

interface BonusSectionProps {
  onOpenCheckout: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="bonus" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E06A48] bg-[#FFF3EE] px-4 py-1.5 rounded-full border border-[#F5DACB] inline-flex items-center gap-1.5 shadow-xs mb-3">
            <Gift className="w-4 h-4 text-[#E06A48]" /> Bônus Especiais Inclusos
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#2C2A29] tracking-tight leading-tight mb-4">
            E PARA DEIXAR ESSA RECONEXÃO <br className="hidden sm:inline" />
            <span className="text-[#E06A48]">AINDA MAIS ESPECIAL...</span>
          </h2>
          <p className="text-base sm:text-xl font-bold text-[#6B6359] max-w-2xl mx-auto">
            Você também recebe 5 materiais complementares 100% gratuitos junto com o desafio:
          </p>
        </div>

        {/* [MOCKUP DE TODOS OS BÔNUS] */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EB] to-[#F5EBE1] rounded-3xl p-6 sm:p-10 border border-[#E5DACB] shadow-xl relative overflow-hidden">
            
            <div className="text-center mb-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2B533E] bg-white px-3 py-1 rounded-full border border-[#D5E5DA]">
                [MOCKUP DE TODOS OS BÔNUS INCLUSOS]
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#2C2A29] mt-2">
                Kit de Bônus da Família Conectada
              </h3>
            </div>

            {/* Visual Graphic Stack of 5 bonuses */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              
              {/* Bonus 1 */}
              <div className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 mx-auto rounded-xl bg-amber-100 text-2xl flex items-center justify-center mb-2">
                  🫙
                </div>
                <h4 className="font-extrabold text-xs text-[#2C2A29] mb-1">Pote da Gratidão</h4>
                <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-full">Incluso Grátis</span>
              </div>

              {/* Bonus 2 */}
              <div className="bg-white rounded-2xl p-4 border border-rose-200/80 shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 mx-auto rounded-xl bg-rose-100 text-2xl flex items-center justify-center mb-2">
                  🃏
                </div>
                <h4 className="font-extrabold text-xs text-[#2C2A29] mb-1">Cartões Conversa</h4>
                <span className="text-[10px] text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded-full">Incluso Grátis</span>
              </div>

              {/* Bonus 3 */}
              <div className="bg-white rounded-2xl p-4 border border-blue-200/80 shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 mx-auto rounded-xl bg-blue-100 text-2xl flex items-center justify-center mb-2">
                  📵
                </div>
                <h4 className="font-extrabold text-xs text-[#2C2A29] mb-1">Desafios Sem Tela</h4>
                <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-full">Incluso Grátis</span>
              </div>

              {/* Bonus 4 */}
              <div className="bg-white rounded-2xl p-4 border border-purple-200/80 shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 text-2xl flex items-center justify-center mb-2">
                  📦
                </div>
                <h4 className="font-extrabold text-xs text-[#2C2A29] mb-1">Caixa Conexão</h4>
                <span className="text-[10px] text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded-full">Incluso Grátis</span>
              </div>

              {/* Bonus 5 */}
              <div className="bg-white rounded-2xl p-4 border border-emerald-200/80 shadow-sm text-center transform hover:-translate-y-1 transition-transform col-span-2 sm:col-span-1">
                <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-100 text-2xl flex items-center justify-center mb-2">
                  📅
                </div>
                <h4 className="font-extrabold text-xs text-[#2C2A29] mb-1">Calendário Mural</h4>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">Incluso Grátis</span>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DFC8] text-center text-xs font-bold text-[#6B6359]">
              Valor se comprado separadamente: <span className="line-through text-rose-500">R$ 107,90</span> • <span className="text-[#2B533E]">HOJE: R$ 0,00 (100% Grátis)</span>
            </div>

          </div>
        </div>

        {/* 5 Bonus Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {BONUSES_LIST.map((bonus, idx) => (
            <div 
              key={bonus.id}
              className="bg-white rounded-3xl p-6 border border-[#E5DACB] shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{bonus.icon}</span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                    BÔNUS #{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#2C2A29] mb-1">
                  🎁 {bonus.title}
                </h3>
                
                <p className="text-xs font-extrabold text-[#E06A48] uppercase tracking-wider mb-2">
                  {bonus.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#6B6359] leading-relaxed mb-4">
                  {bonus.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-[#F0EAE1]">
                  {bonus.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A433A]">
                      <Check className="w-3.5 h-3.5 text-[#2B533E] shrink-0 mt-0.5 font-bold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs">
                <span className="text-[#9C8F80] line-through">Valor normal: {bonus.valueOriginal}</span>
                <span className="font-black text-[#2B533E]">GRÁTIS HOJE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus CTA */}
        <div className="text-center">
          <button
            onClick={onOpenCheckout}
            className="bg-[#2B533E] hover:bg-[#203E2F] text-white py-3.5 px-8 rounded-full text-sm sm:text-base font-black shadow-lg hover:shadow-xl transition-all transform active:scale-95 inline-flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Quero Receber Todos os Bônus Grátis</span>
          </button>
        </div>

      </div>
    </section>
  );
};
