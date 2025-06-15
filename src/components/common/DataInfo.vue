<template>
  <div class="flex flex-grow items-center justify-center">
    <div class="flex flex-col justify-center items-center">
      <slot name="icon"  />
      <h1 class="pt-1 w-[80%] text-center text-gray-900 dark:text-gray-100">{{ message }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>
