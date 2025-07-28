<script setup lang="ts">
defineOptions({
  name: 'CaseStudiesPage',
})

useHead({
  title: 'Case Studies - Redline Marketing Agency',
  meta: [
    {
      name: 'description',
      content: 'See how Redline Marketing has helped local businesses and e-commerce brands achieve remarkable growth with data-driven marketing strategies.',
    },
  ],
})

const caseStudies = [
  {
    title: 'Local Auto Shop Increases Leads by 600%',
    client: 'Premium Auto Repair',
    industry: 'Automotive',
    challenge: 'Struggling to generate consistent leads and compete with larger chains',
    solution: 'Comprehensive local SEO, Google Ads, and Google Business optimization',
    results: [
      '600% increase in qualified leads',
      '300% boost in website traffic',
      '45% increase in monthly revenue',
      '#1 ranking for local auto repair searches'
    ],
    image: '/case-studies/auto-shop.jpg',
    testimonial: 'Redline transformed our business. We went from struggling to get customers to being booked out weeks in advance.',
    clientName: 'Mike Rodriguez, Owner'
  },
  {
    title: 'E-commerce Brand Scales Past 6-Figures',
    client: 'Modern Home Decor',
    industry: 'E-commerce',
    challenge: 'New brand struggling to gain traction and scale profitably',
    solution: 'Meta Ads, Google Ads, email marketing, and CRO optimization',
    results: [
      'Scaled from $0 to $150k+ monthly revenue',
      '8x return on ad spend (ROAS)',
      '250% increase in conversion rate',
      'Built email list of 50k+ subscribers'
    ],
    image: '/case-studies/ecommerce.jpg',
    testimonial: 'The team at Redline didn\'t just manage our ads - they became true partners in growing our business.',
    clientName: 'Sarah Chen, Founder'
  },
  {
    title: 'Service Business Dominates Local Market',
    client: 'Elite Landscaping',
    industry: 'Home Services',
    challenge: 'Seasonal business needed year-round lead generation',
    solution: 'Local SEO, Google Business optimization, and targeted advertising',
    results: [
      '400% increase in service inquiries',
      '85% of leads from organic search',
      'Expanded to 3 new service areas',
      'Maintained 4.9-star Google rating'
    ],
    image: '/case-studies/landscaping.jpg',
    testimonial: 'Redline helped us become the go-to landscaping company in our area. Our phone hasn\'t stopped ringing.',
    clientName: 'David Thompson, Owner'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-redline-black text-white py-20">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">
          Client <span class="text-redline-red">Success Stories</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed">
          Real results from real businesses. See how we've helped our clients achieve remarkable growth with data-driven marketing strategies.
        </p>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="space-y-20">
          <div
            v-for="(study, index) in caseStudies"
            :key="study.title"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            :class="{ 'lg:grid-cols-2': index % 2 === 0, 'lg:grid-cols-2 lg:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Image -->
            <div class="order-2 lg:order-1" :class="{ 'lg:order-2': index % 2 === 1 }">
              <div class="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div class="text-gray-400 text-center">
                  <div class="text-4xl mb-2">📊</div>
                  <p class="text-sm">Case Study Image</p>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="order-1 lg:order-2" :class="{ 'lg:order-1': index % 2 === 1 }">
              <div class="bg-gray-50 rounded-lg p-8">
                <div class="mb-4">
                  <span class="text-sm font-semibold text-redline-red uppercase tracking-wider">{{ study.industry }}</span>
                </div>

                <h3 class="text-3xl font-bold text-redline-black mb-4">{{ study.title }}</h3>

                <div class="mb-6">
                  <h4 class="font-semibold text-gray-800 mb-2">Challenge:</h4>
                  <p class="text-gray-600">{{ study.challenge }}</p>
                </div>

                <div class="mb-6">
                  <h4 class="font-semibold text-gray-800 mb-2">Solution:</h4>
                  <p class="text-gray-600">{{ study.solution }}</p>
                </div>

                <div class="mb-6">
                  <h4 class="font-semibold text-gray-800 mb-3">Results:</h4>
                  <ul class="space-y-2">
                    <li
                      v-for="result in study.results"
                      :key="result"
                      class="flex items-center text-gray-700"
                    >
                      <span class="text-redline-red mr-2 text-lg">✓</span>
                      {{ result }}
                    </li>
                  </ul>
                </div>

                <blockquote class="border-l-4 border-redline-red pl-4 italic text-gray-700 mb-4">
                  "{{ study.testimonial }}"
                </blockquote>
                <cite class="text-sm text-gray-600">— {{ study.clientName }}</cite>
              </div>
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
