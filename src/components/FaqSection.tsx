import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQ_LIST } from '../data/faq';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2B533E] bg-[#EAF2ED] px-4 py-1.5 rounded-full border border-[#D0E2D6] inline-flex items-center gap-1.5 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" /> Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#2C2A29] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#7A7268] mt-2">
            Tudo o que você precisa saber sobre o Desafio 21 Dias
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#E5DACB] overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#2C2A29] hover:text-[#E06A48] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <div className="w-7 h-7 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#7A7268]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B6359] leading-relaxed border-t border-[#F5EFEB]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
