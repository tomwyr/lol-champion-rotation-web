<template>
  <ChampionRotation />
  <AppSideMenu>
    <ChampionRotationMenu />
  </AppSideMenu>
</template>

<script setup lang="ts">
import AppSideMenu from './components/SideMenu.vue'
import ChampionRotation from './rotation/ChampionRotation.vue'
import ChampionRotationMenu from './rotation/components/ChampionRotationMenu.vue'
</script>
