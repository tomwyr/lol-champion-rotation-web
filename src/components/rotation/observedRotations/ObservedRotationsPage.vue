<template>
  <PageLayout headerSize="compact">
    <template #header>
      <AppPageHeader title="Bookmarked rotations" />
    </template>
    <template #body>
      <template v-if="observedRotations.length === 0">
        <DataInfo message="Bookmark your first rotation to see it on the list.">
          <template #icon>
            <IconBookmarkAdd class="size-14" />
          </template>
        </DataInfo>
      </template>

      <template v-else>
        <template v-for="(rotation, index) in observedRotations" :key="rotation.id">
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
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { formatDuration } from '@/common/Formatters'
import type { ObservedRotation } from '@/common/Types'
import DataInfo from '@/components/common/DataInfo.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import AppPageHeader from '@/components/menu/AppPageHeader.vue'
import IconBookmarkAdd from '@/icons/IconBookmarkAdd.vue'
import { useRouter } from 'vue-router'
import { observedRotationsRef } from './ObservedRotations'

const router = useRouter()
const observedRotations = observedRotationsRef()

function openDetails(rotation: ObservedRotation) {
  router.push(`/rotations/${rotation.id}`)
}
</script>
