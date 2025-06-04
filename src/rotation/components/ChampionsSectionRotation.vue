<template>
  <div class="flex flex-row items-center">
    <h2 class="text-gray-500 dark:text-gray-400">
      {{ rotation.header }}
    </h2>

    <RotationBadge v-if="rotation.badge" :variant="rotation.badge" />

    <div
      v-if="rotation.expandable !== undefined"
      class="ml-1 p-1 cursor-pointer rounded-full hover:bg-gray-100 hover:dark:bg-gray-800"
      @click="toggleExpansion"
    >
      <IconUnfoldLess v-if="expanded" />
      <IconUnfoldMore v-else />
    </div>
  </div>

  <div v-if="!expanded" class="mb-4"></div>

  <div
    v-if="rotation.champions.length > 0"
    v-show="expanded"
    class="py-4 mb-2 gap-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3"
  >
    <template v-for="champion in rotation.champions" :key="champion.id">
      <div class="relative">
        <img class="rounded" width="144px" height="144px" loading="lazy" :src="champion.imageUrl" />
        <div class="absolute bottom-0 inset-x-0 text-center">
          <div
            v-text="champion.name"
            class="inline-block px-2 py-0.5 mb-2 text-sm rounded-full shadow-sm shadow-black bg-opacity-80 text-gray-100 bg-gray-900"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import IconUnfoldLess from '@/icons/IconUnfoldLess.vue'
import IconUnfoldMore from '@/icons/IconUnfoldMore.vue'
import { ref } from 'vue'
import { getRotationExpansion, saveRotationExpansion } from '../services/RotationExpansionsStorage'
import type { ChampionsSectionRotation } from './ChampionsSection.vue'
import RotationBadge from './RotationBadge.vue'

const { rotation } = defineProps<{
  rotation: ChampionsSectionRotation
}>()

function toggleExpansion() {
  expanded.value = !expanded.value
  saveRotationExpansion(rotation.key, expanded.value)
}

const expanded = ref(rotation.expandable ? getRotationExpansion(rotation.key) : true)
</script>
