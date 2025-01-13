<script setup lang="ts">
  definePage({
    meta: {
      // layout: 'default',
      name: 'store',
      // alias: '[...slug]',
      title: 'Store',
      description: "Shop 'til You Drop: Your E-Commerce Haven!",
      navOrder: '3',
      hidden: true,
      type: 'primary',
      icon: 'i-mdi-home',
      // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
    },
  })
</script>
<template>
  <Suspense>
    <ProductDetails />
  </Suspense>
</template>
<style scoped></style>
