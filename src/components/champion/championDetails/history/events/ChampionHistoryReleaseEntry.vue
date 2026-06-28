<template>
  <ChampionDetailsHistoryEntry :event :index :event-count :shorten-top-link :shorten-bottom-link>
    <span>Released on {{ formatChampionReleaseDate(event.releasedAt) }}</span>
  </ChampionDetailsHistoryEntry>
</template>

<script setup lang="ts">
import { formatChampionReleaseDate } from '~/domain/Formatters'
import type { ChampionDetailsHistoryRelease } from '~/domain/Types'
import ChampionDetailsHistoryEntry from '../layout/ChampionDetailsHistoryEntry.vue'

defineProps<{
  event: ChampionDetailsHistoryRelease
  index: number
  eventCount: number
  shortenTopLink?: boolean
  shortenBottomLink?: boolean
}>()
</script>
