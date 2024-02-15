<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: 'hero',
    fit: 'cover',
    ...optimizeImage(heroImageUrl, true /* return bgStyles */),
  }

  const heroImage = heroImageOptimized.src
  const bgStyles = heroImageOptimized.bgStyles
</script>
<template>
  <section>
    <q-img
      :src="heroImageOptimized.src"
      :srcset="heroImageOptimized.srcset"
      :sizes="heroImageOptimized.sizes"
      :max-height="800"
      fit="cover"
    >
      <!-- <q-img :src="heroImageUrl" :max-height="800" fit="cover"> -->
      <div class="container flex flex-col h-full justify-end mx-auto">
        <div class="flex flex-col items-end pb-8 px-4 w-full md:pb-20">
          <h2
            class="capitalize font-serif leading-tight mb-2 md:w-96 text-primary text-right w-60 xl:w-full"
          >
            Style Up Your Life!
          </h2>
          <q-btn label="Shop Now" size="lg" class="mt-4" to="/women"></q-btn>
        </div>
      </div>
    </q-img>
  </section>
</template>
<style scoped></style>
