<script setup lang="ts">
interface Props {
  stats: Array<{
    number: string
    label: string
  }>
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Our Results',
  subtitle: 'Numbers that speak for themselves',
})

const emit = defineEmits<{
  openContact: []
}>()

function openContactModal() {
  emit('openContact')
}
</script>

<template>
  <section class="bg-primary border-default py-16">
    <div class="mx-auto max-w-6xl px-4">
      <!-- Header -->
      <div class="mb-12 text-center">
        <h2 class="text-primary mb-4 text-4xl font-bold font-racing">
          {{ title }}
        </h2>
        <p class="text-muted-foreground mx-auto max-w-2xl text-lg">
          {{ subtitle }}
        </p>
      </div>

      <!-- CTA Button -->
      <div class="mb-12 text-center">
        <button
          class="px-8 py-4 text-lg btn-primary"
          @click="openContactModal"
        >
          Speak to an expert today
        </button>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 gap-8 md:grid-cols-5">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center"
        >
          <div class="mb-2 text-4xl text-redline-red font-bold font-racing">
            {{ stat.number }}
          </div>
          <div class="text-muted-foreground text-sm font-medium">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
