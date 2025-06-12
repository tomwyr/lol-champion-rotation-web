<template>
  <ChampionRotation />
  <AppSideMenu>
    <ChampionRotationMenu />
  </AppSideMenu>
</template>

<script setup lang="ts">
import AppSideMenu from '@/components/SideMenu.vue';
import ChampionRotation from './ChampionRotation.vue';
import ChampionRotationMenu from './ChampionRotationMenu.vue';
</script>
