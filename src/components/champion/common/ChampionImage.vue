<template>
  <div class="h-full bg-[url('/assets/champion-placeholder.png')] bg-cover bg-center">
    <img class="h-full" :src="imageUrl" loading="lazy" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ imageUrl: string }>()
</script>
