<template>
  <template v-if="!dataInitialized">
    <DataLoading />
  </template>

  <template v-else-if="currentRotationState.type === 'error'">
    <DataError :onRetry="fetchCurrentRotation" />
  </template>

  <template v-else-if="currentRotationState.type === 'data'">
    <RotationDetails
      :rotation-prediction="
        rotationPredictionEnabled && rotationPredictionState.type === 'data'
          ? rotationPredictionState.value
          : undefined
      "
      :currentRotation="currentRotationState.value"
      :nextRotations="nextRotationsState.data"
      :hasNextRotation="nextRotationToken !== undefined"
      :isLoadingMore="nextRotationsState.loadingMore"
      :onLoadMore="fetchNextRotation"
    />
  </template>
</template>

<script setup lang="ts">
import DataError from '@/components/DataError.vue'
import DataLoading from '@/components/DataLoading.vue'
import { rotationPredictionEnabledRef } from '@/data/RotationPredictionEnabled'
import { apiBaseUrl } from '@/Environment'
import { computed, onMounted, ref, watchEffect } from 'vue'
import RotationDetails from './components/RotationDetails.vue'
import type {
  ChampionRotation,
  ChampionRotationPrediction,
  CurrentChampionRotation,
  CurrentRotationState,
  NextRotationsState,
  RotationPredictionState,
} from './Types'
import { restoreScrollAfterFrame } from './Utils'

const rotationPredictionEnabled = rotationPredictionEnabledRef()

const rotationPredictionState = ref<RotationPredictionState>({ type: 'initial' })
const currentRotationState = ref<CurrentRotationState>({ type: 'initial' })
const nextRotationsState = ref<NextRotationsState>({ data: [], loadingMore: false })

const nextRotationToken = computed(() => {
  const nextRotations = nextRotationsState.value.data
  if (nextRotations.length > 0) {
    return nextRotations[nextRotations.length - 1].nextRotationToken
  }

  const currentRotation = currentRotationState.value
  if (currentRotation.type === 'data') {
    return currentRotation.value.nextRotationToken
  }

  return undefined
})

const dataInitialized = ref(false)

async function fetchCurrentRotation() {
  currentRotationState.value = { type: 'loading' }

  const data = await fetch(apiBaseUrl + '/rotations/current')

  if (data.ok) {
    const rotation = (await data.json()) as CurrentChampionRotation
    currentRotationState.value = { type: 'data', value: rotation }
  } else {
    currentRotationState.value = { type: 'error' }
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
  tasks.push(fetchCurrentRotation())
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
</script>
