<template>
  <template v-for="rotation in nonEmptyRotations" :key="rotation.key">
    <ChampionRotation :rotation="rotation" />
  </template>

  <h3 v-if="nonEmptyRotations.length === 0" class="py-2 text-gray-500 dark:text-gray-400">
    {{ filtered ? 'No champions match your search query.' : 'No data available at the moment.' }}
  </h3>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ChampionsRotationData } from '../../common/ChampionRotation.vue';
import ChampionRotation from '../../common/ChampionRotation.vue';

const props = defineProps<{
  rotations: ChampionsRotationData[]
  filtered: boolean
}>()

const nonEmptyRotations = computed(() => {
  return props.rotations.filter((data) => data.champions.length > 0)
})
</script>
