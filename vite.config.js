import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Change this line to just '/'
  base: '/', 
  plugins: [react()],
  server: {
    port: 3000,
  },
})