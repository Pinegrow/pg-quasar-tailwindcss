import { Dark, useQuasar } from 'quasar'

export const useDarkMode = () => {
  const $q = useQuasar()

  const isDark = ref(Dark.isActive)

  watch(
    () => $q.dark.isActive,
    (val) => {
      isDark.value = val
    },
  )

  const toggleDark = () => {
    Dark.toggle()
  }

  return {
    isDark,
    toggleDark,
  }
}
