<template>
  <div class="min-h-full bg-white dark:bg-gray-900 transition-colors">
    <NuxtPage :keepalive="true" />
  </div>
</template>

<script setup lang="ts">
const isDark = useDarkMode()

useHead({
  htmlAttrs: {
    class: computed(() => (isDark.value ? 'dark' : '')),
  },
  bodyAttrs: { class: 'h-full w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100' },
})
</script>
