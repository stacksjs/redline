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
          <!-- Who We Help Dropdown -->
          <div class="group relative">
            <RouterLink
              to="/who-we-help"
              class="flex items-center rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black"
              :class="isScrolled ? 'text-muted-foreground hover:text-redline-red' : 'text-muted hover:text-redline-red'"
              @click="closeDropdowns"
            >
              Who We Help
              <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </RouterLink>
            <div class="bg-primary border-default invisible absolute left-0 top-full mt-2 w-48 border rounded-lg py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <RouterLink to="/local-businesses" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Local Businesses
              </RouterLink>
              <RouterLink to="/auto-shops" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Auto Shop Brands
              </RouterLink>
              <RouterLink to="/ecommerce" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                E-comm Brands
              </RouterLink>
            </div>
          </div>

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
            <div class="border-default bg-primary invisible absolute left-0 top-full mt-2 w-64 border rounded-lg py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <RouterLink to="/services#google-ads" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Google Ads & Paid Media
              </RouterLink>
              <RouterLink to="/services#social-media" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Social Media Marketing
              </RouterLink>
              <RouterLink to="/services#seo" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                SEO & Local SEO
              </RouterLink>
              <RouterLink to="/services#website" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Website Strategy & CRO
              </RouterLink>
              <RouterLink to="/services#email" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Email Marketing & Retention
              </RouterLink>
              <RouterLink to="/services#automation" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Marketing Automation
              </RouterLink>
              <RouterLink to="/services#development" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Web Development
              </RouterLink>
              <RouterLink to="/services#branding" class="text-primary hover:bg-surface block rounded-md px-4 py-2 ring-offset-white transition-colors hover:text-redline-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black">
                Brand Strategy & Design
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
            class="flex items-center rounded-full p-2 ring-offset-white transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 dark:ring-offset-black"
            :class="isDark ? 'text-blue-400 hover:bg-gray-800' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'"
            aria-label="Client Login"
          >
            <!-- User Profile Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-5"
            >
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>
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
