import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // equivalent to 0.0.0.0
    port: 5173,
    strictPort: true,
    origin: 'http://172.17.176.1:5173', // crucial for iframe and HMR
    hmr: {
      protocol: 'ws',
      host: '172.17.176.1',
      port: 5173,
    },
    watch: {
      usePolling: true, // fixes file change detection inside Docker
    },
  },
})
