<script setup lang="ts">
import { ref } from 'vue'

const calendarModalOpen = ref(false)

function openCalendarModal() {
  calendarModalOpen.value = true
}

function closeCalendarModal() {
  calendarModalOpen.value = false
}
</script>

<template>
  <section
    class="relative flex items-center overflow-hidden dark:bg-redline-black dark:text-white"
  >
    <!-- Dark overlay for better text readability -->
    <div class="absolute inset-0 dark:bg-black dark:bg-opacity-60" />

    <div class="relative z-10 mx-auto max-w-6xl px-4 py-6 md:py-18">
      <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 md:gap-12">
        <!-- Hero Image - appears first on mobile, second on desktop -->
        <div class="absolute z-10 order-1 size-full flex justify-center lg:static lg:order-2 md:items-center lg:justify-end">
          <img src="/hero-blob.png" alt="Redline Marketing" class="size-[60%] object-contain opacity-40 lg:size-[80%] lg:opacity-100 md:opacity-50">
        </div>

        <!-- Content - appears second on mobile, first on desktop -->
        <div class="z-20 order-2 text-center lg:order-1 space-y-6 lg:text-left md:space-y-8">
          <div>
            <h1 class="mb-4 text-3xl font-bold leading-tight font-racing md:mb-6 lg:text-6xl md:text-5xl">
              <span class="text-redline-red">Redline</span> Your Marketing Today
            </h1>
            <p class="mb-6 text-lg leading-relaxed mix-blend-difference md:mb-8 lg:text-2xl md:text-xl dark:text-gray-200">
              Fuel your growth with high-performance marketing built for local businesses and e-commerce brands.
            </p>
            <p class="mb-6 text-base leading-relaxed italic mix-blend-difference md:mb-8 md:text-lg dark:text-gray-300">
              From lead generation to full-funnel strategy, we deliver bold, data-driven campaigns that convert.
            </p>
          </div>

          <div class="flex justify-center lg:justify-start">
            <button class="mb-4 mr-4 inline-block px-8 py-4 text-lg btn-primary hover:bg-red-800" @click="openCalendarModal">
              Schedule a Consultation
            </button>
          </div>

          <!-- Trusted By Section -->
          <div class="pt-6 md:pt-8">
            <p class="mb-3 text-xs tracking-wider uppercase md:mb-4 md:text-sm dark:text-gray-300">
              Trusted by:
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4 opacity-70 lg:justify-start md:gap-4">
              <!-- Placeholder for customer logos -->
              <div class="h-8 min-w-[80px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-4 text-center md:h-12 md:min-w-[120px] dark:bg-opacity-60 md:py-8">
                <img src="/public/partners/dh-shield-logo.png" alt="Transistor" class="h-6 max-h-8 w-12 cursor-pointer object-contain grayscale transition-all duration-300 md:h-10 md:max-h-12 md:w-20 hover:grayscale-0">
              </div>
              <div class="h-8 min-w-[80px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-4 text-center md:h-12 md:min-w-[120px] dark:bg-opacity-60 md:py-8">
                <img src="/public/partners/ecm-logo.png" alt="Reform" class="h-6 max-h-8 w-12 cursor-pointer object-contain grayscale transition-all duration-300 md:h-10 md:max-h-12 md:w-20 hover:grayscale-0">
              </div>
              <div class="h-8 min-w-[80px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-4 text-center md:h-12 md:min-w-[120px] dark:bg-opacity-60 md:py-8">
                <img src="/public/partners/escamex-logo.png" alt="Tuple" class="h-6 max-h-8 w-12 cursor-pointer object-contain grayscale transition-all duration-300 md:h-10 md:max-h-12 md:w-20 hover:grayscale-0">
              </div>

              <div class="h-8 min-w-[80px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-4 text-center md:h-12 md:min-w-[120px] dark:bg-opacity-60 md:py-8">
                <img src="/public/partners/Los-tres-party-rental-logo.png" alt="Tuple" class="h-6 max-h-8 w-12 cursor-pointer object-contain grayscale transition-all duration-300 md:h-10 md:max-h-12 md:w-20 hover:grayscale-0">
              </div>
              <div class="h-8 min-w-[80px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-4 text-center md:h-12 md:min-w-[120px] dark:bg-opacity-60 md:py-8">
                <img src="/public/partners/orozcos-auto-service.png" alt="Tuple" class="h-6 max-h-8 w-12 cursor-pointer object-contain grayscale transition-all duration-300 md:h-10 md:max-h-12 md:w-20 hover:grayscale-0">
              </div>
              <div class="h-8 min-w-[80px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-4 text-center md:h-12 md:min-w-[120px] dark:bg-opacity-60 md:py-8">
                <img src="/public/partners/ravens-logo.png" alt="Tuple" class="h-6 max-h-8 w-12 cursor-pointer object-contain grayscale transition-all duration-300 md:h-10 md:max-h-12 md:w-20 hover:grayscale-0">
              </div>
              <div class="h-8 min-w-[80px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-4 text-center md:h-12 md:min-w-[120px] dark:bg-opacity-60 md:py-8">
                <img src="/public/partners/retas-logo.png" alt="Tuple" class="h-6 max-h-8 w-12 cursor-pointer object-contain grayscale transition-all duration-300 md:h-10 md:max-h-12 md:w-20 hover:grayscale-0">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Calendar Modal -->
  <CalendarModal :is-open="calendarModalOpen" @close="closeCalendarModal" />
</template>
