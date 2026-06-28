<template>
  <ChampionDetailsHistoryEntry :event :index :event-count compact>
    <div class="flex w-full items-center text-xs text-gray-400">
      <div class="h-px grow bg-gray-300 dark:bg-gray-700" />
      <span class="mx-2 shrink-0">{{ event.year }}</span>
      <div class="h-px grow bg-gray-300 dark:bg-gray-700" />
      <div class="w-28 shrink-0" />
    </div>
  </ChampionDetailsHistoryEntry>
</template>

<script setup lang="ts">
import type { ChampionDetailsHistoryYearChanged } from '~/domain/Types'
import ChampionDetailsHistoryEntry from '../layout/ChampionDetailsHistoryEntry.vue'

defineProps<{
  event: ChampionDetailsHistoryYearChanged
  index: number
  eventCount: number
}>()
</script>
