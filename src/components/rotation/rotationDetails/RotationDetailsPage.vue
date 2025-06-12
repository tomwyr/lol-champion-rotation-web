<template>
  <template v-if="rotationDetailsState.type === 'loading'">
    <DataLoading />
  </template>

  <template v-if="rotationDetailsState.type === 'error'">
    <DataError :onRetry="fetchRotationDetails" />
  </template>

  <template v-if="rotationDetailsState.type === 'data'">
    <PageLayout headerSize="compact">
      <template v-slot:header>
        <div class="flex flex-row h-8 items-center">
          <ChevronLeftIcon class="size-5 stroke-[2px] cursor-pointer" @click="router.go(-1)" />
          <h1 class="mx-2 text-xl">Rotation details</h1>
          <!-- <BookmarkIcon
            class="size-6 p-1 rounded cursor-pointer ml-auto hover:bg-gray-100 hover:dark:bg-gray-800"
          /> -->
        </div>
      </template>
      <template v-slot:body>
        <ChampionRotation :rotation="rotationItemDataFrom(rotationDetailsState.value)" />
      </template>
    </PageLayout>
  </template>
</template>

<script setup lang="ts">
import type { Champion, ChampionRotationDuration } from '@/common/Types'
import type { AsyncDataState } from '@/common/Utils'
import DataError from '@/components/common/DataError.vue'
import DataLoading from '@/components/common/DataLoading.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import { apiBaseUrl } from '@/Environment'
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { format } from 'date-fns'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ChampionRotation, { type ChampionsRotationData } from '../common/ChampionRotation.vue'

const router = useRouter()
const route = useRoute()
const rotationId = route.params.id as string

type ChampionRotationDetails = {
  duration: ChampionRotationDuration
  champions: [Champion]
  current: boolean
}

const rotationDetailsState = ref<AsyncDataState<ChampionRotationDetails>>({ type: 'initial' })

async function fetchRotationDetails() {
  rotationDetailsState.value = { type: 'loading' }

  const data = await fetch(apiBaseUrl + `/rotations/${rotationId}`)

  if (data.ok) {
    const rotation = (await data.json()) as ChampionRotationDetails
    rotationDetailsState.value = { type: 'data', value: rotation }
  } else {
    rotationDetailsState.value = { type: 'error' }
  }
}

function formatDuration(duration: ChampionRotationDuration) {
  const start = format(duration.start, 'MMMM dd')
  const end = format(duration.end, 'MMMM dd')
  return start + ' to ' + end
}

function rotationItemDataFrom(details: ChampionRotationDetails): ChampionsRotationData {
  return {
    key: `details#${rotationId}`,
    header: formatDuration(details.duration),
    champions: details.champions,
    badge: details.current ? 'current' : undefined,
  }
}

onMounted(fetchRotationDetails)
</script>
