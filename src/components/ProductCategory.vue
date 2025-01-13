<script setup lang="ts">
  const route = useRoute()

  // @ts-ignore
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
          class="mr-2"
          @click="toggleFilter(badge)"
          color="primary"
          :glossy="filteredBadges.has(badge)"
          :outline="!filteredBadges.has(badge)"
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
