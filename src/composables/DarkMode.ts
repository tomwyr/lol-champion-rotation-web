export function useDarkMode() {
  return useCookie<boolean>('darkMode', { default: () => false })
}

export function setDarkMode(enabled: boolean) {
  useDarkMode().value = enabled
  applyDarkMode(enabled)
}

export function applyCurrentDarkMode() {
  const enabled = useDarkMode().value
  applyDarkMode(enabled)
}

function applyDarkMode(enabled: boolean) {
  document.documentElement.classList.toggle('dark', enabled)
}
