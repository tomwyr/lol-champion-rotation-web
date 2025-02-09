<template>
  <RotationHeader
    v-model:rotation-type="rotationType"
    v-model:search-query="searchQuery"
    :currentRotation="currentRotation"
    @queryChange="applyChampionsFilter"
  />

  <div class="lg:max-w-[768px] md:max-w-[600px] max-w-[480px] mx-auto pt-[72px]">
    <template v-if="rotationType === 'regular'">
      <ChampionsSection :rotations="regularRotationsData()" :filtered="filtered" />
      <MoreDataLoader
        v-if="searchQuery.length === 0 && hasNextRotation"
        :showButton="!isLoadingMore && nextRotations.length === 0"
        buttonLabel="Previous Rotations"
        :extentThreshold="200"
        :onLoadMore="onLoadMore"
      />
    </template>

    <template v-if="rotationType === 'beginner'">
      <ChampionsSection :rotations="beginnerRotationsData()" :filtered="filtered" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { ref } from 'vue'
import {
  type Champion,
  type ChampionRotation,
  type ChampionRotationDuration,
  type CurrentChampionRotation,
  type RotationType,
} from '../Types'
import ChampionsSection from './ChampionsSection.vue'
import MoreDataLoader from './MoreDataLoader.vue'
import RotationHeader from './RotationHeader.vue'

const props = defineProps<{
  currentRotation: CurrentChampionRotation
  nextRotations: ChampionRotation[]
  hasNextRotation: boolean
  isLoadingMore: boolean
  onLoadMore: () => void
}>()

const rotationType = defineModel<RotationType>('rotationType', { default: 'regular' })
const searchQuery = defineModel<string>('searchQuery', { default: '' })

const filtered = ref(false)
const regularChampions = ref<Champion[]>([])
const beginnerChampions = ref<Champion[]>([])

const currentRotation = props.currentRotation

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
  regularChampions.value = filterChampions(currentRotation.regularChampions)
  beginnerChampions.value = filterChampions(currentRotation.beginnerChampions)
}

function formatDuration(duration: ChampionRotationDuration) {
  const start = format(duration.start, 'MMMM dd')
  const end = format(duration.end, 'MMMM dd')
  return start + ' to ' + end
}

function regularRotationsData() {
  return [
    {
      header: formatDuration(currentRotation.duration),
      champions: filtered.value ? regularChampions.value : currentRotation.regularChampions,
    },
    ...props.nextRotations.map((rotation) => {
      return {
        header: formatDuration(rotation.duration),
        champions: rotation.champions,
      }
    }),
  ]
}

function beginnerRotationsData() {
  return [
    {
      header: 'New players up to level ' + currentRotation.beginnerMaxLevel + ' only',
      champions: filtered.value ? beginnerChampions.value : currentRotation.beginnerChampions,
    },
  ]
}
</script>
