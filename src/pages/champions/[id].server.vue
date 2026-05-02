<template>
  <div>
    <template v-if="!data && !error">
      <DataLoading />
    </template>

    <template v-else-if="error && error.status !== 404">
      <DataError />
    </template>

    <template v-else-if="error && error.status === 404">
      <PageLayout>
        <template #header>
          <AppPageHeader title="Champion details" />
        </template>
        <template #body>
          <DataError
            message="The champion you're looking for doesn't exist. It may have been removed or the link is incorrect."
            retry-label="Back to home"
            retry-destination="/"
          />
        </template>
      </PageLayout>
    </template>

    <template v-else-if="data">
      <PageLayout>
        <template #header>
          <AppPageHeader title="Champion details" />
        </template>
        <template #body>
          <ChampionDetailsSummary :champion="data" />
          <ChampionDetailsAvailabilitySection :champion="data" />
          <ChampionDetailsOverviewSection :champion="data" />
          <ChampionDetailsHistorySection :champion="data" />
        </template>
      </PageLayout>
    </template>
  </div>
</template>

<script setup lang="ts">
import { getChampionDetails } from '~/server/utils/services/ChampionService'

const championId = useRoute().params.id as string

const { data, error } = await useAsyncData(`champion-${championId}`, () =>
  getChampionDetails(championId),
)
</script>
