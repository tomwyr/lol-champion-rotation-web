<template>
  <div
    class="px-4"
    :class="{
      'cursor-pointer rounded hover:bg-gray-200 hover:dark:bg-gray-800': destination,
    }"
  >
    <component :is="destination ? 'a' : 'div'" class="flex flex-row" :href="destination">
      <ChampionDetailsHistoryIndicator
        :event
        :index
        :event-count
        :shorten-top-link
        :shorten-bottom-link
      />
      <div
        class="flex grow items-center ml-2"
        :class="compact ? 'h-4.5' : 'min-h-8 my-1.5'"
      >
        <slot />
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
import type { ChampionDetailsHistoryEvent } from '~/domain/Types'
import ChampionDetailsHistoryIndicator from './ChampionDetailsHistoryIndicator.vue'

defineProps<{
  index: number
  eventCount: number
  event: ChampionDetailsHistoryEvent
  shortenTopLink?: boolean
  shortenBottomLink?: boolean
  destination?: string
  compact?: boolean
}>()
</script>
