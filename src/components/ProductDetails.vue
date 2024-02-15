<script setup lang="ts">
  const route = useRoute()
  const { id: productId } = route.params

  const { fetchProduct } = await useProduct(+productId)
  const {
    title,
    price,
    description,
    image,
    imageOptimized,
    rating,
    badge,
    shipping,
  } = fetchProduct()

  const ratingHalved = computed(() => {
    return rating.rate / 2.0
  })

  const colors = [
    {
      id: 1,
      name: 'Gray',
    },
    {
      id: 2,
      name: 'Black',
    },
    {
      id: 3,
      name: 'White',
    },
    {
      id: 4,
      name: 'Blue',
    },
  ]

  const selected = ref(colors[0])
</script>
<template>
  <section class="mx-4 my-16 product-details">
    <div class="flex justify-center max-h-96 xl:max-h-[600px]">
      <div class="-m-4 bg-white p-8 rounded-lg w-full">
        <q-img
          v-if="imageOptimized"
          :src="imageOptimized.src"
          :srcset="imageOptimized.srcset"
          :sizes="imageOptimized.sizes"
          class="max-h-full"
        />
        <q-img v-else :src="image" class="max-h-full"></q-img>
      </div>
    </div>
    <div class="mt-8 md:mt-0 md:mx-8">
      <div class="relative">
        <q-chip v-if="badge" :label="badge" color="primary"></q-chip>
        <h3 class="mt-2">{{ title }}</h3>
      </div>
      <div class="flex items-center justify-between mt-2">
        <div class="flex items-center">
          <div>
            <q-rating
              class="mt-0.5"
              :model-value="ratingHalved"
              size="sm"
              color="secondary"
              color-half="secondary"
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
            ></q-rating>
          </div>
          <div class="ml-4">
            <div class="text-sm">{{ rating.count }} reviews</div>
          </div>
        </div>
        <div class="md:mr-4">
          <span class="dark:text-primary-400 text-primary-500 text-xs">{{
            shipping
          }}</span>
        </div>
      </div>
      <div
        v-if="badge || shipping"
        class="flex items-center justify-between mt-4"
      >
        <div>
          <span class="font-bold text-xl">${{ price }}</span>
        </div>
        <div class="md:mr-4"><span>Best Deals Inc.</span></div>
      </div>
      <div>
        <div class="mt-4">
          <q-select
            v-model="selected"
            :options="colors"
            option-label="name"
            option-value="id"
            outlined
          >
          </q-select>
        </div>
        <div class="flex mt-4 w-full">
          <q-btn label="Add To Cart" class="rounded-lg" size="xl" square block>
            <span class="py-2 lg:text-lg">Add To Cart</span>
          </q-btn>
        </div>
      </div>
      <div class="mt-8">
        <span>{{ description }}</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .product-details {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 'image' 'details';
  }
  @media (min-width: 768px) {
    .product-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: 'image details';
    }
  }
</style>
