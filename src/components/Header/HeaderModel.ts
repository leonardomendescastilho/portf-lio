/**
 * @interface HeaderLink
 * @description Representa um link de navegação do header.
 * @property {string} label - Texto do link.
 * @property {string} href - Caminho ou identificador do destino.
 * @property {'modal' | 'scroll'} type - Tipo de navegação.
 */
export interface HeaderLink {
  label: string;
  href: string;
  type: 'modal' | 'scroll';
}

/**
 * @interface HeaderViewModel
 * @description Interface para o ViewModel do Header, incluindo links e handlers.
 * @property {HeaderLink[]} links - Links de navegação.
 * @property {(href: string, type: 'modal' | 'scroll') => void} onNavigate - Função para navegação.
 * @property {boolean} isProjectsModalOpen - Estado do modal de projetos.
 * @property {() => void} openProjectsModal - Função para abrir o modal de projetos.
 * @property {() => void} closeProjectsModal - Função para fechar o modal de projetos.
 */
export interface HeaderViewModel {
  links: HeaderLink[];
  onNavigate: (href: string, type: 'modal' | 'scroll') => void;
  isProjectsModalOpen: boolean;
  openProjectsModal: () => void;
  closeProjectsModal: () => void;
}
