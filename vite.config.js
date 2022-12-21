import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  
  // root: path.resolve(__dirname, 'src'),
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // you can replace this port with any port
  },
  // resolve: {
  //    alias: {
  //       '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
  //     }
  // }
})
