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
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);


  const links = [
    { label: "Projetos", href: "#projetos", type: "modal-project" as const },
    { label: "Sobre Mim", href: "#sobre", type: "modal-about" as const },
  ];

  const openProjectsModal = useCallback(() => {
    setIsProjectsModalOpen(true);
  }, []);

  const closeProjectsModal = useCallback(() => {
    setIsProjectsModalOpen(false);
  }, []);

  const openAboutMeModal = useCallback(() => {
    setIsAboutMeModalOpen(true);
  }, []);

  const closeAboutMeModal = useCallback(() => {
    setIsAboutMeModalOpen(false);
  }, []);

  const onNavigate = useCallback((href: string, type: 'modal-project' | 'modal-about') => {
    if (type === 'modal-project' && href === '#projetos') {
      openProjectsModal();
    }
    else if (type === 'modal-about' && href === '#sobre') {
      openAboutMeModal();
    }
  }, [openProjectsModal, openAboutMeModal]);

  return {
    links,
    onNavigate,
    isProjectsModalOpen,
    openProjectsModal,
    closeProjectsModal,
    isAboutMeModalOpen,
    openAboutMeModal,
    closeAboutMeModal,
  };
};
