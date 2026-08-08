/**
 * @interface SocialLink
 * @description Representa um link de rede social.
 * @property {string} label - Nome da rede social.
 * @property {string} url - URL do perfil.
 * @property {string} icon - Nome do ícone da rede social (ex: 'github', 'linkedin').
 */
export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

/**
 * @interface HeroModel
 * @description Interface para os dados do Hero.
 */
export interface HeroModel {
  name: string;
  role: string;
  location: string;
  description: string;
  techBadges: string[];
  photoUrl: string;
  cvUrl: string;
  socialLinks: SocialLink[];
}
