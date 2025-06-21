import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  server: {
    host: true, // Muy importante: escucha en todas las interfaces
    allowedHosts: ['earaoz.dyndns.org'],
  }
})