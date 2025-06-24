<template>
  <img
    src="/assets/logo.png"
    class="mr-1 cursor-pointer"
    @click="goHome"
    :class="{
      'size-8 md:size-10': isHome,
      'size-6 md:size-8': !isHome,
    }"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isHome = computed(() => router.currentRoute.value.path === '/')

function goHome() {
  if (isHome.value) {
    router.go(0)
  } else {
    router.push('/')
  }
}
</script>
