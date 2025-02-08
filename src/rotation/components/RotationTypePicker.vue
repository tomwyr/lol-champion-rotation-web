<script setup lang="ts">
import IconExpandMore from '@/icons/IconExpandMore.vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { ref } from 'vue'
import type { RotationType } from '../Types'
import { CheckIcon } from '@heroicons/vue/24/outline'

const selectedType = ref<RotationType>('regular')

function getTypeData(type: RotationType) {
  switch (type) {
    case 'regular':
      return {
        value: 'regular',
        title: "Summoner's Rift",
        description: 'Classic map • Weekly rotation',
      }
    case 'beginner':
      return {
        value: 'beginner',
        title: "Summoner's Rift (Beginners)",
        description: 'Classic map • New players only',
      }
  }
}

const typesData = [getTypeData('regular'), getTypeData('beginner')]
</script>

<template>
  <Listbox v-model="selectedType">
    <ListboxButton
      class="flex flex-row items-center p-0.5 -ml-1 pl-1 rounded hover:bg-gray-100 hover:dark:bg-gray-800"
    >
      <span>{{ getTypeData(selectedType).title }}</span>
      <IconExpandMore class="ml-0.5" />
    </ListboxButton>

    <ListboxOptions
      class="absolute min-w-[280px] py-1 mt-1 -ml-1 rounded-md bg-gray-100 dark:bg-gray-800"
    >
      <ListboxOption
        v-for="type in typesData"
        :key="type.value"
        :value="type.value"
        v-slot="{ selected }"
        class="flex flex-col px-2 py-2 rounded-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-col">
            <dt class="text-sm font-bold">{{ type.title }}</dt>
            <dd class="text-xs text-gray-700 dark:text-gray-400">{{ type.description }}</dd>
          </div>
          <CheckIcon v-if="selected" class="size-4 ml-4 mr-1" />
        </div>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
