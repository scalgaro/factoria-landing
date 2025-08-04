import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true, // Abre automáticamente el navegador
    host: true  // Permite acceso desde otros dispositivos en la red
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  preview: {
    port: 4173,
    open: true
  }
}) 