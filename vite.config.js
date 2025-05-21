import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
  // ssr: {
  //   noExternal: ['react-router-dom'] // or force to bundle
  // },
})
