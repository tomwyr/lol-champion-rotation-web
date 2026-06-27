<template>
  <span class="relative flex group">
    <button
      type="button"
      :aria-label="ariaLabel"
      :aria-describedby="tooltipId"
      class="rounded-full text-gray-500 hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
    >
      <InformationCircleIcon class="size-4" />
    </button>
    <span
      :id="tooltipId"
      role="tooltip"
      class="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 w-max -translate-x-1/2 rounded bg-gray-900 px-2 py-1 text-xs font-normal text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-gray-100 dark:text-gray-900"
    >
      {{ text }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/outline'

withDefaults(
  defineProps<{
    text: string
    tooltipId: string
    ariaLabel?: string
  }>(),
  {
    ariaLabel: 'More information',
  },
)
</script>
