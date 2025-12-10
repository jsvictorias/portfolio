/**
 * Garante que os asteriscos tenham espaços ao redor para melhor visualização.
 * Ex: "React*SaaS" vira "React * SaaS"
 */
export const formatTechs = (text: string): string => {
  return text.replace(/\*/g, ' * ');
};

/**
 * Verifica se o link é externo para adicionar target="_blank" se necessário.
 */
export const isExternalLink = (url: string): boolean => {
  return url.startsWith('http') || url.startsWith('www');
};