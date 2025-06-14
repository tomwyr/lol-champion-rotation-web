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
          <BookmarkIconSolid
            v-if="isBookmarked"
            class="size-6 p-1 rounded cursor-pointer ml-auto hover:bg-gray-100 hover:dark:bg-gray-800"
            @click="unbookmarkRotation(rotationId)"
          />
          <BookmarkIconOutline
            v-else
            class="size-6 p-1 rounded cursor-pointer ml-auto hover:bg-gray-100 hover:dark:bg-gray-800"
            @click="bookmarkRotation(rotationDetailsState.value)"
          />
        </div>
      </template>
      <template v-slot:body>
        <ChampionRotation :rotation="rotationItemDataFrom(rotationDetailsState.value)" />
      </template>
    </PageLayout>
  </template>
</template>

<script setup lang="ts">
import { formatDuration } from '@/common/Formatters'
import type { ChampionRotationDetails } from '@/common/Types'
import type { AsyncDataState } from '@/common/Utils'
import DataError from '@/components/common/DataError.vue'
import DataLoading from '@/components/common/DataLoading.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import { apiBaseUrl } from '@/Environment'
import { BookmarkIcon as BookmarkIconOutline, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/vue/24/solid'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  bookmarkedRotationsRef,
  bookmarkRotation,
  unbookmarkRotation,
} from '../bookmarkedRotations/BookmarkedRotations'
import ChampionRotation, { type ChampionsRotationData } from '../common/ChampionRotation.vue'

const router = useRouter()
const route = useRoute()
const rotationId = route.params.id as string

const bookmarks = bookmarkedRotationsRef()
const isBookmarked = computed(() => bookmarks.value.some((rotation) => rotation.id === rotationId))

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
