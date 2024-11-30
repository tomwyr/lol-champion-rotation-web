<script setup lang="ts">
import { IconFilter, IconSearch } from '@/icons/Icons';
import { ref } from 'vue';

defineProps<{
  onChange: (query: string) => void
}>()

const query = ref('')
const expanded = ref(false)
</script>

<template>
  <div @click="expanded = !expanded" class="ml-2 p-1 hover:bg-gray-300 rounded relative">
    <IconSearch />
    <IconFilter v-if="query && !expanded" />
  </div>
  <input
    @keyup="() => onChange(query)"
    v-show="expanded"
    v-model="query"
    type="search"
    class="w-64 ml-1 px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
    placeholder="Champion name..."
  />
</template>
