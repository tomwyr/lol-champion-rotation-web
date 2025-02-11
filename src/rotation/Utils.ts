import { nextTick } from 'vue'

export function restoreScrollAfterFrame() {
  const currentScroll = document.documentElement.scrollTop
  nextTick(() => {
    document.documentElement.scrollTop = currentScroll
  })
}
