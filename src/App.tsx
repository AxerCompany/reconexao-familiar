import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Transformation } from './components/Transformation';
import { TimelineSection } from './components/TimelineSection';
import { HowSimpleItIs } from './components/HowSimpleItIs';
import { MissionSamples } from './components/MissionSamples';
import { PhilosophySection } from './components/PhilosophySection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { FinalCta } from './components/FinalCta';
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
        {/* Hero Section with Mockup */}
        <Hero 
          onOpenCheckout={handleOpenCheckout} 
          onOpenPreview={handleOpenDefaultPreview}
        />

        {/* 3. Pain & Realities of Routine */}
        <PainPoints />

        {/* 4. Transformation & 7 Hearts */}
        <Transformation />

        {/* 5. 21 Days Timeline & Interactive Calendar */}
        <TimelineSection onOpenCheckout={handleOpenCheckout} />

        {/* 6. How Simple It Is & 3 Steps */}
        <HowSimpleItIs />

        {/* 7. Real Mission Experiences Samples */}
        <MissionSamples />

        {/* 8. Philosophy ("Não é ter uma família perfeita...") */}
        <PhilosophySection />

        {/* 9. 5 Included Bonuses */}
        <BonusSection onOpenCheckout={handleOpenCheckout} />

        {/* 10. Main Pricing & Value Stack */}
        <PricingSection 
          onOpenCheckout={handleOpenCheckout}
          onOpenPreview={handleOpenDefaultPreview}
        />

        {/* 13. Final Urgency CTA */}
        <FinalCta onOpenCheckout={handleOpenCheckout} />

        {/* 14. FAQ Section */}
        <FaqSection />
      </main>

      {/* 15. Footer */}
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
