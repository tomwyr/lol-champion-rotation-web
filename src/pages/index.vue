<template>
  <RotationOverviewPage :active-rotation-type="rotationType">
    <template #header>
      <RotationListHeader />
    </template>
    <template #rotation-type-picker>
      <RotationTypePicker v-model="rotationType" />
    </template>
    <template #menu>
      <AppMenu />
    </template>
  </RotationOverviewPage>
</template>

<script setup lang="ts">
import type { ChampionRotationType } from '~/domain/Types'

const rotationType = ref<ChampionRotationType>('regular')
</script>
