import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://lucasvand.github.io/Neumorphic-Clock/',
  plugins: [react()],
})
