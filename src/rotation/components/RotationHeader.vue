<template>
  <div class="fixed z-50 inset-x-0 py-2 bg-inherit">
    <div class="lg:max-w-[768px] md:max-w-[600px] max-w-[480px] mx-auto">
      <div class="flex flex-row h-8 items-center">
        <div class="flex flex-row gap-1 items-baseline">
          <h1 class="text-xl">Current champion rotation</h1>
          <h3 v-if="currentRotation.patchVersion" class="text-sm text-gray-500 dark:text-gray-400">
            v{{ currentRotation.patchVersion }}
          </h3>
        </div>

        <SearchQuery v-model="searchQuery" :onChange="onQueryChange" />

        <div class="flex flex-row flex-grow items-center justify-end">
          <DarkModeToggle />
        </div>
      </div>

      <RotationTypePicker v-model="rotationType" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CurrentChampionRotation, RotationType } from '../Types'
import DarkModeToggle from './DarkModeToggle.vue'
import RotationTypePicker from './RotationTypePicker.vue'
import SearchQuery from './SearchQuery.vue'

const rotationType = defineModel<RotationType>('rotationType', { required: true })
const searchQuery = defineModel<string>('searchQuery', { required: true })

defineProps<{
  currentRotation: CurrentChampionRotation
  onQueryChange: (query: string) => void
}>()
</script>
