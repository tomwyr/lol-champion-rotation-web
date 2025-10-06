<template>
  <div class="flex flex-row w-full items-center gap-2">
    <CloseButton v-if="onClose" @click="onClose" />
    <AppLogo v-else />
    <h1 v-if="title" class="text-xl">{{ title }}</h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
import AppLogo from '../common/AppLogo.vue'
import CloseButton from '../common/CloseButton.vue'

defineProps<{ title?: string; onClose?: () => void }>()
</script>
