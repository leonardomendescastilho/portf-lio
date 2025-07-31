// ThemeProvider para Vite + React, conforme documentação Shadcn UI
import * as React from "react"
import { ThemeProvider as ShadcnThemeProvider } from "@/components/ui/theme-provider"

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ShadcnThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ShadcnThemeProvider>
  )
}
