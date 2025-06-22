<template>
  <div
    class="fixed z-30 max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto inset-x-0 mt-5 md:mt-6 p-4 rounded-xl shadow-lg shadow-gray-700 bg-gray-800"
  >
    <div v-if="!hasInput" class="py-4 flex flex-col items-center">
      <PencilIcon class="size-7 mt-0.5 mb-2.5" />
      <p class="text-center">Start typing to search</p>
    </div>

    <div v-else-if="champions.length === 0" class="py-4 flex flex-col items-center">
      <ArchiveBoxXMarkIcon class="size-8 mb-2" />
      <p class="text-center">No champions match your search query</p>
    </div>

    <div v-else class="gap-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3">
      <template v-for="champion in champions" :key="champion.id">
        <div class="relative cursor-pointer" @click.stop="openChampionDetails(champion)">
          <img class="rounded aspect-square" loading="lazy" :src="champion.imageUrl" />
          <div class="absolute bottom-0 inset-x-0 text-center">
            <div
              v-text="champion.name"
              class="inline-block px-2 py-0.5 mb-2 text-sm rounded-full shadow-sm shadow-black bg-opacity-80 text-gray-100 bg-gray-900"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Champion } from '@/common/Types'
import { ArchiveBoxXMarkIcon, PencilIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

defineProps<{
  hasInput: boolean
  champions: Champion[]
}>()

const router = useRouter()

function openChampionDetails(champion: Champion) {
  router.push(`/champions/${champion.id}`)
}
</script>
