import { customRef } from 'vue'

export function useDebounce<T> (value: T, delay = 300, callback: (val: T) => viod) {
  let timer: any = null
  return customRef((track, trigger) => {
    return {
      get () {
        track()
        return value
      },
      set (newValue: T) {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          value = newValue
          callback(newValue)
          trigger()
        }, delay)
      }
    }
  })
}