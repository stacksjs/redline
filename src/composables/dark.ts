// these APIs are auto-imported from @vueuse/core
const colorMode = useColorMode()

// On first visit (no persisted preference), start in light mode
if (typeof window !== 'undefined' && !localStorage.getItem('vueuse-color-scheme'))
  colorMode.value = 'light'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()
