<template>
  <transition
    enter-active-class="transition duration-100 ease-in"
    leave-active-class="transition duration-100 ease-in"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    mode="out-in"
  >
    <MoonIcon v-if="enabled" class="size-4 text-gray-300" />
    <SunIcon v-else class="size-4 text-gray-700" />
  </transition>

  <Switch
    v-model="enabled"
    :class="enabled ? 'bg-gray-700' : 'bg-gray-300'"
    class="relative inline-flex ml-[6px] h-5 w-9 items-center rounded-full transition-colors"
  >
    <span
      :class="enabled ? 'translate-x-5' : 'translate-x-1'"
      class="inline-block h-3 w-3 transform rounded-full bg-white transition"
    />
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { ref, watchEffect } from 'vue'

function loadEnabled(): boolean {
  return localStorage.getItem('themeMode') === 'dark'
}

function saveEnabled(value: boolean) {
  localStorage.setItem('themeMode', value ? 'dark' : 'light')
}

function applyDarkMode(enabled: boolean) {
  const classList = document.documentElement.classList
  if (enabled) {
    classList.add('dark')
  } else {
    classList.remove('dark')
  }
}

const enabled = ref(loadEnabled())
applyDarkMode(enabled.value)

watchEffect(() => {
  applyDarkMode(enabled.value)
  saveEnabled(enabled.value)
})
</script>
