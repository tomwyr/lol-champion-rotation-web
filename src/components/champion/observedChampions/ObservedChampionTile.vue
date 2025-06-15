<template>
  <div v-if="index > 0" class="h-px my-1 ml-16 md:ml-20 bg-gray-200 dark:bg-gray-700" />
  <div
    class="p-2 gap-6 flex flex-row items-center cursor-pointer rounded hover:bg-gray-100 hover:dark:bg-gray-800"
    @click="openDetails(champion)"
  >
    <img class="rounded size-12 md:size-16" loading="lazy" :src="champion.imageUrl" />
    <span class="text-xl">{{ champion.name }}</span>
    <ChevronRightIcon class="size-6 ml-auto" />
  </div>
</template>

<script setup lang="ts">
import type { Champion } from '@/common/Types';
import { ChevronRightIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';

defineProps<{
  champion: Champion
  index: number
}>()

const router = useRouter()

function openDetails(champion: Champion) {
  router.push(`/champions/${champion.id}`)
}
</script>
