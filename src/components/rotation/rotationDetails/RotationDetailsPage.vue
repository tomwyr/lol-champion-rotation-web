<template>
  <template v-if="rotationDetailsState.type === 'loading'">
    <DataLoading />
  </template>

  <template v-if="rotationDetailsState.type === 'error' && !rotationDetailsState.reason">
    <DataError :onRetry="fetchRotationDetails" />
  </template>

  <template
    v-if="rotationDetailsState.type === 'error' && rotationDetailsState.reason === 'notFound'"
  >
    <PageLayout>
      <template #header>
        <AppPageHeader title="Rotation details" />
      </template>
      <template #body>
        <DataError
          message="The champion rotation you're looking for doesn't exist. It may have been removed or the link is incorrect."
          retryLabel="Back to home"
          :onRetry="goHome"
        />
      </template>
    </PageLayout>
  </template>

  <template v-if="rotationDetailsState.type === 'data'">
    <PageLayout>
      <template #header>
        <RotationDetailsHeader :rotation="rotationDetailsState.value" />
      </template>
      <template #body>
        <ChampionRotationGrid :rotation="rotationItemDataFrom(rotationDetailsState.value)" />
      </template>
    </PageLayout>
  </template>
</template>

<script setup lang="ts">
import { formatRotationDetails, formatRotationDuration } from '@/common/Formatters'
import type { ChampionRotationDetails } from '@/common/Types'
import type { AsyncDataState } from '@/common/Utils'
import DataError from '@/components/common/DataError.vue'
import DataLoading from '@/components/common/DataLoading.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import { apiBaseUrl } from '@/Environment'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ChampionRotationGrid, {
  type ChampionsRotationData,
} from '../common/ChampionRotationGrid.vue'
import RotationDetailsHeader from './RotationDetailsHeader.vue'
import AppPageHeader from '@/components/menu/AppPageHeader.vue'

const route = useRoute()
const rotationId = route.params.id as string

const rotationDetailsState = ref<AsyncDataState<ChampionRotationDetails>>({ type: 'initial' })

const router = useRouter()
function goHome() {
  router.push('/')
}

async function fetchRotationDetails() {
  rotationDetailsState.value = { type: 'loading' }

  const data = await fetch(apiBaseUrl + `/rotations/${rotationId}`)

  if (data.ok) {
    const rotation = (await data.json()) as ChampionRotationDetails
    rotationDetailsState.value = { type: 'data', value: rotation }
  } else {
    if (data.status == 404) {
      rotationDetailsState.value = { type: 'error', reason: 'notFound' }
    } else {
      rotationDetailsState.value = { type: 'error' }
    }
  }
}

function rotationItemDataFrom(details: ChampionRotationDetails): ChampionsRotationData {
  return {
    key: `details#${rotationId}`,
    title: formatRotationDuration(details.duration, { format: 'short' }),
    subtitle: formatRotationDetails(details.champions),
    champions: details.champions,
    badge: details.current ? 'current' : undefined,
  }
}

onMounted(fetchRotationDetails)
</script>
