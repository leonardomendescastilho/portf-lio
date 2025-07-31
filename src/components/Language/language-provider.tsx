/**
 * @file language-provider.tsx
 * @description Provider de idioma para gerenciar PT-BR e EN-US globalmente
 */
import { createContext, useContext, useEffect, useState } from "react";
import type { Language, Translations } from "../../translations";
import { translations } from "../../translations";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const initialState: LanguageProviderState = {
  language: "pt-BR",
  setLanguage: () => null,
  t: translations["pt-BR"],
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "pt-BR",
  storageKey = "vite-ui-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  );

  useEffect(() => {
    // Aqui podemos adicionar lógica adicional se necessário
    // Por exemplo, definir lang no HTML
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
    },
    t: translations[language],
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
