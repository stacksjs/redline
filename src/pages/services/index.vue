<script setup lang="ts">
defineOptions({
  name: 'ServicesPage',
})

useHead({
  title: 'Services - Redline Marketing Agency',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive digital marketing services including Google Ads, SEO, social media marketing, and more. Built for local businesses and e-commerce brands.',
    },
  ],
})

const services = [
  {
    title: 'PPC Advertising',
    description: 'Strategic Google Ads and paid media campaigns that reach high-intent customers and drive conversions.',
    features: ['Google Ads Management', 'Campaign Optimization', 'Keyword Research', 'Performance Tracking'],
    icon: '🎯'
  },
  {
    title: 'SEO & Local SEO',
    description: 'Get found where it matters with comprehensive search engine optimization strategies.',
    features: ['Technical SEO', 'Local Business Optimization', 'Content Strategy', 'Link Building'],
    icon: '🔍'
  },
  {
    title: 'Google Business Page Management',
    description: 'Optimize your Google Business Profile to drive more local traffic and improve visibility.',
    features: ['Profile Optimization', 'Review Management', 'Local Citations', 'Performance Monitoring'],
    icon: '🏢'
  },
  {
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Targeted social media advertising campaigns across Meta platforms.',
    features: ['Campaign Strategy', 'Audience Targeting', 'Creative Development', 'ROI Optimization'],
    icon: '📱'
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    description: 'Optimize your website and landing pages to convert more visitors into customers.',
    features: ['A/B Testing', 'Landing Page Optimization', 'User Experience Analysis', 'Conversion Tracking'],
    icon: '📊'
  },
  {
    title: 'Web Design & Development',
    description: 'Beautiful, high-performing websites built to drive results, not just looks.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO-Friendly Structure', 'Analytics Integration'],
    icon: '💻'
  },
  {
    title: 'Social Media Marketing',
    description: 'From organic growth strategies to paid campaigns across all major platforms.',
    features: ['Content Strategy', 'Community Management', 'Influencer Partnerships', 'Analytics & Reporting'],
    icon: '📲'
  },
  {
    title: 'Lead Generation',
    description: 'Comprehensive lead generation strategies to fill your sales pipeline.',
    features: ['Lead Magnets', 'Email Campaigns', 'Landing Pages', 'CRM Integration'],
    icon: '🎣'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-redline-black text-white py-20">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">
          Our <span class="text-redline-red">Services</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed">
          Comprehensive digital marketing solutions designed to accelerate growth for local businesses and e-commerce brands.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div class="text-4xl mb-4">{{ service.icon }}</div>
            <h3 class="text-2xl font-bold text-redline-black mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>

            <ul class="space-y-2">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center text-gray-700"
              >
                <span class="text-redline-red mr-2">✓</span>
                {{ feature }}
              </li>
            </ul>
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
