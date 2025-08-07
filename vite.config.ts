import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // Configuração para deploy - Vercel usa base '/'
  base: '/',
  // Garantir que PDFs sejam copiados corretamente
  publicDir: 'public',
  assetsInclude: ['**/*.pdf'],
})
