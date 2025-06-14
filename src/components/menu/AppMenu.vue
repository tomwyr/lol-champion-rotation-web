<template>
  <SideMenu>
    <div class="flex flex-row gap-2 pb-4 items-center">
      <ChevronLeftIcon class="size-5 stroke-[2px] cursor-pointer" @click="closeSideMenu" />
      <DialogTitle class="text-xl">Menu</DialogTitle>
    </div>

    <BookmarkedRotationsTile />
    <DarkModeToggle />
    <RotationPredictionToggle />
  </SideMenu>
</template>

<script setup lang="ts">
import { DialogTitle } from '@headlessui/vue'
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { closeSideMenu } from '../common/SideMenu'
import SideMenu from '../common/SideMenu.vue'
import BookmarkedRotationsTile from './BookmarkedRotationsTile.vue'
import DarkModeToggle from './DarkModeToggle.vue'
import RotationPredictionToggle from './RotationPredictionToggle.vue'
</script>
