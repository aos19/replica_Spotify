import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", 
    // Corrige o erro do top-level await que outros navegadores não aceitam
  }
})
