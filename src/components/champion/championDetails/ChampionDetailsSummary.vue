<template>
  <div class="flex flex-row gap-4">
    <img class="rounded size-24 md:size-36" loading="lazy" :src="champion.imageUrl" />
    <div class="flex flex-col">
      <span class="text-xl md:text-3xl"> {{ champion.name }}</span>
      <span class="md:text-xl italic font-thin"> {{ champion.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChampionDetails } from '@/common/Types'

defineProps<{
  champion: ChampionDetails
}>()
</script>
