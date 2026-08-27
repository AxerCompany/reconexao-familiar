import React from 'react';
import { ShieldCheck, HeartHandshake } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FAF4ED] border-b border-[#E8DFC8]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DACB] shadow-md flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 shadow-2xs">
            <ShieldCheck className="w-9 h-9" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Risco Zero para Você
              </span>
              <span className="text-xs font-bold text-[#8C8275]">
                • 100% de Proteção
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-[#2C2A29]">
              Garantia Incondicional de 7 Dias
            </h3>

            <p className="text-xs sm:text-sm text-[#6B6359] leading-relaxed mt-1">
              Experimente as missões com seus filhos por 7 dias. Se por qualquer motivo você achar que o material não ajudou na conexão da sua casa, basta solicitar o reembolso e devolvemos 100% do seu dinheiro. Sem burocracia.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
