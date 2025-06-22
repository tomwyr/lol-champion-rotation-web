<template>
  <header
    class="fixed z-50 inset-x-0 py-2 bg-inherit"
    :class="{
      'h-[4rem] md:h-[4.5rem]': headerSize === 'loose',
      'h-[4rem]': headerSize === 'tight',
    }"
  >
    <div class="lg:max-w-[768px] md:max-w-[600px] max-w-[480px] px-4 mx-auto h-full flex">
      <slot name="header" />
    </div>
  </header>
  <main
    class="lg:max-w-[768px] md:max-w-[600px] max-w-[480px] mx-auto px-4 flex flex-col h-screen"
    :class="{
      'pt-[4rem] md:pt-[4.5rem]': headerSize === 'loose',
      'pt-[4rem]': headerSize === 'tight',
    }"
  >
    <slot name="body"></slot>
  </main>
</template>

<script setup lang="ts">
const { headerSize = 'tight' } = defineProps<{
  headerSize?: 'loose' | 'tight'
}>()
</script>
