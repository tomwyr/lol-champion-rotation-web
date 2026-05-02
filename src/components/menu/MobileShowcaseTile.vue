<template>
  <SideMenuTile title="Get the App" destination="/mobile">
    <template #leading>
      <DevicePhoneMobileIcon />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import { DevicePhoneMobileIcon } from '@heroicons/vue/24/outline'
</script>
