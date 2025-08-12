<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const whoWeHelpOpen = ref(false)
const servicesOpen = ref(false)
const isScrolled = ref(false)
const contactModalOpen = ref(false)
// Remove local isDarkMode - we'll use the global one from dark.ts

function toggleWhoWeHelp() {
  whoWeHelpOpen.value = !whoWeHelpOpen.value
  servicesOpen.value = false
}

function toggleServices() {
  servicesOpen.value = !servicesOpen.value
  whoWeHelpOpen.value = false
}

function closeDropdowns() {
  whoWeHelpOpen.value = false
  servicesOpen.value = false
}

function openContactModal() {
  contactModalOpen.value = true
  closeDropdowns()
}

function closeContactModal() {
  contactModalOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

// Remove local toggleDarkMode - use global toggleDark from dark.ts

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="bg-primary sticky top-0 z-50 bg-opacity-90 shadow-lg transition-all duration-300"
  >
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex items-center justify-between py-2">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3" @click="closeDropdowns">
          <!-- Logo with black circle and red line -->
          <div class="relative flex items-center justify-center">
            <img src="/logo.png" alt="Redline Marketing Logo" class="transition-all duration-300" :class="isScrolled ? 'h-24' : 'h-32'">
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center md:flex space-x-8">
          <!-- Who We Help Dropdown -->
          <div class="relative">
            <button
              class="flex items-center font-medium transition-colors"
              :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
              @click="toggleWhoWeHelp"
            >
              Who We Help
              <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            <div
              v-show="whoWeHelpOpen"
              class="bg-primary border-default absolute left-0 top-full mt-2 w-48 border rounded-lg py-2 shadow-lg"
            >
              <RouterLink to="/local-businesses" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                Local Businesses
              </RouterLink>
              <RouterLink to="/auto-shops" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                Auto Shop Brands
              </RouterLink>
              <RouterLink to="/ecommerce" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                E-comm Brands
              </RouterLink>
            </div>
          </div>

          <!-- Services Dropdown -->
          <div class="relative">
            <button
              class="flex items-center font-medium transition-colors"
              :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
              @click="toggleServices"
            >
              Services
              <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            <div
              v-show="servicesOpen"
              class="border-default bg-primary absolute left-0 top-full mt-2 w-56 border rounded-lg py-2 shadow-lg"
            >
              <RouterLink to="/services/ppc" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                PPC Advertising
              </RouterLink>
              <RouterLink to="/services/seo" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                SEO
              </RouterLink>
              <RouterLink to="/services/google-business" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                Google Business Page Management
              </RouterLink>
              <RouterLink to="/services/meta-ads" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                Meta Ads
              </RouterLink>
              <RouterLink to="/services/cro" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                CRO
              </RouterLink>
              <RouterLink to="/services/web-design" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                Web Design
              </RouterLink>
              <RouterLink to="/services/social-media" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                Social Media
              </RouterLink>
              <RouterLink to="/services/lead-generation" class="text-primary hover:bg-surface block px-4 py-2 transition-colors hover:text-redline-red" @click="closeDropdowns">
                Lead Generation
              </RouterLink>
            </div>
          </div>

          <!-- Direct Links -->
          <RouterLink
            to="/case-studies"
            class="font-medium transition-colors"
            :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
            @click="closeDropdowns"
          >
            Case Studies
          </RouterLink>
          <RouterLink
            to="/about"
            class="font-medium transition-colors"
            :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
            @click="closeDropdowns"
          >
            About Us
          </RouterLink>
          <button class="btn-primary" @click="openContactModal">
            Contact Us
          </button>

          <!-- Dark Mode Toggle - Connect to global state -->
          <div class="group relative w-11 inline-flex shrink-0 rounded-full bg-gray-100 p-0.5 transition-colors duration-200 ease-in-out">
            <span
              class="ring-border relative size-5 rounded-full bg-white ring-1 transition-transform duration-200 ease-in-out"
              :class="{ 'translate-x-5': isDark }"
            >
              <span
                class="absolute inset-0 size-full flex items-center justify-center transition-opacity duration-200 ease-in"
                :class="{ 'opacity-0': isDark, 'opacity-100': !isDark }"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3 text-yellow-400">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              </span>
              <span
                class="absolute inset-0 size-full flex items-center justify-center transition-opacity duration-200 ease-in"
                :class="{ 'opacity-100': isDark, 'opacity-0': !isDark }"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3 text-blue-400">
                  <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                </svg>
              </span>
            </span>
            <input
              :checked="isDark"
              type="checkbox"
              class="absolute inset-0 appearance-none focus:outline-hidden"
              aria-label="Toggle dark mode"
              @click="() => toggleDark()"
            >
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="transition-colors md:hidden"
          :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Overlay to close dropdowns when clicking outside -->
    <div
      v-show="whoWeHelpOpen || servicesOpen"
      class="fixed inset-0 z-10"
      @click="closeDropdowns"
    />
  </nav>

  <!-- Contact Modal -->
  <ContactModal :is-open="contactModalOpen" @close="closeContactModal" />
</template>
