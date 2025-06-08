<template>
  <Switch
    v-model="enabled"
    :class="enabled && 'bg-indigo-500 dark:bg-indigo-700'"
    class="relative inline-flex ml-[6px] h-5 w-9 items-center rounded-full transition-colors bg-gray-300 dark:bg-gray-700"
  >
    <span
      :class="enabled ? 'translate-x-5' : 'translate-x-1'"
      class="inline-block h-3 w-3 transform rounded-full bg-white transition"
    />
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'

const enabled = defineModel<boolean>('enabled', { required: true })
</script>
