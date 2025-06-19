<template>
  <div
    class="flex flex-row"
    :class="{
      'cursor-pointer rounded hover:bg-gray-100 hover:dark:bg-gray-800': onClick,
    }"
  >
    <ChampionDetailsHistoryIndicator :event :index :eventCount />
    <div class="flex flex-grow items-center min-h-8 my-1.5 ml-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChampionDetailsHistoryEvent } from '@/common/Types'
import ChampionDetailsHistoryIndicator from './ChampionDetailsHistoryIndicator.vue'
import { useAttrs } from 'vue'

defineProps<{
  index: number
  eventCount: number
  event: ChampionDetailsHistoryEvent
}>()

const { onClick } = useAttrs()
</script>
