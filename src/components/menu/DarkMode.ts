import { ref, watchEffect } from 'vue'

const enabled = ref(loadEnabled())
applyDarkMode(enabled.value)
watchEffect(() => {
  applyDarkMode(enabled.value)
  saveEnabled(enabled.value)
})

export function darkModeEnabledRef() {
  return enabled
}

function loadEnabled(): boolean {
  return localStorage.getItem('themeMode') === 'dark'
}

function saveEnabled(value: boolean) {
  localStorage.setItem('themeMode', value ? 'dark' : 'light')
}

function applyDarkMode(enabled: boolean) {
  const classList = document.documentElement.classList
  if (enabled) {
    classList.add('dark')
  } else {
    classList.remove('dark')
  }
}
