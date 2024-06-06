import { setCssVar } from 'quasar'
import { boot } from 'quasar/wrappers'

import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from '~~/themes/pg-tailwindcss/tokens.mjs'

// TODO: DOESN'T WORK for SSR

export default boot(() => {
  // // Dark mode
  // setCssVar('primary', pg_colors.primary['400'])
  // setCssVar('secondary', pg_colors.secondary['400'])
  // setCssVar('accent', pg_colors.tertiary['400'])
  // setCssVar('positive', pg_colors.success['400'])
  // setCssVar('warning', pg_colors.warning['400'])
  // setCssVar('negative', pg_colors.error['400'])
  // setCssVar('info', pg_colors.info['400'])
  // setCssVar('dark', '#ffffff')
  // // Light mode
  // setCssVar('primary', pg_colors.primary['500'])
  // setCssVar('secondary', pg_colors.secondary['500'])
  // setCssVar('accent', pg_colors.tertiary['500'])
  // setCssVar('positive', pg_colors.success['500'])
  // setCssVar('warning', pg_colors.warning['500'])
  // setCssVar('negative', pg_colors.error['500'])
  // setCssVar('info', pg_colors.info['500'])
  // setCssVar('dark', pg_colors.neutral['900'])
})
