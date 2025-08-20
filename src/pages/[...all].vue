<script setup lang="ts">
// 404 page content
</script>

<template>
  <div class="text-center">
    <!-- Large 404 Display -->
    <div class="mb-8">
      <h1 class="text-8xl text-redline-red font-bold leading-none font-racing md:text-9xl">
        404
      </h1>
      <div class="mx-auto mt-4 h-1 w-24 bg-redline-red" />
    </div>

    <!-- Main Heading -->
    <h2 class="text-primary mb-6 text-4xl font-bold font-racing md:text-5xl">
      Oops! You've Gone Off the Map
    </h2>

    <!-- Engaging Description -->
    <div class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed space-y-4">
      <p>
        Looks like you've taken a detour from our main route. Don't worry—even the best marketing campaigns have the occasional redirect!
      </p>
      <p>
        The page you're looking for might have been moved, updated, or is temporarily unavailable. But here's the good news: our navigation is designed to get you exactly where you need to go.
      </p>
    </div>

    <!-- Fun Marketing Message -->
    <div class="bg-surface mx-auto mt-8 max-w-xl rounded-lg p-6">
      <div class="mb-3 text-2xl">
        🎯
      </div>
      <h3 class="text-primary mb-2 text-xl font-semibold">
        Lost Visitors = Lost Opportunities
      </h3>
      <p class="text-muted-foreground text-sm">
        This is exactly why your website needs proper tracking and optimization. Let us help you create user journeys that actually convert.
      </p>
    </div>

    <!-- Search Suggestions -->
    <div class="mt-10">
      <h3 class="text-primary mb-4 text-lg font-semibold">
        Popular Destinations:
      </h3>
      <div class="flex flex-wrap justify-center gap-3">
        <span class="inline-flex items-center rounded-full bg-redline-red/10 px-3 py-1 text-sm text-redline-red">
          Google Ads Management
        </span>
        <span class="inline-flex items-center rounded-full bg-redline-red/10 px-3 py-1 text-sm text-redline-red">
          Local SEO Services
        </span>
        <span class="inline-flex items-center rounded-full bg-redline-red/10 px-3 py-1 text-sm text-redline-red">
          E-commerce Marketing
        </span>
        <span class="inline-flex items-center rounded-full bg-redline-red/10 px-3 py-1 text-sm text-redline-red">
          Website Development
        </span>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
