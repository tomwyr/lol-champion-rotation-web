import { ref } from 'vue'

const searchQuery = ref('')
const searchActive = ref(false)

export function searchQueryRef() {
  return searchQuery
}

export function searchActiveRef() {
  return searchActive
}

export function clearSearchInput() {
  searchQuery.value = ''
  searchActive.value = false
}
