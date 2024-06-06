<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'
  import { useMeta } from 'quasar'

  const pageMeta = {
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: ref('Home'),
    description: 'Style Up Your Life!',
    // hidden: true,
    navOrder: '1',
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  }

  useMeta(() => {
    return {
      title: pageMeta.title.value,
    }
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
