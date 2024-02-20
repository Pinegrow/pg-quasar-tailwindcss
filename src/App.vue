<script setup lang="ts">
  // Added as per vuetiful docs -

  import { onMounted, watch } from 'vue'
  import { useDarkMode, useTheme } from '@code-coaching/vuetiful'
  import { useQuasar } from 'quasar'

  import '@code-coaching/vuetiful/styles/all.css'
  import '@code-coaching/vuetiful/css/overrides/quasar.css' // This provides overrides for Quasar components

  /**
   * Uncomment the theme you want to use
   */
  import '@code-coaching/vuetiful/themes/theme-vuetiful.css'
  // import '@code-coaching/vuetiful/themes/theme-rocket.css';
  // import '@code-coaching/vuetiful/themes/theme-sahara.css';
  // import '@code-coaching/vuetiful/themes/theme-seafoam.css';
  // import '@code-coaching/vuetiful/themes/theme-seasonal.css';
  // import '@code-coaching/vuetiful/themes/theme-skeleton.css';

  import './css/app.css'

  const { autoModeWatcher, chosenMode, MODE } = useDarkMode()
  const { changeDataTheme } = useTheme()

  onMounted(() => {
    changeDataTheme('vuetiful') // adds data-theme="vuetiful" to the <body> tag
    autoModeWatcher() // automatically use the dark preference of the OS
    handleQuasarDarkMode(chosenMode.value)
  })

  const handleQuasarDarkMode = (mode: string) => {
    $q.dark.set(mode === MODE.DARK)
    if (mode === MODE.LIGHT) {
      document.body.classList.remove('body--light')
    } else {
      document.body.classList.remove('body--dark')
    }
  }

  watch(
    () => chosenMode.value,
    (newMode) => {
      handleQuasarDarkMode(newMode)
    },
  )

  // Enforcing css import order - Tailwind is imported here instead of in nuxt.config.ts css, so that it can override all css imports via nuxt.config.ts
  // import '~/css/tailwind.css' // Removed as per vuetify docs instructions
  import 'uno.css'

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
  // const { setTheme } = useTheme()
  // setTheme()
</script>

<template>
  <div>
    <HeadAndMeta />
    <router-view />
  </div>
</template>

<style>
  #q-app {
    overflow: auto;
  }
  /* a {
    text-decoration: none !important;
  } */
</style>
