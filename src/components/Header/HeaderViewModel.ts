/**
 * @file HeaderViewModel.ts
 * @description ViewModel para o Header, gerencia links e handlers de navegação.
 */
import { useCallback, useState } from "react";
import type { HeaderViewModel } from "./HeaderModel";

/**
 * @function useHeaderViewModel
 * @description Hook para fornecer dados e handlers do Header.
 * @returns {HeaderViewModel} Dados e funções para o Header.
 */
export const useHeaderViewModel = (): HeaderViewModel => {
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  const links = [
    { label: "Projetos", href: "#projetos", type: "modal" as const },
    { label: "Sobre Mim", href: "#sobre", type: "scroll" as const },
  ];

  const openProjectsModal = useCallback(() => {
    setIsProjectsModalOpen(true);
  }, []);

  const closeProjectsModal = useCallback(() => {
    setIsProjectsModalOpen(false);
  }, []);

  const onNavigate = useCallback((href: string, type: 'modal' | 'scroll') => {
    if (type === 'modal' && href === '#projetos') {
      openProjectsModal();
    } else if (type === 'scroll') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [openProjectsModal]);

  return {
    links,
    onNavigate,
    isProjectsModalOpen,
    openProjectsModal,
    closeProjectsModal,
  };
};
