<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Redline Marketing Agency - High-Performance Marketing for Local Businesses & E-Commerce',
  meta: [
    {
      name: 'description',
      content: 'Fuel your growth with high-performance marketing built for local businesses and e-commerce brands. From lead generation to full-funnel strategy, we deliver bold, data-driven campaigns that convert.',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#000000' : '#ffffff',
    },
    {
      property: 'og:title',
      content: 'Redline Marketing Agency - High-Performance Marketing',
    },
    {
      property: 'og:description',
      content: 'Fuel your growth with high-performance marketing built for local businesses and e-commerce brands.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'keywords',
      content: 'digital marketing, local business marketing, e-commerce marketing, Google Ads, SEO, social media marketing, PPC advertising, lead generation',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
