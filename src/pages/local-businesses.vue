<script setup lang="ts">
defineOptions({
  name: 'LocalBusinessesPage',
})

useHead({
  title: 'Local Business Marketing - Redline Marketing Agency',
  meta: [
    {
      name: 'description',
      content: 'Specialized digital marketing for local businesses. Drive more foot traffic, phone calls, and revenue with our local marketing expertise.',
    },
  ],
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-redline-black py-20 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h1 class="mb-6 text-5xl font-bold">
          <span class="text-redline-red">Local Business</span> Marketing That Works
        </h1>
        <p class="text-muted text-xl leading-relaxed">
          Stop wasting money on marketing that doesn't drive customers through your door.
          Get strategies built specifically for local businesses that want real results.
        </p>
      </div>
    </section>

    <section class="bg-primary py-20">
      <div class="mx-auto max-w-4xl px-4">
        <div class="text-primary prose-lg mx-auto prose">
          <h2 class="text-primary mb-8 text-3xl font-bold">
            Why Most Local Business Marketing Fails
          </h2>

          <p class="mb-6 text-lg">
            You've tried Facebook ads. You've posted on social media. Maybe you even hired an agency that promised the world
            but delivered generic campaigns that could work for anyone, anywhere.
          </p>

          <p class="mb-8 text-lg">
            The problem? Most marketing agencies don't understand local businesses. They treat your auto shop like it's Amazon,
            or your restaurant like it's a SaaS company.
          </p>

          <h3 class="text-primary mb-6 text-2xl font-semibold">
            What Makes Local Marketing Different
          </h3>

          <div class="not-prose grid grid-cols-1 gap-8 md:grid-cols-2">
            <div class="bg-surface rounded-lg p-6">
              <h4 class="text-primary mb-3 text-xl font-semibold">
                Geographic Targeting
              </h4>
              <p class="text-muted">
                Your customers are within a specific radius. We focus your budget on reaching people who can actually visit your business.
              </p>
            </div>

            <div class="bg-surface rounded-lg p-6">
              <h4 class="text-primary mb-3 text-xl font-semibold">
                Local Intent Keywords
              </h4>
              <p class="text-muted">
                When someone searches "auto repair near me," they're ready to buy. We make sure they find you first.
              </p>
            </div>

            <div class="bg-surface rounded-lg p-6">
              <h4 class="text-primary mb-3 text-xl font-semibold">
                Community Connection
              </h4>
              <p class="text-muted">
                Local businesses thrive on relationships and reputation. Our strategies build both.
              </p>
            </div>

            <div class="bg-surface rounded-lg p-6">
              <h4 class="text-primary mb-3 text-xl font-semibold">
                Immediate Results
              </h4>
              <p class="text-muted">
                No waiting months to see if it's working. Local campaigns can drive phone calls and walk-ins within days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<route lang="yaml">
meta:
  layout: marketing
</route>
