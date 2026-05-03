<template>
  <RotationListPage v-if="pageNumber" active-rotation-type="regular" :page-number>
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

const pageValue = useRoute().query.page as string | undefined
const pageNumber = parsePageNumber(pageValue)

if (!pageNumber) {
  navigateTo('/')
}
</script>
