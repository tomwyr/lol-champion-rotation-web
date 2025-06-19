<template>
  <div class="flex flex-col mt-3 font-thin">
    <span class="md:text-xl mb-1">Overview</span>

    <div class="flex flex-row items-center my-1">
      <HashtagIcon class="size-5 mx-2.5" />
      <span class="font-bold ml-2">{{ occurrencesPrefix }}</span>
      <span>{{ occurrencesSuffix }} in rotation</span>
    </div>

    <div class="flex flex-row items-center my-1">
      <ChartBarIcon class="size-5 mx-2.5" />
      <span class="font-bold ml-2">{{ popularityPrefix }}</span>
      <span>{{ popularitySuffix }}</span>
    </div>

    <div class="flex flex-row items-center my-1">
      <ArrowLongRightIcon v-if="!currentStreak || currentStreak === 0" class="size-5 mx-2.5" />
      <ArrowTrendingUpIcon v-else-if="currentStreak > 0" class="size-5 mx-2.5" />
      <ArrowTrendingUpIcon v-else-if="currentStreak < 0" class="size-5 mx-2.5" />
      <span class="font-bold ml-2">{{ currentStreakHighlight }}</span>
      <span>{{ currentStreakDescription }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatOrdinal, formatPluralSuffix as pluralSuffix } from '@/common/Formatters'
import type { ChampionDetails } from '@/common/Types'
import {
  ArrowLongRightIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  HashtagIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps<{
  champion: ChampionDetails
}>()

const { occurrences, popularity, currentStreak } = props.champion.overview
const nbsp = '\u00A0'

const [occurrencesPrefix, occurrencesSuffix] = [
  occurrences.toString(),
  nbsp + 'time' + pluralSuffix(occurrences),
]

const [popularityPrefix, popularitySuffix] = (() => {
  if (!popularity) return ['', 'N/A']
  return [formatOrdinal(popularity), nbsp + 'most popular']
})()

const [currentStreakHighlight, currentStreakDescription] = (() => {
  if (!currentStreak) return ['', 'N/A']
  if (currentStreak === 0) return ['', 'Not featured yet']

  const count = Math.abs(currentStreak).toString()
  const suffix = currentStreak > 0 ? ' featured' : ' missed'
  const description = nbsp + 'last rotation' + pluralSuffix(currentStreak) + suffix
  return [count, description]
})()
</script>
