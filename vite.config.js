import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/my-interactive-portfolio/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Ensure that all routes point to index.html
        entryFileNames: 'index.html',
      },
    },
  },
})