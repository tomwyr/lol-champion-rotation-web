<template>
  <ChampionDetailsHistoryEntry :event :index :eventCount>
    <span>Released on {{ formatChampionReleaseDate(event.releasedAt) }}</span>
  </ChampionDetailsHistoryEntry>
</template>

<script setup lang="ts">
import { formatChampionReleaseDate } from '@/common/Formatters'
import type { ChampionDetailsHistoryRelease } from '@/common/Types'
import ChampionDetailsHistoryEntry from '../layout/ChampionDetailsHistoryEntry.vue'

defineProps<{
  event: ChampionDetailsHistoryRelease
  index: number
  eventCount: number
}>()
</script>
