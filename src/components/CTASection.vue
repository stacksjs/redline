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
  <section id="contact" class="bg-redline-black py-20 text-redline-white">
    <div class="mx-auto max-w-4xl px-4 text-center">
      <h2 class="mb-6 text-4xl font-bold">
        Ready to <span class="text-redline-red">Scale</span>?
      </h2>

      <p class="text-muted mb-8 text-xl leading-relaxed">
        If you're tired of wasting ad spend, struggling to grow online, or just don't have time to manage it all — let's talk.
        We'll audit your current setup and show you exactly where the opportunities are.
      </p>

      <div class="mb-8">
        <button class="inline-block px-8 py-4 text-lg btn-primary" @click="openCalendarModal">
          👉 Book a free strategy call today and let's redline your marketing.
        </button>
      </div>

      <!-- Contact Form or Additional Info -->
      <div class="bg-surface mt-12 rounded-lg p-8">
        <h3 class="text-primary mb-4 text-2xl font-bold">
          Or Get In Touch Directly
        </h3>
        <p class="text-muted mb-6">
          Prefer to reach out directly? We're here to help.
        </p>

        <div class="grid grid-cols-1 gap-6 text-left md:grid-cols-2">
          <!-- Email -->
          <div class="flex items-center space-x-3">
            <div class="text-xl text-redline-red">
              📧
            </div>
            <div>
              <p class="text-primary font-semibold">
                Email Us
              </p>
              <a href="mailto:hello@redlinemarketing.com" class="text-muted transition-colors hover:text-redline-red">
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
              <a href="tel:+1234567890" class="text-muted transition-colors hover:text-redline-red">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>

        <!-- Additional Contact Button -->
        <div class="mt-6">
          <button class="btn-secondary" @click="openContactModal">
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
