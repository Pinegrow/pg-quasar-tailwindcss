<script setup lang="ts">
  definePage({
    name: 'Home',
    // alias: ['home'],
    meta: {
      title: 'Home',
      description: 'Quasar Commerce',
    },
  })
</script>
<template>
  <div>
    <HeroSection />
    <div class="container mx-auto pt-8">
      <LaunchSale class="mt-8" />
      <Suspense>
        <HotDeals class="mt-8" />
      </Suspense>
    </div>
  </div>
</template>
<style scoped></style>
