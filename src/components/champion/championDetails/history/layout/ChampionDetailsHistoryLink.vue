<template>
  <div
    class="flex-grow w-0.5 bg-gray-400 dark:bg-gray-300"
    :class="[link === edge || link === 'both' ? 'visible' : 'invisible']"
  />
</template>

<script setup lang="ts">
const { link, edge } = defineProps<{
  link: 'top' | 'bottom' | 'both' | 'none'
  edge: 'top' | 'bottom'
}>()
</script>
