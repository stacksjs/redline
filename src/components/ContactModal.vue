<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
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
  service: '',
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
  'Other',
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
      service: '',
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
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      @click="handleBackdropClick"
    >
      <div class="max-h-[90vh] max-w-md w-full overflow-y-auto rounded-lg bg-white">
        <!-- Header -->
        <div class="flex items-center justify-between border-b p-6">
          <h2 class="text-2xl text-redline-black font-bold">
            Get In Touch
          </h2>
          <button
            class="text-gray-400 transition-colors hover:text-gray-600"
            @click="closeModal"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form Content -->
        <div class="p-6">
          <div v-if="!isSubmitted">
            <p class="mb-6 text-gray-600">
              Ready to redline your marketing? Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form class="space-y-4" @submit.prevent="submitForm">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="name" class="mb-1 block text-sm text-gray-700 font-medium">
                    Name *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full border border-gray-300 rounded-md bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-redline-red"
                    placeholder="Your full name"
                  >
                </div>

                <div>
                  <label for="email" class="mb-1 block text-sm text-gray-700 font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full border border-gray-300 rounded-md bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-redline-red"
                    placeholder="your@email.com"
                  >
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="phone" class="mb-1 block text-sm text-gray-700 font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full border border-gray-300 rounded-md bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-redline-red"
                    placeholder="(555) 123-4567"
                  >
                </div>

                <div>
                  <label for="company" class="mb-1 block text-sm text-gray-700 font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full border border-gray-300 rounded-md bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-redline-red"
                    placeholder="Your business name"
                  >
                </div>
              </div>

              <div>
                <label for="service" class="mb-1 block text-sm text-gray-700 font-medium">
                  Service of Interest
                </label>
                <div class="w-full border border-gray-300 rounded-md pr-2">
                  <select
                    id="service"
                    v-model="form.service"
                    class="w-full rounded-md bg-white px-3 py-2 focus:border-transparent dark:text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-transparent dark:focus:border-blue-500 dark:focus:ring-transparent dark:placeholder-gray-400"
                  >
                    <option value="">
                      Select a service
                    </option>
                    <option v-for="service in services" :key="service" :value="service">
                      {{ service }}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label for="message" class="mb-1 block text-sm text-gray-700 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full resize-none border border-gray-300 rounded-md bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-redline-red"
                  placeholder="Tell us about your business and marketing goals..."
                />
              </div>

              <div class="flex items-center justify-between pt-4">
                <button
                  type="button"
                  class="px-4 py-2 text-gray-600 transition-colors hover:text-gray-800"
                  @click="closeModal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="px-6 py-2 btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else>Send Message</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Success State -->
          <div v-else class="py-8 text-center">
            <div class="mb-4 text-5xl text-redline-red">
              ✓
            </div>
            <h3 class="mb-2 text-xl text-redline-black font-semibold">
              Message Sent!
            </h3>
            <p class="text-gray-600">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
