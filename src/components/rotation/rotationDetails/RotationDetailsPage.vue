<template>
  <template v-if="rotationDetailsState.type === 'loading'">
    <DataLoading />
  </template>

  <template v-if="rotationDetailsState.type === 'error'">
    <DataError :onRetry="fetchRotationDetails" />
  </template>

  <template v-if="rotationDetailsState.type === 'data'">
    <PageLayout headerSize="compact">
      <template #header>
        <RotationDetailsHeader :rotation="rotationDetailsState.value" />
      </template>
      <template #body>
        <ChampionRotation :rotation="rotationItemDataFrom(rotationDetailsState.value)" />
      </template>
    </PageLayout>
  </template>
</template>

<script setup lang="ts">
import { formatRotationDuration } from '@/common/Formatters'
import type { ChampionRotationDetails } from '@/common/Types'
import type { AsyncDataState } from '@/common/Utils'
import DataError from '@/components/common/DataError.vue'
import DataLoading from '@/components/common/DataLoading.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import { apiBaseUrl } from '@/Environment'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ChampionRotation, { type ChampionsRotationData } from '../common/ChampionRotation.vue'
import RotationDetailsHeader from './RotationDetailsHeader.vue'

const route = useRoute()
const rotationId = route.params.id as string

const rotationDetailsState = ref<AsyncDataState<ChampionRotationDetails>>({ type: 'initial' })

async function fetchRotationDetails() {
  rotationDetailsState.value = { type: 'loading' }

  const data = await fetch(apiBaseUrl + `/rotations/${rotationId}`)

  if (data.ok) {
    const rotation = (await data.json()) as ChampionRotationDetails
    rotationDetailsState.value = { type: 'data', value: rotation }
  } else {
    rotationDetailsState.value = { type: 'error' }
  }
}

function rotationItemDataFrom(details: ChampionRotationDetails): ChampionsRotationData {
  return {
    key: `details#${rotationId}`,
    header: formatRotationDuration(details.duration),
    champions: details.champions,
    badge: details.current ? 'current' : undefined,
  }
}

onMounted(fetchRotationDetails)
</script>
