<template>
  <PageLayout headerSize="compact">
    <template #header>
      <AppPageHeader title="Observed champions" />
    </template>

    <template #body>
      <template v-if="observedChampions.length === 0">
        <DataInfo message="Observe your first champion to see it on the list.">
          <template #icon>
            <EyeIcon class="size-14" />
          </template>
        </DataInfo>
      </template>

      <template v-else>
        <template v-for="(champion, index) in observedChampions" :key="champion.id">
          <ObservedChampionTile :champion="champion" :index="index" />
        </template>
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import DataInfo from '@/components/common/DataInfo.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import AppPageHeader from '@/components/menu/AppPageHeader.vue'
import { EyeIcon } from '@heroicons/vue/24/outline'
import { observedChampionsRef } from './ObservedChampions'
import ObservedChampionTile from './ObservedChampionTile.vue'

const observedChampions = observedChampionsRef()
</script>
