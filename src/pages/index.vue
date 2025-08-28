<script setup lang="ts">
defineOptions({
  name: 'HomePage',
})

useHead({
  title: 'Redline Marketing Agency - High-Performance Marketing for Local Businesses & E-Commerce',
  meta: [
    {
      name: 'description',
      content: 'Fuel your growth with high-performance marketing built for local businesses and e-commerce brands. From lead generation to full-funnel strategy, we deliver bold, data-driven campaigns that convert.',
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <WhyTrustSection />
    <CTASection />
    <ServicesSection />
  </div>
</template>

<route lang="yaml">
meta:
  layout: marketing
</route>
