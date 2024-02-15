export const useBadgeStore = defineStore('badge', () => {
  const filteredBadgesForCategories = reactive({
    // women: ['Low Stock'],
    // electronics: ['Clearance',
  })

  return {
    filteredBadgesForCategories,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBadgeStore as any, import.meta.hot))
}
