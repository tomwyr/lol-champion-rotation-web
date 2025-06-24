<template>
  <div class="flex flex-row w-full items-center gap-2">
    <AppLogo />
    <h1 v-if="title" class="text-xl">{{ title }}</h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
import AppLogo from '../common/AppLogo.vue'

defineProps<{ title?: string }>()
</script>
