<script setup lang="ts">
defineProps<{
  onRetry: () => void
}>()
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col justify-center items-center">
      <IconWarning />
      <h1 class="pt-2 text-gray-700">Failed to load data. Please try again.</h1>
      <button
        @click="onRetry"
        class="mt-4 mx-auto bg-gray-300 hover:bg-gray-400 text-gray-800 py-1.5 px-3 rounded"
      >
        Refresh
      </button>
    </div>
  </div>
</template>
