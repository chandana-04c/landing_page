import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/beta-agents-program/',
  plugins: [react()],
})