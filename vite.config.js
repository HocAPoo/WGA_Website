import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: set base to your repo name, e.g. '/my-repo/'
// For root deployment (custom domain): keep './'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
