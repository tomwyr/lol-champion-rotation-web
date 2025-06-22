<template>
  <div
    class="fixed z-30 max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto inset-x-0 mt-5 md:mt-6 p-2 md:p-3 rounded-xl shadow-lg shadow-gray-700 bg-gray-100 dark:bg-gray-800"
  >
    <div v-if="searchState.type === 'initial'" class="pt-8 pb-7 flex flex-col items-center">
      <PencilIcon class="size-8 mt-0.5 mb-2.5" />
      <p class="text-center">Start typing to search...</p>
    </div>

    <DataLoading
      v-else-if="searchState.type === 'loading'"
      class="pt-11 pb-7"
      :full-screen="false"
    />

    <DataError
      v-else-if="searchState.type === 'error'"
      class="pt-6 pb-7"
      :full-screen="false"
      message="We couldn't retrieve the search results. Please try again later."
    />

    <div
      v-else-if="searchState.type === 'data' && searchState.value.matches.length === 0"
      class="pt-8 pb-7 flex flex-col items-center"
    >
      <ArchiveBoxIcon class="size-8 mt-0.5 mb-2.5" />
      <p class="text-center">No champions match your search query.</p>
    </div>

    <ChampionsSearchData
      v-else-if="searchState.type === 'data' && searchState.value.matches.length > 0"
      class="max-h-[calc(100vh-9rem)] overflow-y-auto -mr-4 pr-4"
      :matches="searchState.value.matches"
    />
  </div>
</template>

<script setup lang="ts">
import type { SearchChampionsResult } from '@/common/Types'
import type { AsyncDataState } from '@/common/Utils'
import DataError from '@/components/common/DataError.vue'
import DataLoading from '@/components/common/DataLoading.vue'
import { ArchiveBoxIcon, PencilIcon } from '@heroicons/vue/24/outline'
import ChampionsSearchData from './ChampionsSearchData.vue'

defineProps<{
  searchState: AsyncDataState<SearchChampionsResult>
}>()
</script>
