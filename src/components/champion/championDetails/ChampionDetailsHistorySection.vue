<template>
  <div class="flex flex-col mt-3 pb-3">
    <span class="md:text-xl mb-1 font-thin">History</span>

    <template v-for="(event, index) in champion.history" :key="event.type">
      <template v-if="event.type === 'rotation'">
        <ChampionHistoryRotationEntry
          :event
          :index
          :event-count
          :shorten-top-link="champion.history[index - 1]?.type === 'gap'"
          :shorten-bottom-link="champion.history[index + 1]?.type === 'gap'"
        />
      </template>

      <template v-if="event.type === 'bench'">
        <ChampionHistoryBenchEntry
          :event
          :index
          :event-count
          :shorten-top-link="champion.history[index - 1]?.type === 'gap'"
          :shorten-bottom-link="champion.history[index + 1]?.type === 'gap'"
        />
      </template>

      <template v-if="event.type === 'yearChanged'">
        <ChampionHistoryYearChangedEntry :event :index :event-count />
      </template>

      <template v-if="event.type === 'gap'">
        <ChampionHistoryGapEntry :event :index :event-count />
      </template>

      <template v-if="event.type === 'release'">
        <ChampionHistoryReleaseEntry
          :event
          :index
          :event-count
          :shorten-top-link="champion.history[index - 1]?.type === 'gap'"
          :shorten-bottom-link="champion.history[index + 1]?.type === 'gap'"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ChampionDetails } from '~/domain/Types'
import ChampionHistoryBenchEntry from './history/events/ChampionHistoryBenchEntry.vue'
import ChampionHistoryGapEntry from './history/events/ChampionHistoryGapEntry.vue'
import ChampionHistoryReleaseEntry from './history/events/ChampionHistoryReleaseEntry.vue'
import ChampionHistoryRotationEntry from './history/events/ChampionHistoryRotationEntry.client.vue'
import ChampionHistoryYearChangedEntry from './history/events/ChampionHistoryYearChangedEntry.vue'

const props = defineProps<{
  champion: ChampionDetails
}>()
const eventCount = props.champion.history.length
</script>
