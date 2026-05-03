<template>
  <PageLayout header-size="loose">
    <template #header>
      <slot name="header" />
    </template>

    <template #body>
      <div
        v-if="showRotationPicker"
        class="sticky top-16 md:top-18 z-10 pb-1.5 mb-0.5 -mx-1 px-1 bg-white dark:bg-gray-900 transition-colors"
      >
        <slot name="rotation-type-picker" />
      </div>

      <template v-if="activeRotationType === 'regular'">
        <template v-for="(rotation, index) in regularRotations" :key="rotation.key">
          <div v-if="index > 0" class="shrink-0 min-w-max h-px mb-3 bg-gray-200 dark:bg-gray-700" />
          <ChampionRotationGrid :rotation />
        </template>

        <MoreDataLoader
          v-if="showBackToCurrent"
          :class="{ 'pb-6': !nextPageNumber }"
          destination="/"
          button-label="Back to Current"
          icon="up"
        />

        <MoreDataLoader
          v-if="nextPageNumber"
          :destination="`/rotations?page=${nextPageNumber}`"
          class="pb-6"
          button-label="Previous Rotations"
          icon="down"
        />
      </template>

      <template v-if="activeRotationType === 'beginner'">
        <template v-for="rotation in beginnerRotations" :key="rotation.key">
          <ChampionRotationGrid :rotation />
        </template>
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ChampionRotationType } from '~/domain/Types'
import type { ChampionsRotationData } from '../common/ChampionRotationGrid.vue'

const {
  activeRotationType,
  regularRotations = [],
  beginnerRotations = [],
  showBackToCurrent,
  nextPageNumber = undefined,
} = defineProps<{
  activeRotationType: ChampionRotationType
  regularRotations?: ChampionsRotationData[]
  beginnerRotations?: ChampionsRotationData[]
  showBackToCurrent: boolean
  nextPageNumber?: number
}>()

const showRotationPicker = computed(() => {
  return regularRotations.length > 0 && beginnerRotations.length > 0
})
</script>
