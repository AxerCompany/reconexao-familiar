import React, { useState } from 'react';
import { X, Check, Lock, Sparkles, ShieldCheck, QrCode, Copy, CheckCheck, Smartphone, Download, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const fakePixCode = "00020126580014br.gov.bcb.pix0136conectar21dias-familia@pagamento.com520400005303986540514.905802BR5925DESAFIO 21 DIAS FAMILIA6009SAO PAULO62070503***6304D1A2";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(fakePixCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#E3D7C4] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2] text-[#7A7268] hover:bg-[#EAE0D0] hover:text-[#2C2A29] flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div className="p-6 sm:p-8">
            
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF3EC] text-[#E06A48] flex items-center justify-center mx-auto mb-2 border border-[#F5DACB]">
                <Heart className="w-6 h-6 fill-[#E06A48]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#2C2A29]">
                Finalizar Inscrição no Desafio
              </h3>
              <p className="text-xs sm:text-sm text-[#7A7268] mt-1">
                Acesso imediato ao Desafio 21 Dias + Todos os 5 Bônus
              </p>
            </div>

            {/* Price Banner */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EAE2D5] flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-[#7A7268] font-bold">Total a pagar:</p>
                <p className="text-2xl font-black text-[#2C2A29]">
                  R$ 14,90 <span className="text-xs font-bold text-[#E06A48] bg-[#FFF3EC] px-2 py-0.5 rounded-md">Pagamento Único</span>
                </p>
              </div>
              <div className="text-right text-[11px] text-[#2B533E] font-bold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Garantia 7 Dias
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'bg-[#2B533E] text-white border-[#2B533E] shadow-sm'
                    : 'bg-white text-[#5D554B] border-[#E0D8C8] hover:bg-[#FAF7F2]'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>PIX (Imediato)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-[#2B533E] text-white border-[#2B533E] shadow-sm'
                    : 'bg-white text-[#5D554B] border-[#E0D8C8] hover:bg-[#FAF7F2]'
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>Cartão de Crédito</span>
              </button>
            </div>

            <form onSubmit={handleSimulatePayment} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2C2A29] mb-1">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mariana Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD2C2] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A48] bg-[#FAF7F2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C2A29] mb-1">
                  Seu Melhor E-mail (onde receberá o material):
                </label>
                <input
                  type="email"
                  required
                  placeholder="exemplo@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD2C2] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A48] bg-[#FAF7F2]"
                />
              </div>

              {paymentMethod === 'pix' ? (
                <div className="bg-[#F4F9F5] p-4 rounded-2xl border border-[#D5E8DC] space-y-3">
                  <div className="text-center">
                    <p className="text-xs font-bold text-[#2B533E] mb-2">
                      Código PIX Copia e Cola Gerado:
                    </p>
                    <div className="bg-white p-2.5 rounded-xl border border-[#C8DFD0] text-[11px] text-[#554E46] font-mono break-all line-clamp-2 select-all">
                      {fakePixCode}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#2B533E] text-[#2B533E] hover:bg-[#EAF5EE] text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <CheckCheck className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Código PIX Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Código PIX</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#2C2A29] mb-1">Número do Cartão:</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD2C2] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A48] bg-[#FAF7F2]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-[#2C2A29] mb-1">Validade:</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD2C2] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A48] bg-[#FAF7F2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#2C2A29] mb-1">CVV:</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD2C2] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A48] bg-[#FAF7F2]"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#E06A48] hover:bg-[#C95535] text-white py-4 px-6 rounded-2xl font-black text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer uppercase mt-2 disabled:opacity-75"
              >
                {isProcessing ? (
                  <span>Liberando Acesso Instantâneo...</span>
                ) : (
                  <>
                    <span>Confirmar e Liberar Acesso por R$ 14,90</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-[#7A7268] flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" /> Seus dados estão seguros e protegidos
              </p>
            </form>

          </div>
        ) : (
          /* Instant Success Screen Simulator */
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
              <Check className="w-9 h-9 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2B533E] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Inscrição Confirmada com Sucesso!
              </span>
              <h3 className="text-2xl font-black text-[#2C2A29] mt-3">
                Bem-vinda(o) ao Desafio 21 Dias!
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6359] mt-1.5 max-w-sm mx-auto">
                Enviamos os dados de acesso para <strong className="text-[#2C2A29]">{email || 'seu e-mail'}</strong>. Você já pode baixar os arquivos abaixo:
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EAE2D5] text-left space-y-2.5">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#E8DFC8]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2C2A29]">
                  <Download className="w-4 h-4 text-[#E06A48]" />
                  <span>Guia 21 Dias de Conexão (PDF)</span>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Pronto</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#E8DFC8]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2C2A29]">
                  <Download className="w-4 h-4 text-[#2B533E]" />
                  <span>Kit Completo de 5 Bônus (PDFs)</span>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Pronto</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full bg-[#2B533E] hover:bg-[#203E2F] text-white py-3.5 px-6 rounded-2xl font-bold text-sm cursor-pointer transition-colors"
            >
              Começar com a Missão #01 Agora
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
