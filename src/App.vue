<script setup lang="ts">
  import 'uno.css'

  // Set brand
  const { setTheme } = useTheme()
  setTheme()
</script>

<template>
  <router-view />
</template>
