<script setup lang="ts">
  import { Todo, Meta } from '@/components/models'
  import { ref } from 'vue'
  import { useMeta } from 'quasar'
  import { heroImageUrl } from '@/utils/hero'

  const pageMeta = {
    // layout: 'default',
    // name: 'new-page',
    // alias: 'new-page',
    title: ref('Home'),
    description: 'Quasar Weather App',
    // hidden: true,
    navOrder: '1',
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  }

  useMeta(() => {
    return {
      title: pageMeta.title.value,
    }
  })

  const todos = ref<Todo[]>([
    {
      id: 1,
      content: 'ct1',
    },
    {
      id: 2,
      content: 'ct2',
    },
    {
      id: 3,
      content: 'ct3',
    },
    {
      id: 4,
      content: 'ct4',
    },
    {
      id: 5,
      content: 'ct5',
    },
  ])
  const meta = ref<Meta>({
    totalCount: 1200,
  })
</script>
<template>
  <q-page>
    <div class="relative-position">
      <q-img :src="heroImageUrl" cover height="250"> </q-img>
      <div class="flex justify-center q-gutter-lg q-pb-sm q-pt-sm">
        <span>First</span><span>Second</span>
      </div>
      <div class="justify-evenly q-col-gutter-sm row">
        <div class="column">
          <ExampleComponent
            title="Example component"
            active
            :todos="todos"
            :meta="meta"
          ></ExampleComponent>
        </div>
        <div class="col-auto column items-center justify-center">
          <DarkModeSwitch /><span style="margin-left: 8px" class="q-mt-xs">
            Toggle light/dark mode. This button uses unocss icons</span
          >
        </div>
      </div>
    </div>
  </q-page>
</template>
