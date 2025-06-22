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

export async function delay(millis: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, millis))
}

export function createSwitchTask(options: { debounceMillis?: number } = {}) {
  let currentToken = Symbol()

  return {
    run: async <T>(task: () => Promise<T>): Promise<T | undefined> => {
      const token = Symbol()
      currentToken = token

      if (options.debounceMillis) {
        await delay(options.debounceMillis)
      }
      if (token !== currentToken) return

      const result = await task()
      if (token !== currentToken) return

      return result
    },

    cancel: () => {
      currentToken = Symbol()
    },
  }
}
