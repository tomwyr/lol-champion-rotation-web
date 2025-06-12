<template>
  <SideMenuTile title="Dark mode">
    <template v-slot:leading>
      <MoonIcon v-if="enabled" class="size-6 mx-2 text-gray-300" />
      <SunIcon v-else class="size-6 mx-2 text-gray-700" />
    </template>
    <template v-slot:trailing>
      <DotSwitch class="ml-auto mx-2" v-model:enabled="enabled" />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import DotSwitch from '@/components/DotSwitch.vue'
import SideMenuTile from '@/components/SideMenuTile.vue'
import { darkModeEnabledRef } from '@/data/DarkModeEnabled'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const enabled = darkModeEnabledRef()
</script>
