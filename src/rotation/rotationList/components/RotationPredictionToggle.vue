<template>
  <SideMenuTile title="Rotation prediction">
    <template v-slot:leading>
      <SparklesIcon class="size-6 mx-2 text-gray-700 dark:text-gray-300" />
    </template>
    <template v-slot:trailing>
      <DotSwitch class="ml-auto mx-2" v-model:enabled="enabled" />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import DotSwitch from '@/components/DotSwitch.vue'
import SideMenuTile from '@/components/SideMenuTile.vue'
import { rotationPredictionEnabledRef } from '@/data/RotationPredictionEnabled'
import { SparklesIcon } from '@heroicons/vue/24/outline'

const enabled = rotationPredictionEnabledRef()
</script>
