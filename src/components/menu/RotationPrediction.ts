import { ref, watchEffect } from 'vue'

const enabled = ref(loadEnabled())
watchEffect(() => saveEnabled(enabled.value))

export function rotationPredictionEnabledRef() {
  return enabled
}

function loadEnabled(): boolean {
  const enabledString = localStorage.getItem('rotationPredictionEnabled') ?? 'false'
  return JSON.parse(enabledString) as boolean
}

function saveEnabled(value: boolean) {
  localStorage.setItem('rotationPredictionEnabled', JSON.stringify(value))
}
