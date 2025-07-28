<script setup lang="ts">
defineOptions({
  name: 'AboutPage',
})

useHead({
  title: 'About Us - Redline Marketing Agency',
  meta: [
    {
      name: 'description',
      content: 'Meet the Redline Marketing team. We specialize in helping local service businesses and emerging e-commerce brands scale smarter, faster, and more profitably.',
    },
  ],
})

const teamMembers = [
  {
    name: 'Jesus Marquez',
    role: 'Founder & Marketing Director',
    image: '/team/jesus.jpg'
  },
  {
    name: 'Desiree Diaz',
    role: 'Social Media Manager',
    image: '/team/desiree.jpg'
  },
  {
    name: 'John Figueroa',
    role: 'Video Production Manager',
    image: '/team/john.jpg'
  },
  {
    name: 'Jose Ferrer',
    role: 'Marketing Specialist',
    image: '/team/jose.jpg'
  },
  {
    name: 'Chris Breuer',
    role: 'Web Developer',
    image: '/team/chris.jpg'
  },
  {
    name: 'Steven Rivera',
    role: 'Advertising Specialist',
    image: '/team/steven.jpg'
  },
  {
    name: 'Bryan Elms',
    role: 'SEO Specialist',
    image: '/team/bryan.jpg'
  },
  {
    name: 'Cynthia Correa',
    role: 'Business Development Manager',
    image: '/team/cynthia.jpg'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-redline-black text-white py-20">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">
          Accelerating your <span class="text-redline-red">business</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed">
          At Redline, we specialize in helping local service businesses and emerging e-commerce brands scale smarter, faster, and more profitably.
          Our mission is simple: to remove the guesswork from digital marketing and replace it with strategies that actually move the needle.
        </p>
      </div>
    </section>

    <!-- Performance First Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-redline-black mb-6">
            Performance first. <span class="text-redline-red">Always.</span>
          </h2>
        </div>

        <div class="prose prose-lg mx-auto text-gray-700">
          <p class="text-xl leading-relaxed mb-8">
            In an industry filled with fluff, outdated tactics, and cookie-cutter campaigns, we take a different approach.
            Every strategy we implement is tailored, data-backed, and focused on one thing: results that drive business growth.
          </p>
          <p class="text-lg leading-relaxed">
            We work closely with your team, learn your market, and become a true extension of your business — not just a vendor.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-redline-black mb-6">
            Meet your marketing <span class="text-redline-red">pit crew</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a lean team of marketing strategists, creatives, and performance pros obsessed with helping brands grow.
            Think of us as your in-house marketing crew — without the overhead.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="text-center group"
          >
            <div class="mb-4 relative overflow-hidden rounded-lg">
              <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <!-- Placeholder for team member photo -->
                <div class="text-gray-400 text-center">
                  <div class="text-4xl mb-2">👤</div>
                  <p class="text-sm">Photo</p>
                </div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-redline-black mb-2">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
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
