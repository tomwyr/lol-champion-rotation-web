<template>
  <SideMenuTile title="Rotations" @click="openBookmarkedRotations">
    <template #leading>
      <BookmarkIcon class="size-5 mx-2" />
    </template>
  </SideMenuTile>
</template>

<script setup lang="ts">
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { closeSideMenu } from '../common/SideMenu'
import SideMenuTile from '../common/SideMenuTile.vue'

const router = useRouter()

function openBookmarkedRotations() {
  closeSideMenu()
  router.push('/rotations/bookmarks')
}
</script>
