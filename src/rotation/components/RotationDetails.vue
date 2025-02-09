<template>
  <div class="px-4 py-2">
    <div class="flex flex-row h-8 items-center">
      <div class="flex flex-row gap-1 items-baseline">
        <h1 class="text-xl">Current champion rotation</h1>
        <h3 v-if="currentRotation.patchVersion" class="text-sm text-gray-500 dark:text-gray-400">
          v{{ currentRotation.patchVersion }}
        </h3>
      </div>

      <SearchQuery :onChange="applyChampionsFilter" />

      <div class="flex flex-row flex-grow items-center justify-end">
        <DarkModeToggle />
      </div>
    </div>

    <RotationTypePicker v-model="rotationType" />

    <template v-if="rotationType === 'regular'">
      <h2 class="pt-2">Champions available for free</h2>
      <h3 class="text-sm text-gray-500 dark:text-gray-400">
        <time v-bind:datetime="duration.start.iso">{{ duration.start.formatted }}</time>
        to
        <time v-bind:datetime="duration.end.iso">{{ duration.end.formatted }}</time>
      </h3>

      <ChampionsList
        :champions="filtered ? regularChampions : currentRotation.regularChampions"
        :filtered="filtered"
      />

      <IconSpinner v-if="hasNextRotation" class="m-4 mb-8 mx-auto" />
    </template>

    <template v-if="rotationType === 'beginner'">
      <h2 class="pt-2">Champions available for free for new players</h2>
      <h3 class="text-gray-500 dark:text-gray-400">
        New players up to level {{ currentRotation.beginnerMaxLevel }} only
      </h3>
      <ChampionsList
        :champions="filtered ? beginnerChampions : currentRotation.beginnerChampions"
        :filtered="filtered"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import IconSpinner from '@/icons/IconSpinner.vue'
import { format } from 'date-fns'
import { ref } from 'vue'
import {
  type Champion,
  type ChampionRotation,
  type CurrentChampionRotation,
  type RotationType,
} from '../Types'
import ChampionsList from './ChampionsList.vue'
import DarkModeToggle from './DarkModeToggle.vue'
import RotationTypePicker from './RotationTypePicker.vue'
import SearchQuery from './SearchQuery.vue'

const props = defineProps<{
  currentRotation: CurrentChampionRotation
  nextRotations: ChampionRotation[]
  hasNextRotation: boolean
  onLoadMore: () => void
}>()

const rotationType = ref<RotationType>('regular')

const filtered = ref(false)
const regularChampions = ref<Champion[]>([])
const beginnerChampions = ref<Champion[]>([])

function applyChampionsFilter(filter: string) {
  const hasQuery = filter.trim().length > 0

  const filterChampions = (champions: Champion[]) => {
    if (!hasQuery) {
      return champions
    }
    return champions.filter((champion) =>
      champion.name.toLowerCase().includes(filter.toLowerCase()),
    )
  }

  filtered.value = hasQuery
  regularChampions.value = filterChampions(props.currentRotation.regularChampions)
  beginnerChampions.value = filterChampions(props.currentRotation.beginnerChampions)
}

const duration = {
  start: {
    iso: props.currentRotation.duration.start.toISOString,
    formatted: format(props.currentRotation.duration.start, 'MMMM dd'),
  },
  end: {
    iso: props.currentRotation.duration.end.toISOString,
    formatted: format(props.currentRotation.duration.end, 'MMMM dd'),
  },
}
</script>
