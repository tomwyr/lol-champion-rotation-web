<template>
  <SideMenuTile title="Rotation prediction">
    <template v-slot:leading>
      <SparklesIcon class="size-6 mx-2 text-gray-700 dark:text-gray-300" />
    </template>
    <template v-slot:trailing>
      <AppSwitch class="ml-auto mx-2" v-model:enabled="enabled" />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import { rotationPredictionEnabledRef } from '@/data/RotationPredictionEnabled'
import { SparklesIcon } from '@heroicons/vue/24/outline'
import AppSwitch from '../../components/DotSwitch.vue'
import SideMenuTile from '@/components/SideMenuTile.vue'

const enabled = rotationPredictionEnabledRef()
</script>
