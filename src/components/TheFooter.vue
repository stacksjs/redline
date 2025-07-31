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
  <footer class="bg-redline-black py-12 text-redline-white">
    <div class="mx-auto max-w-6xl px-4">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Brand Section -->
        <div>
          <h3 class="mb-4 text-xl text-redline-red font-bold">
            Redline Marketing
          </h3>
          <p class="text-muted leading-relaxed">
            Redline is a growth-focused marketing agency built to help local businesses and online brands drive leads, sales, and long-term success.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="mb-4 font-semibold">
            Quick Links
          </h4>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/local-businesses" class="text-muted transition-colors hover:text-redline-red">
                Who We Help
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services" class="text-muted transition-colors hover:text-redline-red">
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/case-studies" class="text-muted transition-colors hover:text-redline-red">
                Case Studies
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-muted transition-colors hover:text-redline-red">
                About Us
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="mb-4 font-semibold">
            Get In Touch
          </h4>
          <div class="text-muted space-y-2">
            <p>Ready to redline your marketing?</p>
            <button class="mt-2 inline-block btn-primary" @click="openCalendarModal">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      <div class="text-muted border-default mt-8 border-t pt-8 text-center">
        <p>&copy; 2025 Redline Marketing Agency. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Calendar Modal -->
  <CalendarModal :is-open="calendarModalOpen" @close="closeCalendarModal" />
</template>
