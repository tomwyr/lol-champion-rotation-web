<template>
  <div class="champion-tile relative cursor-pointer" @click.stop="openChampionDetails(champion)">
    <ChampionImage class="rounded aspect-square" :imageUrl="champion.imageUrl" />
    <div class="absolute bottom-0 inset-x-0 text-center">
      <div
        v-text="champion.name"
        class="inline-block px-2 py-0.5 mb-2 text-sm rounded-full shadow-sm shadow-black bg-opacity-80 text-gray-100 bg-gray-900"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Champion } from '@/common/Types'
import ChampionImage from '@/components/champion/common/ChampionImage.vue'
import { useRouter } from 'vue-router'

const { champion } = defineProps<{ champion: Champion }>()

const router = useRouter()

function openChampionDetails(champion: Champion) {
  router.push(`/champions/${champion.id}`)
}
</script>
