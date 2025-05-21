import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
  ssr: {
    noExternal: ['react-router-dom'] // try bundling react-router-dom for SSR
  },
  resolve: {
    alias: {
      // Sometimes helps if Vite misresolves
      'react-router-dom/server': 'react-router-dom/server'
    }
  }
})
