import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  base: '/vue-sdz/',

  root: path.join(__dirname, '/'),

  build: {
    outDir: path.join(__dirname, 'docs')
  },

  plugins: [  createVuePlugin() ],

  server: { port: 8080 }
})
