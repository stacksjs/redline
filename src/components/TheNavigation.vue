<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const contactModalOpen = ref(false)
// Remove local isDarkMode - we'll use the global one from dark.ts

function closeDropdowns() {
  // Function kept for compatibility but not needed anymore
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
    class="bg-primary sticky top-0 z-50 bg-opacity-90 transition-all duration-300" :class="[{ 'shadow-lg': isDark }]"
  >
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3" @click="closeDropdowns">
          <!-- Logo with black circle and red line -->
          <div class="relative flex items-center justify-center">
            <img src="/logo.png" alt="Redline Marketing Logo" class="transition-all duration-300" :class="isScrolled ? 'h-24' : 'h-32'">
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center md:flex space-x-8">
          <!-- Who We Help Direct Link -->
          <RouterLink
            to="/who-we-help"
            class="rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black"
            :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
            @click="closeDropdowns"
          >
            Who We Help
          </RouterLink>

          <!-- Services Dropdown -->
          <div class="group relative">
            <RouterLink
              to="/services"
              class="flex items-center rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black"
              :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
              @click="closeDropdowns"
            >
              Services
              <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </RouterLink>
            <div class="bg-primary border-default invisible absolute left-0 top-full mt-2 w-64 border rounded-lg py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Google Ads & Paid Media
              </RouterLink>
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Social Media Marketing
              </RouterLink>
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                SEO & Local SEO
              </RouterLink>
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Website Strategy & CRO
              </RouterLink>
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Email Marketing & Retention
              </RouterLink>
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Marketing Automation
              </RouterLink>
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Web Development
              </RouterLink>
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Brand Strategy & Design
              </RouterLink>
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Google My Business & Yelp Management
              </RouterLink>
            </div>
          </div>

          <!-- Case Studies Direct Link -->
          <RouterLink
            to="/case-studies"
            class="rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black"
            :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
            @click="closeDropdowns"
          >
            Case Studies
          </RouterLink>
          <RouterLink
            to="/about"
            class="rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black"
            :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
            @click="closeDropdowns"
          >
            About Us
          </RouterLink>
          <button class="border-none btn-primary hover:bg-red-800" @click="openContactModal">
            Contact Us
          </button>

          <!-- Client Login Button -->
          <RouterLink
            to="/login"
            class="flex items-center border-2 rounded-md px-6 py-3 font-semibold ring-offset-white transition-all duration-200 ease-in-out space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black"
            :class="isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-gray-400 text-gray-700 hover:bg-gray-100'"
          >
            <!-- Login Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4"
            >
              <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
            <span>Login</span>
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="rounded-md ring-offset-white transition-colors md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black"
          :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Contact Modal -->
  <ContactModal :is-open="contactModalOpen" @close="closeContactModal" />
</template>
