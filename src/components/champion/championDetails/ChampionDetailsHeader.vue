<template>
  <AppPageHeader title="Champion details">
    <EyeIconSolid
      v-if="isObserved"
      class="size-6 md:size-7 p-1 rounded cursor-pointer ml-auto hover:bg-gray-200 hover:dark:bg-gray-800"
      @click="unobserveChampion(champion.id)"
    />
    <EyeIconOutline
      v-else
      class="size-6 md:size-7 p-1 rounded cursor-pointer ml-auto hover:bg-gray-200 hover:dark:bg-gray-800"
      @click="observeChampion(champion)"
    />
  </AppPageHeader>
</template>

<script setup lang="ts">
import type { Champion } from '@/common/Types'
import AppPageHeader from '@/components/menu/AppPageHeader.vue'
import { EyeIcon as EyeIconOutline } from '@heroicons/vue/24/outline'
import { EyeIcon as EyeIconSolid } from '@heroicons/vue/24/solid'
import { computed } from 'vue'
import {
  observeChampion,
  observedChampionsRef,
  unobserveChampion,
} from '../observedChampions/ObservedChampions'

const { champion } = defineProps<{
  champion: Champion
}>()

const observedChampions = observedChampionsRef()
const isObserved = computed(() =>
  observedChampions.value.some((element) => element.id === champion.id),
)
</script>
