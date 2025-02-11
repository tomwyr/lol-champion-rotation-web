<template>
  <template v-for="rotation in nonEmptyRotations" :key="rotation">
    <div class="flex flex-row items-center">
      <h2 class="text-gray-500 dark:text-gray-400">
        {{ rotation.header }}
      </h2>
      <span
        v-if="rotation.current"
        class="ml-2 px-1.5 py-0.5 text-xs rounded-full border bg-opacity-10 dark:bg-opacity-10 text-green-400 bg-green-400 border-green-400 dark:text-green-300 dark:bg-green-300 dark:border-green-300"
      >
        Current
      </span>
    </div>

    <div
      v-if="rotation.champions.length > 0"
      class="py-4 gap-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3"
    >
      <template v-for="champion in rotation.champions" :key="champion.id">
        <div class="flex flex-col items-center">
          <img
            width="144px"
            height="144px"
            loading="lazy"
            class="rounded"
            :src="champion.imageUrl"
          />
          <div v-text="champion.name" class="pt-2 text-center"></div>
        </div>
      </template>
    </div>
  </template>

  <h3 v-if="nonEmptyRotations.length === 0" class="py-2 text-gray-500 dark:text-gray-400">
    {{ filtered ? 'No champions match your search query.' : 'No data available at the moment.' }}
  </h3>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Champion } from '../Types'

export type ChampionsSectionRotation = {
  header: string
  champions: Champion[]
  current?: boolean
}

const props = defineProps<{
  rotations: ChampionsSectionRotation[]
  filtered: boolean
}>()

const nonEmptyRotations = computed(() => {
  return props.rotations.filter((data) => data.champions.length > 0)
})
</script>
