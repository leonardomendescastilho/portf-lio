/**
 * @file Footer.tsx
 * @description Componente Footer com copyright traduzido
 */
import { useLanguage } from "@/components/Language/language-provider";

/**
 * @function Footer
 * @description Renderiza o footer com copyright traduzido.
 * @returns {JSX.Element}
 */
const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-6 px-6 border-t bg-background/80 mt-auto">
      <div className="text-center text-sm text-muted-foreground">
        {t.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
