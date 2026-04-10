import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'img1-740x740.png', 
        'img2-192x192.png', 'img3-512x512.png', 'robots.txt'],
      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,jsx,css,html,png,svg}"]
      },
      manifest: {
        name: 'GestionAppPWA',
        short_name: 'Gastify',
        description: 'Aplicativo web para la gestión de datos con React y PWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        screenshots: [
          {
            src: '/img/img1-949x534.png',
            sizes: '949x534',
            type: 'image/png',
            form_factor: 'narrow' 
          },
          {
            src: '/img/img1-949x534.png',
            sizes: '949x534',
            type: 'image/png',
            form_factor: 'wide' 
          }
        ],
        icons: [
          {
            src: '/img/img2-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/img3-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })],
})
