<template>
  <template v-for="rotation in nonEmptyRotations" :key="rotation.key">
    <ChampionsSectionRotation :rotation="rotation" />
  </template>

  <h3 v-if="nonEmptyRotations.length === 0" class="py-2 text-gray-500 dark:text-gray-400">
    {{ filtered ? 'No champions match your search query.' : 'No data available at the moment.' }}
  </h3>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ChampionsSectionRotation from './ChampionsSectionRotation.vue'
import type { RotationBadgeVariant } from './RotationBadge.vue'
import type { Champion } from './Types'

export type ChampionsRotationItemData = {
  key: string
  header: string
  detailsId?: string
  champions: Champion[]
  expandable?: boolean
  badge?: RotationBadgeVariant
}

const props = defineProps<{
  rotations: ChampionsRotationItemData[]
  filtered: boolean
}>()

const nonEmptyRotations = computed(() => {
  return props.rotations.filter((data) => data.champions.length > 0)
})
</script>
