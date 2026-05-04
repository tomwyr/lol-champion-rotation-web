<template>
  <div class="flex flex-col md:gap-1">
    <template v-for="match in matches" :key="match.champion.id">
      <a :href="`/champions/${match.champion.id}`">
        <div
          class="flex flex-row items-center p-2 gap-4 rounded-lg cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-700"
        >
          <ChampionImage
            class="aspect-square size-16 md:size-20"
            :image-url="match.champion.imageUrl"
          />

          <div class="flex flex-col pb-2">
            <div class="text-lg md:text-xl" v-text="match.champion.name" />
            <span
              :class="{
                'text-green-500 dark:text-green-300': match.availableIn.length > 0,
                'text-gray-400 dark:text-gray-400': match.availableIn.length === 0,
              }"
              class="text-sm md:text-base -mt-0.5"
            >
              {{ match.availableIn.length > 0 ? 'Available' : 'Unavailable' }}
            </span>
          </div>

          <div class="flex flex-row gap-1 ml-auto mr-1 md:mr-2">
            <template v-for="data in rotationAvailabilityData(match)" :key="data.type">
              <img
                :src="data.iconAsset"
                class="size-6"
                :class="{ 'opacity-20': !data.available }"
              />
            </template>
          </div>

          <ChevronRightIcon class="size-6" />
        </div>
      </a>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { SearchChampionsMatch } from '~/domain/Types'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

defineProps<{
  matches: SearchChampionsMatch[]
}>()

function rotationAvailabilityData(match: SearchChampionsMatch) {
  return [
    {
      type: 'regular',
      iconAsset: '/assets/icon-sr.png',
      available: match.availableIn.includes('regular'),
    },
    {
      type: 'beginner',
      iconAsset: '/assets/icon-sr-beginner.png',
      available: match.availableIn.includes('beginner'),
    },
  ]
}
</script>
