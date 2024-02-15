<script setup lang="ts">
  import { useMeta } from 'quasar'

  const route = useRoute()
  const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || ''

  const pageMeta = {
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: computed(() => {
      return capitalize(route.params.category)
    }),
    description: 'Style Up Your Life!',
    hidden: true,
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  }

  useMeta(() => {
    return {
      title: pageMeta.title.value,
      // description: () => capitalize(route.params.category),
    }
  })

  const category = computed(() => {
    return route.params.category
  })
</script>
<template>
  <div class="pb-16">
    <Suspense>
      <ProductCategory :key="category" />
    </Suspense>
  </div>
</template>
<style scoped></style>
