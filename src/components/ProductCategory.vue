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

  const category = route.params.category?.toString()

  const { fetchCategory } = await useProducts()
  const products = fetchCategory(category)

  const badges = [
    ...new Set(
      products
        .filter((product) => product.badge)
        .map((product) => product.badge),
    ),
  ]

  const { filteredBadgesForCategories } = storeToRefs(useBadgeStore())

  if (!filteredBadgesForCategories.value[category]) {
    filteredBadgesForCategories.value[category] = new Set()
  }

  const filteredBadges = computed(() => {
    return filteredBadgesForCategories.value[category]
  })

  const toggleFilter = (badge) => {
    if (filteredBadges.value.has(badge)) {
      filteredBadges.value.delete(badge)
    } else {
      filteredBadges.value.add(badge)
    }
  }

  const filteredProducts = computed(() => {
    if (filteredBadges.value.size) {
      return products.filter((product) =>
        filteredBadges.value.has(product.badge),
      )
    } else {
      return products
    }
  })
</script>
<template>
  <div>
    <section v-if="badges.length" class="flex items-center justify-center m-4">
      <span class="font-bold text-sm">Filter Badges</span>
      <div class="ml-4 mt-2">
        <q-btn
          v-for="(badge, index) in badges"
          :key="index"
          :label="badge"
          :glossy="filteredBadges.has(badge)"
          :outlined="!filteredBadges.has(badge)"
          class="mr-2"
          @click="toggleFilter(badge)"
        ></q-btn>
      </div>
    </section>
    <section data-pg-name="Products" class="flex flex-wrap justify-center">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        v-bind="product"
      />
    </section>
  </div>
</template>
<style scoped></style>
