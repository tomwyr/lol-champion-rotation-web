<template>
  <div
    :class="{
      'mb-2': expanded && rotation.champions.length > 0,
      '-m-1 p-1 rounded cursor-pointer transition-colors hover:[&:not(:has(.champion-tile:hover))]:bg-gray-200 dark:hover:[&:not(:has(.champion-tile:hover))]:bg-gray-800':
        rotation.detailsId,
    }"
    @click="openRotationDetails"
  >
    <div class="flex flex-row items-center">
      <h2>{{ rotation.title }}</h2>

      <RotationBadge v-if="rotation.badge" :variant="rotation.badge" />

      <div
        v-if="rotation.expandable !== undefined"
        class="ml-1 p-1 cursor-pointer rounded-full hover:bg-gray-200 hover:dark:bg-gray-800"
        @click="toggleExpansion"
      >
        <IconUnfoldLess v-if="expanded" />
        <IconUnfoldMore v-else />
      </div>
    </div>

    <h3 v-if="rotation.subtitle" class="font-light text-gray-500 dark:text-gray-400">
      {{ rotation.subtitle }}
    </h3>

    <div v-if="!expanded" class="mb-2"></div>

    <div
      v-if="rotation.champions.length > 0"
      v-show="expanded"
      class="pt-4 pb-2 gap-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3"
    >
      <template v-for="champion in rotation.champions" :key="champion.id">
        <ChampionRotationTile :champion />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Champion } from '@/common/Types'
import { IconUnfoldLess, IconUnfoldMore } from '@/icons/Icons'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ChampionRotationTile from './ChampionRotationTile.vue'
import RotationBadge, { type RotationBadgeVariant } from './RotationBadge.vue'
import { getRotationExpansion, saveRotationExpansion } from './RotationExpansionsStorage'

export type ChampionsRotationData = {
  key: string
  title: string
  subtitle?: string
  detailsId?: string
  champions: Champion[]
  expandable?: boolean
  badge?: RotationBadgeVariant
}

const { rotation } = defineProps<{
  rotation: ChampionsRotationData
}>()

const router = useRouter()

function openRotationDetails() {
  if (rotation.detailsId) {
    router.push(`/rotations/${rotation.detailsId}`)
  }
}

function toggleExpansion() {
  expanded.value = !expanded.value
  saveRotationExpansion(rotation.key, expanded.value)
}

const expanded = ref(rotation.expandable ? getRotationExpansion(rotation.key) : true)
</script>
