import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // requests to http://localhost:5173/wyr (vite server) will be sent to http://localhost:3000/wyr (api server)
      '/wyr': 'http://localhost:3000/',
    }
  }
})
