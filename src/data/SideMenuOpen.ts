import { ref, type Ref } from 'vue'

const open = ref(false)

export function sideMenuOpenRef(): Ref<boolean, boolean> {
  return open
}

export function openSideMenu() {
  open.value = true
}

export function closeSideMenu() {
  open.value = false
}
