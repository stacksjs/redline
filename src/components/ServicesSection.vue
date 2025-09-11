<script setup lang="ts">
const services = [
  {
    title: 'Google Ads & Paid Media',
    description: 'Reach high-intent customers with campaigns that convert and drive measurable ROI.',
    icon: 'target',
    anchor: '#google-ads',
  },
  {
    title: 'Social Media Marketing',
    description: 'From organic growth to paid strategies across Meta, TikTok, LinkedIn and more platforms.',
    icon: 'share',
    anchor: '#social-media',
  },
  {
    title: 'SEO & Local SEO',
    description: 'Get found where it matters — in search results and in your local neighborhood.',
    icon: 'search',
    anchor: '#seo',
  },
  {
    title: 'Website Strategy & CRO',
    description: 'We optimize for more than looks — we build websites that drive results and conversions.',
    icon: 'monitor',
    anchor: '#website',
  },
  {
    title: 'Email Marketing & Retention',
    description: 'Turn one-time buyers into loyal customers with strategic email campaigns and automation.',
    icon: 'mail',
    anchor: '#email',
  },
  {
    title: 'Marketing Automation',
    description: 'Scale your marketing efforts with smart automation that works around the clock.',
    icon: 'zap',
    anchor: '#automation',
  },
  {
    title: 'Application & Web Development',
    description: 'Build powerful web applications and digital experiences that engage users and drive business growth.',
    icon: 'code',
    anchor: '#development',
  },
  {
    title: 'Brand Strategy & Design',
    description: 'Create a compelling brand identity that resonates with your audience and stands out in the market.',
    icon: 'palette',
    anchor: '#branding',
  },
]

// Icon component mapping
const iconComponents = {
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
}
</script>

<template>
  <section class="section-separator section-accent-bg relative py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center lg:max-w-none">
        <p class="text-primary mt-2 text-pretty text-4xl font-semibold tracking-tight font-racing sm:text-5xl">
          Marketing that drives results
        </p>
      </div>

      <div class="grid grid-cols-1 mx-auto mt-8 max-w-2xl gap-6 lg:grid-cols-4 sm:grid-cols-2 lg:mx-0 md:mt-16 lg:max-w-none md:gap-8">
        <router-link
          v-for="service in services"
          :key="service.title"
          :to="`/services${service.anchor}`"
          class="group relative transform cursor-pointer rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2"
        >
          <!-- Service Bubble -->
          <div class="flex flex-col items-center text-center space-y-4">
            <!-- Icon Circle -->
            <div class="h-16 w-16 flex items-center justify-center rounded-full from-redline-red to-red-600 bg-gradient-to-br text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <div v-html="iconComponents[service.icon]" />
            </div>

            <!-- Title -->
            <h3 class="text-primary text-lg font-semibold leading-tight transition-colors duration-300 group-hover:text-redline-red">
              {{ service.title }}
            </h3>

            <!-- Description -->
            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Learn More Arrow -->
            <div class="flex items-center text-sm text-redline-red font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Learn More
              <svg class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- Subtle Background Gradient on Hover -->
          <div class="absolute inset-0 rounded-2xl from-redline-red/5 to-red-600/5 bg-gradient-to-br opacity-0 transition-opacity duration-300 -z-10 group-hover:opacity-100" />
        </router-link>
      </div>
    </div>
  </section>
</template>
