<template>
  <a
    class="aspect-square champion-tile relative cursor-pointer"
    :href="`/champions/${champion.id}`"
  >
    <ChampionImage class="rounded" :image-url="champion.imageUrl" />
    <div class="absolute bottom-0 inset-x-0 text-center">
      <div
        class="inline-block px-2 py-0.5 mb-2 text-sm rounded-full shadow-sm shadow-black text-gray-100 bg-gray-900/80"
        v-text="champion.name"
      />
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Champion } from '~/domain/Types'

defineProps<{ champion: Champion }>()
</script>
