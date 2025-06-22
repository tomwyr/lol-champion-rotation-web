<template>
  <PageLayout>
    <template #header>
      <AppPageHeader title="Bookmarked rotations" />
    </template>
    <template #body>
      <template v-if="observedRotations.length === 0">
        <DataInfo message="Bookmark a rotation to see it on the list.">
          <template #icon>
            <IconBookmarkAdd class="size-14" />
          </template>
        </DataInfo>
      </template>

      <template v-else>
        <template v-for="(rotation, index) in observedRotations" :key="rotation.id">
          <ObservedRotationTile :rotation :index />
        </template>
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import type { ChampionRotationSummary } from '@/common/Types'
import DataInfo from '@/components/common/DataInfo.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import AppPageHeader from '@/components/menu/AppPageHeader.vue'
import { apiBaseUrl } from '@/Environment'
import IconBookmarkAdd from '@/icons/IconBookmarkAdd.vue'
import { onMounted } from 'vue'
import { observedRotationsRef, updateRotationsCurrentStatus } from './ObservedRotations'
import ObservedRotationTile from './ObservedRotationTile.vue'

const observedRotations = observedRotationsRef()

async function syncCurrentRotationStatus() {
  const data = await fetch(apiBaseUrl + '/rotations/current')
  if (data.ok) {
    const rotation = (await data.json()) as ChampionRotationSummary
    updateRotationsCurrentStatus(rotation)
  }
}

onMounted(syncCurrentRotationStatus)
</script>
