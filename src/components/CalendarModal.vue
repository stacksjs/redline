<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const iframeLoaded = ref(false)

function closeModal() {
  emit('close')
}

function handleBackdropClick(event: Event) {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

function onIframeLoad() {
  iframeLoaded.value = true
}

// You can replace this with your actual Cal.com link
const calendarUrl = 'https://cal.com/redline-marketing/consultation'
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      @click="handleBackdropClick"
    >
      <div class="bg-white rounded-lg max-w-4xl w-full h-[80vh] flex flex-col">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <div>
            <h2 class="text-2xl font-bold text-redline-black">Schedule a Consultation</h2>
            <p class="text-gray-600 mt-1">Book a free 30-minute strategy call with our team</p>
          </div>
          <button
            @click="closeModal"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Calendar Content -->
        <div class="flex-1 p-6 relative">
          <!-- Loading State -->
          <div
            v-if="!iframeLoaded"
            class="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg"
          >
            <div class="text-center">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-redline-red mx-auto mb-4"></div>
              <p class="text-gray-600">Loading calendar...</p>
            </div>
          </div>

          <!-- Calendar Embed (Demo) -->
          <div class="h-full bg-gray-50 rounded-lg p-8 flex items-center justify-center">
            <div class="text-center max-w-md">
              <div class="text-6xl mb-6">📅</div>
              <h3 class="text-xl font-semibold text-redline-black mb-4">
                Schedule Your Free Strategy Call
              </h3>
              <p class="text-gray-600 mb-6">
                During this 30-minute call, we'll:
              </p>
              <ul class="text-left space-y-2 mb-6 text-gray-700">
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">✓</span>
                  Audit your current marketing setup
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">✓</span>
                  Identify missed opportunities
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">✓</span>
                  Provide custom recommendations
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">✓</span>
                  Discuss how we can help
                </li>
              </ul>

              <!-- Demo Calendar Interface -->
              <div class="space-y-4">
                <div class="text-left">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Select a Date & Time
                  </label>
                  <div class="grid grid-cols-2 gap-2 mb-4">
                    <button class="p-3 border border-gray-300 rounded-md hover:border-redline-red hover:bg-red-50 transition-colors">
                      Today 2:00 PM
                    </button>
                    <button class="p-3 border border-gray-300 rounded-md hover:border-redline-red hover:bg-red-50 transition-colors">
                      Today 3:30 PM
                    </button>
                    <button class="p-3 border border-gray-300 rounded-md hover:border-redline-red hover:bg-red-50 transition-colors">
                      Tomorrow 10:00 AM
                    </button>
                    <button class="p-3 border border-gray-300 rounded-md hover:border-redline-red hover:bg-red-50 transition-colors">
                      Tomorrow 1:00 PM
                    </button>
                  </div>
                </div>

                <a
                  href="https://cal.com/redline-marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary w-full text-center block"
                  @click="closeModal"
                >
                  Book Your Free Consultation
                </a>

                <p class="text-xs text-gray-500">
                  * This will open in a new tab with our actual calendar booking system
                </p>
              </div>
            </div>
          </div>

          <!-- If you have an actual Cal.com embed, you can use this instead: -->
          <!--
          <iframe
            :src="calendarUrl"
            @load="onIframeLoad"
            class="w-full h-full border-0 rounded-lg"
            title="Schedule a consultation"
          ></iframe>
          -->
        </div>
      </div>
    </div>
  </Teleport>
</template>
