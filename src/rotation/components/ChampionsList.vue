<script setup lang="ts">
import type { Champion } from '../Types'

defineProps<{
  champions: Champion[]
  filtered: boolean
}>()
</script>

<template>
  <div class="py-4 gap-4 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3">
    <template v-for="champion in champions" :key="champion.id">
      <div class="flex flex-col items-center">
        <img width="144px" height="144px" loading="lazy" class="rounded" :src="champion.imageUrl" />
        <div v-text="champion.name" class="pt-2 text-center"></div>
      </div>
    </template>
    <h3 v-if="filtered && champions.length === 0" class="py-2 text-gray-500">
      No champions match your search query.
    </h3>
  </div>
</template>
