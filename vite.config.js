import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/my-interactive-portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 3000, // Change this to whatever port you want
  },
})