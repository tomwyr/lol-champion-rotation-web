<template>
  <div class="flex flex-row h-8 items-center">
    <div
      :class="searchExpanded && 'hidden md:flex'"
      class="mr-2 flex flex-row gap-1 items-baseline"
    >
      <h1 class="text-xl">Champion rotation</h1>
      <h3 v-if="currentRotation.patchVersion" class="text-sm text-gray-500 dark:text-gray-400">
        v{{ currentRotation.patchVersion }}
      </h3>
    </div>

    <SearchQuery v-model:query="searchQuery" v-model:expanded="searchExpanded" />

    <div class="flex flex-row flex-grow items-center justify-end">
      <DarkModeToggle />
    </div>
  </div>

  <RotationTypePicker v-model="rotationType" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CurrentChampionRotation, RotationType } from '../Types'
import DarkModeToggle from './DarkModeToggle.vue'
import RotationTypePicker from './RotationTypePicker.vue'
import SearchQuery from './SearchQuery.vue'

const rotationType = defineModel<RotationType>('rotationType', { required: true })
const searchQuery = defineModel<string>('searchQuery', { required: true })

const searchExpanded = ref(false)

defineProps<{
  currentRotation: CurrentChampionRotation
}>()
</script>
