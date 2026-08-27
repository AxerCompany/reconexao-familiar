import { GalleryPage } from '../types';

export const GALLERY_PAGES: GalleryPage[] = [
  {
    id: 'pagina-missao-diaria',
    title: 'Página da Missão Diária',
    subtitle: 'Direta ao ponto, sem enrolação e com tempo estimado',
    type: 'missao',
    description: 'Cada dia traz a missão clara, o objetivo emocional, uma regra divertida e um espaço para a família anotar ou desenhar a memória do dia.',
    visualTag: 'DIA 01 • AMOSTRA REAL',
    previewDetails: {
      badge: 'MISSÃO #01',
      headline: 'Hoje Você Escolhe',
      points: [
        '⏱️ Tempo estimado: 10 minutos',
        '🎯 Objetivo: Dar autonomia e protagonismo ao seu filho',
        '📜 Regra de Ouro: Sem telefone por perto e presença de verdade',
        '✍️ Espaço para a criança carimbar ou assinar que a missão foi cumprida'
      ],
      footerNote: '"Eu consigo fazer isso hoje antes do jantar!"'
    }
  },
  {
    id: 'calendario-mural',
    title: 'Calendário Mural de Progresso',
    subtitle: 'Acompanhe dia a dia com a criança na geladeira ou na parede',
    type: 'calendario',
    description: 'Um mapa visual com os 21 dias onde a criança marca com adesivos, lápis de cor ou carimbos cada dia concluído.',
    visualTag: 'ACOMPANHAMENTO VISUAL',
    previewDetails: {
      badge: 'MURAL DOS 21 DIAS',
      headline: 'Rumo ao Dia 21: A Nossa Conquista',
      points: [
        '📌 21 círculos ilustrados com ícones afetivos',
        '🌟 Marcos nos Dias 05, 10, 15 e 21 com recompensas de carinho',
        '👧 Desperta o entusiasmo infantil: "Mãe, qual é a missão de hoje?"',
        '🎨 Formato fácil de imprimir em qualquer impressora caseira'
      ],
      footerNote: 'Sensação diária de vitória e proximidade para os pequenos.'
    }
  },
  {
    id: 'cartoes-conversa-reais',
    title: 'Cartões de Conversa para a Mesa',
    subtitle: 'Perguntas prontas que geram risadas e confidências',
    type: 'cartoes',
    description: 'Cards prontos para recortar com perguntas leves, profundas e curiosas que tiram a família das respostas automáticas de "tudo bem".',
    visualTag: 'CARTÕES DE PERGUNTAS',
    previewDetails: {
      badge: '30 CARDS ILUSTRADOS',
      headline: 'Perguntas que Quebram o Piloto Automático',
      points: [
        '💬 "Se o nosso cachorro/gato falasse, o que ele diria sobre nós?"',
        '💬 "Qual momento de hoje você gostaria de viver de novo?"',
        '💬 "Se você inventasse um feriado em família, qual seria?"',
        '💬 "Qual é a coisa mais engraçada que a mamãe/papai já fez?"'
      ],
      footerNote: 'Basta colocar um no centro do prato ou na mesa do café.'
    }
  },
  {
    id: 'pote-gratidao-tiras',
    title: 'Fichas do Pote da Gratidão',
    subtitle: 'Tirinhas de afeto para recortar, preencher e guardar',
    type: 'gratidao',
    description: 'Fichas ilustradas com campos rápidos: "Hoje sou grato por...", "Um abraço quentinho que recebi...", para acumular memórias felizes.',
    visualTag: 'RITUAL NOTURNO',
    previewDetails: {
      badge: 'POTE DA GRATIDÃO',
      headline: 'Pequenas Palavras que Curam Dias Difíceis',
      points: [
        '✨ 1 linha para a data + 2 linhas simples para a frase',
        '✂️ Linhas pontilhadas fáceis para a criança recortar',
        '🫙 Encha qualquer pote de vidro ou caixinha de sapatos',
        '❤️ Leitura mágica em momentos de desânimo ou finais de semana'
      ],
      footerNote: 'Ensina os filhos a valorizarem os pequenos gestos diários.'
    }
  },
  {
    id: 'guia-sem-telas',
    title: 'Guia de Desafios Sem Tela',
    subtitle: 'Substitutos instantâneos de 5 a 15 minutos',
    type: 'sem-tela',
    description: 'Tabela de consulta rápida para quando a criança estiver no tédio ou vidrada no celular, com brincadeiras que não exigem comprar nada.',
    visualTag: 'SOS DESCONEXÃO',
    previewDetails: {
      badge: '15 IDEIAS PRONTAS',
      headline: 'Desconectar sem Brigas nem Crises',
      points: [
        '🎲 "O Chão é Lava" com almofadas da sala',
        '🔦 Caça ao Tesouro com lanterna no quarto escuro',
        '🎤 Desafio da Dublagem Maluca em família',
        '👀 Telepatia de Desenhos nas costas'
      ],
      footerNote: 'Transforma o "me dá o celular" em "vamos brincar juntos".'
    }
  },
  {
    id: 'certificado-conclusao',
    title: 'Certificado da Família Conectada',
    subtitle: 'A comemoração oficial da vitória no Dia 21',
    type: 'certificado',
    description: 'Um diploma afetivo para preencher os nomes dos pais e dos filhos, assinar juntos e guardar como símbolo de um novo capítulo.',
    visualTag: 'DIA 21 • CELEBRAÇÃO',
    previewDetails: {
      badge: 'CERTIFICADO OFICIAL',
      headline: 'Certificamos com Muito Orgulho e Amor...',
      points: [
        '🏆 Que a nossa família completou os 21 Dias de Conexão',
        '❤️ Colecionamos 21 momentos de presença e risadas',
        '🖋️ Espaço para a assinatura de cada membro da família',
        '🖼️ Pronto para emoldurar ou colar no mural de recordações'
      ],
      footerNote: 'Um fechamento emocionante que as crianças nunca esquecem.'
    }
  }
];
