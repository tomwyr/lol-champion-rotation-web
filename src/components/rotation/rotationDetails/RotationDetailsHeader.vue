<template>
  <AppPageHeader title="Rotation details">
    <BookmarkIconSolid
      v-if="isObserved"
      class="size-6 md:size-7 p-1 rounded cursor-pointer ml-auto hover:bg-gray-200 hover:dark:bg-gray-800"
      @click="unobserveRotation(rotation.id)"
    />
    <BookmarkIconOutline
      v-else
      class="size-6 md:size-7 p-1 rounded cursor-pointer ml-auto hover:bg-gray-200 hover:dark:bg-gray-800"
      @click="observeRotation(rotation)"
    />
  </AppPageHeader>
</template>

<script setup lang="ts">
import type { ChampionRotationDetails } from '@/common/Types'
import AppPageHeader from '@/components/menu/AppPageHeader.vue'
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/vue/24/outline'
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/vue/24/solid'
import { computed } from 'vue'
import {
  observedRotationsRef,
  observeRotation,
  unobserveRotation,
} from '../observedRotations/ObservedRotations'

const { rotation } = defineProps<{
  rotation: ChampionRotationDetails
}>()

const observedRotations = observedRotationsRef()
const isObserved = computed(() =>
  observedRotations.value.some((element) => element.id === rotation.id),
)
</script>
