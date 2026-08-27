import React from 'react';
import { ArrowRight, Heart, Sparkles, X, Check } from 'lucide-react';

interface FinalCtaProps {
  onOpenCheckout: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#2B533E] to-[#1E3B2C] text-white relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Urgent Header Tag */}
        <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-amber-200 border border-white/20 mb-6">
          <Sparkles className="w-3.5 h-3.5" /> O Momento é Agora
        </div>

        {/* Big Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
          VOCÊ PODE CONTINUAR DEIXANDO OS DIAS PASSAREM NO AUTOMÁTICO…
        </h2>

        <p className="text-lg sm:text-2xl font-bold text-amber-200 mb-8 max-w-2xl mx-auto">
          OU PODE DECIDIR QUE OS PRÓXIMOS 21 DIAS SERÃO DIFERENTES.
        </p>

        {/* "Não quando..." Contrast Block */}
        <div className="max-w-xl mx-auto space-y-2.5 text-base sm:text-xl font-medium text-emerald-100/90 mb-8 text-left bg-black/15 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center shrink-0">
              <X className="w-3.5 h-3.5" />
            </div>
            <span>Não na próxima viagem de férias.</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center shrink-0">
              <X className="w-3.5 h-3.5" />
            </div>
            <span>Não quando tiver menos trabalho acumulado.</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center shrink-0">
              <X className="w-3.5 h-3.5" />
            </div>
            <span>Não quando a rotina estiver mais tranquila.</span>
          </div>

          <div className="pt-4 mt-2 border-t border-white/15 flex items-center gap-3 text-white font-extrabold text-xl sm:text-2xl">
            <div className="w-6 h-6 rounded-full bg-emerald-400 text-[#1E3B2C] flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span>Hoje.</span>
          </div>
        </div>

        {/* Step sequence */}
        <div className="max-w-lg mx-auto text-base sm:text-lg text-emerald-100 font-medium space-y-2 mb-10 leading-relaxed">
          <p>✨ Abra a primeira missão no celular.</p>
          <p>✨ Chame seus filhos com um sorriso.</p>
          <p>✨ Separe alguns minutos de presença total.</p>
          <p className="text-white font-bold pt-2">
            E dê o primeiro passo dos próximos 21 dias de reconexão em família.
          </p>
        </div>

        {/* Big CTA */}
        <div className="max-w-md mx-auto">
          <button
            onClick={onOpenCheckout}
            id="final-cta-button"
            className="w-full bg-[#E06A48] hover:bg-[#C95535] text-white py-4 sm:py-5 px-8 rounded-2xl text-lg sm:text-xl font-black tracking-wide shadow-2xl hover:shadow-emerald-950/50 transition-all transform active:scale-95 flex items-center justify-center gap-3 cursor-pointer uppercase group border border-white/20"
          >
            <span>QUERO COMEÇAR O DESAFIO HOJE</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <p className="text-xs text-emerald-200/80 mt-3 font-semibold">
            Apenas R$ 14,90 • Acesso imediato no e-mail • Garantia de 7 dias
          </p>
        </div>

      </div>
    </section>
  );
};
