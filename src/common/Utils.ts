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

declare global {
  interface Array<T> {
    reversed(): Array<T>
  }
}

if (!Array.prototype.reversed) {
  Array.prototype.reversed = function <T>(this: T[]): T[] {
    const result = Array<T>()
    for (let i = this.length - 1; i >= 0; i--) {
      result.push(this[i])
    }
    return result
  }
}
