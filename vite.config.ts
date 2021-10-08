import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { minifyHtml } from 'vite-plugin-html'
import { vitePlugin as malinaPlugin } from 'malinajs-unplugin'
import { default as windiCSSPlugin } from 'vite-plugin-windicss'

export default defineConfig(({ mode }) => {
  const DEV = process.env.MODE === 'development'

  return {
    plugins: [
      malinaPlugin({
        debugLabel: false,
        hideLabel: true
      }),
      windiCSSPlugin({
        scan: {
          fileExtensions: ['html', 'ma', 'xht'],
        },
      }),
      !DEV && viteSingleFile(),
      !DEV && minifyHtml(),
    ],
    build: {
      target: 'chrome64',
      polyfillDynamicImport: false,
      cssCodeSplit: false,
      rollupOptions: {
        inlineDynamicImports: true,
        output: {
          manualChunks: () => 'everything.js',
        },
      },
    },
  }
})
