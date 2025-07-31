import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/Theme/theme-provider.tsx'
import { LanguageProvider } from './components/Language/language-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider defaultLanguage="pt-BR" storageKey="vite-ui-language">
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
