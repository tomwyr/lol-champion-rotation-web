<template>
  <div class="flex flex-row items-center">
    <SparklesIcon class="size-4 text-gray-700 dark:text-gray-300" />
    <AppSwitch v-model:enabled="enabled" />
  </div>
</template>

<script setup lang="ts">
import { rotationPredictionEnabledRef } from '@/data/RotationPredictionEnabled'
import { SparklesIcon } from '@heroicons/vue/24/outline'
import AppSwitch from './AppSwitch.vue'

const enabled = rotationPredictionEnabledRef()
</script>
