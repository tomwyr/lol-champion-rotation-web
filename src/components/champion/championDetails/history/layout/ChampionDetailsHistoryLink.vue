<template>
  <div
    class="grow w-0.75 bg-gray-400 dark:bg-gray-300"
    :class="[
      link === edge || link === 'both' ? 'visible' : 'invisible',
      shortened ? 'rounded-full' : '',
      shortened && edge === 'top' ? 'mt-1.5' : '',
      shortened && edge === 'bottom' ? 'mb-1.5' : '',
    ]"
  />
</template>

<script setup lang="ts">
const { link, edge, shortened } = defineProps<{
  link: 'top' | 'bottom' | 'both' | 'none'
  edge: 'top' | 'bottom'
  shortened?: boolean
}>()
</script>
