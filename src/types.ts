export interface Mission {
  day: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  timeMinutes: number;
  category: 'conversa' | 'brincadeira' | 'afeto' | 'desconexao' | 'memoria';
  rule?: string;
  quote?: string;
  badge?: string;
}

export interface BonusItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  valueOriginal: string;
  features: string[];
}

export interface GalleryPage {
  id: string;
  title: string;
  subtitle: string;
  type: 'missao' | 'calendario' | 'cartoes' | 'gratidao' | 'sem-tela' | 'certificado';
  description: string;
  visualTag: string;
  previewDetails: {
    badge: string;
    headline: string;
    points: string[];
    footerNote: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}
