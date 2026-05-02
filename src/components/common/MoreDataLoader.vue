<template>
  <div class="text-center">
    <a :href="destination">
      <button
        class="flex flex-col items-center mx-auto p-2 rounded text-sm hover:bg-gray-200 hover:dark:bg-gray-800"
      >
        <template v-if="icon === 'up'">
          <ChevronDoubleUpIcon class="size-4" />
          {{ buttonLabel }}
        </template>
        <template v-else>
          {{ buttonLabel }}
          <ChevronDoubleDownIcon class="size-4" />
        </template>
      </button>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/vue/24/outline'

defineProps<{
  buttonLabel: string
  destination: string
  icon?: 'up' | 'down'
}>()
</script>
