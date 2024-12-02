<script setup lang="ts">
import { format } from 'date-fns'
import { ref } from 'vue'
import type { Champion, ChampionRotation } from '../Types'
import ChampionsList from './ChampionsList.vue'
import SearchQuery from './SearchQuery.vue'

const props = defineProps<{
  rotation: ChampionRotation
}>()

const filtered = ref(false)
const regularChampions = ref<Champion[]>([])
const beginnerChampions = ref<Champion[]>([])

function applyChampionsFilter(filter: string) {
  const hasQuery = filter.trim().length > 0

  const filterChampions = (champions: Champion[]) => {
    if (!hasQuery) {
      return champions
    }
    return champions.filter((champion) =>
      champion.name.toLowerCase().includes(filter.toLowerCase()),
    )
  }

  filtered.value = hasQuery
  regularChampions.value = filterChampions(props.rotation.regularChampions)
  beginnerChampions.value = filterChampions(props.rotation.beginnerChampions)
}

const duration = {
  start: {
    iso: props.rotation.duration.start.toISOString,
    formatted: format(props.rotation.duration.start, 'MMMM dd'),
  },
  end: {
    iso: props.rotation.duration.end.toISOString,
    formatted: format(props.rotation.duration.end, 'MMMM dd'),
  },
}
</script>

<template>
  <div class="max-w-screen-lg px-4 py-2">
    <div class="flex flex-row h-8 items-center">
      <div class="flex flex-row gap-1 items-baseline">
        <h1 class="text-xl">Current champion rotation</h1>
        <h3 v-if="rotation.patchVersion" class="text-sm text-gray-500">
          v{{ rotation.patchVersion }}
        </h3>
      </div>

      <SearchQuery :onChange="applyChampionsFilter" />
    </div>

    <h2 class="pt-2">Champions available for free</h2>
    <h3 class="text-sm text-gray-500">
      <time v-bind:datetime="duration.start.iso">{{ duration.start.formatted }}</time>
      to
      <time v-bind:datetime="duration.end.iso">{{ duration.end.formatted }}</time>
    </h3>

    <ChampionsList
      :champions="filtered ? regularChampions : rotation.regularChampions"
      :filtered="filtered"
    />

    <h2 class="pt-2">Champions available for free for new players</h2>
    <h3 class="text-gray-500">
      New players up to level {{ rotation.beginnerMaxLevel }} get access to a different pool of
      champions
    </h3>
    <ChampionsList
      :champions="filtered ? beginnerChampions : rotation.beginnerChampions"
      :filtered="filtered"
    />
  </div>
</template>
