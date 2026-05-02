<template>
  <ChampionDetailsHistoryEntry :event :index :event-count>
    <span class="text-gray-400">
      {{ event.rotationsMissed }}
      rotation{{ formatPluralSuffix(event.rotationsMissed) }} missed
    </span>
  </ChampionDetailsHistoryEntry>
</template>

<script setup lang="ts">
import { formatPluralSuffix } from '~/domain/Formatters'
import type { ChampionDetailsHistoryBench } from '~/domain/Types'
import ChampionDetailsHistoryEntry from '../layout/ChampionDetailsHistoryEntry.vue'

defineProps<{
  event: ChampionDetailsHistoryBench
  index: number
  eventCount: number
}>()
</script>
