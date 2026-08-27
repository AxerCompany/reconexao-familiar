import React from 'react';
import { Heart, ShieldCheck, Lock, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#242120] text-[#B0A79E] pt-12 pb-24 sm:pb-12 px-4 sm:px-6 border-t border-[#383331]">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#383331] text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E06A48]/20 flex items-center justify-center text-[#E06A48]">
              <Heart className="w-5 h-5 fill-[#E06A48]" />
            </div>
            <div>
              <p className="text-white font-extrabold text-base">21 Dias de Conexão em Família</p>
              <p className="text-xs text-[#8C8278]">Momentos de verdade todos os dias</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-amber-300">
              <Lock className="w-4 h-4" /> Privacidade Garantida
            </span>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7268] text-center sm:text-left">
          <p>© {new Date().getFullYear()} 21 Dias de Conexão em Família. Todos os direitos reservados.</p>
          <p className="max-w-md text-[11px] leading-snug">
            Este produto não garante milagres, mas entrega ferramentas práticas para fortalecer a presença e o afeto na rotina familiar.
          </p>
        </div>

      </div>
    </footer>
  );
};
