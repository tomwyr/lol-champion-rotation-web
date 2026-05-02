<template>
  <a href="/">
    <img
      src="/assets/logo.png"
      class="mr-1 cursor-pointer"
      :class="{
        'size-8 md:size-10': isHome,
        'size-6 md:size-8': !isHome,
      }"
    />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const isHome = computed(() => useRoute().path === '/')
</script>
