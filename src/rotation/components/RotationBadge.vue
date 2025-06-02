<template>
  <span
    :class="className"
    class="ml-2 px-1.5 py-0.5 text-xs rounded-full border bg-opacity-10 dark:bg-opacity-10"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type RotationBadgeVariant = 'current' | 'prediction'

const { variant } = defineProps<{
  variant: RotationBadgeVariant
}>()

const label = computed(() => {
  switch (variant) {
    case 'current':
      return 'Current'
    case 'prediction':
      return 'Prediction'
    default:
      variant satisfies never
      return {}
  }
})

const className = computed(() => {
  switch (variant) {
    case 'current':
      return 'text-green-400 bg-green-400 border-green-400 dark:text-green-300 dark:bg-green-300 dark:border-green-300'
    case 'prediction':
      return 'text-amber-400 bg-amber-400 border-amber-400 dark:text-amber-300 dark:bg-amber-300 dark:border-amber-300'
    default:
      variant satisfies never
      return {}
  }
})
</script>
