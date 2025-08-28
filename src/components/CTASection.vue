<script setup lang="ts">
import { ref } from 'vue'

const calendarModalOpen = ref(false)
const contactModalOpen = ref(false)

function openCalendarModal() {
  calendarModalOpen.value = true
}

function closeCalendarModal() {
  calendarModalOpen.value = false
}

function closeContactModal() {
  contactModalOpen.value = false
}
</script>

<template>
  <section id="contact" class="bg-surface text-primary relative py-20">
    <div class="mx-auto max-w-4xl px-4 text-center">
      <h2 class="mb-6 text-4xl font-bold font-racing">
        Ready to <span class="text-redline-red">Scale</span>?
      </h2>

      <p class="text-muted mb-8 text-xl leading-relaxed">
        If you're tired of wasting ad spend, struggling to grow online, or just don't have time to manage it all — let's talk.
        We'll audit your current setup and show you exactly where the opportunities are.
      </p>

      <div class="mb-4">
        <button class="cta-btn relative inline-block px-8 py-4 text-lg btn-primary" @click="openCalendarModal">
          <span>Book a free strategy call today and let's redline your marketing.</span>

          <!-- <img src="/custom-arrow.svg" alt="Transistor" class="absolute col-span-2 size-20 w-full object-contain text-blue-500 -bottom-[120px] -right-[180px] lg:col-span-1"> -->
        </button>
      </div>
    </div>
  </section>

  <!-- Modals -->
  <CalendarModal :is-open="calendarModalOpen" @close="closeCalendarModal" />
  <ContactModal :is-open="contactModalOpen" @close="closeContactModal" />
</template>

<style scoped>
.cta-btn {
  /* Ensure button is always red with white text, and on hover stays red but with higher contrast */
  background-color: var(--redline-red) !important;
  color: var(--redline-background) !important;
  border: 2px solid var(--redline-red) !important;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;
}
.cta-btn:hover,
.cta-btn:focus {
  background-color: #b91c1c !important; /* deeper red for hover, passes contrast */
  color: var(--redline-background) !important;
  border-color: #b91c1c !important;
}

/* Ensure focus ring for accessibility */
.cta-btn:focus {
  outline: 2px solid #b91c1c;
  outline-offset: 2px;
}
</style>
