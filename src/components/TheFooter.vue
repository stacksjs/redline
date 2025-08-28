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
  <footer class="bg-surface text-primary border-default border-t py-12">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex flex-col gap-8 text-center md:flex-row md:justify-between md:text-left">
        <!-- Brand Section -->
        <div class="flex-1">
          <h3 class="mb-4 text-xl text-black font-bold font-racing dark:text-white">
            Redline Marketing
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Redline is a growth-focused marketing agency built to help local businesses and online brands drive leads, sales, and long-term success.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex-1">
          <h4 class="text-primary mb-4 font-semibold font-racing">
            Quick Links
          </h4>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/local-businesses" class="text-muted-foreground transition-colors hover:text-redline-red">
                Who We Help
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services" class="text-muted-foreground transition-colors hover:text-redline-red">
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/case-studies" class="text-muted-foreground transition-colors hover:text-redline-red">
                Case Studies
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-muted-foreground transition-colors hover:text-redline-red">
                About Us
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="shrink-0">
          <h4 class="text-primary mb-4 font-semibold font-racing">
            Get In Touch
          </h4>
          <div class="text-muted-foreground space-y-2">
            <p>Ready to redline your marketing?</p>
            <div class="mt-2 flex justify-center md:justify-start">
              <button class="btn-primary hover:bg-red-800" @click="openCalendarModal">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Footer Bottom -->
      <div class="text-muted-foreground border-default mt-8 border-t pt-8">
        <!-- Mobile Layout: Stack vertically and center -->
        <div class="flex flex-col items-center gap-4 text-center md:hidden">
          <div class="flex items-center justify-center gap-4 text-sm">
            <a href="mailto:hello@redlinemarketing.com" class="text-muted-foreground transition-colors hover:text-redline-red">
              hello@redlinemarketing.com
            </a>
            <span class="text-muted-foreground">•</span>
            <a href="tel:+1234567890" class="text-muted-foreground transition-colors hover:text-redline-red">
              (123) 456-7890
            </a>
          </div>
          <div class="flex items-center gap-4">
            <p class="text-sm">
              &copy; 2025 Redline Marketing Agency. All rights reserved.
            </p>
            <button
              class="rounded-full p-2 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
              :class="isDark ? 'text-blue-400 hover:bg-gray-800 ring-offset-black' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 ring-offset-white'"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="() => toggleDark()"
            >
              <svg v-show="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
              <svg v-show="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Desktop Layout: Original layout -->
        <div class="hidden items-center justify-between md:flex">
          <p>&copy; 2025 Redline Marketing Agency. All rights reserved.</p>
          <div class="flex shrink-0 items-center gap-8">
            <a href="mailto:hello@redlinemarketing.com" class="text-muted-foreground transition-colors hover:text-redline-red">
              hello@redlinemarketing.com
            </a>
            <a href="tel:+1234567890" class="text-muted-foreground transition-colors hover:text-redline-red">
              (123) 456-7890
            </a>
            <button
              class="rounded-full p-2 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
              :class="isDark ? 'text-blue-400 hover:bg-gray-800 ring-offset-black' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 ring-offset-white'"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="() => toggleDark()"
            >
              <svg v-show="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
              <svg v-show="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Calendar Modal -->
  <CalendarModal :is-open="calendarModalOpen" @close="closeCalendarModal" />
</template>
