<template>
  <div :class="{ 'flex items-center justify-center min-h-screen': fullScreen }">
    <div class="flex flex-col justify-center items-center">
      <IconSpinner />
      <h1 class="pt-2 text-gray-700 dark:text-gray-300">Loading...</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconSpinner } from '@/icons/Icons'

const { fullScreen = true } = defineProps<{
  fullScreen?: boolean
}>()
</script>
