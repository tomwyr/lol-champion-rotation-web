<template>
  <SideMenuTile title="Rotation prediction">
    <template #leading>
      <SparklesIcon class="size-6 mx-2 text-gray-700 dark:text-gray-300" />
    </template>
    <template #trailing>
      <DotSwitch class="ml-auto mx-2" v-model:enabled="enabled" />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import DotSwitch from '@/components/common/DotSwitch.vue'
import SideMenuTile from '@/components/common/SideMenuTile.vue'
import { SparklesIcon } from '@heroicons/vue/24/outline'
import { rotationPredictionEnabledRef } from './RotationPrediction'

const enabled = rotationPredictionEnabledRef()
</script>
