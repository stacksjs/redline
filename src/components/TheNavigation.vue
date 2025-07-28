<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const whoWeHelpOpen = ref(false)
const servicesOpen = ref(false)
const isScrolled = ref(false)
const contactModalOpen = ref(false)

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="sticky top-0 z-50 transition-all duration-300 shadow-lg"
    :class="isScrolled ? 'bg-white' : 'bg-black bg-opacity-90'"
  >
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3" @click="closeDropdowns">
          <!-- Logo with black circle and red line -->
          <div class="relative w-10 h-10 flex items-center justify-center">
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center"
              :class="isScrolled ? 'bg-black' : 'bg-white'"
            >
              <div
                class="w-5 h-0.5"
                :class="isScrolled ? 'bg-redline-red' : 'bg-redline-red'"
              ></div>
            </div>
          </div>
          <span
            class="text-xl font-bold transition-colors"
            :class="isScrolled ? 'text-redline-red' : 'text-white'"
          >
            Redline Marketing
          </span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <!-- Who We Help Dropdown -->
          <div class="relative">
            <button
              @click="toggleWhoWeHelp"
              class="flex items-center font-medium transition-colors"
              :class="isScrolled ? 'text-gray-700 hover:text-redline-red' : 'text-gray-200 hover:text-redline-red'"
            >
              Who We Help
              <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            <div
              v-show="whoWeHelpOpen"
              class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
            >
              <RouterLink to="/local-businesses" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                Local Businesses
              </RouterLink>
              <RouterLink to="/auto-shops" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                Auto Shop Brands
              </RouterLink>
              <RouterLink to="/ecommerce" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                E-comm Brands
              </RouterLink>
            </div>
          </div>

          <!-- Services Dropdown -->
          <div class="relative">
            <button
              @click="toggleServices"
              class="flex items-center font-medium transition-colors"
              :class="isScrolled ? 'text-gray-700 hover:text-redline-red' : 'text-gray-200 hover:text-redline-red'"
            >
              Services
              <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            <div
              v-show="servicesOpen"
              class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
            >
              <RouterLink to="/services/ppc" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                PPC Advertising
              </RouterLink>
              <RouterLink to="/services/seo" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                SEO
              </RouterLink>
              <RouterLink to="/services/google-business" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                Google Business Page Management
              </RouterLink>
              <RouterLink to="/services/meta-ads" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                Meta Ads
              </RouterLink>
              <RouterLink to="/services/cro" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                CRO
              </RouterLink>
              <RouterLink to="/services/web-design" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                Web Design
              </RouterLink>
              <RouterLink to="/services/social-media" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                Social Media
              </RouterLink>
              <RouterLink to="/services/lead-generation" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-redline-red transition-colors" @click="closeDropdowns">
                Lead Generation
              </RouterLink>
            </div>
          </div>

          <!-- Direct Links -->
          <RouterLink
            to="/case-studies"
            class="font-medium transition-colors"
            :class="isScrolled ? 'text-gray-700 hover:text-redline-red' : 'text-gray-200 hover:text-redline-red'"
            @click="closeDropdowns"
          >
            Case Studies
          </RouterLink>
          <RouterLink
            to="/about"
            class="font-medium transition-colors"
            :class="isScrolled ? 'text-gray-700 hover:text-redline-red' : 'text-gray-200 hover:text-redline-red'"
            @click="closeDropdowns"
          >
            About Us
          </RouterLink>
          <button @click="openContactModal" class="btn-primary">Contact Us</button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden transition-colors"
          :class="isScrolled ? 'text-gray-700 hover:text-redline-red' : 'text-gray-200 hover:text-redline-red'"
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
    ></div>
  </nav>

  <!-- Contact Modal -->
  <ContactModal :is-open="contactModalOpen" @close="closeContactModal" />
</template>
