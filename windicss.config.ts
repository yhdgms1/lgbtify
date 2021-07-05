import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: ['./**/*.html', './**/*.xht', './**/*.ma', './*.html'],
  },
  theme: {
    colors,
  },
})
