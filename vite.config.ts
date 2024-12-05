import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/terminal-portfolio/',
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    define: {
      __GITHUB_TOKEN__: JSON.stringify(env.VITE_GITHUB_TOKEN),
    },
    server: {
      port: 5173,
      open: true,
    }
  };
}); 