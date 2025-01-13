<script setup lang="ts">
  const route = useRoute()
  // @ts-ignore
  const { category } = route.params

  const { fetchCategory } = await useProducts()
  const products = fetchCategory(category?.toString())

  const productsWithBadges = products.filter((product) => product.badge)
</script>
<template>
  <div>
    <div class="container mx-auto py-8">
      <div class="-tracking-wide flex font-bold justify-center text-5xl">
        <span class="text-center text-primary">Hot Deals</span>
        <BaseIcon class="ml-2 text-5xl" name="i-twemoji-fire"></BaseIcon>
      </div>
      <section
        data-pg-name="Products"
        class="flex flex-wrap justify-center mt-8"
      >
        <ProductCard
          v-for="(product, index) in productsWithBadges"
          :key="index"
          v-bind="product"
        />
      </section>
    </div>
  </div>
</template>
<style scoped></style>
