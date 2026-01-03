import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const plugins = [react()]

  // Only add prerender plugin during production build
  if (command === 'build' && mode === 'production') {
    try {
      const vitePrerender = require('vite-plugin-prerender');
      plugins.push(
        vitePrerender({
          // Required - Path to static HTML file
          staticDir: path.join(__dirname, 'dist'),
          // Routes to prerender
          routes: [
            '/',
            '/about',
            '/about/leader',
            '/about/clients',
            '/facilities',
            '/facilities/cnc-machines',
            '/facilities/measurement-tools',
            '/products',
            '/products/mechanical-fixtures',
            '/products/hydraulic-fixtures',
            '/products/turning-fixtures',
            '/products/zero-point-clamping',
            '/products/standard-workholding',
            '/contact'
          ],
          // Renderer configuration
          renderer: '@prerenderer/renderer-puppeteer',
          rendererOptions: {
            // Wait until network is idle before capturing
            renderAfterDocumentEvent: 'render-event',
            // Headless mode
            headless: true,
            // Inject property to detect prerendering
            injectProperty: '__PRERENDER_INJECTED',
            inject: {
              prerendered: true
            }
          }
        })
      )
    } catch (error) {
      console.warn('vite-plugin-prerender could not be loaded:', error.message)
    }
  }

  return {
    plugins
  }
})
