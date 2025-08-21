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
    title: 'Google Ads & Paid Media',
    description: 'Reach high-intent customers with campaigns that convert and drive measurable ROI.',
    features: ['Google Ads Management', 'Campaign Optimization', 'Keyword Research', 'Performance Tracking', 'Display & Video Ads'],
    icon: '🎯',
    category: 'Advertising',
  },
  {
    title: 'Social Media Marketing',
    description: 'From organic growth to paid strategies across Meta, TikTok, LinkedIn and more platforms.',
    features: ['Content Strategy', 'Community Management', 'Paid Social Campaigns', 'Influencer Partnerships', 'Analytics & Reporting'],
    icon: '📱',
    category: 'Social Media',
  },
  {
    title: 'SEO & Local SEO',
    description: 'Get found where it matters — in search results and in your local neighborhood.',
    features: ['Technical SEO', 'Local Business Optimization', 'Content Strategy', 'Link Building', 'Google Business Profile'],
    icon: '🔍',
    category: 'Search Marketing',
  },
  {
    title: 'Website Strategy & CRO',
    description: 'We optimize for more than looks — we build websites that drive results and conversions.',
    features: ['A/B Testing', 'Landing Page Optimization', 'User Experience Analysis', 'Conversion Tracking', 'Performance Optimization'],
    icon: '💻',
    category: 'Website',
  },
  {
    title: 'Email Marketing & Retention',
    description: 'Turn one-time buyers into loyal customers with strategic email campaigns and automation.',
    features: ['Email Campaign Design', 'Automation Workflows', 'List Building', 'Segmentation Strategy', 'Customer Retention'],
    icon: '📧',
    category: 'Email Marketing',
  },
  {
    title: 'Marketing Automation',
    description: 'Scale your marketing efforts with smart automation that works around the clock.',
    features: ['Lead Nurturing', 'Behavioral Triggers', 'CRM Integration', 'Multi-Channel Workflows', 'Performance Analytics'],
    icon: '⚡',
    category: 'Automation',
  },
  {
    title: 'Application & Web Development',
    description: 'Build powerful web applications and digital experiences that engage users and drive business growth.',
    features: ['Custom Web Applications', 'E-commerce Development', 'API Integration', 'Database Design', 'Mobile Optimization'],
    icon: '🚀',
    category: 'Development',
  },
  {
    title: 'Brand Strategy & Design',
    description: 'Create a compelling brand identity that resonates with your audience and stands out in the market.',
    features: ['Brand Identity Design', 'Logo & Visual Systems', 'Brand Guidelines', 'Marketing Collateral', 'Brand Positioning'],
    icon: '🎨',
    category: 'Branding',
  },
]

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
    <section class="bg-redline-black py-20 text-white">
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
    <section class="bg-primary pb-4 pt-16">
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
    <section class="bg-primary relative pb-8">
      <div class="mx-auto max-w-6xl px-4">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-surface rounded-lg p-8"
          >
            <div class="mb-4 flex items-center">
              <div class="mr-3 text-3xl">
                {{ service.icon }}
              </div>
              <div class="text-sm text-redline-red font-semibold tracking-wider uppercase">
                {{ service.category }}
              </div>
            </div>

            <h3 class="text-primary mb-4 text-xl font-bold">
              {{ service.title }}
            </h3>

            <p class="text-muted-foreground mb-6 leading-relaxed">
              {{ service.description }}
            </p>

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
    </section>

    <Doodle />

    <!-- Process Section -->
    <section class="bg-surface relative py-20">
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

    <Doodle invert />

    <!-- Why Choose Us -->
    <section class="bg-primary relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="text-primary mb-8 text-3xl font-bold font-racing">
          Why Choose Redline Marketing
        </h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div class="mb-4 text-4xl">
              📊
            </div>
            <h3 class="text-primary mb-3 text-xl font-semibold">
              Data-Driven Results
            </h3>
            <p class="text-muted-foreground">
              Every decision is backed by data and optimized for your specific business goals.
            </p>
          </div>

          <div>
            <div class="mb-4 text-4xl">
              🎯
            </div>
            <h3 class="text-primary mb-3 text-xl font-semibold">
              Industry Expertise
            </h3>
            <p class="text-muted-foreground">
              Deep knowledge across local businesses, e-commerce, and specialized industries.
            </p>
          </div>

          <div>
            <div class="mb-4 text-4xl">
              🚀
            </div>
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

    <Doodle />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<route lang="yaml">
meta:
  layout: marketing
</route>
