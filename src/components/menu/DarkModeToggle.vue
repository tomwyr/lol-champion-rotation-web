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
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const isDark = useDarkMode()

const enabled = computed({
  get: () => isDark.value,
  set: setDarkMode,
})
</script>
