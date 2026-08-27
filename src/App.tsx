import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { TimelineSection } from './components/TimelineSection';
import { MissionSamples } from './components/MissionSamples';
import { PhilosophySection } from './components/PhilosophySection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { PagePreviewModal } from './components/PagePreviewModal';
import { GalleryPage } from './types';
import { GALLERY_PAGES } from './data/galleryPages';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedGalleryPage, setSelectedGalleryPage] = useState<GalleryPage | null>(null);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleSelectGalleryPage = (page: GalleryPage) => {
    setSelectedGalleryPage(page);
  };

  const handleCloseGalleryPage = () => {
    setSelectedGalleryPage(null);
  };

  const handleOpenDefaultPreview = () => {
    setSelectedGalleryPage(GALLERY_PAGES[0]);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2A29] flex flex-col font-sans selection:bg-[#E06A48]/20 selection:text-[#E06A48]">
      
      <main className="flex-grow">
        {/* 1ª dobra — HERO */}
        <Hero 
          onOpenCheckout={handleOpenCheckout} 
          onOpenPreview={handleOpenDefaultPreview}
        />

        {/* 2ª dobra — DOR */}
        <PainPoints />

        {/* 3ª dobra — COMO FUNCIONAM OS 21 DIAS */}
        <TimelineSection onOpenCheckout={handleOpenCheckout} />

        {/* 4ª dobra — EXEMPLOS REAIS DO MATERIAL */}
        <MissionSamples />

        {/* 5ª dobra — FRASE CURTA DE FILOSOFIA */}
        <PhilosophySection />

        {/* 6ª dobra — BÔNUS */}
        <BonusSection onOpenCheckout={handleOpenCheckout} />

        {/* 7ª dobra — OFERTA */}
        <PricingSection 
          onOpenCheckout={handleOpenCheckout}
          onOpenPreview={handleOpenDefaultPreview}
        />

        {/* 8ª dobra — GARANTIA */}
        <GuaranteeSection />

        {/* 9ª dobra — FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={handleCloseCheckout} 
      />

      <PagePreviewModal
        page={selectedGalleryPage}
        onClose={handleCloseGalleryPage}
        onSelectPage={handleSelectGalleryPage}
        onOpenCheckout={handleOpenCheckout}
      />

    </div>
  );
}
