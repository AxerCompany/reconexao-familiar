import React from 'react';
import { Heart, MessageSquare, Sparkles, Smile, Ear, Users } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    { title: "Para conversar.", desc: "Ouvir o que seu filho tem a dizer sem pressa", icon: "💬" },
    { title: "Para brincar.", desc: "Voltar a rir e ser criança junto por 10 minutos", icon: "🎲" },
    { title: "Para rir.", desc: "Tornar o ambiente da casa mais leve e divertido", icon: "😄" },
    { title: "Para ouvir.", desc: "Prestar atenção nos sentimentos e curiosidades", icon: "👂" },
    { title: "Para abraçar.", desc: "Dar aquele abraço quentinho e aconchegante", icon: "🤗" },
    { title: "Para lembrar.", desc: "Que antes de tudo, vocês são uma família", icon: "❤️" }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF4ED] border-y border-[#EAE0D0] relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Tag */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E06A48] bg-white px-4 py-1.5 rounded-full border border-[#F2DACD] inline-block mb-4 shadow-xs">
          Nossa Filosofia
        </span>

        {/* Big Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#2C2A29] tracking-tight leading-tight mb-4">
          O OBJETIVO NÃO É TER UMA FAMÍLIA PERFEITA.
        </h2>

        <p className="text-xl sm:text-3xl font-extrabold text-[#E06A48] font-handwriting mb-8">
          É voltar a ter momentos de verdade.
        </p>

        {/* Realistic Expectations Box */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-9 border border-[#E5DACB] shadow-sm max-w-2xl mx-auto text-left space-y-3 mb-10 text-base sm:text-lg text-[#554E46]">
          <div className="flex items-center gap-3">
            <span className="text-amber-500 font-bold">•</span>
            <span>Talvez você continue tendo dias corridos.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-500 font-bold">•</span>
            <span>Talvez seus filhos continuem pedindo o celular.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-500 font-bold">•</span>
            <span>Talvez existam dias cansativos.</span>
          </div>

          <div className="pt-4 border-t border-[#EAE2D5]">
            <p className="text-base sm:text-lg font-extrabold text-[#2C2A29]">
              O desafio não promete eliminar a rotina.
            </p>
            <p className="text-sm sm:text-base text-[#2B533E] font-bold mt-1">
              Ele ajuda vocês a criarem pequenas pausas dentro dela.
            </p>
          </div>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto mb-10">
          {pillars.map((p, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 rounded-2xl border border-[#E8DFC8] shadow-xs text-center hover:border-[#E06A48] transition-colors"
            >
              <div className="text-2xl mb-1.5">{p.icon}</div>
              <h3 className="font-extrabold text-[#2C2A29] text-sm sm:text-base mb-0.5">
                {p.title}
              </h3>
              <p className="text-[11px] text-[#7A7268] leading-tight">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Warm Heart Reminder */}
        <div className="max-w-xl mx-auto bg-gradient-to-r from-[#E06A48] to-[#C95535] text-white p-6 sm:p-8 rounded-3xl shadow-xl">
          <p className="text-base sm:text-lg font-bold opacity-90 mb-1">
            Para lembrar que, antes de todas as obrigações…
          </p>
          <p className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            VOCÊS SÃO UMA FAMÍLIA. ❤️
          </p>
        </div>

      </div>
    </section>
  );
};
