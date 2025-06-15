<template>
  <div
    class="p-2 gap-1 flex flex-row items-center cursor-pointer rounded hover:bg-gray-100 hover:dark:bg-gray-800"
    :class="{ 'mt-2': index > 0 }"
    @click="openDetails(rotation)"
  >
    <span class="text-sm md:text-base">
      {{ formatDuration(rotation.duration) }}
    </span>
    <template v-if="rotation.current">
      <RotationBadge variant="current" />
    </template>
    <div class="flex flex-grow pr-4 md:pr-6" dir="rtl">
      <template v-for="imageUrl in rotation.championImageUrls.reversed()" :key="imageUrl">
        <img class="size-8 md:size-10 rounded-full -mr-4 md:-mr-6" loading="lazy" :src="imageUrl" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDuration } from '@/common/Formatters'
import type { ObservedRotation } from '@/common/Types'
import { useRouter } from 'vue-router'
import RotationBadge from '../common/RotationBadge.vue'

defineProps<{
  rotation: ObservedRotation
  index: number
}>()

const router = useRouter()

function openDetails(rotation: ObservedRotation) {
  router.push(`/rotations/${rotation.id}`)
}
</script>
