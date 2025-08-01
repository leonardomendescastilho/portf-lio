/**
 * @file AboutModalViewModel.ts
 * @description ViewModel para o Modal "Sobre Mim", fornece dados e handlers.
 */
import { useMemo } from "react";
import type { AboutModalModel } from "./AboutModalModel";
import { useLanguage } from "../Language/language-provider";

/**
 * @function useAboutModalViewModel
 * @description Hook para fornecer dados e handlers do Modal "Sobre Mim".
 * @param {boolean} isOpen - Estado de abertura do modal.
 * @param {() => void} onClose - Função para fechar o modal.
 * @returns {AboutModalModel} Dados e funções para o Modal "Sobre Mim".
 */
export const useAboutModalViewModel = (
  isOpen: boolean,
  onClose: () => void
): AboutModalModel => {
  const { t } = useLanguage();

  const aboutText = useMemo(() => {
    return t.modals.about.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }, [t]);

  return {
    aboutText,
    isOpen,
    onClose,
  };
};
