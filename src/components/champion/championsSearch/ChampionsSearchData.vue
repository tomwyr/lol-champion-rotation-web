<template>
  <div class="gap-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3">
    <template v-for="match in matches" :key="match.champion.id">
      <div class="relative cursor-pointer" @click.stop="openChampionDetails(match.champion)">
        <img class="rounded aspect-square" loading="lazy" :src="match.champion.imageUrl" />
        <div class="absolute bottom-0 inset-x-0 text-center">
          <div
            v-text="match.champion.name"
            class="inline-block px-2 py-0.5 mb-2 text-sm rounded-full shadow-sm shadow-black bg-opacity-80 text-gray-100 bg-gray-900"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Champion, SearchChampionsMatch } from '@/common/Types'
import { useRouter } from 'vue-router'

defineProps<{
  matches: SearchChampionsMatch[]
}>()

const router = useRouter()

function openChampionDetails(champion: Champion) {
  router.push(`/champions/${champion.id}`)
}
</script>
