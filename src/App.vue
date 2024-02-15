<script setup lang="ts">
  // Enforcing css import order - Tailwind is imported here instead of in nuxt.config.ts css, so that it can override all css imports via nuxt.config.ts
  import '~/css/tailwind.css'
  import 'uno.css'

  // Set brand
  const { setTheme } = useTheme()
  setTheme()
</script>

<template>
  <div>
    <HeadAndMeta />
    <router-view />
  </div>
</template>
