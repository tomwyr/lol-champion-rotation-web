<template>
  <div class="flex flex-row gap-2 items-baseline">
    <ChevronLeftIcon class="size-5 stroke-[3px] cursor-pointer" @click="closeSideMenu" />
    <DialogTitle class="font-bold text-2xl pb-4">Menu</DialogTitle>
  </div>
  <DarkModeToggle />
  <RotationPredictionToggle />
</template>

<script setup lang="ts">
import { closeSideMenu } from '@/data/SideMenuOpen'
import { DialogTitle } from '@headlessui/vue'
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
import DarkModeToggle from './DarkModeToggle.vue'
import RotationPredictionToggle from './RotationPredictionToggle.vue'
</script>
