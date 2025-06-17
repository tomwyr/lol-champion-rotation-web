<template>
  <div class="flex flex-row gap-4">
    <img class="rounded size-24 md:size-36" loading="lazy" :src="champion.imageUrl" />
    <div class="flex flex-col">
      <span class="text-xl md:text-3xl"> {{ champion.name }}</span>
      <span class="md:text-xl italic font-thin -mt-1"> {{ champion.title }}</span>
      <span v-if="available" class="md:text-xl text-green-400 dark:text-green-300">Available</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChampionDetails } from '@/common/Types'
import { computed } from 'vue'

const { champion } = defineProps<{
  champion: ChampionDetails
}>()

const available = computed(() => champion.availability.some((availability) => availability.current))
</script>
