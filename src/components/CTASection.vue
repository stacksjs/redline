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
  <section id="contact" class="py-20 bg-redline-black text-white">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-6">
        Ready to <span class="text-redline-red">Scale</span>?
      </h2>

      <p class="text-xl text-gray-300 leading-relaxed mb-8">
        If you're tired of wasting ad spend, struggling to grow online, or just don't have time to manage it all — let's talk.
        We'll audit your current setup and show you exactly where the opportunities are.
      </p>

      <div class="mb-8">
        <button @click="openCalendarModal" class="btn-primary text-lg px-8 py-4 inline-block">
          👉 Book a free strategy call today and let's redline your marketing.
        </button>
      </div>

      <!-- Contact Form or Additional Info -->
      <div class="bg-gray-900 rounded-lg p-8 mt-12">
        <h3 class="text-2xl font-semibold mb-6">Get Your Free Marketing Audit</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="text-left">
            <ul class="space-y-3 text-gray-300">
              <li>✓ Complete analysis of your current marketing</li>
              <li>✓ Identify missed opportunities</li>
              <li>✓ Custom strategy recommendations</li>
              <li>✓ No-obligation consultation</li>
            </ul>
          </div>
          <div class="text-left">
            <p class="text-gray-300 mb-4">Ready to get started?</p>
            <div class="space-y-2">
              <button @click="openContactModal" class="block w-full text-left text-redline-red hover:underline text-lg">
                📧 Send us a message
              </button>
              <a href="tel:+1234567890" class="block text-gray-300 hover:text-white">
                📞 (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modals -->
  <CalendarModal :is-open="calendarModalOpen" @close="closeCalendarModal" />
  <ContactModal :is-open="contactModalOpen" @close="closeContactModal" />
</template>
