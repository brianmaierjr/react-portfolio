import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

const pages = ['about', 'uses', 'colophon']
const dynamicRoutes = pages.map((page) => `/${page}`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({ dynamicRoutes, hostname: 'https://brianmaierjr.com' }),
  ],
})
