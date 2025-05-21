import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['front.infogujarat.in'],
  },
  resolve: {
    alias: [
      { find: 'react-router-dom/server', replacement: path.resolve(__dirname, 'node_modules/react-router-dom/server.js') }
    ],
  },
  ssr: {
    external: ['react-helmet', 'react-router-dom']
  }
})
