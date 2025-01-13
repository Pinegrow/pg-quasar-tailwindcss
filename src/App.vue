<script setup lang="ts">
  // Enforcing css import order - Tailwind is imported here instead of in nuxt.config.ts css, so that it can override all css imports via nuxt.config.ts
  import '~/css/tailwind.css'
  import { useQuasar } from 'quasar'
  const $q = useQuasar()
  $q.iconMapFn = (iconName) => {
    return {
      // If using other iconsets, use BaseIcon.vue component instead of q-icon.
      // To use BaseIcon, refer to next step for further details.
      // i-mdi-home (unocss icons) will map to mdi-home (quasar mdi icons)
      icon: iconName.startsWith('i-') ? iconName.substring(2) : iconName,
    }
  }

  // Set brand
  const { setTheme } = useTheme()
  setTheme()
</script>

<template>
  <div>
    <router-view />
  </div>
</template>
