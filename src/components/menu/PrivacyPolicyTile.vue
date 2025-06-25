<template>
  <SideMenuTile title="Privacy policy" @click="openPrivacyPolicy">
    <template #leading>
      <DocumentTextIcon />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { closeSideMenu } from '../common/SideMenu'
import SideMenuTile from '../common/SideMenuTile.vue'

const router = useRouter()

function openPrivacyPolicy() {
  closeSideMenu()
  router.push('/privacy')
}
</script>
