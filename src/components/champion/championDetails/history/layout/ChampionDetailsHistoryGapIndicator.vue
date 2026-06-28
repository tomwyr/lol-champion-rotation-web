<template>
  <div class="relative h-4.5 w-9 overflow-hidden">
    <div
      v-if="link === 'top' || link === 'both'"
      class="absolute left-1/2 top-0 size-0.75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-400 dark:bg-gray-300"
    />
    <div
      class="absolute left-1/2 top-1/3 size-0.75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-400 dark:bg-gray-300"
    />
    <div
      class="absolute left-1/2 top-2/3 size-0.75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-400 dark:bg-gray-300"
    />
    <div
      v-if="link === 'bottom' || link === 'both'"
      class="absolute bottom-0 left-1/2 size-0.75 -translate-x-1/2 translate-y-1/2 rounded-full bg-gray-400 dark:bg-gray-300"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  link: 'top' | 'bottom' | 'both' | 'none'
}>()
</script>
