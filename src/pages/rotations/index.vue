<template>
  <RotationListPage active-rotation-type="regular" :rotation-token>
    <template #header>
      <RotationListHeader />
    </template>
    <template #menu>
      <AppMenu />
    </template>
  </RotationListPage>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
if (!route.query.nextRotationToken) {
  navigateTo('/')
}

const rotationToken = route.query.nextRotationToken as string
</script>
