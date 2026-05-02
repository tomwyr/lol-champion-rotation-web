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
        :next-rotation-token
        :show-back-to-current="true"
      >
        <template #header>
          <slot name="header" />
        </template>
      </RotationListData>
    </template>

    <slot name="menu" />
  </div>
</template>

<script setup lang="ts">
import type { ChampionsRotationData } from '~/components/rotation/common/ChampionRotationGrid.vue'
import { formatRotationDetails, formatRotationDuration } from '~/domain/Formatters'
import type { ChampionRotationType } from '~/domain/Types'
import { getNextRotations } from '~/server/utils/services/RotationService'

const { activeRotationType, rotationToken } = defineProps<{
  activeRotationType: ChampionRotationType
  rotationToken: string
}>()

const { data, error } = await useAsyncData(`rotations-data-${rotationToken}`, () =>
  getNextRotations(rotationToken),
)

const regularRotations = computed(() => {
  const result: ChampionsRotationData[] = []

  for (const rotation of data.value ?? []) {
    result.push({
      key: `regular#${rotation.id}`,
      title: formatRotationDuration(rotation.duration, { format: 'short' }),
      subtitle: formatRotationDetails(rotation.champions),
      detailsId: rotation.id,
      champions: rotation.champions,
    })
  }

  return result
})

const nextRotationToken = computed(() => {
  const rotations = data.value ?? []
  return rotations[rotations.length - 1]?.nextRotationToken
})
</script>
