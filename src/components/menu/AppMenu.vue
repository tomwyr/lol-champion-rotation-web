<template>
  <SideMenu>
    <AppPageHeader title="Menu" class="pb-4" @close="closeSideMenu" />
    <ObservedChampionsTile />
    <ObservedRotationsTile />

    <div class="mt-auto">
      <SideMenuDivider />
      <DarkModeToggle />
      <RotationPredictionToggle />
      <SideMenuDivider />
      <PrivacyPolicyTile />
      <MobileShowcaseTile />
    </div>

    <RiotPolicyNote />
  </SideMenu>
</template>

<script setup lang="ts">
import { closeSideMenu } from '../common/SideMenu'
import SideMenu from '../common/SideMenu.vue'
import SideMenuDivider from '../common/SideMenuDivider.vue'
import AppPageHeader from './AppPageHeader.vue'
import DarkModeToggle from './DarkModeToggle.vue'
import MobileShowcaseTile from './MobileShowcaseTile.vue'
import PrivacyPolicyTile from './PrivacyPolicyTile.vue'
import ObservedChampionsTile from './ObservedChampionsTile.vue'
import ObservedRotationsTile from './ObservedRotationsTile.vue'
import RiotPolicyNote from './RiotPolicyNote.vue'
import RotationPredictionToggle from './RotationPredictionToggle.vue'
</script>
