<template>
  <div
    class="relative z-30 flex flex-row max-w-80 h-8 md:h-9 w-full items-center mx-auto px-2 py-1 text-sm rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-300 focus:border-gray-500 dark:border-gray-700 dark:focus:border-gray-500 transition-colors"
    :class="{
      'cursor-pointer': !active,
    }"
    @click="active = true"
  >
    <IconSearch class="size-4 mx-2" />

    <input
      ref="searchInput"
      class="grow bg-transparent placeholder-gray-400 "
      :class="{
        'cursor-pointer pointer-events-none [&::-webkit-search-cancel-button]:hidden': !active,
      }"
      type="search"
      v-model="query"
      :readonly="!active"
      placeholder="Search champions..."
      @click="active = true"
      @keydown.esc="active = false"
    />
  </div>
</template>

<script setup lang="ts">
import { IconSearch } from '@/icons/Icons'
import { ref, watch } from 'vue'

const searchInput = ref<HTMLInputElement>()

const query = defineModel('query', { default: '' })
const active = defineModel<boolean>('active', { required: true })

watch(
  () => active.value,
  (newVal, oldVal) => {
    if (!oldVal || newVal) {
      searchInput?.value?.focus()
    }
  },
)
</script>
