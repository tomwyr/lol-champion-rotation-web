import { ref } from 'vue'

const open = ref(false)

export function sideMenuOpenRef() {
  return open
}

export function openSideMenu() {
  open.value = true
}

export function closeSideMenu() {
  open.value = false
}
