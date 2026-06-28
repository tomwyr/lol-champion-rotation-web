<template>
  <div
    class="pointer-events-none absolute left-4.5 size-0.75 -translate-x-1/2 rounded-full bg-gray-400 dark:bg-gray-300"
    :class="edge === 'top' ? 'top-0 -translate-y-1/2' : 'bottom-0 translate-y-1/2'"
  />
</template>

<script setup lang="ts">
defineProps<{
  edge: 'top' | 'bottom'
}>()
</script>
