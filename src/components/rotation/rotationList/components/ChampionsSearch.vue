<template>
  <div class="relative w-full mx-4">
    <ChampionsSearchField v-model:query="query" v-model:active="active" />

    <ChampionsSearchResult v-if="active" :has-input="query.length > 0" :champions />

    <div
      v-if="active"
      class="fixed z-20 inset-0 bg-black/50 backdrop-blur-[2px]"
      @click="active = false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ChampionsSearchField from './ChampionsSearchField.vue'
import type { ChampionRotationsOverview } from '@/common/Types'
import ChampionsSearchResult from './ChampionsSearchResult.vue'

const props = defineProps<{
  rotationsOverview: ChampionRotationsOverview
}>()

const query = defineModel('query', { default: '' })
const active = ref(false)

const champions = computed(() => {
  const effectiveQuery = query.value.toLowerCase().trim()
  return props.rotationsOverview.regularChampions.filter((champion) =>
    champion.name.toLowerCase().includes(effectiveQuery),
  )
})
</script>
