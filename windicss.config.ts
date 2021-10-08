import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: ['./**/*.html', './**/*.xht', './**/*.ma', './*.html'],
  },
})
