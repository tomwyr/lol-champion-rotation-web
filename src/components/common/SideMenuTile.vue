<template>
  <div
    class="flex flex-row items-center py-4"
    :class="{
      'hover:bg-gray-200 hover:dark:bg-gray-800 rounded cursor-pointer': !!onClick,
    }"
  >
    <div class="size-5 mx-2 text-gray-700 dark:text-gray-300">
      <slot name="leading" />
    </div>
    <div class="mx-2 flex flex-col">{{ title }}</div>
    <div class="ml-auto mx-2">
      <slot name="trailing" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'

defineProps<{
  title: string
}>()

const { onClick } = useAttrs()
</script>
