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

    <ChampionsSearchField v-model:query="searchQuery" v-model:expanded="searchExpanded" />

    <Bars3Icon
      @click="openSideMenu"
      class="size-6 p-1 rounded cursor-pointer ml-auto hover:bg-gray-100 hover:dark:bg-gray-800"
    />
  </div>

  <RotationTypePicker v-model="rotationType" />
</template>

<script setup lang="ts">
import type { CurrentChampionRotation, RotationType } from '@/common/Types'
import { openSideMenu } from '@/components/common/SideMenu'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import ChampionsSearchField from './ChampionsSearchField.vue'
import RotationTypePicker from './RotationTypePicker.vue'

const rotationType = defineModel<RotationType>('rotationType', { required: true })
const searchQuery = defineModel<string>('searchQuery', { required: true })

const searchExpanded = ref(false)

defineProps<{
  currentRotation: CurrentChampionRotation
}>()
</script>
