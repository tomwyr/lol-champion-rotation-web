<template>
  <div class="flex flex-col mt-3">
    <div class="flex flex-row items-center gap-1.5 mb-1">
      <span class="md:text-xl font-thin">Overview</span>
      <InfoTooltip
        aria-label="Overview info"
        text="Last year's performance."
        tooltip-id="overview-info-tooltip"
      />
    </div>

    <div class="flex flex-row items-center my-1">
      <HashtagIcon :class="className" />
      <span class="font-bold ml-2">{{ occurrencesPrefix }}</span>
      <span>{{ occurrencesSuffix }}</span>
    </div>

    <div class="flex flex-row items-center my-1">
      <ChartBarIcon :class="className" />
      <span class="font-bold ml-2">{{ popularityPrefix }}</span>
      <span>{{ popularitySuffix }}</span>
    </div>

    <div class="flex flex-row items-center my-1">
      <ArrowLongRightIcon v-if="!currentStreak || currentStreak === 0" :class="className" />
      <ArrowTrendingUpIcon v-else-if="currentStreak > 0" :class="className" />
      <ArrowTrendingUpIcon v-else-if="currentStreak < 0" :class="className" />
      <span class="font-bold ml-2">{{ currentStreakHighlight }}</span>
      <span>{{ currentStreakDescription }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatOrdinal, formatPluralSuffix as pluralSuffix } from '~/domain/Formatters'
import type { ChampionDetails } from '~/domain/Types'
import {
  ArrowLongRightIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  HashtagIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps<{
  champion: ChampionDetails
}>()

const className = 'size-5 mx-2.5 text-gray-500 dark:text-gray-300'

const overview = props.champion.overview
const nbsp = '\u00A0'
const placeholder = ['', 'N/A']

const occurrences = overview?.occurrences
const [occurrencesPrefix, occurrencesSuffix] = (() => {
  if (!occurrences) return placeholder
  return [occurrences.toString(), nbsp + 'time' + pluralSuffix(occurrences) + ' in rotation']
})()

const popularity = overview?.popularity
const [popularityPrefix, popularitySuffix] = (() => {
  if (!popularity) return placeholder
  return [formatOrdinal(popularity), nbsp + 'most popular']
})()

const currentStreak = overview?.currentStreak
const [currentStreakHighlight, currentStreakDescription] = (() => {
  if (!currentStreak) return placeholder
  if (currentStreak === 0) return ['', 'Not featured yet']

  const count = Math.abs(currentStreak).toString()
  const suffix = currentStreak > 0 ? ' featured' : ' missed'
  const description = nbsp + 'last rotation' + pluralSuffix(currentStreak) + suffix
  return [count, description]
})()
</script>
