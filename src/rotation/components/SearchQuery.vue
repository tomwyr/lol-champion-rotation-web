<template>
  <div
    @click="expanded = !expanded"
    class="p-1 hover:bg-gray-300 dark:hover:bg-gray-700 rounded relative"
  >
    <IconSearch />
    <IconFilter v-if="query && !expanded" />
  </div>
  <input
    type="search"
    v-show="expanded"
    v-model="query"
    class="w-64 ml-1 px-2 py-1 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 focus:border-gray-500 dark:border-gray-700 dark:focus:border-gray-500"
    placeholder="Champion name..."
  />
</template>

<script setup lang="ts">
import { IconFilter, IconSearch } from '@/icons/Icons'

const query = defineModel('query', { default: '' })
const expanded = defineModel('expanded', { default: false })
</script>
