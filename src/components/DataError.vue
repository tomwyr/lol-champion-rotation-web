<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col justify-center items-center">
      <IconWarning />
      <h1 class="pt-2 text-gray-900 dark:text-gray-100">Failed to load data. Please try again.</h1>
      <button
        @click="onRetry"
        class="mt-4 py-1.5 px-3 rounded text-sm mx-auto bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100"
      >
        Refresh
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconWarning from '@/icons/IconWarning.vue'

defineProps<{
  onRetry: () => void
}>()
</script>
