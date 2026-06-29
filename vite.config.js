import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure it builds to dist
    assetsDir: 'assets',
  },
  publicDir: 'public', // Ye explicit bata raha hai ki public folder use karna hai
})