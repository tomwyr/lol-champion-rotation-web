<template>
  <template
    v-if="currentRotationState.type === 'initial' || currentRotationState.type === 'loading'"
  >
    <DataLoading />
  </template>

  <template v-if="currentRotationState.type === 'error'">
    <DataError :onRetry="fetchCurrentRotation" />
  </template>

  <template v-if="currentRotationState.type === 'data'">
    <RotationDetails
      :currentRotation="currentRotationState.value"
      :nextRotations="nextRotationsState.data"
      :hasNextRotation="nextRotationToken !== undefined"
      :onLoadMore="fetchNextRotation"
    />
  </template>
</template>

<script setup lang="ts">
import DataError from '@/components/DataError.vue'
import DataLoading from '@/components/DataLoading.vue'
import { apiBaseUrl } from '@/Environment'
import { computed, onMounted, ref } from 'vue'
import RotationDetails from './components/RotationDetails.vue'
import type {
  ChampionRotation,
  CurrentChampionRotation,
  CurrentRotationState,
  NextRotationsState,
} from './Types'

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

async function fetchCurrentRotation() {
  currentRotationState.value = { type: 'loading' }

  const data = await fetch(apiBaseUrl + '/rotation/current')

  if (data.ok) {
    const rotation = (await data.json()) as CurrentChampionRotation
    currentRotationState.value = { type: 'data', value: rotation }
  } else {
    currentRotationState.value = { type: 'error' }
  }
}

async function fetchNextRotation() {
  const initialValue = nextRotationsState.value
  const token = nextRotationToken.value
  if (initialValue.loadingMore || !token) {
    return
  }

  nextRotationsState.value = { ...initialValue, loadingMore: true }

  const data = await fetch(apiBaseUrl + '/rotation?nextRotationToken=' + token)

  if (data.ok) {
    const rotation = (await data.json()) as ChampionRotation
    nextRotationsState.value = { data: [...initialValue.data, rotation], loadingMore: false }
  } else {
    nextRotationsState.value = initialValue
  }
}

onMounted(fetchCurrentRotation)
</script>
