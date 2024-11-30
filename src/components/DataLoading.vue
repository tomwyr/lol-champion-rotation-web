<script setup lang="ts">
import IconSpinner from '@/icons/IconSpinner.vue'
</script>

<template>
  <div class="flex flex-col justify-center mx-auto">
    <div
      class="grid w-full place-items-center overflow-x-scroll rounded-lg p-4 lg:overflow-visible"
    >
      <IconSpinner />
      <h1 class="pt-4 text-gray-700">Loading...</h1>
    </div>
  </div>
</template>
