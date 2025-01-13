<script setup lang="ts">
  import siteMeta from '@/site'
  const route = useRoute()

  definePage({
    meta: {
      // layout: 'default',
      // name: 'index',
      // alias: 'index',
      title: 'Category',
      description: 'Style Up Your Life!',
      hidden: true,
      navOrder: 1,
      type: 'primary',
      icon: 'i-mdi-home',
      // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
    },
  })

  const category = computed(() => {
    // @ts-ignore
    return route.params.category.toString()
  })

  const title = computed(() => {
    return capitalize(category.value)
  })

  const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || ''

  // useHead({
  //   title,
  //   titleTemplate: '%s %seperator %siteName',
  //   templateParams: {
  //     seperator: '|',
  //     siteName: siteMeta.title,
  //   },
  // })
</script>
<template>
  <div class="pb-16">
    <Suspense>
      <ProductCategory :key="category" />
    </Suspense>
  </div>
</template>
<style scoped></style>
