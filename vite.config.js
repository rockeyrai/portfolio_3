import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/profile/', // Set the base path to '/profile/' if that's where it's deployed
  build: {
    outDir: 'dist',   // Output directory
  },
  assetsInclude:['**/*.glb']
})
