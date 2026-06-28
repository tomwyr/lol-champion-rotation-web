<template>
  <ChampionDetailsHistoryEntry :event :index :event-count compact>
    <div class="flex w-full items-center text-xs text-gray-400">
      <div class="h-px grow bg-gray-300 dark:bg-gray-700" />
      <span class="mx-2 shrink-0">Not tracked</span>
      <div class="h-px grow bg-gray-300 dark:bg-gray-700" />
      <div class="w-28 shrink-0" />
    </div>
  </ChampionDetailsHistoryEntry>
</template>

<script setup lang="ts">
import type { ChampionDetailsHistoryGap } from '~/domain/Types'
import ChampionDetailsHistoryEntry from '../layout/ChampionDetailsHistoryEntry.vue'

defineProps<{
  event: ChampionDetailsHistoryGap
  index: number
  eventCount: number
}>()
</script>
