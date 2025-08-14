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

function openContactModal() {
  contactModalOpen.value = true
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

      <div class="mb-28">
        <button class="cta-btn relative inline-block px-8 py-4 text-lg btn-primary" @click="openCalendarModal">
          👉 Book a free strategy call today and let's redline your marketing.

          <!-- <img src="/custom-arrow.svg" alt="Transistor" class="absolute col-span-2 size-20 w-full object-contain text-blue-500 -bottom-[120px] -right-[180px] lg:col-span-1"> -->
        </button>
      </div>

      <!-- Contact Form or Additional Info -->
      <div class="bg-surface mt-12 rounded-lg p-8">
        <h3 class="text-primary mb-2 text-2xl font-bold">
          Or Get In Touch Directly
        </h3>
        <p class="text-muted mb-12">
          Prefer to reach out directly? We're here to help.
        </p>

        <div class="grid grid-cols-1 gap-6 px-4 text-left md:grid-cols-2 md:gap-x-12 md:px-10">
          <!-- Email -->
          <div class="flex items-center space-x-3">
            <div class="text-xl text-redline-red">
              📧
            </div>
            <div>
              <p class="text-primary font-semibold">
                Email Us
              </p>
              <a href="mailto:hello@redlinemarketing.com" class="text-muted transition-colors hover:text-redline-red" tabindex="0">
                hello@redlinemarketing.com
              </a>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-center space-x-3">
            <div class="text-xl text-redline-red">
              📞
            </div>
            <div>
              <p class="text-primary font-semibold">
                Call Us
              </p>
              <a href="tel:+1234567890" class="text-muted transition-colors hover:text-redline-red" tabindex="0">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>

        <!-- Additional Contact Button -->
        <div class="mt-6">
          <button class="btn-secondary dark:btn-primary" @click="openContactModal">
            Send Us a Message
          </button>
        </div>
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
