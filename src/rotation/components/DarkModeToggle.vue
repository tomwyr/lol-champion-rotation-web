<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { ref, watchEffect } from 'vue'

function loadEnabled(): boolean {
  return localStorage.getItem('themeMode') == 'dark'
}

function saveEnabled(value: boolean) {
  localStorage.setItem('themeMode', value ? 'dark' : 'light')
}

const enabled = ref(loadEnabled())
watchEffect(() => saveEnabled(enabled.value))
</script>

<template>
  <Transition name="fade" mode="out-in">
    <MoonIcon v-if="enabled" class="size-4" />
    <SunIcon v-else class="size-4" />
  </Transition>

  <Switch
    v-model="enabled"
    :class="enabled ? 'bg-slate-500' : 'bg-gray-200'"
    class="relative inline-flex ml-1 h-5 w-9 items-center rounded-full transition-colors"
  >
    <span
      :class="enabled ? 'translate-x-5' : 'translate-x-1'"
      class="inline-block h-3 w-3 transform rounded-full bg-white transition"
    />
  </Switch>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
