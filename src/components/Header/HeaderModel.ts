/**
 * @interface HeaderLink
 * @description Representa um link de navegação do header.
 * @property {string} label - Texto do link.
 * @property {string} href - Caminho ou identificador do destino.
 */
export interface HeaderLink {
  label: string;
  href: string;
}

/**
 * @interface HeaderViewModel
 * @description Interface para o ViewModel do Header, incluindo links e handlers.
 * @property {HeaderLink[]} links - Links de navegação.
 * @property {(href: string) => void} onNavigate - Função para navegação.
 */
export interface HeaderViewModel {
  links: HeaderLink[];
  onNavigate: (href: string) => void;
}
