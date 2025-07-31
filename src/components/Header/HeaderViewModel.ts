/**
 * @file HeaderViewModel.ts
 * @description ViewModel para o Header, gerencia links e handlers de navegação.
 */
import { useCallback } from "react";
import type { HeaderViewModel } from "./HeaderModel";

/**
 * @function useHeaderViewModel
 * @description Hook para fornecer dados e handlers do Header.
 * @returns {HeaderViewModel} Dados e funções para o Header.
 */
export const useHeaderViewModel = (): HeaderViewModel => {
  const links = [
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre Mim", href: "#sobre" },
  ];

  const onNavigate = useCallback((href: string) => {
    // Pode ser expandido para navegação SPA ou abrir modais
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return {
    links,
    onNavigate,
  };
};
