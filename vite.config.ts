import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vite.dev/config/

dotenv.config();

export default defineConfig({
  server: {
    port: Number(process.env.VITE_APP_PORT) || 5000,
  },
  plugins: [react()],
})
