<template>
  <div class="flex flex-col md:gap-1">
    <template v-for="match in matches" :key="match.champion.id">
      <div
        class="flex flex-row items-center p-2 gap-4 rounded-lg cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-700"
        @click.stop="openChampionDetails(match.champion)"
      >
        <img
          class="rounded aspect-square size-16 md:size-20"
          loading="lazy"
          :src="match.champion.imageUrl"
        />

        <div class="flex flex-col pb-2">
          <div v-text="match.champion.name" class="text-lg md:text-xl" />
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
            <img :src="data.iconAsset" class="size-6" :class="{ 'opacity-20': !data.available }" />
          </template>
        </div>

        <ChevronRightIcon class="size-6" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Champion, SearchChampionsMatch } from '@/common/Types'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

defineProps<{
  matches: SearchChampionsMatch[]
}>()

const router = useRouter()

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

function openChampionDetails(champion: Champion) {
  router.push(`/champions/${champion.id}`)
}
</script>
