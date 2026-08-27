import React from 'react';
import { Check, ShieldCheck, Zap, Lock, Sparkles, ArrowRight, Smartphone, Printer, Heart } from 'lucide-react';
import { MainMockup } from './MainMockup';

interface PricingSectionProps {
  onOpenCheckout: () => void;
  onOpenPreview: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout, onOpenPreview }) => {
  const deliverables = [
    "Desafio 21 Dias de Conexão em Família",
    "21 missões de reconexão passo a passo",
    "Calendário dos 21 dias para acompanhar",
    "Pote da Gratidão Familiar com tirinhas",
    "Cartões de Conversa com 30 perguntas",
    "Desafios Sem Tela (SOS desconexão)",
    "Caixinha da Conexão com 40 cards pós-desafio",
    "Material digital para acompanhar pelo celular",
    "Materiais prontos para imprimir em folha A4"
  ];

  return (
    <section id="oferta" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2B533E] bg-[#EAF2ED] px-4 py-1.5 rounded-full border border-[#D0E2D6] inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Acesso Completo e Imediato
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#2C2A29] tracking-tight leading-tight mb-3">
            21 DIAS PARA VOLTAR A SE SENTIR <br className="hidden sm:inline" />
            <span className="text-[#E06A48]">MAIS PERTO DA SUA FAMÍLIA</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6359]">
            Tudo o que você precisa para transformar a rotina da sua casa a partir de hoje:
          </p>
        </div>

        {/* Big Offer Box Card */}
        <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 border-2 border-[#E06A48]/30 shadow-2xl relative overflow-hidden">
          
          {/* Top highlight ribbon */}
          <div className="absolute top-0 right-0 bg-[#E06A48] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl shadow-md">
            🔥 62% DE DESCONTO HOJE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Checklist */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#9C8F80]">
                  O que está incluso no kit:
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#2C2A29] mt-1">
                  Você recebe:
                </h3>
              </div>

              <div className="space-y-2.5">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#FAF7F2] transition-colors">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#3D3730] leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#F0EAE1] flex flex-wrap items-center gap-4 text-xs font-medium text-[#7A7268]">
                <span className="flex items-center gap-1">
                  <Smartphone className="w-4 h-4 text-[#E06A48]" /> No Celular/Tablet
                </span>
                <span className="flex items-center gap-1">
                  <Printer className="w-4 h-4 text-[#2B533E]" /> Pronto para Imprimir
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-amber-500" /> Acesso Vitalício
                </span>
              </div>
            </div>

            {/* Right side: Pricing and Checkout Action */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#FFF9F5] to-[#FAF2EB] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#F5DACB] text-center flex flex-col justify-between shadow-inner">
              
              <div>
                <span className="text-xs font-extrabold text-[#7A7268] uppercase tracking-wider block mb-1">
                  Preço Promocional
                </span>

                <div className="text-[#9C8F80] text-sm sm:text-base font-bold line-through mb-1">
                  DE R$ 39,90
                </div>

                <div className="mb-2">
                  <span className="text-xs font-bold text-[#E06A48] block">HOJE POR APENAS</span>
                  <div className="text-4xl sm:text-5xl font-black text-[#2C2A29] tracking-tight">
                    R$ 14<span className="text-2xl sm:text-3xl text-[#E06A48]">,90</span>
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl p-2.5 border border-[#EAE2D5] text-xs text-[#5D554B] space-y-0.5 mb-5 font-semibold">
                  <p>✨ Pagamento único.</p>
                  <p className="text-[#2B533E] font-bold">⚡ Acesso imediato ao material.</p>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={onOpenCheckout}
                  id="pricing-cta-button"
                  className="w-full bg-[#E06A48] hover:bg-[#C95535] text-white py-4 px-4 rounded-2xl text-base sm:text-lg font-black tracking-wide shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer uppercase group"
                >
                  <span>LIBERAR ACESSO AGORA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-[#6B6359]">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Compra 100% Segura e Criptografada</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
