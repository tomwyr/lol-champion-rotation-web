<template>
  <SideMenuTile title="Dark mode" class="text-sm">
    <template #leading>
      <MoonIcon v-if="enabled" />
      <SunIcon v-else />
    </template>
    <template #trailing>
      <DotSwitch v-model:enabled="enabled" class="mr-1" />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import DotSwitch from '@/components/common/DotSwitch.vue'
import SideMenuTile from '@/components/common/SideMenuTile.vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { darkModeEnabledRef } from './DarkMode'

const enabled = darkModeEnabledRef()
</script>
