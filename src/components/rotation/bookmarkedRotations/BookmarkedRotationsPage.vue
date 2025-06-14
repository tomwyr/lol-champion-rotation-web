<template>
  <PageLayout headerSize="compact">
    <template v-slot:header>
      <div class="flex flex-row h-8 items-center">
        <ChevronLeftIcon class="size-5 stroke-[2px] cursor-pointer" @click="router.go(-1)" />
        <h1 class="mx-2 text-xl">Bookmarked rotations</h1>
      </div>
    </template>
    <template v-slot:body>
      <template v-for="(rotation, index) in bookmarkedRotations" :key="rotation.id">
        <div
          class="p-2 flex flex-row items-center cursor-pointer rounded hover:bg-gray-100 hover:dark:bg-gray-800"
          :class="{ 'mt-2': index > 0 }"
          @click="openDetails(rotation)"
        >
          <span class="text-sm md:text-base">
            {{ formatDuration(rotation.duration) }}
          </span>
          <div class="flex flex-grow pr-4 md:pr-6" dir="rtl">
            <template v-for="imageUrl in rotation.championImageUrls.reversed()" :key="imageUrl">
              <img
                class="size-8 md:size-10 rounded-full -mr-4 md:-mr-6"
                loading="lazy"
                :src="imageUrl"
              />
            </template>
          </div>
        </div>
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/common/PageLayout.vue'
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { bookmarkedRotationsRef } from './BookmarkedRotations'
import { formatDuration } from '@/common/Formatters'
import type { ObservedRotation } from '@/common/Types'

const router = useRouter()
const bookmarkedRotations = bookmarkedRotationsRef()

function openDetails(rotation: ObservedRotation) {
  router.push(`/rotations/${rotation.id}`)
}
</script>
