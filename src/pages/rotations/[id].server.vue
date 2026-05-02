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
          <AppPageHeader title="Rotation details" />
        </template>
        <template #body>
          <DataError
            message="The champion rotation you're looking for doesn't exist. It may have been removed or the link is incorrect."
            retry-label="Back to home"
            retry-destination="/"
          />
        </template>
      </PageLayout>
    </template>

    <template v-else-if="data">
      <PageLayout>
        <template #header>
          <AppPageHeader title="Rotation details" />
        </template>
        <template #body>
          <ChampionRotationGrid :rotation="rotationItemDataFrom(data)" />
        </template>
      </PageLayout>
    </template>
  </div>
</template>

<script setup lang="ts">
import { formatRotationDetails, formatRotationDuration } from '~/domain/Formatters'
import type { ChampionRotationDetails } from '~/domain/Types'
import type { ChampionsRotationData } from '~/components/rotation/common/ChampionRotationGrid.vue'
import { getRotationDetails } from '~/server/utils/services/RotationService'

const rotationId = useRoute().params.id as string

const { data, error } = await useAsyncData(`rotation-${rotationId}`, () =>
  getRotationDetails(rotationId),
)

function rotationItemDataFrom(details: ChampionRotationDetails): ChampionsRotationData {
  return {
    key: `details#${rotationId}`,
    title: formatRotationDuration(details.duration, { format: 'short' }),
    subtitle: formatRotationDetails(details.champions),
    champions: details.champions,
    badge: details.current ? 'current' : undefined,
  }
}
</script>
