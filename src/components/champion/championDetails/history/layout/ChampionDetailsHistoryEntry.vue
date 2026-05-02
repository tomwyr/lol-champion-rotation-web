<template>
  <div
    :class="{
      'cursor-pointer rounded hover:bg-gray-200 hover:dark:bg-gray-800': destination,
    }"
  >
    <a class="flex flex-row" :href="destination">
      <ChampionDetailsHistoryIndicator :event :index :event-count />
      <div class="flex flex-grow items-center min-h-8 my-1.5 ml-2">
        <slot />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { ChampionDetailsHistoryEvent } from '~/domain/Types'
import ChampionDetailsHistoryIndicator from './ChampionDetailsHistoryIndicator.vue'

defineProps<{
  index: number
  eventCount: number
  event: ChampionDetailsHistoryEvent
  destination?: string
}>()
</script>
