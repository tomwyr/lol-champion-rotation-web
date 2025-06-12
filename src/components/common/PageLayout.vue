<template>
  <header class="fixed z-50 inset-x-0 py-2 bg-inherit">
    <div class="lg:max-w-[768px] md:max-w-[600px] max-w-[480px] px-4 mx-auto">
      <slot name="header"></slot>
    </div>
  </header>
  <main
    :class="{
      'pt-[5rem]': headerSize === 'large',
      'pt-[3.5rem]': headerSize === 'compact',
    }"
    class="lg:max-w-[768px] md:max-w-[600px] max-w-[480px] mx-auto px-4"
  >
    <slot name="body"></slot>
  </main>
</template>

<script setup lang="ts">
const { headerSize = 'large' } = defineProps<{
  headerSize?: 'large' | 'compact'
}>()
</script>
