<template>
  <div class="flex flex-row items-center py-4">
    <slot name="leading" class="size-6 mx-2 text-gray-700 dark:text-gray-300" />
    <div class="mx-2 flex flex-col">{{ title }}</div>
    <slot name="trailing" class="ml-auto mx-2" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
