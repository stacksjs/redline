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

    <div class="relative z-10 mx-auto max-w-6xl px-4 py-18">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <!-- Left Content -->
        <div class="space-y-8">
          <div>
            <h1 class="mb-6 text-5xl font-bold leading-tight font-racing lg:text-6xl">
              <span class="text-redline-red">Redline</span> Your Marketing Today
            </h1>
            <p class="mb-8 text-xl leading-relaxed mix-blend-difference lg:text-2xl dark:text-gray-200">
              Fuel your growth with high-performance marketing built for local businesses and e-commerce brands.
            </p>
            <p class="mb-8 text-lg leading-relaxed italic mix-blend-difference dark:text-gray-300">
              From lead generation to full-funnel strategy, we deliver bold, data-driven campaigns that convert.
            </p>
          </div>

          <div>
            <button class="mb-4 mr-4 inline-block px-8 py-4 text-lg btn-primary hover:bg-red-800" @click="openCalendarModal">
              Schedule a Consultation
            </button>
          </div>

          <!-- Trusted By Section -->
          <div class="pt-8">
            <p class="mb-4 text-sm tracking-wider uppercase dark:text-gray-300">
              Trusted by:
            </p>
            <div class="flex flex-wrap items-center gap-8 opacity-70">
              <!-- Placeholder for customer logos -->
              <div class="h-12 min-w-[120px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-8 text-center dark:bg-opacity-60">
                <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" class="col-span-2 h-10 max-h-12 w-20 w-full object-contain lg:col-span-1">
              </div>
              <div class="h-12 min-w-[120px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-8 text-center dark:bg-opacity-60">
                <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" alt="Transistor" class="col-span-2 h-10 max-h-12 w-20 w-full object-contain lg:col-span-1">
              </div>
              <div class="h-12 min-w-[120px] flex items-center justify-center border border-gray-600 rounded bg-gray-800 px-2 py-8 text-center dark:bg-opacity-60">
                <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="Transistor" class="col-span-2 h-10 max-h-12 w-20 w-full object-contain lg:col-span-1">
              </div>
            </div>
          </div>
        </div>

        <!-- Right side - empty space for background image to show through -->
        <div class="size-full flex items-center justify-end">
          <img src="/hero-blob.png" alt="Redline Marketing" class="size-[80%] object-contain">
        </div>
      </div>
    </div>
  </section>

  <!-- Calendar Modal -->
  <CalendarModal :is-open="calendarModalOpen" @close="closeCalendarModal" />
</template>
