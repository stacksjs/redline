// these APIs are auto-imported from @vueuse/core
const colorMode = useColorMode()

// Force dark mode always - override any user preferences
if (typeof window !== 'undefined') {
  colorMode.value = 'dark'
  // Watch for changes and force back to dark
  watch(colorMode, (newValue) => {
    if (newValue !== 'dark') {
      colorMode.value = 'dark'
    }
  })
}

export const isDark = useDark()
// Disable toggle functionality by making it always return dark mode
export function toggleDark() {
  colorMode.value = 'dark'
}
export const preferredDark = usePreferredDark()
