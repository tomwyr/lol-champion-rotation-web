<template>
  <img loading="lazy" :src="imageUrl" @error="fallbackImageUrl" >
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ imageUrl: string }>()

const imageUrl = ref(props.imageUrl)

function fallbackImageUrl() {
  imageUrl.value = '/assets/champion-placeholder.png'
}
</script>
