<template>
  <ChampionDetailsHistoryEntry :event :index :event-count :destination="`/rotations/${event.id}`">
    <span :class="{ 'text-green-500 dark:text-green-300': event.current }">{{
      formatRotationDuration(event.duration, { format: 'short' })
    }}</span>
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
