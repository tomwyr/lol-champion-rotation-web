<template>
  <Listbox v-model="model">
    <ListboxButton
      class="flex flex-row items-center p-0.5 -ml-1 pl-1 rounded hover:bg-gray-100 hover:dark:bg-gray-800"
    >
      <span>{{ getTypeData(model).title }}</span>
      <IconExpandMore class="ml-0.5" />
    </ListboxButton>

    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ListboxOptions class="absolute py-1 mt-1 -ml-1 rounded-md bg-gray-100 dark:bg-gray-800">
        <ListboxOption
          v-for="type in typesData"
          :key="type.value"
          :value="type.value"
          v-slot="{ selected }"
          class="flex flex-col px-2 py-2 rounded-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <div class="flex flex-row items-center gap-4">
            <img :src="type.iconAsset" class="size-8" />
            <div class="flex flex-col">
              <dt class="text-sm font-bold">{{ type.title }}</dt>
              <dd class="text-xs text-gray-700 dark:text-gray-400">{{ type.description }}</dd>
            </div>
            <div class="w-4 mr-1 ml-auto">
              <CheckIcon v-if="selected" class="size-4" />
            </div>
          </div>
        </ListboxOption>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script setup lang="ts">
import { IconExpandMore } from '@/icons/Icons'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import type { RotationType } from '../Types'

const model = defineModel<RotationType>({ required: true })

function getTypeData(type: RotationType) {
  switch (type) {
    case 'regular':
      return {
        value: 'regular',
        title: "Summoner's Rift",
        description: 'Classic map • Weekly rotation',
        iconAsset: 'assets/icon-sr.png',
      }
    case 'beginner':
      return {
        value: 'beginner',
        title: "Summoner's Rift (Beginners)",
        description: 'Classic map • New players only',
        iconAsset: 'assets/icon-sr-beginner.png',
      }
  }
}

const typesData = [getTypeData('regular'), getTypeData('beginner')]
</script>
