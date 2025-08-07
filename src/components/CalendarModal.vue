<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
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
const calendarUrl = 'https://cal.com/adelino-jose-ee7zyu/test-meeting'
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      @click="handleBackdropClick"
    >
      <div class="h-[80vh] max-w-4xl w-full flex flex-col rounded-lg bg-white">
        <!-- Header -->
        <div class="flex items-center justify-between border-b p-6">
          <div>
            <h2 class="text-2xl text-redline-black font-bold">
              Schedule a Consultation
            </h2>
            <p class="mt-1 text-gray-600">
              Book a free 30-minute strategy call with our team
            </p>
          </div>
          <button
            class="text-gray-400 transition-colors hover:text-gray-600"
            @click="closeModal"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Calendar Content -->
        <div class="relative flex-1 p-6">
          <!-- Loading State -->
          <div
            v-if="!iframeLoaded"
            class="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-50"
          >
            <div class="text-center">
              <div class="mx-auto mb-4 h-12 w-12 animate-spin border-b-2 border-redline-red rounded-full" />
              <p class="text-gray-600">
                Loading calendar...
              </p>
            </div>
          </div>

          <!-- Calendar Embed (Demo) -->
          <!-- <div class="h-full flex items-center justify-center rounded-lg bg-gray-50 p-8">
            <div class="max-w-md text-center">
              <div class="mb-6 text-6xl">
                📅
              </div>
              <h3 class="mb-4 text-xl text-redline-black font-semibold">
                Schedule Your Free Strategy Call
              </h3>
              <p class="mb-6 text-gray-600">
                During this 30-minute call, we'll:
              </p>
              <ul class="mb-6 text-left text-gray-700 space-y-2">
                <li class="flex items-center">
                  <span class="mr-2 text-redline-red">✓</span>
                  Audit your current marketing setup
                </li>
                <li class="flex items-center">
                  <span class="mr-2 text-redline-red">✓</span>
                  Identify missed opportunities
                </li>
                <li class="flex items-center">
                  <span class="mr-2 text-redline-red">✓</span>
                  Provide custom recommendations
                </li>
                <li class="flex items-center">
                  <span class="mr-2 text-redline-red">✓</span>
                  Discuss how we can help
                </li>
              </ul>

              <div class="space-y-4">
                <div class="text-left">
                  <label class="mb-2 block text-sm text-gray-700 font-medium">
                    Select a Date & Time
                  </label>
                  <div class="grid grid-cols-2 mb-4 gap-2">
                    <button class="border border-gray-300 rounded-md p-3 transition-colors hover:border-redline-red hover:bg-red-50">
                      Today 2:00 PM
                    </button>
                    <button class="border border-gray-300 rounded-md p-3 transition-colors hover:border-redline-red hover:bg-red-50">
                      Today 3:30 PM
                    </button>
                    <button class="border border-gray-300 rounded-md p-3 transition-colors hover:border-redline-red hover:bg-red-50">
                      Tomorrow 10:00 AM
                    </button>
                    <button class="border border-gray-300 rounded-md p-3 transition-colors hover:border-redline-red hover:bg-red-50">
                      Tomorrow 1:00 PM
                    </button>
                  </div>
                </div>

                <a
                  href="https://cal.com/redline-marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-full text-center btn-primary"
                  @click="closeModal"
                >
                  Book Your Free Consultation
                </a>

                <p class="text-xs text-gray-500">
                  * This will open in a new tab with our actual calendar booking system
                </p>
              </div>
            </div>
          </div> -->

          <!-- If you have an actual Cal.com embed, you can use this instead: -->

          <iframe
            :src="calendarUrl"
            class="h-full w-full border-0 rounded-lg"
            title="Schedule a consultation"
            @load="onIframeLoad"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>
