import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/terminal-portfolio/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  esbuild: {
    loader: "tsx",
    include: /\.[jt]sx?$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
    },
  },
  define: {
    'process.env': {}
  }
}) 