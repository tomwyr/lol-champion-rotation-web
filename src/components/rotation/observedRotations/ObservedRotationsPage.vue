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
          <ObservedRotationTile :rotation :index />
        </template>
      </template>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import DataInfo from '@/components/common/DataInfo.vue'
import PageLayout from '@/components/common/PageLayout.vue'
import AppPageHeader from '@/components/menu/AppPageHeader.vue'
import IconBookmarkAdd from '@/icons/IconBookmarkAdd.vue'
import { observedRotationsRef } from './ObservedRotations'
import ObservedRotationTile from './ObservedRotationTile.vue'

const observedRotations = observedRotationsRef()
</script>
