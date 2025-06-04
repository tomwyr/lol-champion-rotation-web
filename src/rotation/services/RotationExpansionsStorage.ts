export function getRotationExpansion(rotationKey: string): boolean {
  const rotationExpansions = JSON.parse(localStorage.getItem(storageKey) ?? '[]') as string[]
  return rotationExpansions.includes(rotationKey)
}

export function saveRotationExpansion(rotationKey: string, expanded: boolean) {
  let rotationExpansions = JSON.parse(localStorage.getItem(storageKey) ?? '[]') as string[]
  const keyPresent = rotationExpansions.includes(rotationKey)

  if (expanded && !keyPresent) {
    rotationExpansions = [...rotationExpansions, rotationKey]
  } else if (!expanded && keyPresent) {
    rotationExpansions = rotationExpansions.filter((key) => key !== rotationKey)
  }

  localStorage.setItem(storageKey, JSON.stringify(rotationExpansions))
}

const storageKey = 'rotationExpansions'
