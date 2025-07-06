import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-vat-calculator/',
  // it's not practical to use a base URL in a local development environment, 
  // but it is useful for deployment on platforms like GitHub Pages.
})
