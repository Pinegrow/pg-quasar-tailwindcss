<script setup lang="ts">
  import QuickStart from '@/content/index.md'

  definePage({
    meta: {
      // layout: 'default',
      name: 'quick-start',
      // alias: '[...slug]',
      title: 'Quick Start',
      description: 'Start Strong, Start Fast: Your Quick Launch Guide!',
      navOrder: '4',
      type: 'primary',
      icon: 'i-mdi-home',
      // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
    },
  })

  const slug = ''
  // useRoute().params.slug.toString().replace(/,/g, '/') ||
  // useRoute().name.toString().replace(/,/g, '/')
</script>
<template>
  <div class="pb-12">
    <TheHeader>
      <div>
        <div class="flex items-center">
          <h2 class="text-5xl">Quick Start</h2>
        </div>
        <div class="flex items-center mt-2">
          <h6 class="mt-2">Github repo for this template</h6>
          <q-btn
            size="md"
            class="ml-2 rounded-lg capitalize"
            color="secondary"
            href="https://github.com/pinegrow/pg-quasar-tailwindcss"
            target="_blank"
            ><span>Click here</span>
          </q-btn>
        </div>
      </div>
    </TheHeader>
    <section>
      <div class="container mx-auto px-10 w-full">
        <div class="flex flex-col rounded-lg">
          <article
            class="dark:xl:divide-gray-700 xl:divide-gray-200 xl:divide-y"
          >
            <div
              class="dark:divide-gray-700 divide-gray-200 divide-y pb-16 xl:divide-y-0 xl:gap-x-10 xl:grid xl:grid-cols-4 xl:pb-20 xl:sticky"
              style="grid-template-rows: auto 1fr"
            >
              <div
                class="dark:divide-gray-700 divide-gray-200 divide-y xl:col-span-3 xl:pb-0 xl:row-span-2"
              >
                <div
                  id="post"
                  class="dark:prose-invert dark:prose-gray-100 flex flex-col heading-offset max-w-none prose prose-gray-800 rounded-lg"
                >
                  <QuickStart />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
