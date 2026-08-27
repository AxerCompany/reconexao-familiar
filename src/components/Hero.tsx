import React from 'react';
import { Heart, ArrowRight, Sparkles, XCircle } from 'lucide-react';
import { MainMockup } from './MainMockup';

interface HeroProps {
  onOpenCheckout: () => void;
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenPreview }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#F9EAD9]/60 via-[#FDF5ED]/30 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        
        {/* Eyebrow Highlight */}
        <div className="inline-flex items-center gap-2 bg-[#FFF3EE] border border-[#F5DACB] text-[#E06A48] px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-xs mb-5">
          <Heart className="w-4 h-4 fill-[#E06A48]" />
          <span>VOCÊ NÃO PRECISA DE MAIS TEMPO. VOCÊ PRECISA DE 10 MINUTOS CERTOS.</span>
        </div>

        {/* Main Big Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#2C2A29] tracking-tight leading-[1.12] mb-4">
          21 DIAS DE CONEXÃO <br className="hidden sm:inline" />
          <span className="text-[#E06A48]">EM FAMÍLIA</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl font-bold text-[#4A433A] max-w-3xl mx-auto leading-relaxed mb-8">
          Um guia prático para transformar a rotina da sua casa em momentos de presença, conversa e memórias que seus filhos vão lembrar para sempre.
        </p>

        {/* 4 Pillars / Reassurance Points */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-[#E8E2D8] flex items-center gap-3 shadow-xs">
              <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                <XCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-[#4A433A]">
                Você não precisa planejar passeios caros.
              </span>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-[#E8E2D8] flex items-center gap-3 shadow-xs">
              <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                <XCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-[#4A433A]">
                Você não precisa mudar toda a sua rotina.
              </span>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-[#E8E2D8] flex items-center gap-3 shadow-xs">
              <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                <XCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-[#4A433A]">
                Você não precisa de horas livres no dia.
              </span>
            </div>

            <div className="bg-[#FFF9F3] p-3.5 rounded-xl border border-amber-200/80 flex items-center gap-3 shadow-xs">
              <div className="w-7 h-7 rounded-full bg-amber-100 text-[#E06A48] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-[#2C2A29]">
                Você só precisa de 10 minutos intencionais.
              </span>
            </div>
          </div>
        </div>

        {/* [MOCKUP PRINCIPAL DO MATERIAL] */}
        <div className="mb-10">
          <MainMockup onOpenPreview={onOpenPreview} />
        </div>

        {/* Primary CTA Area */}
        <div className="max-w-md mx-auto flex flex-col items-center">
          <button
            onClick={onOpenCheckout}
            id="hero-cta-button"
            className="w-full bg-[#E06A48] hover:bg-[#C95535] text-white py-4 px-8 rounded-2xl text-base sm:text-lg font-black tracking-wide shadow-xl hover:shadow-2xl transition-all transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer group uppercase"
          >
            <span>QUERO RECONECTAR MINHA FAMÍLIA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
