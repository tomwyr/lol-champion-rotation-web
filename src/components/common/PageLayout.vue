<template>
  <header
    class="fixed z-50 inset-x-0 py-2 bg-white dark:bg-gray-900"
    :class="{
      'h-16 md:h-18': headerSize === 'loose',
      'h-16': headerSize === 'tight',
    }"
  >
    <div class="lg:max-w-3xl md:max-w-150 max-w-120 px-4 mx-auto h-full flex">
      <slot name="header" />
    </div>
  </header>
  <main
    class="lg:max-w-3xl md:max-w-150 max-w-120 mx-auto px-4 flex flex-col h-screen"
    :class="{
      'pt-16 md:pt-18': headerSize === 'loose',
      'pt-16': headerSize === 'tight',
    }"
  >
    <slot name="body"/>
  </main>
</template>

<script setup lang="ts">
const { headerSize = 'tight' } = defineProps<{
  headerSize?: 'loose' | 'tight'
}>()
</script>
