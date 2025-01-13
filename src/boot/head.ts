// import 'uno.css'

import { defineBoot } from '#q-app/wrappers'
import { createHead } from '@unhead/vue'

export default defineBoot(({ app }) => {
  app.use(createHead())
})
