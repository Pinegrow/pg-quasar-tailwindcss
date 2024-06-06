<script setup lang="ts">
  import type { Product } from '../types/store'
  const { id, title, price, image, imageOptimized, badge, shipping } =
    defineProps<Product>()
</script>
<template>
  <RouterLink
    class="m-4 relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5"
    :to="`/store/${id}`"
  >
    <span
      v-if="badge"
      class="absolute bg-primary font-serif p-1 right-0 rounded-bl-md rounded-br-none rounded-tl-none rounded-tr-sm text-white text-xs z-10"
      >{{ badge }}</span
    >
    <q-card
      bordered
      class="border border-gray-400 rounded shadow-none md:h-full"
    >
      <q-card-section>
        <div class="relative">
          <div class="-m-4 bg-white md:max-h-96 p-8 rounded-lg">
            <q-img
              v-if="imageOptimized"
              :src="imageOptimized.src"
              :srcset="imageOptimized.srcset"
              :sizes="imageOptimized.sizes"
              fit="contain"
            />
            <q-img v-else :src="image" fit="contain"> </q-img>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="relative"></div>
        <div class="mt-14" data-pg-collapsed>
          <div>
            <span class="text-base">{{ title }}</span>
            <div class="flex font-medium items-center justify-between mt-4">
              <span class="font-bold text-base">${{ price }}</span>
              <q-chip
                v-if="shipping"
                class="dark:text-primary-400 text-primary-500 text-xs"
                size="sm"
                color="primary"
                outline
                >{{ shipping }}</q-chip
              >
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </RouterLink>
</template>
<style scoped></style>
