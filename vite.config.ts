import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ["localhost", "127.0.0.1", ".fly.dev", "bolt-clone-agent.fly.dev"],
  },
  base: '/agent/', // VERY IMPORTANT

  plugins: [react()],
})
