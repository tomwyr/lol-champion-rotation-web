<template>
  <SideMenu>
    <AppPageHeader title="Menu" class="pb-4" @back="closeSideMenu" />
    <ObservedChampionsTile />
    <ObservedRotationsTile />

    <div class="mt-auto">
      <p class="h-px my-2 bg-gray-200 dark:bg-gray-700" />
      <DarkModeToggle />
      <RotationPredictionToggle />
    </div>

    <RiotPolicyNote />
  </SideMenu>
</template>

<script setup lang="ts">
import { closeSideMenu } from '../common/SideMenu'
import SideMenu from '../common/SideMenu.vue'
import AppPageHeader from './AppPageHeader.vue'
import DarkModeToggle from './DarkModeToggle.vue'
import ObservedChampionsTile from './ObservedChampionsTile.vue'
import ObservedRotationsTile from './ObservedRotationsTile.vue'
import RiotPolicyNote from './RiotPolicyNote.vue'
import RotationPredictionToggle from './RotationPredictionToggle.vue'
</script>
