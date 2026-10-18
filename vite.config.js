import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Site is served from the domain root (Plesk httpdocs/)
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
