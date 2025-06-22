<template>
  <div
    class="flex flex-row max-w-80 h-8 md:h-9  w-full items-center mx-4 px-2 py-1 text-sm rounded-2xl text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-300 focus:border-gray-500 dark:border-gray-700 dark:focus:border-gray-500 transition-colors"
  >
    <IconSearch class="size-4 mx-2" />
    <input
      class="grow bg-transparent placeholder-gray-400"
      type="search"
      v-model="query"
      placeholder="Search champions..."
    />
  </div>
</template>

<script setup lang="ts">
import IconSearch from '@/icons/IconSearch.vue'

const query = defineModel('query', { default: '' })
</script>
