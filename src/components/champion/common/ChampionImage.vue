<template>
  <img
    class="bg-cover size-full"
    :class="`bg-[url(${placeholder})]`"
    :src="imageUrl"
    loading="lazy"
    @error="fallbackImageUrl"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ imageUrl: string }>()
const imageUrl = ref(props.imageUrl)

const placeholder = '/assets/champion-placeholder.png'

function fallbackImageUrl() {
  imageUrl.value = placeholder
}
</script>
