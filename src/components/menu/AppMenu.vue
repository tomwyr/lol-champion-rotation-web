<template>
  <SideMenu>
    <AppPageHeader title="Menu" class="pb-4" @back="closeSideMenu" />
    <BookmarkedRotationsTile />
    <DarkModeToggle />
    <RotationPredictionToggle />
  </SideMenu>
</template>

<script setup lang="ts">
import { closeSideMenu } from '../common/SideMenu'
import SideMenu from '../common/SideMenu.vue'
import AppPageHeader from './AppPageHeader.vue'
import BookmarkedRotationsTile from './BookmarkedRotationsTile.vue'
import DarkModeToggle from './DarkModeToggle.vue'
import RotationPredictionToggle from './RotationPredictionToggle.vue'
</script>
