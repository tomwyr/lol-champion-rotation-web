<template>
  <div class="flex flex-row items-center gap-2">
    <ChevronLeftIcon class="size-5 stroke-[2px] cursor-pointer" @click="onBack" />
    <h1 class="text-xl">{{ title }}</h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const props = defineProps<{ title: string; onBack?: () => void }>()

const router = useRouter()
const onBack = props.onBack ?? router.back
</script>
