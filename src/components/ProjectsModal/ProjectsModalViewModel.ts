/**
 * @file ProjectsModalViewModel.ts
 * @description ViewModel para o Modal de Projetos, fornece dados e handlers.
 */
import { useMemo } from "react";
import type { Project, ProjectsModalModel } from "./ProjectsModalModel";
import { useLanguage } from "../Language/language-provider";

/**
 * @function useProjectsModalViewModel
 * @description Hook para fornecer dados e handlers do Modal de Projetos.
 * @param {boolean} isOpen - Estado de abertura do modal.
 * @param {() => void} onClose - Função para fechar o modal.
 * @returns {ProjectsModalModel} Dados e funções para o Modal de Projetos.
 */
export const useProjectsModalViewModel = (
  isOpen: boolean,
  onClose: () => void
): ProjectsModalModel => {
  const { t } = useLanguage();

  const projects: Project[] = useMemo(() => [
    {
      id: "1",
      title: "Portfolio Website",
      description: t.modals.projects.sampleProject1Description || "Modern portfolio website built with React and TypeScript",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/leonardomendescastilho/portfolio",
      liveUrl: "https://leonardocastilho.dev",
      imageUrl: "/projects/portfolio-preview.jpg"
    },
    {
      id: "2",
      title: "E-commerce Platform",
      description: t.modals.projects.sampleProject2Description || "Full-stack e-commerce solution with payment integration",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/leonardomendescastilho/ecommerce",
      liveUrl: "https://shop.example.com",
      imageUrl: "/projects/ecommerce-preview.jpg"
    },
    {
      id: "3",
      title: "Task Management App",
      description: t.modals.projects.sampleProject3Description || "Collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      githubUrl: "https://github.com/leonardomendescastilho/taskmanager",
      imageUrl: "/projects/taskmanager-preview.jpg"
    }
  ], [t]);

  return {
    projects,
    isOpen,
    onClose,
  };
};
