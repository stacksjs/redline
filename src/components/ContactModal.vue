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
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      style="backdrop-filter: blur(6px)"
      @click="handleBackdropClick"
    >
      <div class="bg-primary border-default max-h-[90vh] max-w-md w-full overflow-y-auto border rounded-lg shadow-2xl">
        <!-- Header -->
        <div class="border-default flex items-center justify-between border-b p-6">
          <h2 class="text-primary text-2xl font-bold font-racing">
            Get In Touch
          </h2>
          <button
            class="text-muted hover:text-primary rounded-md p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
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
            <p class="text-muted-foreground mb-6">
              Ready to redline your marketing? Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form class="space-y-4" @submit.prevent="submitForm">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="name" class="text-muted-foreground mb-1 block text-sm font-medium">
                    Name *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="border-default text-primary bg-surface placeholder:text-muted w-full border rounded-md px-3 py-2 transition-colors focus:border-redline-red focus:outline-none focus:ring-2 focus:ring-redline-red"
                    placeholder="Your full name"
                  >
                </div>

                <div>
                  <label for="email" class="text-muted-foreground mb-1 block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="border-default bg-surface text-primary placeholder:text-muted w-full border rounded-md px-3 py-2 transition-colors focus:border-redline-red focus:outline-none focus:ring-2 focus:ring-redline-red"
                    placeholder="your@email.com"
                  >
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="phone" class="text-muted-foreground mb-1 block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="border-default bg-surface text-primary placeholder:text-muted w-full border rounded-md px-3 py-2 transition-colors focus:border-redline-red focus:outline-none focus:ring-2 focus:ring-redline-red"
                    placeholder="(555) 123-4567"
                  >
                </div>

                <div>
                  <label for="company" class="text-muted-foreground mb-1 block text-sm font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="border-default bg-surface text-primary placeholder:text-muted w-full border rounded-md px-3 py-2 transition-colors focus:border-redline-red focus:outline-none focus:ring-2 focus:ring-redline-red"
                    placeholder="Your business name"
                  >
                </div>
              </div>

              <div>
                <label for="service" class="text-muted-foreground mb-1 block text-sm font-medium">
                  Service of Interest
                </label>
                <div class="border-default w-full border rounded-md">
                  <select
                    id="service"
                    v-model="form.service"
                    class="bg-surface w-full rounded-md px-3 py-2 transition-colors focus:border-redline-red focus:outline-none focus:ring-2 focus:ring-redline-red"
                    :class="form.service ? 'text-primary' : 'text-muted'"
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
                <label for="message" class="text-muted-foreground mb-1 block text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="border-default bg-surface text-primary placeholder:text-muted w-full resize-none border rounded-md px-3 py-2 transition-colors focus:border-redline-red focus:outline-none focus:ring-2 focus:ring-redline-red"
                  placeholder="Tell us about your business and marketing goals..."
                />
              </div>

              <div class="flex items-center justify-between pt-4">
                <button
                  type="button"
                  class="text-muted hover:text-primary rounded-md px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
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
            <h3 class="text-primary mb-2 text-xl font-semibold">
              Message Sent!
            </h3>
            <p class="text-muted-foreground">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
