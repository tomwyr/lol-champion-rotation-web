<template>
  <PageLayout>
    <template #header>
      <RotationsHeader
        v-model:rotation-type="rotationType"
        v-model:search-query="searchQuery"
        :rotationsOverview
      />
    </template>

    <template #body>
      <template v-if="rotationType === 'regular'">
        <FilteredChampionRotations :rotations="regularRotationsData" :filtered />
        <MoreDataLoader
          v-if="searchQuery.length === 0 && hasNextRotation"
          :showButton="!isLoadingMore && nextRotations.length === 0"
          buttonLabel="Previous Rotations"
          :extentThreshold="200"
          :onLoadMore
        />
      </template>

      <template v-if="rotationType === 'beginner'">
        <FilteredChampionRotations :rotations="beginnerRotationsData" :filtered />
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { formatDuration } from '@/common/Formatters'
import {
  type Champion,
  type ChampionRotation,
  type ChampionRotationPrediction,
  type ChampionRotationsOverview,
  type ChampionRotationType,
} from '@/common/Types'
import PageLayout from '@/components/common/PageLayout.vue'
import { computed, ref } from 'vue'
import MoreDataLoader from '../../../common/MoreDataLoader.vue'
import type { ChampionsRotationData } from '../../common/ChampionRotation.vue'
import FilteredChampionRotations from './FilteredChampionRotations.vue'
import RotationsHeader from './RotationListHeader.vue'

const props = defineProps<{
  rotationPrediction?: ChampionRotationPrediction
  rotationsOverview: ChampionRotationsOverview
  nextRotations: ChampionRotation[]
  hasNextRotation: boolean
  isLoadingMore: boolean
  onLoadMore: () => void
}>()

const rotationType = ref<ChampionRotationType>('regular')
const searchQuery = ref<string>('')

const filter = computed(() => searchQuery.value.toLowerCase().trim())
const filtered = computed(() => filter.value.length > 0)

const regularRotationsData = computed<ChampionsRotationData[]>(() => {
  const { rotationPrediction, rotationsOverview, nextRotations } = props

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
    key: `regular#${rotationsOverview.id}`,
    header: formatDuration(rotationsOverview.duration),
    detailsId: rotationsOverview.id,
    champions: filterChampions(rotationsOverview.regularChampions),
    badge: 'current',
  })

  for (const rotation of nextRotations) {
    result.push({
      key: `regular#${rotationsOverview.id}`,
      header: formatDuration(rotation.duration),
      detailsId: rotation.id,
      champions: filterChampions(rotation.champions),
    })
  }

  return result
})

const beginnerRotationsData = computed<ChampionsRotationData[]>(() => {
  const { rotationsOverview } = props

  return [
    {
      key: 'beginner',
      header: 'New players up to level ' + rotationsOverview.beginnerMaxLevel + ' only',
      champions: filterChampions(rotationsOverview.beginnerChampions),
    },
  ]
})

function filterChampions(champions: Champion[]) {
  if (filter.value.length === 0) {
    return champions
  }
  return champions.filter((champion) => champion.name.toLowerCase().includes(filter.value))
}
</script>
