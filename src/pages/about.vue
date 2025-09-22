<script setup lang="ts">
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'

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

// Force dark mode while on this page and restore previous preference on leave
const previousIsDark = ref<boolean | null>(null)
let stopEnforceDark: (() => void) | null = null

onMounted(() => {
  previousIsDark.value = isDark.value
  isDark.value = true
  stopEnforceDark = watchEffect(() => {
    if (!isDark.value)
      isDark.value = true
  })
})

onUnmounted(() => {
  if (stopEnforceDark)
    stopEnforceDark()
  if (previousIsDark.value !== null)
    isDark.value = previousIsDark.value
})

const teamMembers = [
  {
    name: 'Jesus Marquez',
    role: 'Founder & Marketing Director',
    image: '/team/jesus.jpeg',
  },
  {
    name: 'Jennifer Diaz ',
    role: 'Social Media Manager',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
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
    image: '/team/chris.png',
  },
  {
    name: 'Steven Rivera',
    role: 'Advertising Specialist',
    image: '/team/steven.png',
  },
  {
    name: 'Bryan Elms',
    role: 'SEO Specialist',
    image: '/team/bryan.jpg',
  },
  {
    name: 'Cynthia Correa',
    role: 'Business Development Manager',
    image: '/team/cynthia.png',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-redline-black py-24 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-4xl font-bold font-racing">
          About <span class="text-redline-red">Redline Marketing</span>
        </h2>
        <p class="[text-wrap:balance] mx-auto max-w-3xl text-white leading-relaxed md:text-2xl">
          We're the marketing team that treats your business like our own, because when you win, we win.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section-alt-bg section-separator py-24 md:text-2xl">
      <div class="mx-auto max-w-4xl px-4 text-center leading-relaxed">
        <div class="text-primary prose-lg mx-auto prose">
          <p>
            At Redline Marketing, we're not just another agency throwing around buzzwords and promising overnight success.
            We're a results-focused team that specializes in helping local businesses and emerging e-commerce brands
            break through the noise and drive real, measurable growth.
          </p>

          <p>
            Whether you're a local auto shop looking to fill your bays, a service business wanting to dominate your area,
            or an online store ready to scale, we've got the strategies, tools, and expertise to get you there.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-separator section-accent-bg section-divider relative py-24 pb-32">
      <!-- <img src="/doodle.png" alt="Transistor" class="absolute z-10 size-32 w-full object-contain text-blue-500 opacity-75 -bottom-[40px]"> -->
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
            <!-- Team member photo -->
            <div class="mb-6 flex justify-center">
              <img
                :alt="member.name"
                :src="member.image"
                class="mx-auto size-32 rounded-full object-cover ring-4 ring-redline-red/20 transition-all duration-300 hover:ring-redline-red/40"
              >
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
