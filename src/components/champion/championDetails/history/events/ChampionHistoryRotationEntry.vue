<template>
  <ChampionDetailsHistoryEntry :event :index :eventCount @click="openRotationDetails(event.id)">
    <span>{{ formatRotationDuration(event.duration, { format: 'short' }) }}</span>
    <RotationBadge v-if="event.current" variant="current" />
    <ChampionRotationPreview :champion-image-urls="event.championImageUrls" :compact="true" />
  </ChampionDetailsHistoryEntry>
</template>

<script setup lang="ts">
import { formatRotationDuration } from '@/common/Formatters'
import type { ChampionDetailsHistoryRotation } from '@/common/Types'
import ChampionRotationPreview from '@/components/rotation/common/ChampionRotationPreview.vue'
import RotationBadge from '@/components/rotation/common/RotationBadge.vue'
import { useRouter } from 'vue-router'
import ChampionDetailsHistoryEntry from '../layout/ChampionDetailsHistoryEntry.vue'

defineProps<{
  event: ChampionDetailsHistoryRotation
  index: number
  eventCount: number
}>()

const router = useRouter()

function openRotationDetails(rotationId: string) {
  router.push(`/rotations/${rotationId}`)
}
</script>
