/**
 * @file theme-toggle.tsx
 * @description Botão de alternância de tema (claro/escuro) usando Shadcn UI e Tailwind.
 */
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * @function ThemeToggle
 * @description Botão para alternar entre tema claro e escuro.
 * @returns {JSX.Element}
 */
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label="Alternar tema"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
