<template>
  <div
    :class="{
      'absolute inset-0': fullScreen,
    }"
  >
    <div
      :class="{
        'flex items-center justify-center min-h-screen': fullScreen,
      }"
    >
      <div class="flex flex-col justify-center items-center">
        <IconWarning />
        <h1 class="max-w-[28rem] text-center pt-1 text-gray-900 dark:text-gray-100">
          {{ message ?? 'Failed to load data. Please try again.' }}
        </h1>
        <button
          v-if="onRetry"
          @click="onRetry"
          class="mt-4 py-1.5 px-3 rounded text-sm mx-auto bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100"
        >
          {{ retryLabel ?? 'Refresh' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconWarning } from '@/icons/Icons'

const { fullScreen = true } = defineProps<{
  message?: string
  fullScreen?: boolean
  retryLabel?: string
  onRetry?: () => void
}>()
</script>
