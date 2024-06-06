import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.mjs'

import { getFontsWithFallback } from './src/utils/font'

export default {
  important: true,
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'), // conflicts with quasar, so turned it off
    require('@pinegrow/tailwindcss-plugin').default({
      colors: pg_colors, // primary, secondary etc
      fonts: getFontsWithFallback(pg_fonts),
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
  ],

  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  get content() {
    const _content = [
      './index.html',
      './src/**/*.{vue,svelte,astro,js,jsx,cjs,mjs,ts,tsx,cts,mts,html,md,mdx,json}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
