import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3001,
    strictPort: true,
    allowedHosts: ["localhost", "127.0.0.1", ".fly.dev", "bolt-clone-agent.fly.dev"],
  },
  plugins: [react()],
})
