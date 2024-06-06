<script setup lang="ts">
  import { useMeta } from 'quasar'

  const pageMeta = {
    // layout: 'default',
    name: 'store',
    // alias: '[...slug]',
    title: ref('Store'),
    description: "Shop 'til You Drop: Your E-Commerce Haven!",
    navOrder: '3',
    hidden: true,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  }

  useMeta(() => {
    return {
      title: pageMeta.title.value,
      description: pageMeta.description || '',
    }
  })
</script>
<template>
  <Suspense>
    <ProductDetails />
  </Suspense>
</template>
<style scoped></style>
