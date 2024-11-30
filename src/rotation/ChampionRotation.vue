<script setup lang="ts">
import type { ChampionRotation, DataState } from './Types'
import { onMounted, ref } from 'vue'
import RotationDetails from './components/RotationDetails.vue'
import DataError from '@/components/DataError.vue'
import DataLoading from '@/components/DataLoading.vue'

const state = ref<DataState<ChampionRotation>>({ type: 'loading' })

async function fetchRotation() {
  state.value = { type: 'loading' }

  const data = await fetch('/api/rotation/current')

  if (data.ok) {
    state.value = { type: 'data', value: await data.json() }
  } else {
    state.value = { type: 'error' }
  }
}

onMounted(fetchRotation)
</script>

<template>
  <template v-if="state.type === 'loading'">
    <DataLoading />
  </template>

  <template v-if="state.type === 'error'">
    <DataError :onRetry="fetchRotation" />
  </template>

  <template v-if="state.type === 'data'">
    <RotationDetails :rotation="state.value" />
  </template>
</template>
