<template>
  <div
    :class="{
      'mb-2': rotation.champions.length > 0,
      '-m-1 p-1 rounded cursor-pointer transition-colors hover:[&:not(:has(.champion-tile:hover))]:bg-gray-200 dark:hover:[&:not(:has(.champion-tile:hover))]:bg-gray-800':
        rotation.detailsId,
    }"
    :onclick="
      rotation.detailsId ? `window.location.href = '/rotations/${rotation.detailsId}'` : undefined
    "
  >
    <div class="flex flex-row items-center">
      <h2>{{ rotation.title }}</h2>

      <RotationBadge v-if="rotation.badge" :variant="rotation.badge" />
    </div>

    <h3 v-if="rotation.subtitle" class="font-light text-gray-500 dark:text-gray-400">
      {{ rotation.subtitle }}
    </h3>

    <div
      v-if="rotation.champions.length > 0"
      class="pt-4 pb-2 gap-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3"
    >
      <template v-for="champion in rotation.champions" :key="champion.id">
        <ChampionRotationTile :champion />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Champion } from '~/domain/Types'
import type { RotationBadgeVariant } from './RotationBadge.vue'

export type ChampionsRotationData = {
  key: string
  title: string
  subtitle?: string
  detailsId?: string
  champions: Champion[]
  badge?: RotationBadgeVariant
}

defineProps<{
  rotation: ChampionsRotationData
}>()
</script>
