<template>
  <div>
    <template v-if="!data && !error">
      <DataLoading />
    </template>

    <template v-else-if="error">
      <DataError />
    </template>

    <template v-else-if="data">
      <RotationListData
        :active-rotation-type
        :regular-rotations
        :beginner-rotations
        :next-rotation-token
        :show-back-to-current="false"
      >
        <template #header>
          <slot name="header" />
        </template>
        <template #rotation-type-picker>
          <slot name="rotation-type-picker" />
        </template>
      </RotationListData>
    </template>

    <slot name="menu" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ChampionsRotationData } from '~/components/rotation/common/ChampionRotationGrid.vue'
import RotationListData from '~/components/rotation/rotationList/RotationListData.vue'
import { formatRotationDetails, formatRotationDuration } from '~/domain/Formatters'
import type { ChampionRotationType } from '~/domain/Types'
import { getRotationsOverview } from '~/server/utils/services/RotationService'

defineProps<{ activeRotationType: ChampionRotationType }>()

const { data, error } = await useAsyncData(`rotations-overview`, () => getRotationsOverview())

const regularRotations = computed(() => {
  const result: ChampionsRotationData[] = []

  if (data.value) {
    result.push({
      key: `regular#${data.value.id}`,
      title: formatRotationDuration(data.value.duration, { format: 'short' }),
      subtitle: formatRotationDetails(data.value.regularChampions),
      detailsId: data.value.id,
      champions: data.value.regularChampions,
      badge: 'current',
    })
  }

  return result
})

const beginnerRotations = computed<ChampionsRotationData[]>(() => {
  const result: ChampionsRotationData[] = []

  if (data.value) {
    result.push({
      key: 'beginner',
      title: 'New players up to level ' + data.value.beginnerMaxLevel + ' only',
      champions: data.value.beginnerChampions,
    })
  }

  return result
})

const nextRotationToken = computed(() => data.value?.nextRotationToken)
</script>
