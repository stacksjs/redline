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

// Handle scroll to anchor on page load and route changes
const route = useRoute()

onMounted(() => {
  // Handle initial hash if present
  if (route.hash) {
    nextTick(() => {
      const element = document.getElementById(route.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }
})

// Watch for hash changes
watch(() => route.hash, (newHash) => {
  if (newHash) {
    nextTick(() => {
      const element = document.getElementById(newHash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }
})

const services = [
  {
    title: 'Google Ads & Paid Media',
    description: 'Reach high-intent customers with campaigns that convert and drive measurable ROI.',
    features: ['Google Ads Management', 'Campaign Optimization', 'Keyword Research', 'Performance Tracking', 'Display & Video Ads'],
    icon: 'target',
    category: 'Advertising',
    anchor: 'google-ads',
  },
  {
    title: 'Social Media Marketing',
    description: 'From organic growth to paid strategies across Meta, TikTok, LinkedIn and more platforms.',
    features: ['Content Strategy', 'Community Management', 'Paid Social Campaigns', 'Influencer Partnerships', 'Analytics & Reporting'],
    icon: 'share',
    category: 'Social Media',
    anchor: 'social-media',
  },
  {
    title: 'SEO & Local SEO',
    description: 'Get found where it matters, in search results and in your local neighborhood.',
    features: ['Technical SEO', 'Local Business Optimization', 'Content Strategy', 'Link Building', 'Google Business Profile'],
    icon: 'search',
    category: 'Search Marketing',
    anchor: 'seo',
  },
  {
    title: 'Website Strategy & CRO',
    description: 'We optimize for more than looks. We build websites that drive results and conversions.',
    features: ['A/B Testing', 'Landing Page Optimization', 'User Experience Analysis', 'Conversion Tracking', 'Performance Optimization'],
    icon: 'monitor',
    category: 'Website',
    anchor: 'website',
  },
  {
    title: 'Email Marketing & Retention',
    description: 'Turn one-time buyers into loyal customers with strategic email campaigns and automation.',
    features: ['Email Campaign Design', 'Automation Workflows', 'List Building', 'Segmentation Strategy', 'Customer Retention'],
    icon: 'mail',
    category: 'Email Marketing',
    anchor: 'email',
  },
  {
    title: 'Marketing Automation',
    description: 'Scale your marketing efforts with smart automation that works around the clock.',
    features: ['Lead Nurturing', 'Behavioral Triggers', 'CRM Integration', 'Multi-Channel Workflows', 'Performance Analytics'],
    icon: 'zap',
    category: 'Automation',
    anchor: 'automation',
  },
  {
    title: 'Application & Web Development',
    description: 'Build powerful web applications and digital experiences that engage users and drive business growth.',
    features: ['Custom Web Applications', 'E-commerce Development', 'API Integration', 'Database Design', 'Mobile Optimization'],
    icon: 'code',
    category: 'Development',
    anchor: 'development',
  },
  {
    title: 'Brand Strategy & Design',
    description: 'Create a compelling brand identity that resonates with your audience and stands out in the market.',
    features: ['Brand Identity Design', 'Logo & Visual Systems', 'Brand Guidelines', 'Marketing Collateral', 'Brand Positioning'],
    icon: 'palette',
    category: 'Branding',
    anchor: 'branding',
  },
  {
    title: 'Google My Business & Yelp Management',
    description: 'Dominate local search results and build your online reputation with professional profile management.',
    features: ['Google Business Profile Optimization', 'Yelp Business Page Management', 'Review Generation & Management', 'Local SEO Enhancement', 'Reputation Monitoring'],
    icon: 'map',
    category: 'Local Marketing',
    anchor: 'local-marketing',
  },
]

// Icon component mapping
const iconComponents: Record<string, string> = {
  target: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>`,
  share: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
  </svg>`,
  search: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"/>
  </svg>`,
  monitor: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
  </svg>`,
  mail: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>`,
  zap: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>`,
  code: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
  </svg>`,
  palette: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
  </svg>`,
  map: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>`,
}

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business, goals, and current challenges through comprehensive analysis.',
  },
  {
    step: '02',
    title: 'Custom Plan Development',
    description: 'Based on our findings, we create a tailored marketing strategy designed specifically for your business.',
  },
  {
    step: '03',
    title: 'Implementation & Launch',
    description: 'Our team executes the strategy with precision, setting up campaigns and tracking systems.',
  },
  {
    step: '04',
    title: 'Monitor & Optimize',
    description: 'We continuously monitor performance and make data-driven optimizations to improve results.',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-redline-black py-24 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h1 class="mb-6 text-5xl font-bold font-racing">
          Our <span class="text-redline-red">Services</span>
        </h1>
        <p class="text-muted text-xl leading-relaxed">
          Comprehensive digital marketing solutions designed to accelerate growth for local businesses and e-commerce brands.
        </p>
      </div>
    </section>

    <!-- Services Introduction -->
    <section class="section-alt-bg section-separator pb-4 pt-20">
      <div class="mx-auto max-w-4xl rounded-lg px-4 pt-16 text-center transition-all">
        <h2 class="text-primary mb-6 text-3xl font-bold font-racing">
          Marketing That Drives Results
        </h2>
        <p class="text-muted-foreground text-lg leading-relaxed">
          We don't just execute tactics. We build comprehensive strategies that work together to drive sustainable growth for your business.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-alt-bg relative pb-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 mx-auto gap-8 lg:grid-cols-3 md:grid-cols-2">
          <div
            v-for="service in services"
            :id="service.anchor"
            :key="service.title"
            class="rounded-2xl bg-white p-8 shadow-lg"
          >
            <!-- Service Card -->
            <div class="flex flex-col space-y-6">
              <!-- Icon and Category -->
              <div class="flex items-center space-x-4">
                <!-- Icon Circle -->
                <div class="h-16 w-16 flex items-center justify-center rounded-full from-redline-red to-red-600 bg-gradient-to-br text-white shadow-md">
                  <div v-html="iconComponents[service.icon]" />
                </div>
                <!-- Category Badge -->
                <div class="text-sm text-redline-red font-semibold tracking-wider uppercase">
                  {{ service.category }}
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-primary text-xl font-bold leading-tight">
                {{ service.title }}
              </h3>

              <!-- Description -->
              <p class="text-muted-foreground leading-relaxed">
                {{ service.description }}
              </p>

              <!-- Features List -->
              <ul class="space-y-2">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="text-primary flex items-start text-sm"
                >
                  <span class="mr-2 mt-1 text-redline-red">✓</span>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-separator section-accent-bg section-divider relative py-24">
      <div class="mx-auto max-w-6xl px-4">
        <div class="mb-16 text-center">
          <h2 class="text-primary mb-6 text-3xl font-bold font-racing">
            Our Process
          </h2>
          <p class="text-muted-foreground mx-auto max-w-2xl text-lg">
            Every successful campaign starts with a solid foundation. Here's how we approach every project.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div
            v-for="step in processSteps"
            :key="step.step"
            class="text-center"
          >
            <div class="mb-4 flex justify-center">
              <div class="h-16 w-16 flex items-center justify-center rounded-full bg-redline-red text-xl text-white font-bold">
                {{ step.step }}
              </div>
            </div>

            <h3 class="text-primary mb-3 text-lg font-semibold">
              {{ step.title }}
            </h3>

            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-alt-bg section-separator relative py-24">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="text-primary mb-8 text-3xl font-bold font-racing">
          Why Choose Redline Marketing
        </h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 class="text-primary mb-3 text-xl font-semibold">
              Data-Driven Results
            </h3>
            <p class="text-muted-foreground">
              Every decision is backed by data and optimized for your specific business goals.
            </p>
          </div>

          <div>
            <h3 class="text-primary mb-3 text-xl font-semibold">
              Industry Expertise
            </h3>
            <p class="text-muted-foreground">
              Deep knowledge across local businesses, e-commerce, and specialized industries.
            </p>
          </div>

          <div>
            <h3 class="text-primary mb-3 text-xl font-semibold">
              Proven Track Record
            </h3>
            <p class="text-muted-foreground">
              Hundreds of successful campaigns and long-term client partnerships.
            </p>
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
