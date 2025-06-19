<template>
  <div
    class="p-2 gap-1 flex flex-row items-center cursor-pointer rounded hover:bg-gray-100 hover:dark:bg-gray-800"
    :class="{ 'mt-2': index > 0 }"
    @click="openDetails(rotation)"
  >
    <span class="text-sm md:text-base">
      {{ formatRotationDuration(rotation.duration) }}
    </span>
    <template v-if="rotation.current">
      <RotationBadge variant="current" />
    </template>
    <ChampionRotationPreview :champion-image-urls="rotation.championImageUrls" />
  </div>
</template>

<script setup lang="ts">
import { formatRotationDuration } from '@/common/Formatters'
import type { ObservedRotation } from '@/common/Types'
import { useRouter } from 'vue-router'
import RotationBadge from '../common/RotationBadge.vue'
import ChampionRotationPreview from '../common/ChampionRotationPreview.vue'

defineProps<{
  rotation: ObservedRotation
  index: number
}>()

const router = useRouter()

function openDetails(rotation: ObservedRotation) {
  router.push(`/rotations/${rotation.id}`)
}
</script>
