<template>
  <div class="flex flex-row w-full items-center justify-between mb-1">
    <AppLogo />

    <ChampionsSearch />

    <Bars3Icon
      @click="openSideMenu"
      class="size-6 md:size-7 p-1 rounded cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-800"
    />
  </div>
</template>

<script setup lang="ts">
import ChampionsSearch from '@/components/champion/championsSearch/ChampionsSearch.vue'
import AppLogo from '@/components/common/AppLogo.vue'
import { openSideMenu } from '@/components/common/SideMenu'
import { Bars3Icon } from '@heroicons/vue/24/outline'
</script>
