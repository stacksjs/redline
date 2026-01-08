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
            <a href="mailto:hello@redlinemarketingagency.com" class="text-muted-foreground transition-colors hover:text-redline-red">
              hello@redlinemarketingagency.com
            </a>
            <span class="text-muted-foreground">•</span>
            <a href="tel:+15623023188" class="text-muted-foreground transition-colors hover:text-redline-red">
              (562) 302-3188
            </a>
          </div>
          <p class="text-sm">
            &copy; 2025 Redline Marketing Agency. <br>All rights reserved.
          </p>
        </div>

        <!-- Desktop Layout: Original layout -->
        <div class="hidden items-center justify-between md:flex">
          <p>&copy; 2025 Redline Marketing Agency. All rights reserved.</p>
          <div class="flex shrink-0 items-center gap-8">
            <a href="mailto:hello@redlinemarketingagency.com" class="text-muted-foreground transition-colors hover:text-redline-red">
              hello@redlinemarketingagency.com
            </a>
            <a href="tel:+15623023188" class="text-muted-foreground transition-colors hover:text-redline-red">
              (562) 302-3188
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Calendar Modal -->
  <CalendarModal :is-open="calendarModalOpen" @close="closeCalendarModal" />
</template>
