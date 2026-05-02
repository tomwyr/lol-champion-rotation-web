<template>
  <ChampionDetailsHistoryEntry :event :index :event-count :destination="`/rotations/${event.id}`">
    <span>{{ formatRotationDuration(event.duration, { format: 'short' }) }}</span>
    <RotationBadge v-if="event.current" variant="current" />
    <ChampionRotationPreview :champion-image-urls="event.championImageUrls" :compact="true" />
  </ChampionDetailsHistoryEntry>
</template>

<script setup lang="ts">
import { formatRotationDuration } from '~/domain/Formatters'
import type { ChampionDetailsHistoryRotation } from '~/domain/Types'

defineProps<{
  event: ChampionDetailsHistoryRotation
  index: number
  eventCount: number
}>()
</script>
