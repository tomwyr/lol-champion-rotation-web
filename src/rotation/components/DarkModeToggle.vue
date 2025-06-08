<template>
  <div class="flex flex-row items-center">
    <transition
      enter-active-class="transition duration-100 ease-in"
      leave-active-class="transition duration-100 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <MoonIcon v-if="enabled" class="size-4 text-gray-300" />
      <SunIcon v-else class="size-4 text-gray-700" />
    </transition>

    <AppSwitch v-model:enabled="enabled" />
  </div>
</template>

<script setup lang="ts">
import { darkModeEnabledRef } from '@/data/DarkModeEnabled'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import AppSwitch from './AppSwitch.vue'

const enabled = darkModeEnabledRef()
</script>
