<template>
  <a :href="`/champions/${champion.id}`">
    <div class="champion-tile relative cursor-pointer">
      <ChampionImage class="rounded aspect-square" :image-url="champion.imageUrl" />
      <div class="absolute bottom-0 inset-x-0 text-center">
        <div
          class="inline-block px-2 py-0.5 mb-2 text-sm rounded-full shadow-sm shadow-black bg-opacity-80 text-gray-100 bg-gray-900"
          v-text="champion.name"
        />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Champion } from '~/domain/Types'

defineProps<{ champion: Champion }>()
</script>
