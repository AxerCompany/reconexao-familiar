import React from 'react';
import { X, Lock, Check, Heart, ArrowRight } from 'lucide-react';
import { GalleryPage } from '../types';
import { GALLERY_PAGES } from '../data/galleryPages';

interface PagePreviewModalProps {
  page: GalleryPage | null;
  onClose: () => void;
  onSelectPage: (page: GalleryPage) => void;
  onOpenCheckout: () => void;
}

export const PagePreviewModal: React.FC<PagePreviewModalProps> = ({ 
  page, 
  onClose, 
  onSelectPage,
  onOpenCheckout 
}) => {
  if (!page) return null;

  const currentIndex = GALLERY_PAGES.findIndex(p => p.id === page.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % GALLERY_PAGES.length;
    onSelectPage(GALLERY_PAGES[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + GALLERY_PAGES.length) % GALLERY_PAGES.length;
    onSelectPage(GALLERY_PAGES[prevIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E0D5C1] shadow-2xl relative flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8DFC8] flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#E06A48] bg-[#FFF3EC] px-2.5 py-1 rounded-md border border-[#F5DACB]">
              {page.visualTag}
            </span>
            <span className="text-xs text-[#7A7268] font-bold">
              Prévia {currentIndex + 1} de {GALLERY_PAGES.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#7A7268] hover:bg-[#EAE0D0] hover:text-[#2C2A29] flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body / High Fidelity Paper Render */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#2C2A29]">
              {page.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#7A7268] mt-1">
              {page.subtitle}
            </p>
          </div>

          {/* High Fidelity Sheet Simulation with Watermark */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#E5DACB] shadow-lg relative overflow-hidden">
            
            {/* Watermark stamp */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5 select-none rotate-[-25deg]">
              <span className="text-4xl sm:text-6xl font-black text-black tracking-widest uppercase">
                AMOSTRA DIGITAL • PRÉVIA
              </span>
            </div>

            {/* Sheet Brand Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#FAF2EB]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#E06A48] text-white flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-white" />
                </div>
                <span className="text-xs font-extrabold text-[#2C2A29] uppercase tracking-wider">
                  21 Dias de Conexão em Família
                </span>
              </div>
              <span className="text-[10px] font-bold text-[#9C8F80] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EAE2D5]">
                {page.previewDetails.badge}
              </span>
            </div>

            {/* Sheet Headline */}
            <div className="mb-4">
              <h4 className="text-lg sm:text-xl font-black text-[#2C2A29] text-center mb-1">
                {page.previewDetails.headline}
              </h4>
              <p className="text-xs text-center text-[#E06A48] font-bold">
                Exemplo de ficha prática e visual
              </p>
            </div>

            {/* Checklist / Details */}
            <div className="space-y-3 bg-[#FAF7F2] p-4 rounded-xl border border-[#EAE2D5] mb-5">
              {page.previewDetails.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3D3730]">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span className="leading-snug">{pt}</span>
                </div>
              ))}
            </div>

            {/* Simulated Note Area with Lock Reminder */}
            <div className="p-3 bg-[#FFFDF9] rounded-xl border border-dashed border-[#DDD2C0] flex items-center justify-between gap-3">
              <p className="text-xs text-[#8C8275] italic">
                {page.previewDetails.footerNote}
              </p>
              <span className="text-[10px] font-bold text-[#E06A48] bg-[#FFF3EC] px-2 py-0.5 rounded border border-[#F5DACB] shrink-0">
                🔒 Alta Resolução no PDF
              </span>
            </div>

          </div>

          {/* Navigation between pages */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              type="button"
              className="text-xs font-bold text-[#554E46] hover:text-[#E06A48] py-2 px-3 rounded-lg border border-[#DDD4C4] hover:bg-white transition-colors cursor-pointer"
            >
              ← Ver Outro Exemplo
            </button>

            <button
              onClick={handleNext}
              type="button"
              className="text-xs font-bold text-[#554E46] hover:text-[#E06A48] py-2 px-3 rounded-lg border border-[#DDD4C4] hover:bg-white transition-colors cursor-pointer"
            >
              Próximo Exemplo →
            </button>
          </div>

        </div>

        {/* Footer with CTA */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-10">
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold text-[#2C2A29]">Pronto para imprimir ou ver no celular?</p>
            <p className="text-[11px] text-[#7A7268]">Acesso imediato a todos os arquivos completos por R$ 14,90</p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto bg-[#E06A48] hover:bg-[#C95535] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all uppercase"
          >
            <span>Liberar Material Completo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
