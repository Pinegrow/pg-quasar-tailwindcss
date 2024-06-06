/* eslint-disable */

/// <reference types="vite/client" />

// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module '*.vue' {
//   import type { ComponentOptions } from 'vue'
//   const Component: ComponentOptions
//   export default Component
// }

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
