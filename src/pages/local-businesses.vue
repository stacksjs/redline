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
    <section class="bg-redline-black text-white py-20">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">
          Marketing for <span class="text-redline-red">Local Businesses</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed">
          Dominate your local market with proven strategies that drive foot traffic, phone calls, and revenue growth.
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="prose prose-lg mx-auto text-gray-700">
          <h2 class="text-3xl font-bold text-redline-black mb-8">
            We understand <span class="text-redline-red">local business</span> challenges
          </h2>

          <p class="text-xl leading-relaxed mb-8">
            Running a local business means competing not just with other local shops, but with big box stores,
            online retailers, and national chains. You need marketing that cuts through the noise and reaches
            customers right in your neighborhood.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-redline-black mb-4">What We Do</h3>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">✓</span>
                  Local SEO optimization
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">✓</span>
                  Google Business Profile management
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">✓</span>
                  Targeted local advertising
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">✓</span>
                  Review management
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">✓</span>
                  Social media marketing
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-redline-black mb-4">Results You'll See</h3>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">📈</span>
                  More local search visibility
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">📞</span>
                  Increased phone calls
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">🚶</span>
                  More foot traffic
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">💰</span>
                  Higher revenue
                </li>
                <li class="flex items-center">
                  <span class="text-redline-red mr-2">⭐</span>
                  Better online reputation
                </li>
              </ul>
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
