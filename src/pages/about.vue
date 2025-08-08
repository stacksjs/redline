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
    image: '/team/jesus.jpg',
  },
  {
    name: 'Desiree Diaz',
    role: 'Social Media Manager',
    image: '/team/desiree.jpg',
  },
  {
    name: 'John Figueroa',
    role: 'Video Production Manager',
    image: '/team/john.jpg',
  },
  {
    name: 'Jose Ferrer',
    role: 'Marketing Specialist',
    image: '/team/jose.jpg',
  },
  {
    name: 'Chris Breuer',
    role: 'Web Developer',
    image: '/team/chris.jpg',
  },
  {
    name: 'Steven Rivera',
    role: 'Advertising Specialist',
    image: '/team/steven.jpg',
  },
  {
    name: 'Bryan Elms',
    role: 'SEO Specialist',
    image: '/team/bryan.jpg',
  },
  {
    name: 'Cynthia Correa',
    role: 'Business Development Manager',
    image: '/team/cynthia.jpg',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-redline-black py-20 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-4xl font-bold font-racing">
          About <span class="text-redline-red">Redline Marketing</span>
        </h2>
        <p class="text-muted text-xl leading-relaxed">
          We're the marketing team that treats your business like our own — because when you win, we win.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="bg-primary py-20">
      <div class="mx-auto max-w-4xl px-4">
        <div class="text-primary prose-lg mx-auto prose">
          <p>
            At Redline Marketing, we're not just another agency throwing around buzzwords and promising overnight success.
            We're a results-focused team that specializes in helping local businesses and emerging e-commerce brands
            break through the noise and drive real, measurable growth.
          </p>

          <p>
            Whether you're a local auto shop looking to fill your bays, a service business wanting to dominate your area,
            or an online store ready to scale — we've got the strategies, tools, and expertise to get you there.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="bg-surface py-20">
      <div class="mx-auto max-w-6xl px-4">
        <div class="mb-16 text-center">
          <h2 class="text-primary mb-6 text-3xl font-bold font-racing">
            Meet the Team
          </h2>
          <p class="text-muted mx-auto max-w-3xl text-xl">
            A lean, experienced team dedicated to your success.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div v-for="member in teamMembers" :key="member.name" class="text-center">
            <!-- Placeholder for team member photo -->
            <div class="bg-surface mb-4 h-64 w-full flex items-center justify-center rounded-lg">
              <!-- Replace with actual photos when available -->
              <div class="text-muted text-center">
                <div class="mb-2 text-4xl">
                  👤
                </div>
                <p class="text-sm">
                  Photo Coming Soon
                </p>
              </div>
            </div>
            <h3 class="text-primary mb-2 text-xl font-semibold">
              {{ member.name }}
            </h3>
            <p class="text-muted">
              {{ member.role }}
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
