<script setup lang="ts">
defineOptions({
  name: 'WhoWeHelpPage',
})

useHead({
  title: 'Who We Help - Redline Marketing Agency',
  meta: [
    {
      name: 'description',
      content: 'We specialize in high-performance marketing for local businesses, auto shops, and e-commerce brands. Discover how we can help your business grow.',
    },
  ],
})

const contactModalOpen = ref(false)

function openContactModal() {
  contactModalOpen.value = true
}

function closeContactModal() {
  contactModalOpen.value = false
}

const clientTypes = [
  {
    title: 'Local Businesses',
    description: 'Drive foot traffic, phone calls, and local revenue with marketing strategies built specifically for local businesses.',
    benefits: [
      'Geographic targeting within your service area',
      'Local SEO & Google Business optimization',
      'Community-focused social media strategies',
      'Lead generation that drives immediate results',
    ],
    examples: ['Restaurants & Cafes', 'Auto Repair Shops', 'Hair Salons & Spas', 'Medical Practices', 'Home Service Companies'],
    link: '/local-businesses',
  },
  {
    title: 'Auto Shop Brands',
    description: 'Specialized marketing for automotive businesses that need to compete with chains and build customer trust.',
    benefits: [
      'Industry-specific keyword targeting',
      'Reputation management & review generation',
      'Service-based landing pages that convert',
      'Emergency service promotion strategies',
    ],
    examples: ['Independent Auto Repair', 'Specialty Auto Services', 'Tire & Brake Shops', 'Auto Body Shops', 'Oil Change Services'],
    link: '/auto-shops',
  },
  {
    title: 'E-commerce Brands',
    description: 'Scale your online store with data-driven campaigns that turn browsers into buyers and customers into repeat purchasers.',
    benefits: [
      'Full-funnel advertising campaigns',
      'Conversion rate optimization',
      'Email marketing & retention strategies',
      'Profitable scaling at any budget level',
    ],
    examples: ['Fashion & Apparel', 'Home & Garden', 'Health & Beauty', 'Electronics', 'Specialty Products'],
    link: '/ecommerce',
  },
]

const stats = [
  { number: '300+', label: 'Businesses Helped' },
  { number: '85%', label: 'Client Retention Rate' },
  { number: '$2M+', label: 'Revenue Generated' },
  { number: '24/7', label: 'Campaign Monitoring' },
  { number: '100M+', label: 'Organic Social Views Generated' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-redline-black py-20 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h1 class="mb-6 text-5xl font-bold font-racing">
          Who <span class="text-redline-red">We Help</span>
        </h1>
        <p class="text-muted text-xl leading-relaxed">
          We don't work with everyone. We specialize in high-performance marketing for businesses that are serious about growth and ready to invest in results.
        </p>
        <p class="text-muted mt-4 text-lg leading-relaxed">
          We only partner with <span class="text-redline-red font-bold">one business per industry per city</span>. That means when you work with us, you're not competing with your own marketing agency, you're getting our full focus to help you dominate your market.
        </p>
      </div>
    </section>

    <!-- Stats Section -->
    <Stats
      :stats="stats"
      title="Our Results"
      subtitle="Numbers that speak for themselves"
      @open-contact="openContactModal"
    />

    <!-- Client Types Section -->
    <section class="bg-primary relative py-20">
      <!-- <img src="/doodle.png" alt="Design Element" class="absolute right-0 top-12 size-32 w-full rotate-12 object-contain opacity-75"> -->

      <div class="mx-auto max-w-6xl px-4">
        <div class="mb-16 text-center">
          <h2 class="text-primary mb-6 text-4xl font-bold font-racing">
            Our Specialties
          </h2>
          <p class="text-muted-foreground mx-auto max-w-2xl text-lg">
            We've focused our expertise on three types of businesses where we consistently deliver exceptional results.
          </p>
        </div>

        <div class="space-y-16">
          <div
            v-for="(client, index) in clientTypes"
            :key="client.title"
            class="grid grid-cols-1 items-center lg:grid-cols-2 md:gap-12"
            :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Content -->
            <div :class="{ 'lg:order-2': index % 2 === 1 }">
              <h3 class="text-primary mb-4 text-3xl font-bold">
                {{ client.title }}
              </h3>

              <p class="text-muted-foreground mb-6 text-lg">
                {{ client.description }}
              </p>

              <div class="mb-8">
                <h4 class="text-primary mb-4 text-xl font-semibold">
                  What We Deliver:
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="benefit in client.benefits"
                    :key="benefit"
                    class="text-primary flex items-start"
                  >
                    <span class="mr-3 mt-1 text-redline-red">✓</span>
                    {{ benefit }}
                  </li>
                </ul>
              </div>

              <!-- Desktop Learn More Button -->
              <RouterLink
                :to="client.link"
                class="hidden lg:inline-block btn-primary hover:bg-red-800"
              >
                Learn More
              </RouterLink>
            </div>

            <!-- Examples -->
            <div :class="{ 'lg:order-1': index % 2 === 1 }">
              <div class="bg-surface rounded-lg px-2 py-2 lg:p-8">
                <h4 class="text-primary mb-4 text-xl font-semibold lg:mb-6">
                  Business Types We Work With:
                </h4>
                <div class="grid grid-cols-1 gap-3">
                  <div
                    v-for="example in client.examples"
                    :key="example"
                    class="bg-primary flex items-center rounded-md px-4 py-3"
                  >
                    <span class="mr-3 text-redline-red">•</span>
                    <span class="text-primary font-medium">{{ example }}</span>
                  </div>
                </div>
              </div>

              <!-- Mobile Learn More Button (after business types) -->
              <div class="mt-6 text-center lg:hidden">
                <RouterLink
                  :to="client.link"
                  class="inline-block btn-primary hover:bg-red-800"
                >
                  Learn More
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="bg-surface relative py-20">
      <!-- <img src="/doodle.png" alt="Transistor" class="absolute z-10 col-span-2 size-32 w-full rotate-y-180 object-contain text-blue-500 opacity-75 -bottom-10 lg:col-span-1"> -->

      <div class="mx-auto max-w-4xl px-4">
        <div class="text-center">
          <h2 class="text-primary mb-8 text-3xl font-bold font-racing">
            Why Businesses Choose Redline
          </h2>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div class="text-center">
              <div class="mb-4 flex justify-center">
                <svg class="h-12 w-12 text-redline-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-primary mb-3 text-xl font-semibold">
                Specialized Focus
              </h3>
              <p class="text-muted-foreground">
                We don't try to be everything to everyone. Our deep expertise in specific industries drives better results.
              </p>
            </div>

            <div class="text-center">
              <div class="mb-4 flex justify-center">
                <svg class="h-12 w-12 text-redline-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-primary mb-3 text-xl font-semibold">
                Data-Driven Approach
              </h3>
              <p class="text-muted-foreground">
                Every decision is backed by data. We measure what matters and optimize for your specific business goals.
              </p>
            </div>

            <div class="text-center">
              <div class="mb-4 flex justify-center">
                <svg class="h-12 w-12 text-redline-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 class="text-primary mb-3 text-xl font-semibold">
                Proven Results
              </h3>
              <p class="text-muted-foreground">
                Our track record speaks for itself. Consistent growth, measurable ROI, and long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection />
  </div>

  <!-- Contact Modal -->
  <ContactModal :is-open="contactModalOpen" @close="closeContactModal" />
</template>

<route lang="yaml">
meta:
  layout: marketing
</route>
