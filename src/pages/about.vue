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
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Desiree Diaz',
    role: 'Social Media Manager',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'John Figueroa',
    role: 'Video Production Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Jose Ferrer',
    role: 'Marketing Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Chris Breuer',
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Steven Rivera',
    role: 'Advertising Specialist',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Bryan Elms',
    role: 'SEO Specialist',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Cynthia Correa',
    role: 'Business Development Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
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
        <p class="text-muted [text-wrap:balance] mx-auto max-w-3xl leading-relaxed md:text-2xl">
          We're the marketing team that treats your business like our own — because when you win, we win.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="bg-primary py-20 md:text-2xl">
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
    <section class="bg-surface relative py-20">
      <img src="/doodle.png" alt="Transistor" class="absolute z-10 size-32 w-full object-contain text-blue-500 opacity-75 -bottom-[40px]">
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
            <div class="bg-surface mb-4 h-32 w-full flex items-center justify-center rounded-lg">
              <!-- Replace with actual photos when available -->
              <div class="text-muted text-center">
                <img
                  alt=""
                  :src="member.image"
                  className="mx-auto size-24 rounded-full outline-1 -outline-offset-1 outline-black/5"
                >
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
