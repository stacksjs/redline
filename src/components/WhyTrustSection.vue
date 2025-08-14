<script setup lang="ts">
</script>

<template>
  <section class="bg-primary relative py-20 pb-28">
    <img src="/doodle.png" alt="Transistor" class="absolute z-10 size-32 w-full object-contain text-blue-500 opacity-75 -bottom-[52px]">
    <div class="mx-auto max-w-6xl px-4">
      <div class="mb-16 text-center">
        <h2 class="text-primary mb-6 text-4xl font-bold font-racing">
          Why Business's trust <span class="text-redline-red">Redline Marketing</span>
        </h2>
        <p class="text-muted mx-auto max-w-4xl text-xl leading-relaxed">
          We're not a one-size-fits-all agency. We're a lean, strategic team that treats your business like our own
          — blending deep marketing expertise with a clear understanding of your industry.
        </p>
      </div>

      <div class="grid grid-cols-1 mx-auto mb-24 max-w-4xl gap-8 md:grid-cols-2">
        <!-- Left Column -->
        <div class="space-y-6">
          <div class="flex items-start space-x-4">
            <div class="text-2xl text-redline-red font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-primary mb-2 text-xl font-semibold">
                Results-Driven Approach
              </h3>
              <p class="text-muted">
                We focus on performance, not fluff.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="text-2xl text-redline-red font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-primary mb-2 text-xl font-semibold">
                Industry-Specific Expertise
              </h3>
              <p class="text-muted">
                We specialize in auto, service-based, and eComm businesses.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="text-2xl text-redline-red font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-primary mb-2 text-xl font-semibold">
                Transparent Communication
              </h3>
              <p class="text-muted">
                No jargon, no ghosting. Just real results and real support.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <div class="flex items-start space-x-4">
            <div class="text-2xl text-redline-red font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-primary mb-2 text-xl font-semibold">
                Data-Driven Strategy
              </h3>
              <p class="text-muted">
                Every campaign is backed by insights, not hunches.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="text-2xl text-redline-red font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-primary mb-2 text-xl font-semibold">
                Quick Implementation
              </h3>
              <p class="text-muted">
                We move fast without cutting corners.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="text-2xl text-redline-red font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-primary mb-2 text-xl font-semibold">
                Long-Term Partnership
              </h3>
              <p class="text-muted">
                We're in it for the long haul, not just quick wins.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <p class="text-muted mb-6 text-lg italic">
          Ready to see what's possible when you partner with a team that truly gets your business?
        </p>
        <RouterLink to="#contact" class="btn-primary">
          Let's Talk Strategy
        </RouterLink>
      </div>
    </div>
  </section>
</template>
