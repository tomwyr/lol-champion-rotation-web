<template>
  <SideMenuTile title="Get the App" @click="openOverview">
    <template #leading>
      <DevicePhoneMobileIcon />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import { DevicePhoneMobileIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { closeSideMenu } from '../common/SideMenu'
import SideMenuTile from '../common/SideMenuTile.vue'

const router = useRouter()

function openOverview() {
  closeSideMenu()
  router.push('/mobile')
}
</script>
