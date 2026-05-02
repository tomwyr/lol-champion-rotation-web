<template>
  <div class="ml-2">
    <span
      :class="className"
      class="h-auto px-1.5 py-0.5 text-xs rounded-full border bg-current/10"
      >{{ label }}</span
    >
  </div>
</template>

<script setup lang="ts">
export type RotationBadgeVariant = 'current'

const { variant } = defineProps<{
  variant: RotationBadgeVariant
}>()

let label: string
let className: string

switch (variant) {
  case 'current':
    label = 'Current'
    className = 'text-green-400 border-green-400 dark:text-green-300 dark:border-green-300'
    break

  default:
    variant satisfies never
}
</script>
