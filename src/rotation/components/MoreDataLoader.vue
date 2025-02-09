<template>
  <div class="pt-2 pb-6 text-center">
    <button
      v-if="showButton"
      @click="onLoadMore"
      class="flex flex-col items-center mx-auto p-2 rounded text-sm hover:bg-gray-200 hover:dark:bg-gray-800"
    >
      {{ buttonLabel }}
      <ChevronDoubleDownIcon class="size-4" />
    </button>

    <IconSpinner class="mx-auto" v-if="!showButton" />
  </div>
</template>

<script setup lang="ts">
import { IconSpinner } from '@/icons/Icons'
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/outline'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  showButton: boolean
  buttonLabel: string
  extentThreshold: number
  onLoadMore: () => void
}>()

const lastThresholedReached = ref(false)

function onScroll() {
  if (props.showButton) {
    return
  }

  const scrollY = window.scrollY
  const { scrollHeight, clientHeight } = document.documentElement
  const extentAfter = scrollHeight - (scrollY + clientHeight)

  const thresholdReached = extentAfter <= props.extentThreshold
  if (thresholdReached && !lastThresholedReached.value) {
    props.onLoadMore()
  }
  lastThresholedReached.value = thresholdReached
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.addEventListener('scroll', onScroll)
})
</script>
