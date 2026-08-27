// Configuração centralizada da URL de Checkout
export const CHECKOUT_BASE_URL = 'https://pay.wiapy.com/fZ67hDPP1BrP';

/**
 * Redireciona para uma URL garantindo o repasse de todos os parâmetros de URL (UTMs, SRC, SCK, etc.)
 * utilizando window.location.search e window.location.href
 */
export const redirectTo = (destinationUrl: string = CHECKOUT_BASE_URL) => {
  try {
    const currentSearch = window.location.search;

    if (!currentSearch || currentSearch.trim() === '' || currentSearch === '?') {
      window.location.href = destinationUrl;
      return;
    }

    // Se a URL de destino já contém '?', concatenamos com '&', senão com '?'
    const separator = destinationUrl.includes('?') ? '&' : '?';
    const paramsToAppend = currentSearch.startsWith('?') ? currentSearch.substring(1) : currentSearch;

    window.location.href = `${destinationUrl}${separator}${paramsToAppend}`;
  } catch (error) {
    console.error('Erro ao redirecionar:', error);
    window.location.href = destinationUrl;
  }
};
