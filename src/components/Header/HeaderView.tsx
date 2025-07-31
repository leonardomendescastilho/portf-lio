/**
 * @file HeaderView.tsx
 * @description Componente Header com navegação, toggle de tema e idioma, usando Shadcn UI e Tailwind.
 */
import type { FC } from "react";
import { useHeaderViewModel } from "./HeaderViewModel";
import { Sun, Moon, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * @function HeaderView
 * @description Renderiza o header com navegação, toggle de tema e idioma.
 * @returns {JSX.Element} O header do site.
 */
const HeaderView: FC = () => {
  const { links, onNavigate } = useHeaderViewModel();

  return (
    <header className="w-full flex items-center justify-center py-4 px-6 border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="flex gap-6 m-auto">
        {links.map((link) => (
          <Button
            key={link.href}
            variant="ghost"
            className="font-medium text-base"
            onClick={() => onNavigate(link.href)}
          >
            {link.label}
          </Button>
        ))}
      </nav>
      <div className="flex items-center gap-2 border">
        {/* Toggle Tema */}
        <Button size="icon" variant="ghost" aria-label="Alternar tema">
          <Sun className="h-5 w-5 hidden dark:block" />
          <Moon className="h-5 w-5 block dark:hidden" />
        </Button>
        {/* Toggle Idioma */}
        <Button size="icon" variant="ghost" aria-label="Português (BR)">
          <Flag className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" aria-label="Inglês (EN)">
          <Flag className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default HeaderView;
