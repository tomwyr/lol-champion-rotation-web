<template>
  <div class="flex flex-grow pr-4 md:pr-6" dir="rtl">
    <template v-for="imageUrl in championImageUrls.reversed()" :key="imageUrl">
      <img
        class="rounded-full"
        :class="{
          'size-8 md:size-10 -mr-4 md:-mr-6': !compact,
          'size-6 md:size-8 -mr-3 md:-mr-5': compact,
        }"
        loading="lazy"
        :src="imageUrl"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
const { compact = false } = defineProps<{
  championImageUrls: string[]
  compact?: boolean
}>()
</script>
