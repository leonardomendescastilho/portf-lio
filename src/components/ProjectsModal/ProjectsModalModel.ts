/**
 * @file ProjectsModalModel.ts
 * @description Interface para os dados do Modal de Projetos.
 */

/**
 * @interface Project
 * @description Representa um projeto individual.
 * @property {string} id - ID único do projeto.
 * @property {string} title - Título do projeto.
 * @property {string} description - Descrição do projeto.
 * @property {string[]} technologies - Tecnologias utilizadas.
 * @property {string} githubUrl - URL do repositório no GitHub.
 * @property {string} liveUrl - URL do projeto em produção (opcional).
 * @property {string} imageUrl - URL da imagem do projeto.
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

/**
 * @interface ProjectsModalModel
 * @description Interface para os dados do Modal de Projetos.
 */
export interface ProjectsModalModel {
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
}
