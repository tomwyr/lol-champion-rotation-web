<template>
  <template v-if="!dataInitialized">
    <DataLoading />
  </template>

  <template v-else-if="rotationsOverviewState.type === 'error'">
    <DataError :onRetry="fetchRotationsOverview" />
  </template>

  <template v-else-if="rotationsOverviewState.type === 'data'">
    <RotationListData
      :rotation-prediction="
        rotationPredictionEnabled && rotationPredictionState.type === 'data'
          ? rotationPredictionState.value
          : undefined
      "
      :rotationsOverview="rotationsOverviewState.value"
      :nextRotations="nextRotationsState.data"
      :hasNextRotation="nextRotationToken !== undefined"
      :isLoadingMore="nextRotationsState.loadingMore"
      :onLoadMore="fetchNextRotation"
    />
  </template>

  <AppMenu />
</template>

<script setup lang="ts">
import type {
  ChampionRotation,
  ChampionRotationPrediction,
  ChampionRotationsOverview,
} from '@/common/Types'
import type { AsyncDataState } from '@/common/Utils'
import { restoreScrollAfterFrame } from '@/common/Utils'
import DataError from '@/components/common/DataError.vue'
import DataLoading from '@/components/common/DataLoading.vue'
import AppMenu from '@/components/menu/AppMenu.vue'
import { rotationPredictionEnabledRef } from '@/components/menu/RotationPrediction'
import { apiBaseUrl } from '@/Environment'
import { computed, onMounted, ref, watchEffect } from 'vue'
import RotationListData from './components/RotationListData.vue'

const rotationPredictionEnabled = rotationPredictionEnabledRef()

const rotationPredictionState = ref<RotationPredictionState>({ type: 'initial' })
const rotationsOverviewState = ref<RotationsOverviewState>({ type: 'initial' })
const nextRotationsState = ref<NextRotationsState>({ data: [], loadingMore: false })

const nextRotationToken = computed(() => {
  const nextRotations = nextRotationsState.value.data
  if (nextRotations.length > 0) {
    return nextRotations[nextRotations.length - 1].nextRotationToken
  }

  const rotationsOverview = rotationsOverviewState.value
  if (rotationsOverview.type === 'data') {
    return rotationsOverview.value.nextRotationToken
  }

  return undefined
})

const dataInitialized = ref(false)

async function fetchRotationsOverview() {
  rotationsOverviewState.value = { type: 'loading' }

  const data = await fetch(apiBaseUrl + '/rotations/overview')

  if (data.ok) {
    const rotation = (await data.json()) as ChampionRotationsOverview
    rotationsOverviewState.value = { type: 'data', value: rotation }
  } else {
    rotationsOverviewState.value = { type: 'error' }
  }
}

async function fetchRotationPrediction() {
  rotationPredictionState.value = { type: 'loading' }

  const data = await fetch(apiBaseUrl + '/rotations/predict')

  if (data.ok) {
    const rotation = (await data.json()) as ChampionRotationPrediction
    rotationPredictionState.value = { type: 'data', value: rotation }
  } else {
    rotationPredictionState.value = { type: 'error' }
  }
}

async function fetchNextRotation() {
  const initialValue = nextRotationsState.value
  const token = nextRotationToken.value
  if (initialValue.loadingMore || !token) {
    return
  }

  nextRotationsState.value = { ...initialValue, loadingMore: true }

  const data = await fetch(apiBaseUrl + '/rotations?nextRotationToken=' + token)

  if (data.ok) {
    const rotation = (await data.json()) as ChampionRotation
    nextRotationsState.value = { data: [...initialValue.data, rotation], loadingMore: false }
    restoreScrollAfterFrame()
  } else {
    nextRotationsState.value = initialValue
  }
}

onMounted(async () => {
  const tasks: Promise<unknown>[] = []
  tasks.push(fetchRotationsOverview())
  if (rotationPredictionEnabled.value) {
    tasks.push(fetchRotationPrediction())
  }
  await Promise.all(tasks)
  dataInitialized.value = true
})

watchEffect(() => {
  if (rotationPredictionEnabled.value && rotationPredictionState.value.type === 'initial') {
    fetchRotationPrediction()
  }
})

type RotationsOverviewState = AsyncDataState<ChampionRotationsOverview>
type RotationPredictionState = AsyncDataState<ChampionRotationPrediction>
type NextRotationsState = { data: ChampionRotation[]; loadingMore: boolean }
</script>
