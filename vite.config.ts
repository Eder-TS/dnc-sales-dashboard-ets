import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert(), tsconfigPaths()],
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
