<template>
  <PageLayout>
    <template v-slot:header>
      <RotationsHeader
        v-model:rotation-type="rotationType"
        v-model:search-query="searchQuery"
        :currentRotation="currentRotation"
      />
    </template>

    <template v-slot:body>
      <template v-if="rotationType === 'regular'">
        <FilteredChampionRotation :rotations="regularRotationsData" :filtered="filtered" />
        <MoreDataLoader
          v-if="searchQuery.length === 0 && hasNextRotation"
          :showButton="!isLoadingMore && nextRotations.length === 0"
          buttonLabel="Previous Rotations"
          :extentThreshold="200"
          :onLoadMore="onLoadMore"
        />
      </template>

      <template v-if="rotationType === 'beginner'">
        <FilteredChampionRotation :rotations="beginnerRotationsData" :filtered="filtered" />
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import {
  type Champion,
  type ChampionRotation,
  type ChampionRotationDuration,
  type ChampionRotationPrediction,
  type CurrentChampionRotation,
  type RotationType,
} from '@/common/Types'
import PageLayout from '@/components/common/PageLayout.vue'
import { format } from 'date-fns'
import { computed, ref } from 'vue'
import MoreDataLoader from '../../../common/MoreDataLoader.vue'
import type { ChampionsRotationData } from '../../common/ChampionRotation.vue'
import FilteredChampionRotation from './FilteredChampionRotation.vue'
import RotationsHeader from './RotationListHeader.vue'

const props = defineProps<{
  rotationPrediction?: ChampionRotationPrediction
  currentRotation: CurrentChampionRotation
  nextRotations: ChampionRotation[]
  hasNextRotation: boolean
  isLoadingMore: boolean
  onLoadMore: () => void
}>()

const rotationType = ref<RotationType>('regular')
const searchQuery = ref<string>('')

const filter = computed(() => searchQuery.value.toLowerCase().trim())
const filtered = computed(() => filter.value.length > 0)

const regularRotationsData = computed<ChampionsRotationData[]>(() => {
  const { rotationPrediction, currentRotation, nextRotations } = props

  const result: ChampionsRotationData[] = []

  if (rotationPrediction) {
    result.push({
      key: 'prediction',
      header: formatDuration(rotationPrediction.duration),
      champions: filterChampions(rotationPrediction.champions),
      expandable: true,
      badge: 'prediction',
    })
  }

  result.push({
    key: `current#${currentRotation.id}`,
    header: formatDuration(currentRotation.duration),
    detailsId: currentRotation.id,
    champions: filterChampions(currentRotation.regularChampions),
    badge: 'current',
  })

  for (const rotation of nextRotations) {
    result.push({
      key: `current#${currentRotation.id}`,
      header: formatDuration(rotation.duration),
      detailsId: currentRotation.id,
      champions: filterChampions(rotation.champions),
    })
  }

  return result
})

const beginnerRotationsData = computed<ChampionsRotationData[]>(() => {
  const { currentRotation } = props

  return [
    {
      key: 'beginner',
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
