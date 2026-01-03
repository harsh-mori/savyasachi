import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const plugins = [react()]

  // Only add prerender plugin during production build
  if (command === 'build' && mode === 'production') {
    try {
      const vitePrerenderModule = require('vite-plugin-prerender');
      const vitePrerender = vitePrerenderModule.default || vitePrerenderModule;

      const PuppeteerRendererModule = require('@prerenderer/renderer-puppeteer');
      const PuppeteerRenderer = PuppeteerRendererModule.default || PuppeteerRendererModule;

      plugins.push(
        vitePrerender({
          staticDir: path.join(__dirname, 'dist'),
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
          renderer: new PuppeteerRenderer({
            renderAfterDocumentEvent: 'render-event',
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
          }),
          rendererOptions: {
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
