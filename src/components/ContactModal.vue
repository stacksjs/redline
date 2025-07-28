<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  service: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const services = [
  'PPC Advertising',
  'SEO & Local SEO',
  'Google Business Page Management',
  'Meta Ads',
  'Conversion Rate Optimization',
  'Web Design & Development',
  'Social Media Marketing',
  'Lead Generation',
  'Other'
]

function closeModal() {
  emit('close')
}

function handleBackdropClick(event: Event) {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

async function submitForm() {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))

  isSubmitted.value = true
  isSubmitting.value = false

  // Reset form after 2 seconds
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: ''
    }
    isSubmitted.value = false
    closeModal()
  }, 2000)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      @click="handleBackdropClick"
    >
      <div class="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <h2 class="text-2xl font-bold text-redline-black">Get In Touch</h2>
          <button
            @click="closeModal"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form Content -->
        <div class="p-6">
          <div v-if="!isSubmitted">
            <p class="text-gray-600 mb-6">
              Ready to redline your marketing? Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redline-red focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redline-red focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redline-red focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redline-red focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-1">
                  Service of Interest
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redline-red focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option v-for="service in services" :key="service" :value="service">
                    {{ service }}
                  </option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redline-red focus:border-transparent resize-none"
                  placeholder="Tell us about your business and marketing goals..."
                ></textarea>
              </div>

              <div class="flex items-center justify-between pt-4">
                <button
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-primary px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else>Send Message</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Success State -->
          <div v-else class="text-center py-8">
            <div class="text-redline-red text-5xl mb-4">✓</div>
            <h3 class="text-xl font-semibold text-redline-black mb-2">Message Sent!</h3>
            <p class="text-gray-600">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
