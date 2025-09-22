/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }
})
 */



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // keeps service worker updated
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'], // optional
      manifest: {
        name: 'My React App',
        short_name: 'MyApp',
        description: 'React app that works as website and installable app',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/frontend/',
        icons: [
          {
            src: '/spinner-icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/spinner-icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    port: 5173
  }
})


