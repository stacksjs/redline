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
      <div class="flex flex-col gap-8 md:flex-row md:justify-between">
        <!-- Brand Section -->
        <div class="flex-1">
          <h3 class="mb-4 text-xl text-redline-red font-bold font-racing">
            Redline Marketing
          </h3>
          <p class="text-muted leading-relaxed">
            Redline is a growth-focused marketing agency built to help local businesses and online brands drive leads, sales, and long-term success.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex-1">
          <h4 class="mb-4 font-semibold font-racing">
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
        <div class="shrink-0">
          <h4 class="mb-4 font-semibold font-racing">
            Get In Touch
          </h4>
          <div class="text-muted space-y-2">
            <p>Ready to redline your marketing?</p>
            <button class="mt-2 block btn-primary" @click="openCalendarModal">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      <div class="text-muted mt-8 flex items-center justify-between border-t border-[#333333] pt-8">
        <p>&copy; 2025 Redline Marketing Agency. All rights reserved.</p>
        <div class="flex shrink-0 items-center gap-8">
          <span>
            <a href="mailto:hello@redlinemarketing.com" class="text-muted transition-colors hover:text-redline-red" tabindex="0">
              hello@redlinemarketing.com
            </a>
          </span>
          <span>
            <a href="tel:+1234567890" class="text-muted transition-colors hover:text-redline-red" tabindex="0">
              (123) 456-7890
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>

  <!-- Calendar Modal -->
  <CalendarModal :is-open="calendarModalOpen" @close="closeCalendarModal" />
</template>
