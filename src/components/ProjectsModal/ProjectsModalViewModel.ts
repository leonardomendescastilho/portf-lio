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

  const projects: Project[] = useMemo(() => {
    // Assuming t.modals.projects.project is an array of Project
    return t.modals.projects.project ?? [];
  }, [t]);

  return {
    projects,
    isOpen,
    onClose,
  };
};
