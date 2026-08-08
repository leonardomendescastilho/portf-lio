import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  // resolve o tema efetivo (trata "system") para decidir o próximo estado
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {/* Sol no claro, Lua no escuro — crossfade controlado pela classe .dark */}
      <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  )
}
