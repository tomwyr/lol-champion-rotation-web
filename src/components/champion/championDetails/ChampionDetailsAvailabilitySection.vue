<template>
  <div class="flex flex-col mt-3 font-thin">
    <span class="md:text-xl mb-1">Rotations</span>

    <template v-for="data in rotationsData" :key="data.type">
      <div class="flex flex-row my-1 gap-4 items-center">
        <img :src="data.iconAsset" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-bold">{{ data.title }}</span>
          <span
            :class="{
              'text-green-500 dark:text-green-300': data.available,
              'text-gray-400 dark:text-gray-400': !data.available,
            }"
            class="text-sm -mt-0.5"
            >{{ data.available ? 'Available' : 'Unavailable' }}</span
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ChampionDetails, ChampionRotationType } from '@/common/Types'
import { computed } from 'vue'

const { champion } = defineProps<{
  champion: ChampionDetails
}>()

function isAvailable(type: ChampionRotationType) {
  return champion.availability.some(
    (availability) => availability.rotationType === type && availability.current,
  )
}

const rotationsData = computed(() => {
  return [
    {
      type: 'regular',
      title: "Summoner's Rift",
      iconAsset: '/assets/icon-sr.png',
      available: isAvailable('regular'),
    },
    {
      type: 'beginner',
      title: "Summoner's Rift (Beginners)",
      iconAsset: '/assets/icon-sr-beginner.png',
      available: isAvailable('beginner'),
    },
  ]
})
</script>
