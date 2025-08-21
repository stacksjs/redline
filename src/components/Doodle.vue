<script setup lang="ts">
interface Props {
  invert?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  invert: false,
})
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="h-10 w-full" />
    <img
      src="/doodle.png"
      alt="Transistor"
      class="z-10 size-32 w-full object-contain text-blue-500 opacity-25 -bottom-[40px]" :class="[{ 'rotate-y-180': props.invert }]"
    >
    <div class="h-10 w-full" />
  </div>
</template>
