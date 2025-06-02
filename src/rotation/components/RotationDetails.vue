<template>
  <PageLayout>
    <template v-slot:header>
      <RotationHeader
        v-model:rotation-type="rotationType"
        v-model:search-query="searchQuery"
        :currentRotation="currentRotation"
      />
    </template>

    <template v-slot:body>
      <template v-if="rotationType === 'regular'">
        <ChampionsSection :rotations="regularRotationsData" :filtered="filtered" />
        <MoreDataLoader
          v-if="searchQuery.length === 0 && hasNextRotation"
          :showButton="!isLoadingMore && nextRotations.length === 0"
          buttonLabel="Previous Rotations"
          :extentThreshold="200"
          :onLoadMore="onLoadMore"
        />
      </template>

      <template v-if="rotationType === 'beginner'">
        <ChampionsSection :rotations="beginnerRotationsData" :filtered="filtered" />
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue'
import { format } from 'date-fns'
import { computed, ref } from 'vue'
import {
  type Champion,
  type ChampionRotation,
  type ChampionRotationDuration,
  type ChampionRotationPrediction,
  type CurrentChampionRotation,
  type RotationType,
} from '../Types'
import ChampionsSection, { type ChampionsSectionRotation } from './ChampionsSection.vue'
import MoreDataLoader from './MoreDataLoader.vue'
import RotationHeader from './RotationHeader.vue'

const props = defineProps<{
  rotationPrediction?: ChampionRotationPrediction
  currentRotation: CurrentChampionRotation
  nextRotations: ChampionRotation[]
  hasNextRotation: boolean
  isLoadingMore: boolean
  onLoadMore: () => void
}>()

const { rotationPrediction, currentRotation, nextRotations } = props

const rotationType = ref<RotationType>('regular')
const searchQuery = ref<string>('')

const filter = computed(() => searchQuery.value.toLowerCase().trim())
const filtered = computed(() => filter.value.length > 0)

const regularRotationsData = computed<ChampionsSectionRotation[]>(() => {
  const result: ChampionsSectionRotation[] = []

  if (rotationPrediction) {
    result.push({
      header: formatDuration(rotationPrediction.duration),
      champions: filterChampions(rotationPrediction.champions),
      badge: 'prediction',
    })
  }

  result.push({
    header: formatDuration(currentRotation.duration),
    champions: filterChampions(currentRotation.regularChampions),
    badge: 'current',
  })

  for (const rotation of nextRotations) {
    result.push({
      header: formatDuration(rotation.duration),
      champions: filterChampions(rotation.champions),
    })
  }

  return result
})

const beginnerRotationsData = computed<ChampionsSectionRotation[]>(() => {
  return [
    {
      header: 'New players up to level ' + currentRotation.beginnerMaxLevel + ' only',
      champions: filterChampions(currentRotation.beginnerChampions),
    },
  ]
})

function filterChampions(champions: Champion[]) {
  if (filter.value.length === 0) {
    return champions
  }
  return champions.filter((champion) => champion.name.toLowerCase().includes(filter.value))
}

function formatDuration(duration: ChampionRotationDuration) {
  const start = format(duration.start, 'MMMM dd')
  const end = format(duration.end, 'MMMM dd')
  return start + ' to ' + end
}
</script>
