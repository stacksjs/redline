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
      '#1 ranking for local auto repair searches',
    ],
    image: '/case-studies/auto-shop.jpg',
    testimonial: 'Redline transformed our business. We went from struggling to get customers to being booked out weeks in advance.',
    clientName: 'Mike Rodriguez, Owner',
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
      'Built email list of 50k+ subscribers',
    ],
    image: '/case-studies/ecommerce.jpg',
    testimonial: 'The team at Redline didn\'t just manage our ads - they became true partners in growing our business.',
    clientName: 'Sarah Chen, Founder',
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
      'Maintained 4.9-star Google rating',
    ],
    image: '/case-studies/landscaping.jpg',
    testimonial: 'Redline helped us become the go-to landscaping company in our area. Our phone hasn\'t stopped ringing.',
    clientName: 'David Thompson, Owner',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-redline-black py-20 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h1 class="mb-6 text-5xl font-bold font-racing">
          Client <span class="text-redline-red">Success Stories</span>
        </h1>
        <p class="text-muted text-xl leading-relaxed">
          Real results from real businesses. See how we've helped our clients achieve remarkable growth with data-driven marketing strategies.
        </p>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="bg-primary relative py-20 pb-40">
      <img src="/doodle.png" alt="Transistor" class="absolute z-10 size-32 w-full object-contain text-blue-500 opacity-75 -bottom-[30px]">
      <div class="mx-auto max-w-6xl px-4">
        <div class="space-y-20">
          <div
            v-for="(study, index) in caseStudies"
            :key="study.title"
            class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
            :class="{ 'lg:grid-cols-2': index % 2 === 0, 'lg:grid-cols-2 lg:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Image -->
            <div class="order-2 lg:order-1" :class="{ 'lg:order-2': index % 2 === 1 }">
              <div class="bg-surface h-80 flex items-center justify-center overflow-hidden rounded-lg">
                <!-- Automotive -->
                <img
                  v-if="study.industry === 'Automotive'"
                  src="/case-studies/auto-shop.jpg"
                  alt="Mechanic working on a car engine in a garage"
                  class="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                >

                <!-- E-commerce (Home Decor) -->
                <img
                  v-else-if="study.industry === 'E-commerce'"
                  src="/case-studies/ecommerce.jpg"
                  alt="Stylish home decor living room setup"
                  class="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                >

                <!-- Home Services (Landscaping) -->
                <img
                  v-else-if="study.industry === 'Home Services'"
                  src="/case-studies/landscaping.jpg"
                  alt="Landscaped home garden with green lawn"
                  class="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                >

                <!-- Fallback (should not occur) -->
                <div v-else class="text-muted text-center">
                  <div class="mb-2 text-4xl">
                    📄
                  </div>
                  <p class="text-sm">
                    Case Study
                  </p>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="order-1 lg:order-2" :class="{ 'lg:order-1': index % 2 === 1 }">
              <div class="bg-surface rounded-lg p-8">
                <div class="mb-4">
                  <span class="text-sm text-redline-red font-semibold tracking-wider uppercase">{{ study.industry }}</span>
                </div>

                <h3 class="text-primary mb-4 text-3xl font-bold">
                  {{ study.title }}
                </h3>

                <div class="mb-6">
                  <h4 class="text-primary mb-2 font-semibold">
                    Challenge:
                  </h4>
                  <p class="text-muted">
                    {{ study.challenge }}
                  </p>
                </div>

                <div class="mb-6">
                  <h4 class="text-primary mb-2 font-semibold">
                    Solution:
                  </h4>
                  <p class="text-muted">
                    {{ study.solution }}
                  </p>
                </div>

                <div class="mb-6">
                  <h4 class="text-primary mb-3 font-semibold">
                    Results:
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="result in study.results"
                      :key="result"
                      class="text-primary flex items-center"
                    >
                      <span class="mr-2 text-lg text-redline-red">✓</span>
                      {{ result }}
                    </li>
                  </ul>
                </div>

                <blockquote class="text-primary mb-4 border-l-4 border-redline-red pl-4 italic">
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
