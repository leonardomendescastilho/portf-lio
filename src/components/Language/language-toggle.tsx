/**
 * @file language-toggle.tsx
 * @description Toggle de idioma com bandeiras BR/US
 */
import { Button } from "@/components/ui/button";
import { useLanguage } from "./language-provider";
import BrFlag from "../../assets/images/flags/br.svg";
import UsFlag from "../../assets/images/flags/us.svg";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "pt-BR" ? "en-US" : "pt-BR");
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label={language === "pt-BR" ? "Switch to English" : "Mudar para Português"}
      onClick={toggleLanguage}
      className="relative"
    >
      {language === "pt-BR" ? (
        <img src={UsFlag} alt="English" className="h-5 w-5" />
      ) : (
        <img src={BrFlag} alt="Português" className="h-5 w-5" />
      )}
    </Button>
  );
}
