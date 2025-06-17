<template>
  <SideMenuTile title="Rotation prediction" class="text-sm">
    <template #leading>
      <SparklesIcon />
    </template>
    <template #trailing>
      <DotSwitch v-model:enabled="enabled" class="mr-1" />
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
