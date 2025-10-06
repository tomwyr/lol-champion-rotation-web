<template>
  <template v-if="championDetailsState.type === 'loading'">
    <DataLoading />
  </template>

  <template v-if="championDetailsState.type === 'error' && !championDetailsState.reason">
    <DataError :onRetry="fetchChampionDetails" />
  </template>

  <template
    v-if="championDetailsState.type === 'error' && championDetailsState.reason === 'notFound'"
  >
    <PageLayout>
      <template #header>
        <AppPageHeader title="Champion details" />
      </template>
      <template #body>
        <DataError
          message="The champion you're looking for doesn't exist. It may have been removed or the link is incorrect."
          retryLabel="Back to home"
          :onRetry="goHome"
        />
      </template>
    </PageLayout>
  </template>

  <template v-if="championDetailsState.type === 'data'">
    <PageLayout>
      <template #header>
        <ChampionDetailsHeader :champion="championDetailsState.value" />
      </template>

      <template #body>
        <ChampionDetailsSummary :champion="championDetailsState.value" />
        <ChampionDetailsAvailabilitySection :champion="championDetailsState.value" />
        <ChampionDetailsOverviewSection :champion="championDetailsState.value" />
        <ChampionDetailsHistorySection :champion="championDetailsState.value" />
      </template>
    </PageLayout>
  </template>
</template>

<script setup lang="ts">
import type { ChampionDetails } from '@/common/Types'
import type { AsyncDataState } from '@/common/Utils'
import DataError from '@/components/common/DataError.vue'
import DataLoading from '@/components/common/DataLoading.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import { apiBaseUrl } from '@/Environment'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ChampionDetailsAvailabilitySection from './ChampionDetailsAvailabilitySection.vue'
import ChampionDetailsHeader from './ChampionDetailsHeader.vue'
import ChampionDetailsHistorySection from './ChampionDetailsHistorySection.vue'
import ChampionDetailsOverviewSection from './ChampionDetailsOverviewSection.vue'
import ChampionDetailsSummary from './ChampionDetailsSummary.vue'
import AppPageHeader from '@/components/menu/AppPageHeader.vue'

const route = useRoute()
const championId = route.params.id as string

const championDetailsState = ref<AsyncDataState<ChampionDetails>>({ type: 'initial' })

const router = useRouter()
function goHome() {
  router.push('/')
}

async function fetchChampionDetails() {
  championDetailsState.value = { type: 'loading' }

  const data = await fetch(apiBaseUrl + `/champions/${championId}`)

  if (data.ok) {
    const champion = (await data.json()) as ChampionDetails
    championDetailsState.value = { type: 'data', value: champion }
  } else {
    if (data.status === 404) {
      championDetailsState.value = { type: 'error', reason: 'notFound' }
    } else {
      championDetailsState.value = { type: 'error' }
    }
  }
}

onMounted(fetchChampionDetails)
</script>
