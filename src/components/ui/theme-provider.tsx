/**
 * @file theme-provider.tsx
 * @description Provider de tema para Vite/React, conforme documentação Shadcn UI.
 */
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "@/components/ui/next-theme-provider";
import { type ThemeProviderProps } from "@/components/ui/next-theme-provider";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
