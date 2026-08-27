import { Mission } from '../types';

export const FEATURED_MISSIONS: Mission[] = [
  {
    day: 1,
    title: "Hoje Você Escolhe",
    shortDesc: "Deixe seu filho escolher algo simples para vocês fazerem juntos.",
    fullDesc: "Deixe seu filho(a) escolher uma atividade rápida de 10 minutos para fazerem juntos (um desenho, uma brincadeira simples ou ouvir a música favorita dele).",
    timeMinutes: 10,
    category: "brincadeira",
    rule: "Você precisa participar de verdade, com presença total e sem mexer no celular.",
    badge: "PRÉVIA • DIA 01",
    quote: "A magia não está no que vocês fazem, mas no fato de estarem juntos."
  },
  {
    day: 4,
    title: "10 Minutos Só Nossos",
    shortDesc: "Guardem as telas. Nenhuma notificação é mais importante que esse momento.",
    fullDesc: "Coloquem todos os aparelhos em outro cômodo por 10 minutos para conversar, rir ou simplesmente estar juntos com atenção plena.",
    timeMinutes: 10,
    category: "desconexao",
    rule: "Se o telefone tocar ou apitar notificação, ninguém pode levantar para olhar.",
    badge: "PRÉVIA • DIA 04",
    quote: "O maior presente que você pode dar ao seu filho é a sua atenção inteira."
  },
  {
    day: 7,
    title: "Eu Quero Saber Mais Sobre Você",
    shortDesc: "Respondam perguntas que normalmente nunca param para fazer um ao outro.",
    fullDesc: "Puxe um dos Cartões de Conversa e façam perguntas curiosas que despertam gargalhadas e revelações afetivas.",
    timeMinutes: 12,
    category: "conversa",
    rule: "Vale rir, vale pensar bastante e os pais também têm que responder!",
    badge: "PRÉVIA • DIA 07",
    quote: "Conhecer o mundo interior do seu filho é a base de uma confiança para toda a vida."
  },
  {
    day: 14,
    title: "Uma Coisa Que Eu Amo em Você",
    shortDesc: "Cada pessoa escolhe alguém da família e diz uma coisa que gosta nela.",
    fullDesc: "Um momento de afeto genuíno. Olhe nos olhos do seu filho e compartilhe uma característica especial que você admira nele.",
    timeMinutes: 8,
    category: "afeto",
    rule: "Termine com um abraço quentinho e demorado.",
    badge: "PRÉVIA • DIA 14",
    quote: "Palavras de afirmação dos pais ecoam no coração dos filhos para sempre."
  },
  {
    day: 21,
    title: "Nossa Melhor Memória",
    shortDesc: "Lembrem juntos dos momentos vividos durante o desafio e escolham os favoritos.",
    fullDesc: "No último dia, celebrem olhando o calendário preenchido, relembrem as risadas e entreguem o Certificado de Família Conectada.",
    timeMinutes: 15,
    category: "memoria",
    rule: "Entreguem juntos o Certificado de Família Conectada!",
    badge: "PRÉVIA • DIA 21",
    quote: "21 dias não é o fim, é o início de um novo jeito de viver em família."
  }
];

export interface DayCalendarItem {
  day: number;
  title: string;
  subtitle: string;
  icon: string;
  focus: string;
  isLocked: boolean;
  phase: string;
}

export const ALL_21_DAYS: DayCalendarItem[] = [
  { 
    day: 1, 
    title: "A Primeira Pausa", 
    subtitle: "Missão aberta de demonstração: Hoje você escolhe.", 
    icon: "✨", 
    focus: "Pausa na Rotina",
    isLocked: false,
    phase: "Fase 1: O Início"
  },
  { 
    day: 2, 
    title: "Missão #02", 
    subtitle: "Atividade prática de conexão sonora e leveza em família.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 1: O Início"
  },
  { 
    day: 3, 
    title: "Missão #03", 
    subtitle: "Ritual surpresa de afeto espontâneo e carinho entre pais e filhos.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 1: O Início"
  },
  { 
    day: 4, 
    title: "Missão #04", 
    subtitle: "Desafio 10 Minutos Só Nossos: Zona 100% livre de telas.", 
    icon: "🔒", 
    focus: "Desconexão Digital",
    isLocked: true,
    phase: "Fase 1: O Início"
  },
  { 
    day: 5, 
    title: "Novos Momentos (Marco #01)", 
    subtitle: "O primeiro grande marco: novos rituais de conversa e risadas.", 
    icon: "🌟", 
    focus: "Primeiro Grande Marco",
    isLocked: false,
    phase: "Fase 2: Novos Rituais"
  },
  { 
    day: 6, 
    title: "Missão #06", 
    subtitle: "Resgate de raízes familiares e histórias engraçadas da infância.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 2: Novos Rituais"
  },
  { 
    day: 7, 
    title: "Missão #07", 
    subtitle: "Dinâmica guiada com os Cartões de Conversa para a mesa.", 
    icon: "🔒", 
    focus: "Diálogo & Escuta",
    isLocked: true,
    phase: "Fase 2: Novos Rituais"
  },
  { 
    day: 8, 
    title: "Missão #08", 
    subtitle: "Gesto físico de acolhimento e segurança emocional.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 2: Novos Rituais"
  },
  { 
    day: 9, 
    title: "Missão #09", 
    subtitle: "Atividade criativa e colaborativa de 10 minutos a quatro mãos.", 
    icon: "🔒", 
    focus: "Criatividade Juntos",
    isLocked: true,
    phase: "Fase 2: Novos Rituais"
  },
  { 
    day: 10, 
    title: "Hábitos de Presença (Marco #02)", 
    subtitle: "A metade do caminho: inauguração da nova rotina de gratidão.", 
    icon: "🫙", 
    focus: "Segundo Grande Marco",
    isLocked: false,
    phase: "Fase 3: Presença e Afeto"
  },
  { 
    day: 11, 
    title: "Missão #11", 
    subtitle: "Dinâmica rápida de descontração para dissolver o estresse do dia.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 3: Presença e Afeto"
  },
  { 
    day: 12, 
    title: "Missão #12", 
    subtitle: "Exercício simples de observação e presença plena.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 3: Presença e Afeto"
  },
  { 
    day: 13, 
    title: "Missão #13", 
    subtitle: "A brincadeira clássica que transforma a sala de estar.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 3: Presença e Afeto"
  },
  { 
    day: 14, 
    title: "Missão #14", 
    subtitle: "Momento profundo de validação e fortalecimento da autoestima.", 
    icon: "🔒", 
    focus: "Afirmação Positiva",
    isLocked: true,
    phase: "Fase 3: Presença e Afeto"
  },
  { 
    day: 15, 
    title: "Memórias Acumuladas (Marco #03)", 
    subtitle: "A consolidação: o ambiente familiar já respira mais leveza e cumplicidade.", 
    icon: "📸", 
    focus: "Terceiro Grande Marco",
    isLocked: false,
    phase: "Fase 4: Memórias em Família"
  },
  { 
    day: 16, 
    title: "Missão #16", 
    subtitle: "Experiência de empatia e diversão que as crianças adoram.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 4: Memórias em Família"
  },
  { 
    day: 17, 
    title: "Missão #17", 
    subtitle: "Alinhamento de sonhos e planos simples para os próximos meses.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 4: Memórias em Família"
  },
  { 
    day: 18, 
    title: "Missão #18", 
    subtitle: "Sacudindo o cansaço: 5 minutos de energia positiva coletiva.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 4: Memórias em Família"
  },
  { 
    day: 19, 
    title: "Missão #19", 
    subtitle: "Exercício guiado de reconhecimento mútuo entre pais e filhos.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 4: Memórias em Família"
  },
  { 
    day: 20, 
    title: "Missão #20", 
    subtitle: "Criando o legado: registro físico da jornada para guardar com carinho.", 
    icon: "🔒", 
    focus: "Conteúdo Exclusivo",
    isLocked: true,
    phase: "Fase 4: Memórias em Família"
  },
  { 
    day: 21, 
    title: "Família Reconectada (Marco Final)", 
    subtitle: "Celebração dos 21 momentos conquistados e entrega do Certificado Oficial.", 
    icon: "🏆", 
    focus: "Conquista Final dos 21 Dias",
    isLocked: false,
    phase: "Fase 5: Celebração & Futuro"
  }
];
