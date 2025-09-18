<template>
  <PageLayout headerSize="loose">
    <template #header>
      <RotationListHeader :rotationsOverview />
    </template>

    <template #body>
      <div
        class="sticky top-[4rem] md:top-[4.5rem] z-10 pb-1.5 mb-0.5 bg-white dark:bg-gray-900 transition-colors"
      >
        <RotationTypePicker v-model="rotationType" />
      </div>

      <template v-if="rotationType === 'regular'">
        <template v-for="(rotation, index) in regularRotationsData" :key="rotation.key">
          <div
            v-if="index > 0"
            class="flex-shrink-0 min-w-max h-[1px] mb-3 bg-gray-200 dark:bg-gray-700"
          ></div>
          <ChampionRotationGrid :rotation />
        </template>

        <MoreDataLoader
          v-if="hasNextRotation"
          :showButton="!isLoadingMore && nextRotations.length === 0"
          buttonLabel="Previous Rotations"
          :extentThreshold="200"
          :onLoadMore
        />
      </template>

      <template v-if="rotationType === 'beginner'">
        <template v-for="rotation in beginnerRotationsData" :key="rotation.key">
          <ChampionRotationGrid :rotation />
        </template>
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { formatRotationDetails, formatRotationDuration } from '@/common/Formatters'
import {
  type ChampionRotation,
  type ChampionRotationPrediction,
  type ChampionRotationsOverview,
  type ChampionRotationType,
} from '@/common/Types'
import PageLayout from '@/components/common/PageLayout.vue'
import { computed, ref } from 'vue'
import MoreDataLoader from '../../../common/MoreDataLoader.vue'
import type { ChampionsRotationData } from '../../common/ChampionRotationGrid.vue'
import ChampionRotationGrid from '../../common/ChampionRotationGrid.vue'
import RotationListHeader from './RotationListHeader.vue'
import RotationTypePicker from './RotationTypePicker.vue'

const props = defineProps<{
  rotationPrediction?: ChampionRotationPrediction
  rotationsOverview: ChampionRotationsOverview
  nextRotations: ChampionRotation[]
  hasNextRotation: boolean
  isLoadingMore: boolean
  onLoadMore: () => void
}>()

const rotationType = ref<ChampionRotationType>('regular')

const regularRotationsData = computed<ChampionsRotationData[]>(() => {
  const { rotationPrediction, rotationsOverview, nextRotations } = props

  const result: ChampionsRotationData[] = []

  if (rotationPrediction) {
    result.push({
      key: 'prediction',
      title: formatRotationDuration(rotationPrediction.duration, { format: 'short' }),
      subtitle: formatRotationDetails(rotationPrediction.champions),
      champions: rotationPrediction.champions,
      expandable: true,
      badge: 'prediction',
    })
  }

  result.push({
    key: `regular#${rotationsOverview.id}`,
    title: formatRotationDuration(rotationsOverview.duration, { format: 'short' }),
    subtitle: formatRotationDetails(rotationsOverview.regularChampions),
    detailsId: rotationsOverview.id,
    champions: rotationsOverview.regularChampions,
    badge: 'current',
  })

  for (const rotation of nextRotations) {
    result.push({
      key: `regular#${rotationsOverview.id}`,
      title: formatRotationDuration(rotation.duration, { format: 'short' }),
      subtitle: formatRotationDetails(rotation.champions),
      detailsId: rotation.id,
      champions: rotation.champions,
    })
  }

  return result
})

const beginnerRotationsData = computed<ChampionsRotationData[]>(() => {
  const { rotationsOverview } = props

  return [
    {
      key: 'beginner',
      title: 'New players up to level ' + rotationsOverview.beginnerMaxLevel + ' only',
      champions: rotationsOverview.beginnerChampions,
    },
  ]
})
</script>
