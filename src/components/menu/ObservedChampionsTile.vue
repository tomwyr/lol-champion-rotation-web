<template>
  <SideMenuTile title="Champions" @click="openObservedChampions">
    <template #leading>
      <EyeIcon />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { closeSideMenu } from '../common/SideMenu'
import SideMenuTile from '../common/SideMenuTile.vue'
import { EyeIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

function openObservedChampions() {
  closeSideMenu()
  router.push('/champions/observed')
}
</script>
