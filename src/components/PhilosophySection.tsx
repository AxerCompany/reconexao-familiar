import React from 'react';
import { Heart } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-[#FFF7F2] via-[#FAF3EB] to-[#FFF7F2] border-y border-[#E8DFC8]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFF0E8] text-[#E06A48] mb-4 shadow-2xs border border-[#F2DACD]">
          <Heart className="w-5 h-5 fill-[#E06A48]" />
        </div>
        <p className="text-xl sm:text-3xl md:text-4xl font-black text-[#2C2A29] tracking-tight leading-snug uppercase">
          O objetivo não é ter uma família perfeita. <br className="hidden sm:inline" />
          <span className="text-[#E06A48]">É voltar a ter momentos de verdade juntos.</span>
        </p>
      </div>
    </section>
  );
};
