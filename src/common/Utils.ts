import { nextTick } from 'vue'

export function restoreScrollAfterFrame() {
  const currentScroll = document.documentElement.scrollTop
  nextTick(() => {
    document.documentElement.scrollTop = currentScroll
  })
}

export type AsyncDataState<T> =
  | { type: 'initial' }
  | { type: 'loading' }
  | { type: 'error' }
  | { type: 'data'; value: T }
