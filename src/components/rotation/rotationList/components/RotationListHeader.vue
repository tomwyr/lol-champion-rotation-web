<template>
  <div class="flex flex-row w-full items-center justify-between mb-1">
    <img src="/assets/logo.png" class="size-8 md:size-10 cursor-pointer" @click="router.go(0)" />

    <ChampionsSearch />

    <Bars3Icon
      @click="openSideMenu"
      class="size-6 md:size-7 p-1 rounded cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-800"
    />
  </div>
</template>

<script setup lang="ts">
import ChampionsSearch from '@/components/champion/championsSearch/ChampionsSearch.vue'
import { openSideMenu } from '@/components/common/SideMenu'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
