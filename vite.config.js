import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['front.infogujarat.in'],
  },
  ssr: {
    external: ['react-helmet', 'react-router-dom']
  }
})
