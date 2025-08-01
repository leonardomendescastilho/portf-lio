/**
 * @file theme-provider.tsx
 * @description Provider de tema para Vite/React, conforme documentação Shadcn UI.
 */
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
