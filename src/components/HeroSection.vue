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
    class="bg-redline-black text-white min-h-screen flex items-center relative overflow-hidden"
    style="background-image: url('/hero.png'); background-size: cover; background-position: center; background-repeat: no-repeat;"
  >
    <!-- Dark overlay for better text readability -->
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>

    <div class="max-w-6xl mx-auto px-4 py-20 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div>
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span class="text-redline-red">Redline</span> your marketing today
            </h1>
            <p class="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
              Fuel your growth with high-performance marketing built for local businesses and e-commerce brands.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed mb-8">
              From lead generation to full-funnel strategy, we deliver bold, data-driven campaigns that convert.
            </p>
          </div>

          <div>
            <button @click="openCalendarModal" class="btn-primary text-lg px-8 py-4 inline-block mr-4 mb-4">
              Schedule a Consultation
            </button>
          </div>

          <!-- Trusted By Section -->
          <div class="pt-8">
            <p class="text-gray-300 text-sm uppercase tracking-wider mb-4">Trusted by:</p>
            <div class="flex flex-wrap items-center gap-8 opacity-70">
              <!-- Placeholder for customer logos -->
              <div class="bg-gray-800 bg-opacity-60 rounded p-4 text-center min-w-[120px] h-12 flex items-center justify-center border border-gray-600">
                <span class="text-sm text-gray-200">Customer Logo</span>
              </div>
              <div class="bg-gray-800 bg-opacity-60 rounded p-4 text-center min-w-[120px] h-12 flex items-center justify-center border border-gray-600">
                <span class="text-sm text-gray-200">Customer Logo</span>
              </div>
              <div class="bg-gray-800 bg-opacity-60 rounded p-4 text-center min-w-[120px] h-12 flex items-center justify-center border border-gray-600">
                <span class="text-sm text-gray-200">Customer Logo</span>
              </div>
              <div class="bg-gray-800 bg-opacity-60 rounded p-4 text-center min-w-[120px] h-12 flex items-center justify-center border border-gray-600">
                <span class="text-sm text-gray-200">Customer Logo</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side - empty space for background image to show through -->
        <div class="hidden lg:block"></div>
      </div>
    </div>
  </section>

  <!-- Calendar Modal -->
  <CalendarModal :is-open="calendarModalOpen" @close="closeCalendarModal" />
</template>
