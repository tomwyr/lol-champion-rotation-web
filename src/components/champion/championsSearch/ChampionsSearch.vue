<template>
  <div class="relative w-full mx-4">
    <ChampionsSearchField v-model:query="query" v-model:active="active" />

    <ChampionsSearchState v-if="active" :has-input="query.length > 0" :searchState />

    <div
      v-if="active"
      class="fixed z-20 inset-0 bg-black/50 backdrop-blur-[2px]"
      @click="active = false"
    />
  </div>
</template>

<script setup lang="ts">
import { apiBaseUrl } from '@/Environment'
import { type SearchChampionsResult } from '@/common/Types'
import { createSwitchTask, type AsyncDataState } from '@/common/Utils'
import { ref, watchEffect } from 'vue'
import ChampionsSearchField from './ChampionsSearchField.vue'
import ChampionsSearchState from './ChampionsSearchState.vue'

const query = defineModel('query', { default: '' })

const active = ref(false)
const searchState = ref<AsyncDataState<SearchChampionsResult>>({ type: 'initial' })

const searchTask = createSwitchTask({ debounceMillis: 500 })

watchEffect(async () => {
  const searchQuery = query.value.trim()

  if (searchQuery.length === 0) {
    searchTask.cancel()
    searchState.value = { type: 'initial' }
    return
  }

  try {
    const result = await searchChampions(searchQuery, {
      onRun: () => {
        if (searchState.value.type !== 'data') {
          searchState.value = { type: 'loading' }
        }
      },
    })
    if (!result) return
    searchState.value = { type: 'data', value: result }
  } catch {
    searchState.value = { type: 'error' }
  }
})

async function searchChampions(
  searchQuery: string,
  options: { onRun?: () => void } = {},
): Promise<SearchChampionsResult | undefined> {
  const data = await searchTask.run(() => {
    options.onRun?.()
    return fetch(apiBaseUrl + `/champions/search?name=${searchQuery}`)
  })
  if (!data) return
  return (await data.json()) as SearchChampionsResult
}
</script>
