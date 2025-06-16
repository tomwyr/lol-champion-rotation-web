<template>
  <PageLayout headerSize="compact">
    <template #header>
      <AppPageHeader title="Observed champions" />
    </template>

    <template #body>
      <template v-if="observedChampions.length === 0">
        <DataInfo message="Observe a champion to see it on the list.">
          <template #icon>
            <EyeIcon class="size-14" />
          </template>
        </DataInfo>
      </template>

      <template v-else>
        <template v-for="(champion, index) in observedChampions" :key="champion.id">
          <ObservedChampionTile :champion :index />
        </template>
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import type { CurrentChampionRotation } from '@/common/Types'
import DataInfo from '@/components/common/DataInfo.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import AppPageHeader from '@/components/menu/AppPageHeader.vue'
import { apiBaseUrl } from '@/Environment'
import { EyeIcon } from '@heroicons/vue/24/outline'
import { onMounted } from 'vue'
import { observedChampionsRef, updateChampionsCurrentStatus } from './ObservedChampions'
import ObservedChampionTile from './ObservedChampionTile.vue'

const observedChampions = observedChampionsRef()

async function syncCurrentRotationStatus() {
  const data = await fetch(apiBaseUrl + '/rotations/current')
  if (data.ok) {
    const rotation = (await data.json()) as CurrentChampionRotation
    updateChampionsCurrentStatus(rotation)
  }
}

onMounted(syncCurrentRotationStatus)
</script>
