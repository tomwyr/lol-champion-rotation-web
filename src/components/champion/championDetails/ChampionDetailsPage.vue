<template>
  <template v-if="championDetailsState.type === 'loading'">
    <DataLoading />
  </template>

  <template v-if="championDetailsState.type === 'error'">
    <DataError :onRetry="fetchChampionDetails" />
  </template>

  <template v-if="championDetailsState.type === 'data'">
    <PageLayout header-size="compact">
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
import { useRoute } from 'vue-router'
import ChampionDetailsAvailabilitySection from './ChampionDetailsAvailabilitySection.vue'
import ChampionDetailsHeader from './ChampionDetailsHeader.vue'
import ChampionDetailsHistorySection from './ChampionDetailsHistorySection.vue'
import ChampionDetailsOverviewSection from './ChampionDetailsOverviewSection.vue'
import ChampionDetailsSummary from './ChampionDetailsSummary.vue'

const route = useRoute()
const championId = route.params.id as string

const championDetailsState = ref<AsyncDataState<ChampionDetails>>({ type: 'initial' })

async function fetchChampionDetails() {
  championDetailsState.value = { type: 'loading' }

  const data = await fetch(apiBaseUrl + `/champions/${championId}`)

  if (data.ok) {
    const champion = (await data.json()) as ChampionDetails
    championDetailsState.value = { type: 'data', value: champion }
  } else {
    championDetailsState.value = { type: 'error' }
  }
}

onMounted(fetchChampionDetails)
</script>
