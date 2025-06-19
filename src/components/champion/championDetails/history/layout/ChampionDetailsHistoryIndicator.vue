<template>
  <div class="flex flex-col items-center">
    <template v-if="event.type === 'rotation' && event.current">
      <ChampionDetailsHistoryLink :link edge="top" />
      <div
        class="size-7 mx-1.5 flex justify-center rounded-full border-2 border-gray-400 dark:border-gray-300"
      >
        <div class="size-3 self-center rounded-full bg-gray-400 dark:bg-gray-300" />
      </div>
      <ChampionDetailsHistoryLink :link edge="bottom" />
    </template>

    <template v-else-if="event.type === 'rotation' && !event.current">
      <ChampionDetailsHistoryLink :link edge="top" />
      <div
        class="size-5 mx-2.5 flex justify-center rounded-full border-2 border-gray-400 dark:border-gray-300"
      >
        <div class="size-1.5 self-center rounded-full bg-gray-400 dark:bg-gray-300" />
      </div>
      <ChampionDetailsHistoryLink :link edge="bottom" />
    </template>

    <template v-else-if="index === 0">
      <ChampionDetailsHistoryLink :link edge="top" />
      <div class="size-3 mx-3.5 rounded-full bg-gray-400 dark:bg-gray-300" />
      <ChampionDetailsHistoryLink :link edge="bottom" />
    </template>

    <template v-else>
      <ChampionDetailsHistoryLink :link edge="top" />
      <div class="size-2 mx-4 rounded-full bg-gray-400 dark:bg-gray-300" />
      <ChampionDetailsHistoryLink :link edge="bottom" />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ChampionDetailsHistoryEvent } from '@/common/Types'
import ChampionDetailsHistoryLink from './ChampionDetailsHistoryLink.vue'

const { index, eventCount } = defineProps<{
  event: ChampionDetailsHistoryEvent
  index: number
  eventCount: number
}>()

const link = (() => {
  if (eventCount === 0) {
    return 'none'
  } else if (index === 0) {
    return 'bottom'
  } else if (index === eventCount - 1) {
    return 'top'
  } else {
    return 'both'
  }
})()
</script>
